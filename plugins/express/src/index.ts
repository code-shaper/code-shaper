import {
  Options,
  Plugin,
  Generator,
  GeneratorMap,
  selectGenerator,
} from '@code-shaper/shaper-utils';
import { appGenerator } from './appGenerator';

const generators: GeneratorMap = {};

function registerGenerator(generator: Generator) {
  const { id } = generator;
  generators[id] = generator;
}

// ----- Register Generators Here -----
registerGenerator(appGenerator);

const expressPlugin: Plugin = {
  id: '@code-shaper/express',
  name: 'Express',
  description: 'generates Express applications',
  run: async (inputOptions: Options) => {
    const generator = await selectGenerator(generators, inputOptions);
    if (!generator) {
      return Promise.resolve();
    }

    return generator.generate(process.cwd(), inputOptions);
  },
};

export default expressPlugin;
