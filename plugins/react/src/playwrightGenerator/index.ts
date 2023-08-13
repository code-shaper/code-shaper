import { cc, FileUtils, Generator, Options } from '@code-shaper/shaper-utils';
import { prompt, registerPrompt } from 'inquirer';
// @ts-ignore
import inquirerDirectory from 'inquirer-directory';
import path from 'path';

// Register inquirer prompts
registerPrompt('directory', inquirerDirectory);

export const playwrightGenerator: Generator = {
  id: 'playwright',
  name: 'Playwright',
  description: 'adds end-to-end test support to your repository',
  generate: generatePlaywright,
};

async function generatePlaywright(rootDir: string, inputOptions: Options) {
  const questions = [
    {
      type: 'input',
      name: 'repoName',
      message: 'Repository name? (e.g. "movie-magic")',
    },
    {
      type: 'directory',
      name: 'parentDir',
      pageSize: 20,
      message: 'Parent directory? (usually "apps")',
      basePath: rootDir,
    },
  ];

  const options = await prompt(questions, inputOptions);
  const { repoName, parentDir } = options;

  // Create itemName & packageName
  const itemName = `${repoName}-e2e`;
  const packageName = `@${repoName}/${itemName}`;
  options['itemName'] = itemName;
  options['packageName'] = packageName;

  // --------------------------------------------------------------------------
  // Add more options for code generation here
  // --------------------------------------------------------------------------
  // Example: itemName = movie-magic-e2e

  // itemNameKebabCase = movie-magic-e2e
  options['itemNameKebabCase'] = cc.kebabCase(itemName);

  // itemNameCamelCase = movieMagicE2e
  options['itemNameCamelCase'] = cc.camelCase(itemName);

  // itemNamePascalCase = MovieMagicE2e
  options['itemNamePascalCase'] = cc.pascalCase(itemName);

  // itemNameCapitalCase = Movie Magic E2e
  options['itemNameCapitalCase'] = cc.capitalCase(itemName);

  // repoNameCapitalCase = Movie Magic
  options['repoNameCapitalCase'] = cc.capitalCase(repoName);
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
  console.log(`git commit -m "chore: add playwright e2e tests"`);
  console.log();
  console.log(`# Start adding e2e tests in the ${itemNameKebabCase} folder.`);
  console.log();
  console.log(`# Run e2e from the root directory:`);
  console.log('npm run e2e');
  console.log();

  return Promise.resolve();
}
