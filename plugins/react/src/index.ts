import {
  Options,
  Plugin,
  Generator,
  GeneratorMap,
  selectGenerator,
} from '@code-shaper/shaper-utils';
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
    const generator = await selectGenerator(generators, inputOptions);
    if (!generator) {
      return Promise.resolve();
    }

    return generator.generate(inputOptions);
  },
};
