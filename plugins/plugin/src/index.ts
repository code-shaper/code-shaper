import {
  Options,
  Plugin,
  Generator,
  GeneratorMap,
  selectGenerator,
} from '@code-shaper/shaper-utils';
import { generatorGenerator } from './generatorGenerator';
import { pluginGenerator } from './pluginGenerator';

const generators: GeneratorMap = {};

function registerGenerator(generator: Generator) {
  const { id } = generator;
  generators[id] = generator;
}

// ----- Register Generators -----
registerGenerator(pluginGenerator);
registerGenerator(generatorGenerator);

export const pluginPlugin: Plugin = {
  id: '@code-shaper/plugin',
  name: 'Plugin',
  description: 'generates custom plugins',
  run: async (inputOptions: Options) => {
    const generator = await selectGenerator(generators, inputOptions);
    if (!generator) {
      return Promise.resolve();
    }

    return generator.generate(inputOptions);
  },
};
