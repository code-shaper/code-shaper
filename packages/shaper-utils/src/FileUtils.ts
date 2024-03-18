import {
  compareSync,
  Options as DirCompareOptions,
  Result as DirCompareResult,
} from 'dir-compare';
import treeWalk from 'klaw-sync';
import path from 'path';
import { renderFile } from 'ejs';
import {
  appendFileSync,
  copySync,
  existsSync,
  outputFileSync,
  readFileSync,
  removeSync,
} from 'fs-extra';
import { Options } from './models';

/**
 * Compares two directories and returns a Result object
 * @param path1
 * @param path2
 * @param options
 */
function compareDirectories(
  path1: string,
  path2: string,
  options: DirCompareOptions = { compareSize: true, compareContent: true }
) {
  return compareSync(path1, path2, options);
}

function logDirCompareResult(result: DirCompareResult) {
  console.log('Directories are %s', result.same ? 'identical' : 'different');

  console.log(
    'Statistics - equal entries: %s, distinct entries: %s, left only entries: %s, right only entries: %s, differences: %s',
    result.equal,
    result.distinct,
    result.left,
    result.right,
    result.differences
  );

  if (result.diffSet) {
    result.diffSet.forEach((dif) => {
      if (dif.state !== 'equal') {
        console.log(
          'Difference - name1: %s, type1: %s, name2: %s, type2: %s, state: "%s", reason: %s',
          dif.name1,
          dif.type1,
          dif.name2,
          dif.type2,
          dif.state,
          dif.reason
        );
      }
    });
  }
}

/**
 * Deletes file or directory at the specified path
 * @param path
 */
function deletePath(path: string): void {
  removeSync(path);
}

/**
 * Returns true if a file with the specified path exists, false otherwise
 * @param path
 */
function fileExists(path: string): boolean {
  return existsSync(path);
}

/**
 * Returns the contents of the file at the specified path
 *
 * @param path
 * @param options
 */
function readFile(
  path: string,
  options:
    | {
        encoding: BufferEncoding;
        flag?: string | undefined;
      }
    | BufferEncoding = 'utf8'
): string {
  return readFileSync(path, options);
}

/**
 * Appends data to a file
 *
 * @param path to the file
 * @param data to be appended
 * @deprecated use appendFileSync directly
 */
function appendToFile(path: string, data: string) {
  // The following method was recommended by a dev.to article:
  // https://dev.to/sergchr/tricks-on-writing-appending-to-a-file-in-node-1hik
  // However, it does an asynchronous write, which causes problems with testing.
  //
  // const stream = createWriteStream(path, { flags: 'a' });
  // stream.write(data);
  // stream.end();
  //
  // Hence we are replacing with a synchronous write, even though it loads the
  // entire file in memory and rewrites it completely.
  appendFileSync(path, data);
}

/**
 * Expands an array of relative directory paths into an array of
 * directory specs. A path could include a glob pattern, which is
 * defined as a path ending in "*".
 *
 * Example:
 * relativePaths = [
 *   'modules/date-utils',
 *   'apps/*',
 *   'packages/*'
 * ]
 *
 * resolvePaths(relativePaths) returns
 * [
 *   { name: 'modules/date-utils', path: '/path/to/modules/date-utils' },
 *   { name: 'apps/movie-magic', path: '/path/to/modules/apps/movie-magic' },
 *   { name: 'apps/weather', path: '/path/to/apps/weather' },
 *   { name: 'packages/ui-lib', path: '/path/to/packages/ui-lib' }
 * ]
 *
 * @param rootDir path of root directory
 * @param relativePaths array of relative directory paths
 * @return Array<DirectorySpec>
 */
interface DirectorySpec {
  name: string;
  path: string;
}

function resolvePaths(
  rootDir: string,
  relativePaths: Array<string>
): Array<DirectorySpec> {
  const specs: Array<DirectorySpec> = [];

  relativePaths.forEach((relativePath) => {
    const isGlob = relativePath.endsWith('*');
    if (isGlob) {
      // strip the * at the end
      const relativeParentDir = relativePath.slice(0, -1);
      const parentDir = path.join(rootDir, relativeParentDir);
      const childDirs = treeWalk(parentDir, { nofile: true, depthLimit: 0 });
      childDirs.forEach((childDir) => {
        specs.push({
          name: path.relative(rootDir, childDir.path),
          path: childDir.path,
        });
      });
    } else {
      specs.push({
        name: relativePath,
        path: path.join(rootDir, relativePath),
      });
    }
  });

  return specs;
}

// ---------- Transformer functions ----------

export interface FileTransformerParams {
  isEjsTemplate: boolean;
  srcPath: string;
  dstPath: string;
  options: Options;
}

export type FileTransformer = (params: FileTransformerParams) => void;

function overwriteTransformer({
  isEjsTemplate,
  srcPath,
  dstPath,
  options,
}: FileTransformerParams) {
  if (isEjsTemplate) {
    renderFile(srcPath, options, {}, function (err, outputString) {
      if (err) {
        console.error(err);
      }

      outputFileSync(dstPath, outputString);
    });
  } else {
    copySync(srcPath, dstPath, {});
  }
}

function appendTransformer({
  isEjsTemplate,
  srcPath,
  dstPath,
  options,
}: FileTransformerParams) {
  if (isEjsTemplate) {
    renderFile(srcPath, options, {}, function (err, outputString) {
      if (err) {
        console.error(err);
      }

      appendFileSync(dstPath, outputString);
    });
  } else {
    const outputString = readFileSync(srcPath, 'utf-8');
    appendFileSync(dstPath, outputString);
  }
}

// -------------------------------------------

/**
 * Transforms files from source directory to destination directory.
 *
 * - Files with ".ejs.t" extension are transformed using the options
 * - Files without ".ejs.t" extension are copied as is
 * - By default, transformed files are overwritten in the destination directory.
 *   However that behavior can be changed by sending a different transformer
 *   such as appendTransformer
 *
 * @param srcDir
 * @param dstDir
 * @param options
 * @param transformer = overwriteTransformer
 */
function transformFiles(
  srcDir: string,
  dstDir: string,
  options: Options,
  transformer: FileTransformer = overwriteTransformer
) {
  // get all source files (no directories)
  const srcFiles = treeWalk(srcDir, { nodir: true });

  // transform each source file
  srcFiles.forEach((srcFile) => {
    const srcPath = srcFile.path;
    const srcRelativePath = path.relative(srcDir, srcPath);

    // compute destination relative path
    const isEjsTemplate = srcRelativePath.endsWith('.ejs.t');
    let dstRelativePath = isEjsTemplate
      ? srcRelativePath.slice(0, srcRelativePath.length - '.ejs.t'.length)
      : srcRelativePath;
    // replace tokens with values
    dstRelativePath = dstRelativePath.replace(
      /\[(\w+)]/g,
      function (_, token: string) {
        return options[token] as string;
      }
    );

    console.log(`  ${dstRelativePath}`);

    // compute full destination path
    const dstPath = path.join(dstDir, dstRelativePath);

    // transform file and write to destination
    transformer({
      isEjsTemplate,
      srcPath,
      dstPath,
      options,
    });
  });
}

export const FileUtils = {
  appendToFile,
  compareDirectories,
  deletePath,
  fileExists,
  logDirCompareResult,
  readFile,
  resolvePaths,
  transformFiles,

  // reexport fs-extra
  appendFileSync,
  copySync,
  existsSync,
  outputFileSync,
  readFileSync,
  removeSync,

  // transformer functions
  appendTransformer,
  overwriteTransformer,
};
