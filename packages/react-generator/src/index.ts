import inquirer from 'inquirer';
import { Arguments } from 'yargs-parser';
import { generateApp } from './app-generator/generateApp';
import { generateComponent } from './component-generator/generateComponent';

const moduleTypes = [
  { name: 'Application', value: 'app' },
  { name: 'Component', value: 'component' },
];

export async function generateReact(inputContext: Arguments) {
  const questions = [
    {
      type: 'list',
      name: 'moduleType',
      message: 'What type of module would you like to generate?',
      choices: moduleTypes,
    },
  ];

  const context = await inquirer.prompt(questions, inputContext);

  switch (context.moduleType) {
    case 'app':
      await generateApp(context);
      break;
    case 'component':
      await generateComponent(context);
      break;
    default:
      console.error(`Unknown module type ${context.moduleType}`);
      break;
  }
}
