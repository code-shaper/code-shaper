import { cc, FileUtils, Generator, Options } from '@code-shaper/shaper-utils';
import { prompt, registerPrompt } from 'inquirer';
// @ts-ignore
import inquirerDirectory from 'inquirer-directory';
import path from 'path';

// Register inquirer prompts
registerPrompt('directory', inquirerDirectory);

export const simpleSiteGenerator: Generator = {
  id: 'simple-site',
  name: 'Simple Site',
  description: 'generates a Simple Site',
  generate: generateSimpleSite,
};

async function generateSimpleSite(rootDir: string, inputOptions: Options) {
  const questions = [
    {
      type: 'input',
      name: 'itemName',
      message: 'Simple Site name? (e.g. "simpleSite")',
    },
    {
      type: 'directory',
      name: 'parentDir',
      pageSize: 20,
      message: 'Parent directory? (usually "<directory name>")',
      basePath: rootDir,
    },
  ];

  const options = await prompt(questions, inputOptions);
  const { itemName, parentDir } = options;

  // --------------------------------------------------------------------------
  // Add more options for code generation here
  // --------------------------------------------------------------------------
  // Example: itemName = simple-site

  // itemNameKebabCase = simple-site
  options['itemNameKebabCase'] = cc.kebabCase(itemName);

  // itemNameCamelCase = simpleSite
  options['itemNameCamelCase'] = cc.camelCase(itemName);

  // itemNamePascalCase = SimpleSite
  options['itemNamePascalCase'] = cc.pascalCase(itemName);

  // itemNameCapitalCase = Simple Site
  options['itemNameCapitalCase'] = cc.capitalCase(itemName);
  // --------------------------------------------------------------------------

  const { itemNameKebabCase } = options;

  const srcDir = path.join(__dirname, 'templates');
  const dstDir = path.join(parentDir, itemNameKebabCase);

  console.log();
  console.log(`Creating ${itemName}...`);

  FileUtils.transformFiles(srcDir, dstDir, options);
  console.log();
  console.log('options available for this generator:');
  console.log(JSON.stringify(options, null, '  '));
  console.log();

  return Promise.resolve();
}
