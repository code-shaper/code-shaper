import {
  getGeneratorChoices,
  Options,
  Plugin,
  Generator,
  GeneratorMap,
} from '@code-shaper/shaper-utils';
import inquirer from 'inquirer';
import { componentGenerator } from './componentGenerator';
import { appGenerator } from './appGenerator';

const generators: GeneratorMap = {};

function registerGenerator(generator: Generator) {
  const { id } = generator;
  generators[id] = generator;
}

// ----- Register Generators -----
registerGenerator(appGenerator);
registerGenerator(componentGenerator);

export const reactPlugin: Plugin = {
  id: '@code-shaper/react',
  name: 'React',
  description: 'generates React applications',
  run: async (inputOptions: Options) => {
    const questions = [
      {
        type: 'list',
        name: 'generatorId',
        message: 'Which generator would you like to run?',
        choices: getGeneratorChoices(generators),
      },
    ];

    const options = await inquirer.prompt(questions, inputOptions);
    const generatorId = options.generatorId;

    const generator = generators[generatorId];
    if (!generator) {
      console.error(`Generator ${generatorId} not found`);
      return Promise.resolve();
    }

    return generator.generate(options);
  },
};
