import { turborepoGenerator } from '@code-shaper/repo-generators';
import {
  appGenerator,
  componentGenerator,
  contextGenerator,
  pageGenerator,
  playwrightGenerator,
  reactLibraryGenerator,
} from '@code-shaper/react-generators';
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
registerGenerator(turborepoGenerator);

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
