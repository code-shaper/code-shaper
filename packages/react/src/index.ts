import { cc, FileUtils } from '@code-shaper/shaper-utils';
import inquirer from 'inquirer';
import path from 'path';


export default async function(args: Array<string | number>) {
  // add question here if no CLI arg has been defined
  const questions = [
    {
      type: 'list',
      name: 'type',
      message: 'Which type of module would you like to run?',
      choices: [
        'component',
        'application'
      ]
    }
  ];

  const {type} = await inquirer.prompt<{type: string;}>(questions, {type: args[0] as string});

  // Execute generator
  switch (type) {
    case 'component':
      await generateComponent(args);
      break;
    case 'application':
      await generateApplication(args);
      break;
    default:
      console.error(`Unknown module type ${type}`);
      break;
  }
}

const generateComponent = async function(inputContext: Array<string | number>) {
  const questions = [
    {
      type: 'input',
      name: 'componentName',
      message: 'Component name? (e.g. "Header")',
    },
    {
      type: 'directory',
      name: 'parentDir',
      message: 'Parent directory?',
      basePath: '.',
    }
  ];

  const context = await inquirer.prompt(questions, inputContext);
  const { componentName, parentDir } = context;

  const srcDir = path.join(__dirname, 'templates/component');
  const dstDir = path.join(parentDir, componentName);
  
  FileUtils.transformFiles(srcDir, dstDir, context);

  return Promise.resolve();
}

const generateApplication = async function(inputContext: Array<string | number>) {
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

  const appDir = cc.kebabCase(appName);
  context['appDir'] = appDir;

  const srcDir = path.join(__dirname, 'templates/application');
  const dstDir = path.join(parentDir, appDir);
  
  FileUtils.transformFiles(srcDir, dstDir, context);

  return Promise.resolve();
}