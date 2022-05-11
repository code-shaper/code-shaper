import { FileUtils } from '@code-shaper/shaper-utils';
import inquirer from 'inquirer';
import path from 'path';
import { Arguments } from 'yargs-parser';

export async function generateTurboRepo(inputContext: Arguments) {
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'Repository name? (e.g. my-org, my-group, my-project)',
    },
  ];

  const context = await inquirer.prompt(questions, inputContext);
  const { name } = context;

  const srcDir = path.join(__dirname, 'templates');
  const dstDir = path.join(process.cwd(), name);

  console.log();
  console.log(`Creating ${name}...`);

  FileUtils.transformFiles(srcDir, dstDir, context);

  console.log();
  console.log('Done. Now run:');
  console.log();
  console.log(`  cd ${name}`);
  console.log('  git init');
  console.log('  npm install');
  console.log('  npm run build');
  console.log('  git add .');
  console.log('  git commit -m "Initial commit"');
  console.log();
  console.log('Code Generation');
  console.log('---------------');
  console.log('The repo comes ready with code generation support.');
  console.log('  - Run "npm run shaper" to see some placeholder generators.');
  console.log();
  console.log('You can install a pre-existing generator. For example:');
  console.log(
    '  - Run "npm install @code-shaper/react -w shaper" in this repo.'
  );
  console.log();
  console.log('When you are ready to create your own generator:');
  console.log('  - Run "code-shaper --generator generator" in this repo.');
  console.log();
}
