import {
  getGeneratorChoices,
  Options,
  Plugin,
  Generator,
  GeneratorMap,
} from '@code-shaper/shaper-utils';
import inquirer from 'inquirer';
import { turborepoGenerator } from './turborepoGenerator';

const generators: GeneratorMap = {};

function registerGenerator(generator: Generator) {
  const { id } = generator;
  generators[id] = generator;
}

registerGenerator(turborepoGenerator);

export const repoPlugin: Plugin = {
  id: '@code-shaper/repo',
  name: 'Repo',
  description: 'generates repositories',
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
