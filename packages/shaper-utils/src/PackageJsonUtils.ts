import path from 'path';
import { FileUtils } from './FileUtils';
import { JsonUtils } from './JsonUtils';
import { PackageJson } from './models';
import { Options } from './models';

/**
 * Returns the package.json file under the specified parentPath
 *
 * @param parentPath e.g. ~/projects/code-shaper
 */
function getPackageJson(parentPath: string): PackageJson | null {
  const packageJsonPath = path.join(parentPath, 'package.json');
  if (!FileUtils.fileExists(packageJsonPath)) {
    return null;
  }

  try {
    return JsonUtils.readJsonFile<PackageJson>(packageJsonPath);
  } catch {
    return null;
  }
}

/**
 * Returns workspaces from the package.json file under the specified parentPath.
 * If package.json is not found, or "workspaces" property in package.json is
 * not found, simply returns an empty array.
 *
 * @param parentPath
 * @returns Array<string> e.g. [ 'apps/*', 'packages/*' ]
 */
function getWorkspacesFromPackageJson(parentPath: string): Array<string> {
  const packageJson = getPackageJson(parentPath);
  if (!packageJson) {
    return [];
  }

  return Array.isArray(packageJson.workspaces) ? packageJson.workspaces : [];
}

/**
 * Returns options from the shaper oject in the Package.json file
 * with the specified name
 *
 * @param parentPath e.g. ~/projects/code-shaper
 * @param scriptName name of script
 */
function getScriptOptionsFromPackageJson(
  parentPath: string,
  scriptName: string
): Options | undefined {
  let packageJson = PackageJsonUtils.getPackageJson(parentPath);
  if (!packageJson) {
    return undefined;
  }

  return packageJson.shaper?.scripts[scriptName] as Options;
}

export const PackageJsonUtils = {
  getPackageJson,
  getWorkspacesFromPackageJson,
  getScriptOptionsFromPackageJson,
};
