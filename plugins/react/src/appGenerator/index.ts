import { cc, FileUtils, Generator, Options } from '@code-shaper/shaper-utils';
import inquirer from 'inquirer';
import path from 'path';

export const appGenerator: Generator = {
  id: 'app',
  name: 'Application',
  description: 'generates a React application',
  generate: generateApp,
};

async function generateApp(inputOptions: Options) {
  const questions = [
    {
      type: 'input',
      name: 'appName',
      message: 'Application name? (e.g. "Movie Magic")',
    },
    {
      type: 'directory',
      name: 'parentDir',
      message: 'Parent directory? (usually "apps")',
      basePath: '.',
    },
    {
      type: 'input',
      name: 'packageName',
      message:
        'Package name used for publishing? (e.g. "my-app" or "@my-org/my-app")',
    },
  ];

  const options = await inquirer.prompt(questions, inputOptions);
  const { appName, parentDir } = options;

  // --------------------------------------------------------------------------
  // Add more options for code generation
  // --------------------------------------------------------------------------
  // Example: movie-magic
  const appDir = cc.kebabCase(appName);
  options['appDir'] = appDir;

  // --------------------------------------------------------------------------

  const srcDir = path.join(__dirname, 'templates');
  const dstDir = path.join(parentDir, appDir);

  console.log();
  console.log(`Creating ${appName}...`);

  // console.log();
  // console.log('options:');
  // console.log(JSON.stringify(options, null, '  '));
  // console.log();

  FileUtils.transformFiles(srcDir, dstDir, options);

  console.log('Done.');
  console.log();
  console.log(
    '1. In the root directory, edit package.json to force the latest version of React.'
  );
  console.log(
    '   This is done by adding the following overrides section after the devDependencies section:'
  );
  console.log('     "overrides": {');
  console.log('       "react": "^18.1.0",');
  console.log('       "react-dom": "^18.1.0"');
  console.log('     },');
  console.log();
  console.log('2. In the root directory, run:');
  console.log('     npm run clean');
  console.log('     npm install');
  console.log('     npm run build');
  console.log();
  console.log(`2. Run ${appName} from the root directory:`);
  console.log('     npm run dev');
  console.log();

  return Promise.resolve();
}
