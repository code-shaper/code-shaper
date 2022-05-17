import { Generator, Options } from '@code-shaper/shaper-utils';
import inquirer from 'inquirer';
import path from 'path';

export const <%= generatorModuleName %>: Generator = {
  id: '<%= generatorName %>',
  name: '<%= generatorCapitalCaseName %>',
  description: 'generates a <%= generatorCapitalCaseName %>',
  generate: <%= generatorFunctionName %>,
};

async function <%= generatorFunctionName %>(inputOptions: Options) {
  const questions = [
    {
      type: 'input',
      name: '<%= generatorCamelCaseName %>Name',
      message: '<%= generatorName %> name',
    },
    {
      type: 'directory',
      name: 'parentDir',
      message: 'Parent directory?',
      basePath: '.',
    },
  ];

  const options = await inquirer.prompt(questions, inputOptions);
  const { <%= generatorCamelCaseName %>Name, parentDir } = options;

  // --------------------------------------------------------------------------
  // Add more options for code generation here
  // --------------------------------------------------------------------------
  // ...
  // --------------------------------------------------------------------------

  const srcDir = path.join(__dirname, 'templates');
  const dstDir = path.join(parentDir, <%= generatorCamelCaseName %>Name);

  console.log();
  console.log(`Creating ${<%= generatorCamelCaseName %>Name}...`);

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
}
