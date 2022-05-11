import inquirer from 'inquirer';
import path from 'path';
import { Arguments } from 'yargs-parser';

export async function <%= moduleGeneratorFunction %>(inputContext: Arguments) {
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: '<%= moduleName %> name',
    },
    {
      type: 'directory',
      name: 'parentDir',
      message: 'Parent directory? (usually "apps" or "packages")',
      basePath: '.',
    },
  ];

  const context = await inquirer.prompt(questions, inputContext);
  const { name, parentDir } = context;

  const srcDir = path.join(__dirname, 'templates');
  const dstDir = path.join(parentDir, name);

  console.log();
  console.log(`Creating ${name}...`);

  // TODO: Create templates and then uncomment this line
  // FileUtils.transformFiles(srcDir, dstDir, context);
  console.log();
  console.log('TODO: Run FileUtils.transformFiles() with following arguments:');
  console.log(`srcDir: ${path.relative(process.cwd(), srcDir)}`);
  console.log(`dstDir: ${path.relative(process.cwd(), dstDir)}`);
  console.log('context:');
  console.log(JSON.stringify(context, null, '  '));
  console.log();
}
