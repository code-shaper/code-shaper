import { cc, FileUtils, Generator, Options } from '@code-shaper/shaper-utils';
import { prompt, registerPrompt } from 'inquirer';
// @ts-ignore
import inquirerDirectory from 'inquirer-directory';
import path from 'path';

// Register inquirer prompts
registerPrompt('directory', inquirerDirectory);

export const appGenerator: Generator = {
  id: 'app',
  name: 'Application',
  description: 'generates a Remix application',
  generate: generateApp,
};

async function generateApp(rootDir: string, inputOptions: Options) {
  const questions = [
    {
      type: 'input',
      name: 'itemName',
      message: 'Application name? (e.g. "movie-magic")',
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
        'Package name used for publishing? (e.g. "movie-magic" or "@movie-magic/movie-magic")',
    },
    {
      type: 'confirm',
      name: 'useTailwindcss',
      message: 'Would you like to use Tailwind CSS?',
      default: true,
    },
  ];

  const options = await prompt(questions, inputOptions);
  const { itemName, parentDir } = options;

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

  const { itemNameKebabCase, useTailwindcss } = options;

  const srcDir = path.join(__dirname, 'templates');
  const srcTailwindcssDir = path.join(__dirname, 'templates-tailwindcss');
  const dstDir = path.join(parentDir, itemNameKebabCase);

  console.log();
  console.log(`Creating ${itemName}...`);

  FileUtils.transformFiles(srcDir, dstDir, options);
  if (useTailwindcss) {
    FileUtils.transformFiles(srcTailwindcssDir, dstDir, options);
  }

  console.log();
  console.log('Done.');
  console.log();
  console.log('What to do next?');
  console.log('----------------');
  console.log();
  console.log('# Install newly added dependencies');
  console.log('npm install');
  console.log();
  console.log('# Build and run the app to make sure it works');
  console.log('npm run build');
  console.log('npm run dev');
  console.log();
  console.log(
    '# Point your browser to http://localhost:3000/ to make sure the app runs.'
  );
  console.log();
  console.log('# Commit');
  console.log('git add .');
  console.log(`git commit -m "chore: add ${itemName} app"`);
  console.log();

  return Promise.resolve();
}
