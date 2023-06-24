import { cc, FileUtils, Generator, Options } from '@code-shaper/shaper-utils';
import { prompt, registerPrompt } from 'inquirer';
// @ts-ignore
import inquirerDirectory from 'inquirer-directory';
import path from 'path';

// Register inquirer prompts
registerPrompt('directory', inquirerDirectory);

export const typescriptLibraryGenerator: Generator = {
  id: 'typescript-library',
  name: 'Typescript Library',
  description: 'generates a Typescript library',
  generate: generateTypescriptLibrary,
};

async function generateTypescriptLibrary(
  rootDir: string,
  inputOptions: Options
) {
  const questions = [
    {
      type: 'input',
      name: 'itemName',
      message: 'Library name? (e.g. "string-utils")',
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
        'Package name used for publishing? (e.g. "string-utils" or "@movie-magic/string-utils")',
    },
  ];

  const options = await prompt(questions, inputOptions);
  const { itemName, parentDir } = options;

  // --------------------------------------------------------------------------
  // Add more options for code generation here
  // --------------------------------------------------------------------------
  // Example: itemName = string-utils

  // itemNameKebabCase = string-utils
  options['itemNameKebabCase'] = cc.kebabCase(itemName);

  // itemNameCamelCase = stringUtils
  options['itemNameCamelCase'] = cc.camelCase(itemName);

  // itemNamePascalCase = StringUtils
  options['itemNamePascalCase'] = cc.pascalCase(itemName);

  // itemNameCapitalCase = String Utils
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

  console.log();
  console.log('Done.');
  console.log();
  console.log(
    '1. Edit /configs/typescript-config-custom/package.json to add a new typescript configuration'
  );
  console.log(
    '   (typescript-library.json) if it is not already there. See below:'
  );
  console.log();
  console.log('     "files": [');
  console.log('       "base.json",');
  console.log('       "typescript-library.json"');
  console.log('     ],');
  console.log();
  console.log('2. In the root directory, run:');
  console.log('     npm install');
  console.log();
  console.log('3. Run sample tests:');
  console.log('     npm test');
  console.log();
  console.log('4. Start adding features to your library');
  console.log();

  return Promise.resolve();
}
