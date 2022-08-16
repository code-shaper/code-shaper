import { Options } from './models';
import { PackageJsonUtils } from './PackageJsonUtils';

/**
 * Returns options from the shaper oject in the Package.json file
 * with the specified name
 *
 * @param parentPath e.g. ~/projects/code-shaper
 * @param scriptName name of script
 */
function getScriptOptions(
  parentPath: string,
  scriptName: string
): Options | null {
  const packageJson = PackageJsonUtils.getPackageJson(parentPath);
  if (!packageJson) {
    return null;
  }

  try {
    const shaper = packageJson.shaper as Options;
    const scripts = shaper['scripts'] as Options;
    return scripts[scriptName] as Options;
  } catch {
    return null;
  }
}

export const ScriptUtils = {
  getScriptOptions,
};
