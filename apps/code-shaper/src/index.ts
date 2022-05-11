import inquirer from 'inquirer';
// @ts-ignore
import inquirerDirectory from 'inquirer-directory';
import yargs from 'yargs/yargs';
import { generateGenerator } from './generator-generator/generateGenerator';
import { generateRepo } from './repo-generator/generateRepo';

const generators = [
  { name: 'Repository generator', value: 'repo' },
  { name: 'Generator generator', value: 'generator' },
];

async function main() {
  const argv = await yargs().parse(process.argv.slice(2));

  const questions = [
    {
      type: 'list',
      name: 'generator',
      message: 'Which generator would you like to run?',
      choices: generators,
    },
  ];

  inquirer.registerPrompt('directory', inquirerDirectory);
  const context = await inquirer.prompt(questions, argv);

  // Execute generator
  switch (context.generator) {
    case 'repo':
      await generateRepo(context);
      break;
    case 'generator':
      await generateGenerator(context);
      break;
    default:
      console.error(`Unknown generator: ${context.generator}`);
      break;
  }
}

main().catch((err) => console.error(err));
