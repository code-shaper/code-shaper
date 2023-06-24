import { cc, FileUtils, Generator, Options } from '@code-shaper/shaper-utils';
import { prompt, registerPrompt } from 'inquirer';
// @ts-ignore
import inquirerDirectory from 'inquirer-directory';
import path from 'path';

// Register inquirer prompts
registerPrompt('directory', inquirerDirectory);

export const storybookGenerator: Generator = {
  id: 'storybook',
  name: 'Storybook',
  description: 'adds storybook support to your repository',
  generate: generateStorybook,
};

async function generateStorybook(rootDir: string, inputOptions: Options) {
  const questions = [
    {
      type: 'input',
      name: 'itemName',
      message: 'Storybook name? (e.g. "movie-magic-storybook")',
    },
    {
      type: 'directory',
      name: 'parentDir',
      pageSize: 20,
      message: 'Parent directory? (usually "apps")',
      basePath: rootDir,
    },
    {
      type: 'input',
      name: 'packageName',
      message:
        'Package name used for publishing? (e.g. "movie-magic-storybook" or "@movie-magic/movie-magic-storybook")',
    },
  ];

  const options = await prompt(questions, inputOptions);
  const { itemName, parentDir } = options;

  // --------------------------------------------------------------------------
  // Add more options for code generation here
  // --------------------------------------------------------------------------
  // Example: itemName = movie-magic-storybook

  // itemNameKebabCase = movie-magic-storybook
  options['itemNameKebabCase'] = cc.kebabCase(itemName);

  // itemNameCamelCase = movieMagicStorybook
  options['itemNameCamelCase'] = cc.camelCase(itemName);

  // itemNamePascalCase = MovieMagicStorybook
  options['itemNamePascalCase'] = cc.pascalCase(itemName);

  // itemNameCapitalCase = Movie Magic Storybook
  options['itemNameCapitalCase'] = cc.capitalCase(itemName);
  // --------------------------------------------------------------------------

  const { itemNameKebabCase } = options;

  const srcDir = path.join(__dirname, 'templates');
  const dstDir = path.join(parentDir, itemNameKebabCase);

  console.log();
  console.log(`Creating ${itemName}...`);

  FileUtils.transformFiles(srcDir, dstDir, options);

  console.log();
  console.log('Done.');
  console.log();
  console.log(
    '1. In the root directory, edit package.json to force the latest version of React.'
  );
  console.log(
    '   This is done by adding the following overrides section after the devDependencies'
  );
  console.log('   section (ignore if these overrides already exist):');
  console.log();
  console.log('     "overrides": {');
  console.log('       "react": "^18.2.0",');
  console.log('       "react-dom": "^18.2.0"');
  console.log('     },');
  console.log();
  console.log('2. In the root directory, run:');
  console.log('     npm run clean');
  console.log('     npm install');
  console.log('     npm run build');
  console.log();
  console.log('     # run a sample test');
  console.log('     npm test');
  console.log();
  console.log('3. Start creating Storybook stories in your apps and packages.');
  console.log();
  console.log(`4. Run ${itemName} from the root directory:`);
  console.log('     npm run dev');
  console.log();

  return Promise.resolve();
}
