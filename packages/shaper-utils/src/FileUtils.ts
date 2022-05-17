import treeWalk from 'klaw-sync';
import path from 'path';
import ejs from 'ejs';
import fs, { readFileSync } from 'fs-extra';
import { Options, Plugin } from './models';
import { parse, ParseError, printParseErrorCode } from 'jsonc-parser';
import { PackageJson } from './models/PackageJSON';

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
export interface JsonParseOptions {
  /**
   * Expect JSON with javascript-style
   * @default false
   */
  expectComments?: boolean;
  /**
   * Disallow javascript-style
   * @default false
   */
  disallowComments?: boolean;
}

export interface JsonReadOptions extends JsonParseOptions {
  /**
   * mutable field recording whether JSON ends with new line
   * @default false
   */
  endsWithNewline?: boolean;
}

/**
 * Reads a JSON file and returns the object the JSON content represents.
 *
 * @param path A path to a file.
 * @param options JSON parse options
 * @returns Object the JSON content of the file represents
 */
 function readJsonFile<T extends object = any>(
  path: string,
  options?: JsonReadOptions
): T {
  const content = readFileSync(path, 'utf-8');
  if (options) {
    options.endsWithNewline = content.charCodeAt(content.length - 1) === 10;
  }
  try {
    return parseJson<T>(content, options);
  } catch (e: any) {
    e.message = e.message.replace('JSON', path);
    throw e;
  }
}

/**
 * Parses the given JSON string and returns the object the JSON content represents.
 * By default javascript-style comments are allowed.
 *
 * @param input JSON content as string
 * @param options JSON parse options
 * @returns Object the JSON content represents
 */
 export function parseJson<T extends object = any>(
  input: string,
  options?: JsonParseOptions
): T {
  try {
    if (
      options?.disallowComments === true ||
      options?.expectComments !== true
    ) {
      return JSON.parse(input);
    }
  } catch (error) {
    if (options?.disallowComments === true) {
      throw error;
    }
  }

  const errors: ParseError[] = [];
  const result: T = parse(input, errors);

  if (errors.length > 0) {
    const { error, offset } = errors[0];
    throw new Error(
      `${printParseErrorCode(error)} in JSON at position ${offset}`
    );
  }

  return result;
}

function getInstalledPluginsFromPackageJson(
  rootPath: string
): Map<string, Plugin> {
  const packageJson = readJsonFile(`${rootPath}/package.json`) as PackageJson;

  const dependencyNames = new Set([
    ...Object.keys(packageJson.dependencies || {}),
    ...Object.keys(packageJson.devDependencies || {}),
  ]);

  const allDependencyNames = Array.from(dependencyNames);
  const plugins = new Map<string, Plugin>();

  // loop through all the dependencies
  allDependencyNames.forEach((dependencyName) => {
    // Get the package.json file
    const dependencyPackageJson = getPluginPackageJson(rootPath, dependencyName);
    
    // check to see that if has the required properties
    if (dependencyPackageJson && !!(dependencyPackageJson.shaper) && !!(dependencyPackageJson.main)) {
      // get the plugin 
      const plugin = getPluginMainDefaultExport(path.join(rootPath, 'node_modules', dependencyName), dependencyPackageJson.main);

      if (plugin && !!(plugin.run)) {
        plugins.set(dependencyName, plugin);
      }
    }
  });

  return plugins;
}

function getPluginMainDefaultExport(rootPath: string, mainPath: string): Plugin | null {
  try {
    const fullMainPath = require.resolve(mainPath, {
      paths: [rootPath],
    });
    const plugin = require(fullMainPath).default as Plugin;
    return plugin;
  } catch (err) {
    console.log('error requiring plugin', err);
    return null;
  }
}

function getPluginPackageJson(
  workspaceRoot: string,
  pluginName: string
): PackageJson | null {
  try {
    const packageJsonPath = require.resolve(`${pluginName}/package.json`, {
      paths: [workspaceRoot],
    });
    const packageJson = readJsonFile(packageJsonPath) as PackageJson;
    return packageJson;
  } catch {
    return null;
  }
}

export const FileUtils = {
  appendToFile,
  resolvePaths,
  transformFiles,
  getInstalledPluginsFromPackageJson
};
