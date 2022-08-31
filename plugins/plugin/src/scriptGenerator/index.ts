import {
  cc,
  FileUtils,
  Generator,
  Options,
  PackageJsonUtils,
} from '@code-shaper/shaper-utils';
import inquirer from 'inquirer';
import path from 'path';

export const scriptGenerator: Generator = {
  id: 'script',
  name: 'Script',
  description: 'generates a new script inside a plugin',
  generate: generateScript,
};

async function generateScript(rootDir: string, inputOptions: Options) {
  // Get workspaces
  const workspaces = PackageJsonUtils.getWorkspacesFromPackageJson(rootDir);

  // Get input from user
  const questions = [
    {
      type: 'input',
      name: 'scriptName',
      message: 'Script name? (e.g. "build" or "react-test")',
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
  const { scriptName, workspace } = options;

  // --------------------------------------------------------------------------
  // Add more options for code generation here
  // --------------------------------------------------------------------------
  // Example: scriptName = component-library

  // scriptNameCamelCase = componentLibrary
  const scriptNameCamelCase = cc.camelCase(scriptName);
  options['scriptNameCamelCase'] = scriptNameCamelCase;

  // generatorNamePascalCase = ComponentLibrary
  const scriptNamePascalCase = cc.pascalCase(scriptName);
  options['scriptNamePascalCase'] = scriptNamePascalCase;

  // generatorNameCapitalCase = Component Library
  options['scriptNameCapitalCase'] = cc.capitalCase(scriptName);

  // generatorModuleName = componentLibraryGenerator
  const generatorModuleName = `${scriptNameCamelCase}Script`;
  options['generatorModuleName'] = generatorModuleName;

  // generatorFunctionName = generateComponentLibrary
  options['generatorFunctionName'] = `generate${scriptNamePascalCase}`;
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
  console.log(`2. Register the script in the same file,`);
  console.log(`     registerScript(${generatorModuleName});`);
  console.log();
  console.log('3. In the root directory, run:');
  console.log('     npm run build');
  console.log();
  console.log(
    '4. Run shaper in the root directory and confirm that your script shows up:'
  );
  console.log('     shaper');
  console.log();
  console.log(`5. Finally implement ${generatorModuleName}.`);
  console.log();
  console.log('options available for this generator:');
  console.log(JSON.stringify(options, null, '  '));
  console.log();

  return Promise.resolve();
}
