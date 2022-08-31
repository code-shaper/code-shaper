import { Script, Options } from '@code-shaper/shaper-utils';

export const <%= generatorModuleName %>: Script = {
  id: '<%= scriptName %>',
  name: '<%= scriptNameCapitalCase %>',
  description: 'generates a <%= scriptNameCapitalCase %>',
  run: <%= generatorFunctionName %>,
};

async function <%= generatorFunctionName %>(rootDir: string, inputOptions: Options) {

  // Write script here. Imported options from package.json are in parameter inputOptions 

  console.log(rootDir);
  console.log(inputOptions);

  Promise.resolve();
}
