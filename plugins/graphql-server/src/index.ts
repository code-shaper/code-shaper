import {
  Options,
  Plugin,
  Generator,
  GeneratorMap,
  selectGenerator,
} from '@code-shaper/shaper-utils';
import { apolloServerGenerator } from './apolloServerGenerator';

const generators: GeneratorMap = {};

function registerGenerator(generator: Generator) {
  const { id } = generator;
  generators[id] = generator;
}

// ----- Register Generators Here -----
registerGenerator(apolloServerGenerator);

const graphqlServerPlugin: Plugin = {
  id: '@code-shaper/graphql-server',
  name: 'Graphql Server',
  description: 'generates Graphql Server artifacts',
  run: async (inputOptions: Options) => {
    const generator = await selectGenerator(generators, inputOptions);
    if (!generator) {
      return Promise.resolve();
    }

    return generator.generate(process.cwd(), inputOptions);
  },
};

export default graphqlServerPlugin;
