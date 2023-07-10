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
  const okToProceedQuestions = [
    {
      type: 'confirm',
      name: 'okToProceed',
      message: `This generator will overwrite some files in your repo. Ok to proceed?`,
      default: false,
    },
  ];
  const okToProceedOptions = await prompt(okToProceedQuestions, inputOptions);
  const { okToProceed } = okToProceedOptions;
  if (!okToProceed) {
    console.log('Aborting...');
    return;
  }

  const questions = [
    {
      type: 'input',
      name: 'itemName',
      message: 'Repository name? (e.g. movie-magic)',
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
  const dstDir = path.join(rootDir);

  console.log();
  console.log(`Creating ${itemName}...`);

  FileUtils.transformFiles(srcDir, dstDir, options);

  console.log();
  console.log('Done.');
  console.log();
  console.log('What to do next?');
  console.log('----------------');
  console.log('1. Do a clean install with the generated package.json file.');
  console.log('2. Install Code Shaper plugins that you need for your project.');
  console.log('3. Initialize your git repo.');
  console.log();
  console.log('For example:');
  console.log();
  console.log('rm -rf package-lock.json node_modules');
  console.log('nvm use        # use the required version of node');
  console.log('npm install    # install dependencies');
  console.log('npm install @code-shaper/react');
  console.log('git init');
  console.log('git add .');
  console.log();
  console.log('Now make an initial commit using the conventional commit spec');
  console.log(
    '(steps below are equivalent to: git commit -m "chore: initial commit")'
  );
  console.log('  npm run commit');
  console.log('  ? Select the TYPE of this change (required): chore');
  console.log(
    '  ? Select the SCOPE of this change (optional) (press enter to skip):'
  );
  console.log(
    '  ? Finish this SHORT sentence (required): "Applying this commit will...": (max 100 chars)'
  );
  console.log('  (15) initial commit');
  console.log(
    '  ? Provide a LONGER description of the change (optional): (press enter to skip):'
  );
  console.log('  ? Are there any breaking changes?: No');
  console.log('  [master (root-commit)] chore: initial commit');
  console.log();

  return Promise.resolve();
}
