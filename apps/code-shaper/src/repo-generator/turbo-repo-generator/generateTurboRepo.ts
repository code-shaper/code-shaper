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
  console.log('  # Set up myshaper command to run from anywhere');
  console.log('  cd apps/myshaper');
  console.log('  npm link');
  console.log('  npm list -g  # shows the link to this folder');
  console.log('  cd ../..');
  console.log();
  console.log('  # Run "myshaper" to see some placeholder generators');
  console.log('  myshaper');
  console.log();
  console.log('Code Generation');
  console.log('---------------');
  console.log(
    'As seen above, the repo comes ready with code generation support.'
  );
  console.log();
  console.log(
    'You can install any published generator from the code-shaper ecosystem. For example:'
  );
  console.log('  npm install @code-shaper/react -w myshaper');
  console.log();
  console.log('Or you can create your own using a generator generator:');
  console.log('  shaper --generator generator');
  console.log();
}
