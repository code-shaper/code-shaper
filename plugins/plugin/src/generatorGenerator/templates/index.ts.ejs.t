import { cc, Generator, Options } from '@code-shaper/shaper-utils';
import inquirer from 'inquirer';
// @ts-ignore
import inquirerDirectory from 'inquirer-directory';
import path from 'path';

// Register inquirer prompts
inquirer.registerPrompt('directory', inquirerDirectory);

export const <%= generatorModuleName %>: Generator = {
  id: '<%= generatorName %>',
  name: '<%= generatorNameCapitalCase %>',
  description: 'generates a <%= generatorNameCapitalCase %>',
  generate: <%= generatorFunctionName %>,
};

async function <%= generatorFunctionName %>(inputOptions: Options) {
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
      basePath: '.',
    },
  ];

  const options = await inquirer.prompt(questions, inputOptions);
  const { itemName, parentDir } = options;

  // --------------------------------------------------------------------------
  // Add more options for code generation here
  // --------------------------------------------------------------------------
  // Example: itemName = movie-magic

  // itemNameKebabCase = movie-magic
  options['itemNameKebabCase'] = cc.kebabCase(itemName);

  // itemNameCamelCase = movieMagic
  options['itemNameCamelCase'] = cc.camelCase(itemName);

  // itemNamePascalCase = MovieMagic
  options['itemNamePascalCase'] = cc.pascalCase(itemName);

  // itemNameCapitalCase = Movie Magic
  options['itemNameCapitalCase'] = cc.capitalCase(itemName);
  // --------------------------------------------------------------------------

  const { itemNameKebabCase } = options;

  const srcDir = path.join(__dirname, 'templates');
  const dstDir = path.join(parentDir, itemNameKebabCase);

  console.log();
  console.log(`Creating ${itemName}...`);

  // TODO: Create templates and then uncomment this line
  // FileUtils.transformFiles(srcDir, dstDir, options);
  console.log();
  console.log('TODO: Run FileUtils.transformFiles() with following arguments:');
  console.log(`srcDir: ${path.relative(process.cwd(), srcDir)}`);
  console.log(`dstDir: ${path.relative(process.cwd(), dstDir)}`);
  console.log();
  console.log('options available for this generator:');
  console.log(JSON.stringify(options, null, '  '));
  console.log();

  return Promise.resolve();
}
