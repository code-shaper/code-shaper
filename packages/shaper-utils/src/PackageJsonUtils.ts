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
    return JsonUtils.readJsonFile(packageJsonPath);
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

export const PackageJsonUtils = {
  getPackageJson,
  getWorkspacesFromPackageJson,
};
