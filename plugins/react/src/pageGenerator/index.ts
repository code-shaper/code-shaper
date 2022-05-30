import { cc, FileUtils, Generator, Options } from '@code-shaper/shaper-utils';
import inquirer from 'inquirer';
import path from 'path';

export const pageGenerator: Generator = {
  id: 'page',
  name: 'Page',
  description: 'generates a page',
  generate: generatePage,
};

async function generatePage(inputOptions: Options) {
  const questions = [
    {
      type: 'input',
      name: 'itemName',
      message: 'Page name? (e.g. "SettingsPage")',
    },
    {
      type: 'list',
      name: 'workspace',
      message: 'Which workspace should this go to?',
      choices: () => {
        // TODO: Get workspace globs from package.json, don't hardcode here.
        const dirSpecs = FileUtils.resolvePaths(process.cwd(), [
          'apps/*',
          'packages/*',
        ]);
        return dirSpecs.map((dirSpec) => ({
          name: dirSpec.name,
          value: dirSpec.path,
        }));
      },
    },
  ];

  const options = await inquirer.prompt(questions, inputOptions);
  const { itemName, workspace } = options;

  // --------------------------------------------------------------------------
  // Add more options for code generation here
  // --------------------------------------------------------------------------
  // Example: itemName = settings-page

  // itemNameKebabCase = settings-page
  options['itemNameKebabCase'] = cc.kebabCase(itemName);

  // itemNameCamelCase = settingsPage
  options['itemNameCamelCase'] = cc.camelCase(itemName);

  // itemNamePascalCase = SettingsPage
  options['itemNamePascalCase'] = cc.pascalCase(itemName);

  // itemNameCapitalCase = Settings Page
  options['itemNameCapitalCase'] = cc.capitalCase(itemName);

  // filename = SettingsPage (then add extension)
  options['filename'] = cc.pascalCase(itemName);
  // --------------------------------------------------------------------------

  const { itemNamePascalCase } = options;

  const srcDir = path.join(__dirname, 'templates');
  const dstDir = path.join(workspace, `src/pages/${itemNamePascalCase}`);

  console.log();
  console.log(`Creating ${itemNamePascalCase}...`);

  // Create the page
  FileUtils.transformFiles(srcDir, dstDir, options);

  // Import it in src/pages/index.ts
  console.log();
  console.log('Updating src/pages/index.ts...');
  const indexTs = path.join(workspace, `src/pages/index.ts`);
  FileUtils.appendToFile(indexTs, `export * from './${itemNamePascalCase}';\n`);

  console.log();
  console.log('Done.');
  console.log();
  console.log('1. Implement the page.');
  console.log();
  console.log(
    '2. Implement units tests (we have added a placeholder test for you):'
  );
  console.log('     npm test');
  console.log();
  console.log('3. Import the page in src/App.tsx and give it a route');
  console.log();
  console.log('4. Run your app to see the page in action:');
  console.log('     npm run dev');
  console.log();

  return Promise.resolve();
}
