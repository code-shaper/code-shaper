import {
  Options,
  Plugin,
  Generator,
  GeneratorMap,
  selectGenerator,
} from '@code-shaper/shaper-utils';
import { appGenerator } from './appGenerator';
import { pageGenerator } from './pageGenerator';

const generators: GeneratorMap = {};

function registerGenerator(generator: Generator) {
  const { id } = generator;
  generators[id] = generator;
}

// ----- Register Generators Here -----
registerGenerator(appGenerator);
registerGenerator(pageGenerator);

const remixPlugin: Plugin = {
  id: '@code-shaper/remix',
  name: 'Remix',
  description: 'generates Remix applications',
  run: async (inputOptions: Options) => {
    const generator = await selectGenerator(generators, inputOptions);
    if (!generator) {
      return Promise.resolve();
    }

    return generator.generate(process.cwd(), inputOptions);
  },
};

export default remixPlugin;
