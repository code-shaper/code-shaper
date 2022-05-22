import path from 'path';
import { PackageJson, Plugin } from './models';
import { JsonUtils } from './JsonUtils';

function getInstalledPluginsFromPackageJson(
  rootPath: string
): Map<string, Plugin> {
  const packageJson = JsonUtils.readJsonFile(
    `${rootPath}/package.json`
  ) as PackageJson;

  const dependencyNames = new Set([
    ...Object.keys(packageJson.dependencies || {}),
    ...Object.keys(packageJson.devDependencies || {}),
  ]);

  const allDependencyNames = Array.from(dependencyNames);
  const plugins = new Map<string, Plugin>();

  // loop through all the dependencies
  allDependencyNames.forEach((dependencyName) => {
    // Get the package.json file
    const dependencyPackageJson = getPluginPackageJson(
      rootPath,
      dependencyName
    );

    // check to see that if has the required properties
    if (
      dependencyPackageJson &&
      !!dependencyPackageJson.shaper &&
      !!dependencyPackageJson.main
    ) {
      // get the plugin
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

function getPluginPackageJson(
  workspaceRoot: string,
  pluginName: string
): PackageJson | null {
  try {
    const packageJsonPath = require.resolve(`${pluginName}/package.json`, {
      paths: [workspaceRoot],
    });
    return JsonUtils.readJsonFile(packageJsonPath) as PackageJson;
  } catch {
    return null;
  }
}

export const PluginUtils = {
  getInstalledPluginsFromPackageJson,
};
