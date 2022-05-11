import inquirer from 'inquirer';
import { Arguments } from 'yargs-parser';
import { generateApp } from './app-generator/generateApp';

const moduleTypes = [
  { name: 'Application', value: 'app' },
  { name: 'Component', value: 'component' },
];

// ----------------------------------------------------------------------------
// These will generally be functions imported from your real modules
// ----------------------------------------------------------------------------
async function generateComponent(inputContext: Arguments) {
  console.log('Generating Component using this context:');
  console.log(inputContext);
  // Enhance inputContext before calling a module generator (use inquirer)
}
// ----------------------------------------------------------------------------

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
