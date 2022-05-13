import treeWalk from 'klaw-sync';
import path from 'path';
import ejs from 'ejs';
import fs from 'fs-extra';
import { Arguments } from 'yargs-parser';

/**
 * Transforms files from source directory to destination directory.
 *
 * - Files with ".ejs.t" extension are transformed using the context
 * - Files without ".ejs.t" extension are copied as is
 *
 * @param srcDir
 * @param dstDir
 * @param context
 */
function transformFiles(srcDir: string, dstDir: string, context: Arguments) {
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
        return context[token];
      }
    );

    console.log(`  ${dstRelativePath}`);

    // compute full destination path
    const dstPath = path.join(dstDir, dstRelativePath);

    // Copy srcFile to destination
    if (isEjsTemplate) {
      ejs.renderFile(srcPath, context, {}, function (err, outputString) {
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

export const FileUtils = {
  transformFiles,
  resolvePaths,
};

export type Plugin = (args: Array<string | number>) => Promise<any>;

export function getPlugin(name: string, dir = 'node_modules'): Plugin  {
  const root = process.cwd();
  const modulePath = path.join(root, dir, name);

  if (!fs.existsSync(modulePath)) {
    throw new Error('module does not exist');
  }
  
  const module = require(modulePath);
  return module.default as Plugin;
}

export function getAvailablePlugins(dir: string): Array<string> {
  const root = process.cwd();
  const modulesPath = path.join(root, dir);

  if (!fs.existsSync(modulesPath)) {
    throw new Error('plugin directory does not exist');
  }
  
  const directories = fs.readdirSync(modulesPath).filter(function (file) {
    let isPlugin = false;
    const folderPath = path.join(modulesPath, file);

    if (fs.statSync(folderPath).isDirectory()) {
      isPlugin = isDirectoryPlugin(folderPath);
    }
    return isPlugin;
  });

  return directories;
}

export function isDirectoryPlugin(directoryPath: string): boolean {
  let isPlugin = false;
  const packageJsonPath = path.join(directoryPath, 'package.json');

  if (fs.existsSync(packageJsonPath)) {
    const packageJson = fs.readJSONSync(packageJsonPath);
    
    if (typeof packageJson.shaper !== 'undefined') {
      isPlugin = true
    }
  }

  return isPlugin;
}