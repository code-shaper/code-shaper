import {
  Options,
  Plugin,
  Generator,
  GeneratorMap,
  selectGenerator,
} from '@code-shaper/shaper-utils';
import { appGenerator } from './appGenerator';
import { componentGenerator } from './componentGenerator';
import { contextGenerator } from './contextGenerator';
import { pageGenerator } from './pageGenerator';
import { reactLibraryGenerator } from './reactLibraryGenerator';

const generators: GeneratorMap = {};

function registerGenerator(generator: Generator) {
  const { id } = generator;
  generators[id] = generator;
}

// ----- Register Generators -----
registerGenerator(appGenerator);
registerGenerator(reactLibraryGenerator);
registerGenerator(pageGenerator);
registerGenerator(componentGenerator);
registerGenerator(contextGenerator);

const reactPlugin: Plugin = {
  id: '@code-shaper/react',
  name: 'React',
  description: 'generates React applications',
  run: async (
    inputOptions: Options,
    runType: number,
    runName: string | undefined
  ) => {
    console.log(
      'Options:' +
        JSON.stringify(inputOptions) +
        ' runType:' +
        runType +
        ' runName:' +
        runName
    );

    if (runType == 1) {
      //executors
      console.log('run script: ' + runName);
      return Promise.resolve();
    }
    const generator = await selectGenerator(generators, inputOptions);
    if (!generator) {
      return Promise.resolve();
    }

    return generator.generate(process.cwd(), inputOptions);
  },
};

export default reactPlugin;
