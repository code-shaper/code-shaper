import { appGenerator, routeGenerator } from '@code-shaper/remix-generators';
import { playwrightGenerator } from '@code-shaper/playwright-generators';
import {
  componentGenerator,
  contextGenerator,
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
registerGenerator(routeGenerator);
registerGenerator(appGenerator);
registerGenerator(reactLibraryGenerator);
registerGenerator(playwrightGenerator);

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
