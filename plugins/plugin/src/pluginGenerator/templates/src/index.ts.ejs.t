import {
  Options,
  Plugin,
  Generator,
  GeneratorMap,
  selectGenerator,
} from '@code-shaper/shaper-utils';

const generators: GeneratorMap = {};

// TODO: Remove eslint-disable-next-line once you start using registerGenerator
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function registerGenerator(generator: Generator) {
  const { id } = generator;
  generators[id] = generator;
}

// ----- Register Generators Here -----

const <%= pluginModuleName %>: Plugin = {
  id: '<%= packageName %>',
  name: '<%= pluginNameCapitalCase %>',
  description: 'generates <%= pluginNameCapitalCase %> artifacts',
  run: async (inputOptions: Options) => {
    const generator = await selectGenerator(generators, inputOptions);
    if (!generator) {
      return Promise.resolve();
    }

    return generator.generate(process.cwd(), inputOptions);
  },
};

export default <%= pluginModuleName %>;
