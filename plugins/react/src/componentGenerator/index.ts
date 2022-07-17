import {
  cc,
  FileUtils,
  Generator,
  Options,
  PackageJsonUtils,
} from '@code-shaper/shaper-utils';
import inquirer from 'inquirer';
import path from 'path';

export const componentGenerator: Generator = {
  id: 'component',
  name: 'Component',
  description: 'generates a component',
  generate: generateComponent,
};

async function generateComponent(rootDir: string, inputOptions: Options) {
  // Get workspaces
  const workspaces = PackageJsonUtils.getWorkspacesFromPackageJson(rootDir);

  // Get input from user
  const questions = [
    {
      type: 'input',
      name: 'itemName',
      message: 'Component name? (e.g. TextField)',
    },
    {
      type: 'list',
      name: 'workspace',
      pageSize: 20,
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
      name: 'dirInWorkspace',
      message: 'Parent directory within workspace?',
      default: (answers: Options) =>
        `src/components/${cc.pascalCase(answers['itemName'] as string)}`,
    },
  ];

  const options = await inquirer.prompt(questions, inputOptions);
  const { itemName, workspace, dirInWorkspace } = options;

  // --------------------------------------------------------------------------
  // Add more options for code generation here
  // --------------------------------------------------------------------------
  // Example: item-name = TextField

  // itemNameKebabCase = text-field
  options['itemNameKebabCase'] = cc.kebabCase(itemName);

  // itemNameCamelCase = textField
  options['itemNameCamelCase'] = cc.camelCase(itemName);

  // itemNamePascalCase = TextField
  options['itemNamePascalCase'] = cc.pascalCase(itemName);

  // itemNameCapitalCase = Text Field
  options['itemNameCapitalCase'] = cc.capitalCase(itemName);

  // filename = TextField (then add extension)
  options['filename'] = cc.pascalCase(itemName);
  // --------------------------------------------------------------------------

  const { itemNamePascalCase } = options;

  const srcDir = path.join(__dirname, 'templates');
  const workspaceDir = path.join(rootDir, workspace);
  const dstDir = path.join(workspaceDir, dirInWorkspace);

  console.log();
  console.log(`Creating ${itemNamePascalCase}...`);

  // Create the component
  FileUtils.transformFiles(srcDir, dstDir, options);

  // Import it in ../index.ts
  console.log();
  console.log('Updating parent index.ts...');
  const indexTs = path.join(path.dirname(dstDir), `index.ts`);
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
