import { Generator, Options } from '@code-shaper/shaper-utils';
import inquirer from 'inquirer';
import path from 'path';

export const <%= generatorModuleName %>: Generator = {
  id: '<%= generatorName %>',
  name: '<%= generatorPascalCaseName %>',
  description: 'generates a <%= generatorName %>',
  generate: <%= generatorFunctionName %>,
};

async function <%= generatorFunctionName %>(inputOptions: Options) {
  const questions = [
    {
      type: 'input',
      name: '<%= generatorName %>Name',
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
  const { <%= generatorName %>Name, parentDir } = options;

  const srcDir = path.join(__dirname, 'templates');
  const dstDir = path.join(parentDir, <%= generatorName %>Name);

  console.log();
  console.log(`Creating ${<%= generatorName %>Name}...`);

  // TODO: Create templates and then uncomment this line
  // FileUtils.transformFiles(srcDir, dstDir, context);
  console.log();
  console.log('TODO: Run FileUtils.transformFiles() with following arguments:');
  console.log(`srcDir: ${path.relative(process.cwd(), srcDir)}`);
  console.log(`dstDir: ${path.relative(process.cwd(), dstDir)}`);
  console.log('options:');
  console.log(JSON.stringify(options, null, '  '));
  console.log();
}
