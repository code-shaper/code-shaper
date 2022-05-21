import {
  Options,
  Plugin,
  Generator,
  GeneratorMap,
  selectGenerator,
} from '@code-shaper/shaper-utils';
import { appGenerator } from './appGenerator';
import { componentGenerator } from './componentGenerator';
import { pageGenerator } from './pageGenerator';
import { reactLibraryGenerator } from './reactLibraryGenerator';

const generators: GeneratorMap = {};

function registerGenerator(generator: Generator) {
  const { id } = generator;
  generators[id] = generator;
}

// ----- Register Generators -----
registerGenerator(appGenerator);
registerGenerator(reactLibraryGenerator);
registerGenerator(pageGenerator);
registerGenerator(componentGenerator);

const reactPlugin: Plugin = {
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

export default reactPlugin;
