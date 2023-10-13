import {
  Options,
  Plugin,
  Generator,
  GeneratorMap,
  selectGenerator,
} from '@code-shaper/shaper-utils';
import { appGenerator } from './appGenerator';
import { componentGenerator } from './componentGenerator';
import { contextGenerator } from './contextGenerator';
import { pageGenerator } from './pageGenerator';
import { playwrightGenerator } from './playwrightGenerator';
import { reactLibraryGenerator } from './reactLibraryGenerator';

const generators: GeneratorMap = {};

function registerGenerator(generator: Generator) {
  const { id } = generator;
  generators[id] = generator;
}

// ----- Register Generators -----
registerGenerator(componentGenerator);
registerGenerator(contextGenerator);
registerGenerator(appGenerator);
registerGenerator(pageGenerator);
registerGenerator(reactLibraryGenerator);
registerGenerator(playwrightGenerator);

const reactPlugin: Plugin = {
  id: '@code-shaper/react',
  name: 'React',
  description: 'generates React applications',
  run: async (inputOptions: Options) => {
    const generator = await selectGenerator(generators, inputOptions);
    if (!generator) {
      return Promise.resolve();
    }

    return generator.generate(process.cwd(), inputOptions);
  },
};

export default reactPlugin;
