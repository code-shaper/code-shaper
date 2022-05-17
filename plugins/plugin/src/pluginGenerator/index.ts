import { FileUtils, Generator, Options } from '@code-shaper/shaper-utils';
import inquirer from 'inquirer';
import path from 'path';

export const pluginGenerator: Generator = {
  id: 'plugin',
  name: 'Plugin',
  description: 'generates a new plugin',
  generate: generatePlugin,
};

async function generatePlugin(inputOptions: Options) {
  const questions = [
    {
      type: 'input',
      name: 'pluginName',
      message: 'Plugin name? (e.g. "react")',
    },
    {
      type: 'directory',
      name: 'parentDir',
      message: 'Parent directory? (usually "plugins")',
      basePath: '.',
    },
    {
      type: 'input',
      name: 'packageName',
      message: 'Package name used for publishing? (e.g. "@my-org/react")',
    },
  ];

  const options = await inquirer.prompt(questions, inputOptions);
  const { pluginName, parentDir } = options;

  const srcDir = path.join(__dirname, 'templates');
  const dstDir = path.join(parentDir, pluginName);
  const dstRelativeDir = path.relative(process.cwd(), dstDir);

  console.log();
  console.log(`Creating ${dstRelativeDir}...`);

  FileUtils.transformFiles(srcDir, dstDir, options);

  console.log('Done.');
  console.log();
  console.log('1. In the root directory, run:');
  console.log(`     npm run clean`);
  console.log(`     npm install`);
  console.log();
  console.log('2. Add plugin to "shaperPlugins" in ./package.json');
  console.log();
  console.log('3. Start adding generators to your plugin');
  console.log();
  console.log('options available for this plugin:');
  console.log(JSON.stringify(options, null, '  '));
  console.log();

  return Promise.resolve();
}
