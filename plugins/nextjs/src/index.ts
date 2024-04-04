import { appGenerator, pageGenerator } from '@code-shaper/nextjs-generators';
import {
  componentGenerator,
  contextGenerator,
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

// ----- Register Generators Here -----
registerGenerator(componentGenerator);
registerGenerator(contextGenerator);
registerGenerator(pageGenerator);
registerGenerator(appGenerator);
registerGenerator(reactLibraryGenerator);
registerGenerator(playwrightGenerator);

const nextjsPlugin: Plugin = {
  id: '@code-shaper/nextjs',
  name: 'Next.js',
  description: 'generates Next.js applications',
  run: async (inputOptions: Options) => {
    const generator = await selectGenerator(generators, inputOptions);
    if (!generator) {
      return Promise.resolve();
    }

    return generator.generate(process.cwd(), inputOptions);
  },
};

export default nextjsPlugin;
