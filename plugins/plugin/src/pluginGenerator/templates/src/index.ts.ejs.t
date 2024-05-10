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
// TODO: delete this dummyGenerator once you have a real one
export const dummyGenerator: Generator = {
  id: 'dummy',
  name: 'Dummy',
  description: 'a dummy generator',
  generate: async (rootDir: string, inputOptions: Options) => {
    console.log('Dummy Generator:', rootDir, inputOptions);
  },
};
registerGenerator(dummyGenerator);

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
