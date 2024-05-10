import { cc, FileUtils, Generator, Options } from '@code-shaper/shaper-utils';
import { prompt, registerPrompt } from 'inquirer';
// @ts-ignore
import inquirerDirectory from 'inquirer-directory';
import path from 'path';

// Register inquirer prompts
registerPrompt('directory', inquirerDirectory);

export const <%= generatorModuleName %>: Generator = {
  id: '<%= generatorName %>',
  name: '<%= generatorNameCapitalCase %>',
  description: 'generates a <%= generatorNameCapitalCase %>',
  generate: <%= generatorFunctionName %>,
};

async function <%= generatorFunctionName %>(rootDir: string, inputOptions: Options) {
  const questions = [
    {
      type: 'input',
      name: 'itemName',
      message: '<%= generatorNameCapitalCase %> name? (e.g. "<%= generatorNameCamelCase %>")',
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
  // Example: itemName = <%= generatorNameKebabCase %>

  // itemNameKebabCase = <%= generatorNameKebabCase %>
  options['itemNameKebabCase'] = cc.kebabCase(itemName);

  // itemNameCamelCase = <%= generatorNameCamelCase %>
  options['itemNameCamelCase'] = cc.camelCase(itemName);

  // itemNamePascalCase = <%= generatorNamePascalCase %>
  options['itemNamePascalCase'] = cc.pascalCase(itemName);

  // itemNameCapitalCase = <%= generatorNameCapitalCase %>
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
