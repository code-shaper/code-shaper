import { cc, FileUtils, Generator, Options } from '@code-shaper/shaper-utils';
import { prompt, registerPrompt } from 'inquirer';
// @ts-ignore
import inquirerDirectory from 'inquirer-directory';
import path from 'path';

// Register inquirer prompts
registerPrompt('directory', inquirerDirectory);

export const cliGenerator: Generator = {
  id: 'cli',
  name: 'CLI',
  description: 'generates a CLI',
  generate: generateCli,
};

async function generateCli(rootDir: string, inputOptions: Options) {
  const questions = [
    {
      type: 'input',
      name: 'itemName',
      message: 'CLI name? (e.g. "react-shaper")',
    },
    {
      type: 'directory',
      name: 'parentDir',
      pageSize: 20,
      message: 'Parent directory? (usually "apps")',
      basePath: rootDir,
    },
    {
      type: 'input',
      name: 'packageName',
      message:
        'Package name used for publishing? (e.g. "react-shaper" or "@movie-magic/react-shaper")',
    },
  ];

  const options = await prompt(questions, inputOptions);
  const { itemName, parentDir } = options;

  // --------------------------------------------------------------------------
  // Add more options for code generation here
  // --------------------------------------------------------------------------
  // Example: itemName = react-shaper

  // itemNameKebabCase = react-shaper
  options['itemNameKebabCase'] = cc.kebabCase(itemName);

  // itemNameCamelCase = reactShaper
  options['itemNameCamelCase'] = cc.camelCase(itemName);

  // itemNamePascalCase = ReactShaper
  options['itemNamePascalCase'] = cc.pascalCase(itemName);

  // itemNameCapitalCase = React Shaper
  options['itemNameCapitalCase'] = cc.capitalCase(itemName);

  // filename = react-shaper (then add extension)
  options['filename'] = itemName;
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
  console.log(`Now start creating plugins for ${itemName}`);
  console.log(JSON.stringify(options, null, '  '));
  console.log();

  return Promise.resolve();
}
