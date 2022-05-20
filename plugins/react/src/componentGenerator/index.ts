import { cc, FileUtils, Generator, Options } from '@code-shaper/shaper-utils';
import inquirer from 'inquirer';
import path from 'path';

export const componentGenerator: Generator = {
  id: 'component',
  name: 'Component',
  description: 'generates a React component',
  generate: generateComponent,
};

async function generateComponent(inputOptions: Options) {
  const questions = [
    {
      type: 'input',
      name: 'itemName',
      message: 'Component name? (e.g. TextField)',
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
  // Example: text-field
  options['itemNameKebabCase'] = cc.kebabCase(itemName);

  // Example: textField
  options['itemNameCamelCase'] = cc.camelCase(itemName);

  // Example: TextField
  options['itemNamePascalCase'] = cc.pascalCase(itemName);

  // Example: Text Field
  options['itemNameCapitalCase'] = cc.capitalCase(itemName);

  // Example: TextField (then add extension)
  options['filename'] = cc.pascalCase(itemName);
  // --------------------------------------------------------------------------

  const { itemNamePascalCase } = options;

  const srcDir = path.join(__dirname, 'templates');
  const dstDir = path.join(workspace, `src/components/${itemNamePascalCase}`);

  console.log();
  console.log(`Creating ${itemNamePascalCase}...`);

  // Create the component
  FileUtils.transformFiles(srcDir, dstDir, options);

  // Import it in src/components/index.ts
  console.log();
  console.log('Updating src/components/index.ts...');
  const indexTs = path.join(workspace, `src/components/index.ts`);
  FileUtils.appendToFile(indexTs, `export * from './${itemNamePascalCase}';\n`);

  console.log();
  console.log('Done.');
  console.log();
  console.log(
    '1. Implement the component using Storybook (we have added a placeholder story for you):'
  );
  console.log('     npm run storybook');
  console.log();
  console.log(
    '2. Implement units tests (we have added a placeholder test for you):'
  );
  console.log('     npm test');
  console.log();
  console.log('3. Use the component somewhere in your app');
  console.log();
  console.log('4. Run your app to see the component in action:');
  console.log('     npm run dev');
  console.log();

  return Promise.resolve();
}
