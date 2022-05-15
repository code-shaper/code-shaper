import {
  getGeneratorChoices,
  Options,
  Plugin,
  Generator,
  GeneratorMap,
} from '@code-shaper/shaper-utils';
import inquirer from 'inquirer';

const generators: GeneratorMap = {};

function registerGenerator(generator: Generator) {
  const { id } = generator;
  generators[id] = generator;
}

// ----- Register Generators Here -----


export const <%= pluginName %>Plugin: Plugin = {
  id: '<%= packageName %>',
  name: '<%= pluginName %>',
  description: 'Generates <%= pluginName %> artifacts',
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
