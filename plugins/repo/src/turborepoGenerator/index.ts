import { cc, FileUtils, Generator, Options } from '@code-shaper/shaper-utils';
import { prompt } from 'inquirer';
import path from 'path';

export const turborepoGenerator: Generator = {
  id: 'turborepo',
  name: 'Turborepo',
  description: 'generates a Turborepo',
  generate: generateTurborepo,
};

async function generateTurborepo(rootDir: string, inputOptions: Options) {
  const questions = [
    {
      type: 'input',
      name: 'itemName',
      message: 'Repository name? (e.g. my-org, my-group, my-project)',
    },
  ];

  const options = await prompt(questions, inputOptions);
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
  const dstDir = path.join(rootDir, itemName);

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
  console.log();
  console.log('Make an initial commit using the conventional commit spec');
  console.log('This is equivalent to: git commit -m "chore: initialize repo"');
  console.log('  npm run commit');
  console.log('  ? Select the TYPE of this change (required): chore');
  console.log(
    '  ? Select the SCOPE of this change (optional) (press enter to skip):'
  );
  console.log(
    '  ? Finish this SHORT sentence (required): "Applying this commit will...": (max 100 chars)'
  );
  console.log('  (15) initialize repo');
  console.log(
    '  ? Provide a LONGER description of the change (optional): (press enter to skip):'
  );
  console.log('  ? Are there any breaking changes?: No');
  console.log('  [master (root-commit)] chore: initialize repo');
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
