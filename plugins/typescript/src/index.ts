import {
  Options,
  Plugin,
  Generator,
  GeneratorMap,
  selectGenerator,
} from '@code-shaper/shaper-utils';
import { typescriptLibraryGenerator } from './typescriptLibraryGenerator';

const generators: GeneratorMap = {};

function registerGenerator(generator: Generator) {
  const { id } = generator;
  generators[id] = generator;
}

// ----- Register Generators Here -----
registerGenerator(typescriptLibraryGenerator);

const typescriptPlugin: Plugin = {
  id: '@code-shaper/typescript',
  name: 'TypeScript',
  description: 'generates TypeScript artifacts',
  run: async (inputOptions: Options) => {
    const generator = await selectGenerator(generators, inputOptions);
    if (!generator) {
      return Promise.resolve();
    }

    return generator.generate(process.cwd(), inputOptions);
  },
};

export default typescriptPlugin;
