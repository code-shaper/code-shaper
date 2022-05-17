import {
  Options,
  Plugin,
  Generator,
  GeneratorMap,
  selectGenerator,
} from '@code-shaper/shaper-utils';
import { storybookGenerator } from './storybookGenerator';
import { turborepoGenerator } from './turborepoGenerator';

const generators: GeneratorMap = {};

function registerGenerator(generator: Generator) {
  const { id } = generator;
  generators[id] = generator;
}

// ----- Register Generators -----
registerGenerator(turborepoGenerator);
registerGenerator(storybookGenerator);

export const repoPlugin: Plugin = {
  id: '@code-shaper/repo',
  name: 'Repo',
  description: 'generates repositories and related features',
  run: async (inputOptions: Options) => {
    const generator = await selectGenerator(generators, inputOptions);
    if (!generator) {
      return Promise.resolve();
    }

    return generator.generate(inputOptions);
  },
};
