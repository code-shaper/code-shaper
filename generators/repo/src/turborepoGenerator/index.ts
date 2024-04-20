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
      type: 'confirm',
      name: 'okToProceed',
      message: `This generator will overwrite some files in your repo. Ok to proceed?`,
      default: false,
    },
  ];

  const options = await prompt(questions, inputOptions);
  const { okToProceed } = options;
  if (!okToProceed) {
    console.log('Aborting...');
    return;
  }

  // --------------------------------------------------------------------------
  // Add more options for code generation here
  // --------------------------------------------------------------------------
  // Get itemName from directory name
  // Example: itemName = movie-magic
  const itemName = cc.kebabCase(path.basename(rootDir));
  options['itemName'] = itemName;

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
  console.log();
  console.log('# Initialize your git');
  console.log('git init');
  console.log();
  console.log(
    '# Do a clean install with the newly generated package.json file'
  );
  console.log('rm -rf package-lock.json node_modules');
  console.log('nvm use        # use the required version of node');
  console.log('npm install    # install dependencies');
  console.log();
  console.log('# Make an initial commit');
  console.log(
    '# Note that we are using the conventional commit spec for commit messages'
  );
  console.log(
    '# The `npm run commit` command helps us with this using prompts'
  );
  console.log(
    '# This is equivalent to executing the following git command directly:'
  );
  console.log('#   git commit -m "chore: initial commit"');
  console.log('git add .');
  console.log('npm run commit');
  console.log('? Select the TYPE of this change (required): chore');
  console.log(
    '? Select the SCOPE of this change (optional) (press enter to skip):'
  );
  console.log(
    '? Finish this SHORT sentence (required): "Applying this commit will...": (max 100 chars)'
  );
  console.log('  initial commit');
  console.log(
    '? Provide a LONGER description of the change (optional): (press enter to skip):'
  );
  console.log('? Are there any breaking changes?: No');
  console.log('[master (root-commit)] chore: initial commit');
  console.log();

  return Promise.resolve();
}
