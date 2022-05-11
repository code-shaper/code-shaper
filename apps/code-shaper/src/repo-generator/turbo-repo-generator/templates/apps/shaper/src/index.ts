import inquirer from 'inquirer';
// @ts-ignore
import inquirerDirectory from 'inquirer-directory';
import { Arguments } from 'yargs-parser';
import yargs from 'yargs/yargs';

const generators = [
  { name: 'React', value: 'react' },
  { name: 'Next.js', value: 'nextjs' },
  { name: 'Remix', value: 'remix' },
];

// ----------------------------------------------------------------------------
// These will generally be functions imported from your real generators
// ----------------------------------------------------------------------------
async function generateReact(inputContext: Arguments) {
  console.log('Generating React using this context:');
  console.log(inputContext);
  // Enhance inputContext before calling a module generator (use inquirer)
}

async function generateNextjs(inputContext: Arguments) {
  console.log('Generating Next.js using this context:');
  console.log(inputContext);
  // Enhance inputContext before calling a module generator (use inquirer)
}

async function generateRemix(inputContext: Arguments) {
  console.log('Generating Remix using this context:');
  console.log(inputContext);
  // Enhance inputContext before calling a module generator (use inquirer)
}
// ----------------------------------------------------------------------------

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
    case 'react':
      await generateReact(context);
      break;
    case 'nextjs':
      await generateNextjs(context);
      break;
    case 'remix':
      await generateRemix(context);
      break;
    default:
      console.error(`Unknown generator: ${context.generator}`);
      break;
  }
}

main().catch((err) => console.error(err));
