import {
  Options,
  Plugin,
  Generator,
  GeneratorMap,
  selectGenerator,
} from '@code-shaper/shaper-utils';

const generators: GeneratorMap = {};

// TODO: Remove ts-ignore once you start using registerGenerator
// @ts-ignore
function registerGenerator(generator: Generator) {
  const { id } = generator;
  generators[id] = generator;
}

// ----- Register Generators Here -----

const reactPatternsPlugin: Plugin = {
  id: '@movie-magic/react-patterns',
  name: 'React Patterns',
  description: 'generates React Patterns artifacts',
  run: async (inputOptions: Options) => {
    const generator = await selectGenerator(generators, inputOptions);
    if (!generator) {
      return Promise.resolve();
    }

    return generator.generate(process.cwd(), inputOptions);
  },
};

export default reactPatternsPlugin;
