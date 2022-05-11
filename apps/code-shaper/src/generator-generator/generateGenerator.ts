import inquirer from 'inquirer';
import { Arguments } from 'yargs-parser';
import { generateShaperGenerator } from './shaper-generator/generateShaperGenerator';
import { generateShaperModule } from './shaper-module/generateShaperModule';

const generatorTypes = [
  { name: 'Workspace for a new generator', value: 'shaperGenerator' },
  { name: 'New module within a generator', value: 'shaperModule' },
];

export async function generateGenerator(inputContext: Arguments) {
  const questions = [
    {
      type: 'list',
      name: 'generatorType',
      message: 'What would you like to generate?',
      choices: generatorTypes,
    },
  ];

  const context = await inquirer.prompt(questions, inputContext);

  // Execute generator
  switch (context.generatorType) {
    case 'shaperGenerator':
      await generateShaperGenerator(context);
      break;
    case 'shaperModule':
      await generateShaperModule(context);
      break;
    default:
      console.error(`Unknown generator type: ${context.generatorType}`);
      break;
  }
}
