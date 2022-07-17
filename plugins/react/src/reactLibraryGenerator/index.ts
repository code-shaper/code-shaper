import { cc, FileUtils, Generator, Options } from '@code-shaper/shaper-utils';
import inquirer from 'inquirer';
// @ts-ignore
import inquirerDirectory from 'inquirer-directory';
import path from 'path';

// Register inquirer prompts
inquirer.registerPrompt('directory', inquirerDirectory);

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

  const options = await inquirer.prompt(questions, inputOptions);
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

  const srcDir = path.join(__dirname, 'templates/main');
  const dstDir = path.join(parentDir, itemNameKebabCase);

  console.log();
  console.log(`Creating ${itemName}...`);

  FileUtils.transformFiles(srcDir, dstDir, options);

  // Copy TypeScript configuration
  const srcDirConfig = path.join(
    __dirname,
    'templates/typescript-config-custom'
  );
  const dstDirConfig = path.join(
    rootDir,
    'configs',
    'typescript-config-custom'
  );
  FileUtils.transformFiles(srcDirConfig, dstDirConfig, options);

  console.log('Done.');
  console.log();
  console.log(
    '1. In the root directory, edit package.json to force the latest version of React.'
  );
  console.log(
    '   This is done by adding the following overrides section after the devDependencies'
  );
  console.log('   section (ignore if these overrides already exist):');
  console.log();
  console.log('     "overrides": {');
  console.log('       "react": "^18.2.0",');
  console.log('       "react-dom": "^18.2.0"');
  console.log('     },');
  console.log();
  console.log(
    '2. Edit /configs/typescript-config-custom/package.json to add a new typescript configuration'
  );
  console.log('   (react-library.json) if it is not already there. See below:');
  console.log();
  console.log('     "files": [');
  console.log('       "base.json",');
  console.log('       "react-library.json"');
  console.log('     ],');
  console.log();
  console.log('3. In the root directory, run:');
  console.log('     npm run clean');
  console.log('     npm install');
  console.log();
  console.log('4. Start adding components to your library');
  console.log();

  return Promise.resolve();
}
