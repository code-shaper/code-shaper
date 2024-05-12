import {
  cc,
  FileUtils,
  Generator,
  Options,
  PackageJsonUtils,
} from '@code-shaper/shaper-utils';
import { prompt } from 'inquirer';
import path from 'path';

export const routeGenerator: Generator = {
  id: 'route',
  name: 'Route',
  description: 'generates a route',
  generate: generateRoute,
};

async function generateRoute(rootDir: string, inputOptions: Options) {
  // Get workspaces
  const workspaces = PackageJsonUtils.getWorkspacesFromPackageJson(rootDir);

  // Get input from user
  const questions = [
    {
      type: 'input',
      name: 'itemName',
      message: 'Component name? (e.g. "Settings" or "SettingsPage")',
    },
    {
      type: 'list',
      name: 'workspace',
      routeSize: 20,
      loop: false,
      message: 'Which workspace should this go to?',
      choices: () => {
        const dirSpecs = FileUtils.resolvePaths(rootDir, workspaces);
        return dirSpecs.map((dirSpec) => ({
          name: dirSpec.name,
          value: dirSpec.path,
        }));
      },
    },
    {
      type: 'input',
      name: 'filename',
      message: 'Filename of the route? (e.g. "settings.tsx")',
    },
  ];

  const options = await prompt(questions, inputOptions);
  const { itemName, workspace } = options;

  // --------------------------------------------------------------------------
  // Add more options for code generation here
  // --------------------------------------------------------------------------
  // Example: itemName = SettingsPage

  // itemNameKebabCase = settings-page
  options['itemNameKebabCase'] = cc.kebabCase(itemName);

  // itemNameCamelCase = settingsPage
  options['itemNameCamelCase'] = cc.camelCase(itemName);

  // itemNamePascalCase = SettingsPage
  options['itemNamePascalCase'] = cc.pascalCase(itemName);

  // itemNameCapitalCase = Settings Page
  options['itemNameCapitalCase'] = cc.capitalCase(itemName);

  // Remix uses this fixed directory for routes
  options['dirInWorkspace'] = 'src/routes';
  // --------------------------------------------------------------------------

  const { dirInWorkspace, itemNamePascalCase } = options;

  const srcDir = path.join(__dirname, 'templates');
  const dstDir = path.join(workspace, dirInWorkspace);

  console.log();
  console.log(`Creating ${itemNamePascalCase}...`);

  // Create the route
  FileUtils.transformFiles(srcDir, dstDir, options);

  console.log();
  console.log('Done.');
  console.log();
  console.log('1. Implement the route.');
  console.log();
  console.log('2. Run your app to see the route in action:');
  console.log('     npm run dev');
  console.log();

  return Promise.resolve();
}
