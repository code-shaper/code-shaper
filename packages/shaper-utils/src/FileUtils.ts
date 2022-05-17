import treeWalk from 'klaw-sync';
import path from 'path';
import ejs from 'ejs';
import fs from 'fs-extra';
import { Options } from './models';

/**
 * Appends data to a file
 *
 * @param path to the file
 * @param data to be appended
 */
function appendToFile(path: string, data: any) {
  const stream = fs.createWriteStream(path, { flags: 'a' });
  stream.write(data);
  stream.end();
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

/**
 * Transforms files from source directory to destination directory.
 *
 * - Files with ".ejs.t" extension are transformed using the options
 * - Files without ".ejs.t" extension are copied as is
 *
 * @param srcDir
 * @param dstDir
 * @param options
 */
function transformFiles(srcDir: string, dstDir: string, options: Options) {
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

    // Copy srcFile to destination
    if (isEjsTemplate) {
      ejs.renderFile(srcPath, options, {}, function (err, outputString) {
        if (err) {
          console.error(err);
        }

        fs.outputFileSync(dstPath, outputString);
      });
    } else {
      fs.copySync(srcPath, dstPath, {});
    }
  });
}

export const FileUtils = {
  appendToFile,
  resolvePaths,
  transformFiles,
};
