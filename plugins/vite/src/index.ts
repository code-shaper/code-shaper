import {
  componentGenerator,
  contextGenerator,
  pageGenerator,
  reactLibraryGenerator,
} from '@code-shaper/react-generators';
import { playwrightGenerator } from '@code-shaper/playwright-generators';
import { appGenerator } from '@code-shaper/vite-generators';
import {
  Options,
  Plugin,
  Generator,
  GeneratorMap,
  selectGenerator,
} from '@code-shaper/shaper-utils';

const generators: GeneratorMap = {};

function registerGenerator(generator: Generator) {
  const { id } = generator;
  generators[id] = generator;
}

// ----- Register Generators -----
registerGenerator(componentGenerator);
registerGenerator(contextGenerator);
registerGenerator(pageGenerator);
registerGenerator(appGenerator);
registerGenerator(reactLibraryGenerator);
registerGenerator(playwrightGenerator);

const vitePlugin: Plugin = {
  id: '@code-shaper/vite',
  name: 'Vite',
  description: 'generates React applications using Vite',
  run: async (inputOptions: Options) => {
    const generator = await selectGenerator(generators, inputOptions);
    if (!generator) {
      return Promise.resolve();
    }

    return generator.generate(process.cwd(), inputOptions);
  },
};

export default vitePlugin;
