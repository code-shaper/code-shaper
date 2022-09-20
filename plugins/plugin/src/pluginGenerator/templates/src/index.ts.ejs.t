import {
  Options,
  Plugin,
  Generator,
  GeneratorMap,
  selectGenerator,
  RunType,
  PackageJsonUtils,
  Script,
  ScriptMap,
} from '@code-shaper/shaper-utils';

const generators: GeneratorMap = {};
const scripts: ScriptMap = {};

// TODO: Remove ts-ignore once you start using registerGenerator
// @ts-ignore
function registerGenerator(generator: Generator) {
  const { id } = generator;
  generators[id] = generator;
}

// TODO: Remove ts-ignore once you start using registerScript
// @ts-ignore
function registerScript(script: Script) {
  const { id } = script;
  scripts[id] = script;
}

// ----- Register Generators Here -----

const <%= pluginModuleName %>: Plugin = {
  id: '<%= packageName %>',
  name: '<%= pluginNameCapitalCase %>',
  description: 'generates <%= pluginNameCapitalCase %> artifacts',
  run: async (inputOptions: Options,
    runType: RunType | undefined,
    runName: string | undefined) => {

    if (runType == RunType.Script && runName) {
      const scriptOptions = PackageJsonUtils.getScriptOptionsFromPackageJson(process.cwd(), runName);
      if (!scriptOptions) {
        console.error(`Script tag ${runName} not found in package.json`);
        return Promise.resolve();
      }
      if (!scriptOptions['script']) {
        console.error(`Script tag ${runName} does not contain script name`);
        return Promise.resolve();
      }

      const scriptName = scriptOptions['script'] as string;
      const script = scripts[scriptName];

      if (!script) {
        console.error(`Script ${scriptOptions['script']} does not exist`);
        return Promise.resolve();
      }

      return script.run(process.cwd(), scriptOptions as Options);
    }
    
    const generator = await selectGenerator(generators, inputOptions);
    if (!generator) {
      return Promise.resolve();
    }

    return generator.generate(process.cwd(), inputOptions);
  },
};

export default <%= pluginModuleName %>;
