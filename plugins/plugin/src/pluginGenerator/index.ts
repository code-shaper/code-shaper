import { cc, FileUtils, Generator, Options } from '@code-shaper/shaper-utils';
import { prompt, registerPrompt } from 'inquirer';
// @ts-ignore
import inquirerDirectory from 'inquirer-directory';
import path from 'path';

// Register inquirer prompts
registerPrompt('directory', inquirerDirectory);

export const pluginGenerator: Generator = {
  id: 'plugin',
  name: 'Plugin',
  description: 'generates a new plugin',
  generate: generatePlugin,
};

async function generatePlugin(rootDir: string, inputOptions: Options) {
  const questions = [
    {
      type: 'input',
      name: 'pluginName',
      message: 'Plugin name? (e.g. "instant-sites")',
    },
    {
      type: 'directory',
      name: 'parentDir',
      pageSize: 20,
      message: 'Parent directory? (usually "plugins")',
      basePath: rootDir,
    },
    {
      type: 'input',
      name: 'packageName',
      message:
        'Package name used for publishing? (e.g. "@movie-magic/instant-sites")',
    },
  ];

  const options = await prompt(questions, inputOptions);
  const { packageName, pluginName, parentDir } = options;

  // --------------------------------------------------------------------------
  // Add more options for code generation here
  // --------------------------------------------------------------------------
  // Example pluginName: instant-sites

  // pluginNameCamelCase = instantSites
  const pluginNameCamelCase = cc.camelCase(pluginName);
  options['pluginNameCamelCase'] = pluginNameCamelCase;

  // pluginNamePascalCase = InstantSites
  options['pluginNamePascalCase'] = cc.pascalCase(pluginName);

  // pluginNameCapitalCase = Instant Sites
  options['pluginNameCapitalCase'] = cc.capitalCase(pluginName);

  // pluginModuleName = instantSitesPlugin
  options['pluginModuleName'] = `${pluginNameCamelCase}Plugin`;
  // --------------------------------------------------------------------------

  const srcDir = path.join(__dirname, 'templates');
  const dstDir = path.join(parentDir, pluginName);
  const dstRelativeDir = path.relative(rootDir, dstDir);

  console.log();
  console.log(`Creating ${dstRelativeDir}...`);

  FileUtils.transformFiles(srcDir, dstDir, options);

  console.log();
  console.log('Done.');
  console.log();
  console.log('1. In the root directory, run:');
  console.log('     npm install');
  console.log('     npm run build');
  console.log();
  console.log('2. Add the following devDependency to /package.json:');
  console.log(`     "${packageName}": "*",`);
  console.log();
  console.log(
    '3. Run shaper in the root directory and confirm that your plugin shows up:'
  );
  console.log('     npx shaper');
  console.log();
  console.log('4. Start adding generators to your plugin');
  console.log();
  console.log('options available for this plugin:');
  console.log(JSON.stringify(options, null, '  '));
  console.log();

  return Promise.resolve();
}
