import { cc, FileUtils, Generator, Options } from '@code-shaper/shaper-utils';
import { prompt, registerPrompt } from 'inquirer';
// @ts-ignore
import inquirerDirectory from 'inquirer-directory';
import path from 'path';

// Register inquirer prompts
registerPrompt('directory', inquirerDirectory);

export const apolloServerGenerator: Generator = {
  id: 'apollo-server',
  name: 'Apollo Server',
  description: 'generates an Apollo Server',
  generate: generateApolloServer,
};

async function generateApolloServer(rootDir: string, inputOptions: Options) {
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
      message: 'Parent directory? (usually "<directory name>")',
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
  console.log(`git commit -m "chore: add ${itemName}"`);
  console.log();
  console.log(`# Run ${itemName} from the root directory:`);
  console.log('npm run dev');
  console.log();
  console.log(
    '# Point your browser to http://localhost:4000 to see the Apollo Sandbox.'
  );
  console.log();

  return Promise.resolve();
}
