import path from 'path';
import { FileUtils } from './FileUtils';
import { JsonUtils } from './JsonUtils';
import { PackageJson } from './models';

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
 * Returns workspaces from the package.json file under the specified parentPath
 *
 * @param parentPath
 * @returns Array<string> e.g. [ 'apps/*', 'packages/*' ]
 */
function getWorkspacesFromPackageJson(
  parentPath: string
): Array<string> | null {
  const packageJson = getPackageJson(parentPath);
  if (!packageJson) {
    return null;
  }

  return Array.isArray(packageJson.workspaces) ? packageJson.workspaces : null;
}

export const PackageJsonUtils = {
  getPackageJson,
  getWorkspacesFromPackageJson,
};
