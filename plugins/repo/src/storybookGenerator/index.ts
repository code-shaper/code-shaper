import { FileUtils, Generator, Options } from '@code-shaper/shaper-utils';
import inquirer from 'inquirer';
import path from 'path';

export const storybookGenerator: Generator = {
  id: 'storybook',
  name: 'Storybook',
  description: 'adds storybook support to your repository',
  generate: generateStorybook,
};

async function generateStorybook(rootDir: string, inputOptions: Options) {
  const repoName = path.basename(rootDir);

  const questions = [
    {
      type: 'confirm',
      name: 'okToProceed',
      message: `Storybook will be added to ${repoName}. Ok to proceed?`,
      default: true,
    },
  ];

  const options = await inquirer.prompt(questions, inputOptions);
  const { okToProceed } = options;
  if (!okToProceed) {
    console.log('Aborting...');
    return;
  }

  const srcDir = path.join(__dirname, 'templates');
  const dstDir = rootDir;

  console.log();
  console.log(`Adding Storybook support to ${repoName}...`);

  FileUtils.transformFiles(srcDir, dstDir, options);

  console.log();
  console.log('Done');
  console.log();

  console.log(
    `1. Add the following lines to the scripts section of your root package.json:`
  );
  console.log('     "storybook": "cd storybook && npm run storybook",');
  console.log(
    '     "build-storybook": "cd storybook && build-storybook -s public"'
  );
  console.log();
  console.log('2. In the root directory, run:');
  console.log('     cd storybook');
  console.log('     npm install');
  console.log('     cd ..');
  console.log();
  console.log('3. Start creating Storybook stories in your repo and');
  console.log('   use the following command to run them:');
  console.log();
  console.log('     npm run storybook');
  console.log();
}
