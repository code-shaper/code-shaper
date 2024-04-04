import { cc, FileUtils, Generator, Options } from '@code-shaper/shaper-utils';
import { prompt, registerPrompt } from 'inquirer';
// @ts-ignore
import inquirerDirectory from 'inquirer-directory';
import path from 'path';

// Register inquirer prompts
registerPrompt('directory', inquirerDirectory);

export const reactLibraryGenerator: Generator = {
  id: 'react-library',
  name: 'React Library',
  description: 'generates a React library',
  generate: generateReactLibrary,
};

async function generateReactLibrary(rootDir: string, inputOptions: Options) {
  const questions = [
    {
      type: 'input',
      name: 'itemName',
      message: 'Library name? (e.g. "ui-lib")',
    },
    {
      type: 'directory',
      name: 'parentDir',
      pageSize: 20,
      message: 'Parent directory? (usually "packages")',
      basePath: rootDir,
    },
    {
      type: 'input',
      name: 'packageName',
      message:
        'Package name used for publishing? (e.g. "ui-lib" or "@movie-magic/ui-lib")',
    },
  ];

  const options = await prompt(questions, inputOptions);
  const { itemName, parentDir } = options;

  // --------------------------------------------------------------------------
  // Add more options for code generation here
  // --------------------------------------------------------------------------
  // Example: itemName = ui-lib

  // itemNameKebabCase = ui-lib
  options['itemNameKebabCase'] = cc.kebabCase(itemName);

  // itemNameCamelCase = uiLib
  options['itemNameCamelCase'] = cc.camelCase(itemName);

  // itemNamePascalCase = UiLib
  options['itemNamePascalCase'] = cc.pascalCase(itemName);

  // itemNameCapitalCase = Ui Lib
  options['itemNameCapitalCase'] = cc.capitalCase(itemName);
  // --------------------------------------------------------------------------

  const { itemNameKebabCase } = options;

  const srcDir = path.join(__dirname, 'templates');
  const dstDir = path.join(parentDir, itemNameKebabCase);

  console.log();
  console.log(`Creating ${itemName}...`);

  FileUtils.transformFiles(srcDir, dstDir, options);

  console.log();
  console.log('Done.');
  console.log();
  console.log('What to do next?');
  console.log('----------------');
  console.log();
  console.log('# Install newly added dependencies');
  console.log('npm install');
  console.log();
  console.log('# Make a commit');
  console.log('git add .');
  console.log(`git commit -m "chore: add ${itemName} library"`);
  console.log();

  return Promise.resolve();
}
