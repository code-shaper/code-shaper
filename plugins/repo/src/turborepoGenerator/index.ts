import { cc, FileUtils, Generator, Options } from '@code-shaper/shaper-utils';
import inquirer from 'inquirer';
import path from 'path';

export const turborepoGenerator: Generator = {
  id: 'turborepo',
  name: 'Turborepo',
  description: 'generates a Turborepo',
  generate: generateTurborepo,
};

async function generateTurborepo(inputOptions: Options) {
  const questions = [
    {
      type: 'input',
      name: 'itemName',
      message: 'Repository name? (e.g. my-org, my-group, my-project)',
    },
  ];

  const options = await inquirer.prompt(questions, inputOptions);
  const { itemName } = options;

  // --------------------------------------------------------------------------
  // Add more options for code generation here
  // --------------------------------------------------------------------------
  // Example: itemName = movie-magic

  // itemNameKebabCase = movie-magic
  options['itemNameKebabCase'] = cc.kebabCase(itemName);

  // itemNameCamelCase = movieMagic
  options['itemNameCamelCase'] = cc.camelCase(itemName);

  // itemNamePascalCase = MovieMagic
  options['itemNamePascalCase'] = cc.pascalCase(itemName);

  // itemNameCapitalCase = Movie Magic
  options['itemNameCapitalCase'] = cc.capitalCase(itemName);
  // --------------------------------------------------------------------------

  const srcDir = path.join(__dirname, 'templates');
  const dstDir = path.join(process.cwd(), itemName);

  console.log();
  console.log(`Creating ${itemName}...`);

  FileUtils.transformFiles(srcDir, dstDir, options);

  console.log();
  console.log('Done. Now run:');
  console.log();
  console.log(`  cd ${itemName}`);
  console.log('  git init');
  console.log('  npm install');
  console.log('  git add .');
  console.log('  git commit -m "Initial commit"');
  console.log();
  console.log('What to do next?');
  console.log('----------------');
  console.log('Install a plugin from the code-shaper ecosystem.');
  console.log('For example:');
  console.log();
  console.log('# To generate a React application:');
  console.log('npm install @code-shaper/react');
  console.log();
  console.log('# To create a custom plugin:');
  console.log('npm install @code-shaper/plugin');
  console.log();

  return Promise.resolve();
}
