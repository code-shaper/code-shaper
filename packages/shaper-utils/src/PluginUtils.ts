import path from 'path';
import { JsonUtils } from './JsonUtils';
import { PackageJsonUtils } from './PackageJsonUtils';
import { PackageJson, Plugin } from './models';

/**
 * Returns shaper plugins installed in the package.json file
 * of the current working directory
 */
function getDynamicPlugins(): Map<string, Plugin> {
  return getInstalledPluginsFromPackageJson(process.cwd());
}

/**
 * Returns shaper plugins installed in the package.json file
 * at the specified root path
 *
 * @param rootPath
 */
function getInstalledPluginsFromPackageJson(
  rootPath: string
): Map<string, Plugin> {
  // Initialize return value
  const plugins = new Map<string, Plugin>();

  // Read the package.json file at the root path
  const packageJson = PackageJsonUtils.getPackageJson(rootPath);
  if (!packageJson) {
    return plugins;
  }

  // Create a list of all dependencies
  // These could either be ordinary dependencies or shaper plugins
  const dependencyNames = new Set([
    ...Object.keys(packageJson.dependencies || {}),
    ...Object.keys(packageJson.devDependencies || {}),
  ]);
  const allDependencyNames = Array.from(dependencyNames);

  // Loop through all dependencies and build a map of shaper plugins
  allDependencyNames.forEach((dependencyName) => {
    // Get the package.json file of the dependency
    const dependencyPackageJson = getDependencyPackageJson(
      rootPath,
      dependencyName
    );

    // Check to see if required properties exist
    if (
      dependencyPackageJson &&
      !!dependencyPackageJson.main &&
      !!dependencyPackageJson.shaper
    ) {
      // It is a shaper plugin, get it!
      const plugin = getPluginMainDefaultExport(
        path.join(rootPath, 'node_modules', dependencyName),
        dependencyPackageJson.main
      );

      if (plugin && !!plugin.run) {
        plugins.set(dependencyName, plugin);
      }
    }
  });

  return plugins;
}

/**
 * Returns the package.json file of the specified dependency
 *
 * @param rootPath e.g. ~/projects/code-shaper
 * @param dependencyName e.g. @code-shaper/react
 */
function getDependencyPackageJson(
  rootPath: string,
  dependencyName: string
): PackageJson | null {
  try {
    const packageJsonPath = require.resolve(`${dependencyName}/package.json`, {
      paths: [rootPath],
    });
    return JsonUtils.readJsonFile<PackageJson>(packageJsonPath);
  } catch {
    return null;
  }
}

/**
 * Returns the main default export of the specified plugin
 *
 * @param rootPath e.g. ~/projects/code-shaper/node_modules/@code-shaper/react
 * @param mainPath e.g. ./dist/index.js
 * @returns the main default export of the plugin, e.g.
 * {
 *   id: '@code-shaper/react',
 *   name: 'React',
 *   description: 'generates React applications',
 *   run: [AsyncFunction: run]
 * }
 */
function getPluginMainDefaultExport(
  rootPath: string,
  mainPath: string
): Plugin | null {
  try {
    const fullMainPath = require.resolve(mainPath, {
      paths: [rootPath],
    });
    return require(fullMainPath).default as Plugin;
  } catch (err) {
    console.log('error requiring plugin', err);
    return null;
  }
}

export const PluginUtils = {
  getDynamicPlugins,
  getInstalledPluginsFromPackageJson,
};
