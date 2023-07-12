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
  description: 'generates an Express application',
  generate: generateApp,
};

async function generateApp(rootDir: string, inputOptions: Options) {
  const questions = [
    {
      type: 'input',
      name: 'itemName',
      message: 'Application name? (e.g. "movie-magic-api")',
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
        'Package name used for publishing? (e.g. "movie-magic-api" or "@movie-magic/movie-magic-api")',
    },
  ];

  const options = await prompt(questions, inputOptions);
  const { itemName, parentDir } = options;

  // --------------------------------------------------------------------------
  // Add more options for code generation here
  // --------------------------------------------------------------------------
  // Example: itemName = movie-magic-api

  // itemNameKebabCase = movie-magic-api
  options['itemNameKebabCase'] = cc.kebabCase(itemName);

  // itemNameCamelCase = movieMagicApi
  options['itemNameCamelCase'] = cc.camelCase(itemName);

  // itemNamePascalCase = MovieMagicApi
  options['itemNamePascalCase'] = cc.pascalCase(itemName);

  // itemNameCapitalCase = Movie Magic API
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
  console.log('What to do next?');
  console.log('----------------');
  console.log();
  console.log('# Install newly added dependencies');
  console.log('npm install');
  console.log();
  console.log('# Make a commit');
  console.log('git add .');
  console.log(`git commit -m "chore: add ${itemName} app"`);
  console.log();
  console.log(`# Run ${itemName} from the root directory:`);
  console.log('npm run dev');
  console.log();
  console.log(
    '# Point your browser to http://localhost:8080/top-10-movies to call the sample API.'
  );
  console.log();

  return Promise.resolve();
}
