import { FileUtils, Generator, Options } from '@code-shaper/shaper-utils';
import inquirer from 'inquirer';
import path from 'path';

export const componentGenerator: Generator = {
  id: 'component',
  name: 'Component',
  description: 'generates a React component',
  generate: generateComponent,
};

async function generateComponent(inputOptions: Options) {
  const questions = [
    {
      type: 'input',
      name: 'componentName',
      message: 'Component name? (e.g. TextField)',
    },
    {
      type: 'list',
      name: 'workspace',
      message: 'Which workspace should this go to?',
      choices: () => {
        // TODO: Get workspace globs from package.json, don't hardcode here.
        const dirSpecs = FileUtils.resolvePaths(process.cwd(), [
          'apps/*',
          'packages/*',
        ]);
        return dirSpecs.map((dirSpec) => ({
          name: dirSpec.name,
          value: dirSpec.path,
        }));
      },
    },
  ];

  const options = await inquirer.prompt(questions, inputOptions);
  const { componentName, workspace } = options;

  const srcDir = path.join(__dirname, 'templates');
  const dstDir = path.join(workspace, `src/components/${componentName}`);

  console.log();
  console.log(`Creating ${componentName}...`);

  FileUtils.transformFiles(srcDir, dstDir, options);

  console.log('Done.');
  console.log();
  console.log('1. Import the component in src/components/index.ts.');
  console.log();
  console.log('2. Use the component somewhere in your app');
  console.log();
  console.log('3. Run your app to see your component in action:');
  console.log('     npm run dev');
  console.log();
  console.log(
    '4. Run units tests to see the placeholder test that was added for your component:'
  );
  console.log('     npm run test');
  console.log();
  console.log('5. A Storybook story was also added. Check it out:');
  console.log('   TODO: Add instructions for Storybook setup.');
  console.log('     npm run storybook');
  console.log();

  return Promise.resolve();
}
