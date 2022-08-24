import { Script, Options } from '@code-shaper/shaper-utils';

export const buildScript: Script = {
  id: 'build',
  name: 'build',
  description: 'test script',
  run: runScript,
};

async function runScript(rootDir: string, inputOptions: Options) {
  console.log('Build Script Executing:');
  console.log(rootDir);
  console.log(inputOptions);

  Promise.resolve();
}
