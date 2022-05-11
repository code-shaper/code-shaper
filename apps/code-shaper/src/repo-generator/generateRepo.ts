import inquirer from 'inquirer';
import { Arguments } from 'yargs-parser';
import { generateTurboRepo } from './turbo-repo-generator/generateTurboRepo';

const repoTypes = [{ name: 'Turborepo', value: 'turbo' }];

export async function generateRepo(inputContext: Arguments) {
  const questions = [
    {
      type: 'list',
      name: 'repoType',
      message: 'What type of repository would you like to generate?',
      choices: repoTypes,
    },
  ];

  const context = await inquirer.prompt(questions, inputContext);

  // Execute generator
  switch (context.repoType) {
    case 'turbo':
      await generateTurboRepo(context);
      break;
    default:
      console.error(`Unknown repository type: ${context.repoType}`);
      break;
  }
}
