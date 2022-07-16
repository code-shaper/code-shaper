import { cc, FileUtils, Generator, Options } from '@code-shaper/shaper-utils';
import inquirer from 'inquirer';
// @ts-ignore
import inquirerDirectory from 'inquirer-directory';
import path from 'path';

// Register inquirer prompts
inquirer.registerPrompt('directory', inquirerDirectory);

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

  const options = await inquirer.prompt(questions, inputOptions);
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

  const srcDir = path.join(__dirname, 'templates/main');
  const dstDir = path.join(parentDir, itemNameKebabCase);

  console.log();
  console.log(`Creating ${itemName}...`);

  FileUtils.transformFiles(srcDir, dstDir, options);

  // Copy TypeScript configuration
  const srcDirConfig = path.join(
    __dirname,
    'templates/typescript-config-custom'
  );
  const dstDirConfig = path.join(
    process.cwd(),
    'configs',
    'typescript-config-custom'
  );
  FileUtils.transformFiles(srcDirConfig, dstDirConfig, options);

  console.log();
  console.log('Done.');
  console.log();
  console.log(
    '1. Edit /configs/typescript-config-custom/package.json to add a new typescript configuration'
  );
  console.log(
    '   (typescript-library.json) if it is not already there. See below:'
  );
  console.log();
  console.log('     "files": [');
  console.log('       "base.json",');
  console.log('       "typescript-library.json"');
  console.log('     ],');
  console.log();
  console.log('2. In the root directory, run:');
  console.log('     npm install');
  console.log('     npm run build');
  console.log();
  console.log(`3. Run ${itemName} from the root directory:`);
  console.log('     npm run dev');
  console.log();
  console.log(
    '4. Point your browser to http://localhost:8080/top-10-movies to call the sample API.'
  );
  console.log();

  return Promise.resolve();
}
