import { Script, Options } from '@code-shaper/shaper-utils';

export const reactBookScript: Script = {
  id: 'react-book',
  name: 'React Book',
  description: 'generates a React Book',
  run: generateReactBook,
};

async function generateReactBook(rootDir: string, inputOptions: Options) {

  // Write script here. Imported options from package.json are in parameter inputOptions 

  console.log(rootDir);
  console.log(inputOptions);

  Promise.resolve();
}
