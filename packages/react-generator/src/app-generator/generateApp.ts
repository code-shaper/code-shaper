import { cc, FileUtils } from '@code-shaper/shaper-utils';
import inquirer from 'inquirer';
import path from 'path';
import { Arguments } from 'yargs-parser';

export async function generateApp(inputContext: Arguments) {
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

  const context = await inquirer.prompt(questions, inputContext);

  const { appName, parentDir } = context;

  // --------------------------------------------------------------------------
  // Add more context for code generation
  // --------------------------------------------------------------------------
  // Example: movie-magic
  const appDir = cc.kebabCase(appName);
  context['appDir'] = appDir;

  // --------------------------------------------------------------------------

  const srcDir = path.join(__dirname, 'templates');
  const dstDir = path.join(parentDir, appDir);

  console.log();
  console.log(`Creating ${appName}...`);

  // console.log();
  // console.log('context:');
  // console.log(JSON.stringify(context, null, '  '));
  // console.log();

  FileUtils.transformFiles(srcDir, dstDir, context);

  console.log('Done.');
  console.log();
  console.log('1. In the root directory, run:');
  console.log(`     npm run clean`);
  console.log(`     npm install`);
  console.log(`     npm run build`);
  console.log();
  console.log(`2. Run ${appName} from the root directory:`);
  console.log(`     npm run dev`);
  console.log();
}
