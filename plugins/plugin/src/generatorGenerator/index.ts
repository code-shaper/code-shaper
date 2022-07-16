import {
  cc,
  FileUtils,
  Generator,
  Options,
  PackageJsonUtils,
} from '@code-shaper/shaper-utils';
import inquirer from 'inquirer';
import path from 'path';

export const generatorGenerator: Generator = {
  id: 'generator',
  name: 'Generator',
  description: 'generates a new generator inside a plugin',
  generate: generateGenerator,
};

async function generateGenerator(rootDir: string, inputOptions: Options) {
  // Get workspaces
  const workspaces = PackageJsonUtils.getWorkspacesFromPackageJson(rootDir);

  // Get input from user
  const questions = [
    {
      type: 'input',
      name: 'generatorName',
      message: 'Generator name? (e.g. "app" or "component-library")',
    },
    {
      type: 'list',
      name: 'workspace',
      pageSize: 20,
      loop: false,
      message: 'Which plugin should this go under?',
      choices: () => {
        const dirSpecs = FileUtils.resolvePaths(rootDir, workspaces);
        return dirSpecs.map((dirSpec) => ({
          name: dirSpec.name,
          value: dirSpec.path,
        }));
      },
    },
  ];

  const options = await inquirer.prompt(questions, inputOptions);
  const { generatorName, workspace } = options;

  // --------------------------------------------------------------------------
  // Add more options for code generation here
  // --------------------------------------------------------------------------
  // Example: generatorName = component-library

  // generatorNameCamelCase = componentLibrary
  const generatorNameCamelCase = cc.camelCase(generatorName);
  options['generatorNameCamelCase'] = generatorNameCamelCase;

  // generatorNamePascalCase = ComponentLibrary
  const generatorNamePascalCase = cc.pascalCase(generatorName);
  options['generatorNamePascalCase'] = generatorNamePascalCase;

  // generatorNameCapitalCase = Component Library
  options['generatorNameCapitalCase'] = cc.capitalCase(generatorName);

  // generatorModuleName = componentLibraryGenerator
  const generatorModuleName = `${generatorNameCamelCase}Generator`;
  options['generatorModuleName'] = generatorModuleName;

  // generatorFunctionName = generateComponentLibrary
  options['generatorFunctionName'] = `generate${generatorNamePascalCase}`;
  // --------------------------------------------------------------------------

  const srcDir = path.join(__dirname, 'templates');
  const dstDir = path.join(workspace, `src/${generatorModuleName}`);

  console.log();
  console.log(`Creating ${generatorModuleName}...`);

  FileUtils.transformFiles(srcDir, dstDir, options);

  console.log();
  console.log('Done');
  console.log();
  console.log(`1. Add the following import to your plugin's src/index.ts:`);
  console.log(
    `     import { ${generatorModuleName} } from './${generatorModuleName}';`
  );
  console.log();
  console.log(`2. Register the generator in the same file,`);
  console.log(`     registerGenerator(${generatorModuleName});`);
  console.log();
  console.log('3. In the root directory, run:');
  console.log('     npm run build');
  console.log();
  console.log(
    '4. Run shaper in the root directory and confirm that your generator shows up:'
  );
  console.log('     shaper');
  console.log();
  console.log(
    `5. Finally implement ${generatorModuleName} to generate real code.`
  );
  console.log();
  console.log('options available for this generator:');
  console.log(JSON.stringify(options, null, '  '));
  console.log();

  return Promise.resolve();
}
