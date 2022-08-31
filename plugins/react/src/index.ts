import {
  Options,
  Plugin,
  Generator,
  GeneratorMap,
  selectGenerator,
  RunType,
  ScriptUtils,
  Script,
  ScriptMap,
} from '@code-shaper/shaper-utils';
import { appGenerator } from './appGenerator';
import { componentGenerator } from './componentGenerator';
import { contextGenerator } from './contextGenerator';
import { pageGenerator } from './pageGenerator';
import { reactLibraryGenerator } from './reactLibraryGenerator';
import { buildScript } from './buildScript';

const generators: GeneratorMap = {};
const scripts: ScriptMap = {};

function registerGenerator(generator: Generator) {
  const { id } = generator;
  generators[id] = generator;
}

function registerScript(script: Script) {
  const { id } = script;
  scripts[id] = script;
}

// ----- Register Generators -----
registerGenerator(appGenerator);
registerGenerator(reactLibraryGenerator);
registerGenerator(pageGenerator);
registerGenerator(componentGenerator);
registerGenerator(contextGenerator);

// ------ Register Scripts -------
registerScript(buildScript);

const reactPlugin: Plugin = {
  id: '@code-shaper/react',
  name: 'React',
  description: 'generates React applications',
  run: async (
    inputOptions: Options,
    runType: RunType | undefined,
    runName: string | undefined
  ) => {
    //console.log( 'Options:' + JSON.stringify(inputOptions) + ' runType:' + runType + ' runName:' + runName);

    if (runType == RunType.Script && runName) {
      const scriptOptions = ScriptUtils.getScriptOptions(
        process.cwd(),
        runName
      );
      if (!scriptOptions) {
        console.error(`Script tag ${runName} not found in package.json`);
        return Promise.resolve();
      }
      if (!scriptOptions['script']) {
        console.error(`Script tag ${runName} does not contain script name`);
        return Promise.resolve();
      }

      const script = scripts[runName];

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

export default reactPlugin;
