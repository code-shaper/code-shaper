import { cc, FileUtils, Generator, Options } from '@code-shaper/shaper-utils';
import inquirer from 'inquirer';
import path from 'path';

export const generatorGenerator: Generator = {
  id: 'generator',
  name: 'Generator',
  description: 'generates a new generator inside a plugin',
  generate: generateGenerator,
};

async function generateGenerator(inputOptions: Options) {
  const questions = [
    {
      type: 'input',
      name: 'generatorName',
      message: 'Generator name? (e.g. "react-library")',
    },
    {
      type: 'list',
      name: 'workspace',
      message: 'Which plugin should this go under?',
      choices: () => {
        // TODO: Get workspace globs from package.json, don't hardcode here.
        const dirSpecs = FileUtils.resolvePaths(process.cwd(), [
          'apps/*',
          'configs/*',
          'packages/*',
          'plugins/*',
        ]);
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
  // Add more options for code generation
  // --------------------------------------------------------------------------
  // Example: reactLibrary
  const generatorCamelCaseName = cc.camelCase(generatorName);
  options['generatorCamelCaseName'] = generatorCamelCaseName;

  // Example: ReactLibrary
  const generatorPascalCaseName = cc.pascalCase(generatorName);
  options['generatorPascalCaseName'] = generatorPascalCaseName;

  // Example: ReactLibrary
  const generatorCapitalCaseName = cc.capitalCase(generatorName);
  options['generatorCapitalCaseName'] = generatorCapitalCaseName;

  // Example: reactLibraryGenerator
  const generatorModuleName = `${generatorCamelCaseName}Generator`;
  options['generatorModuleName'] = generatorModuleName;

  // Example: generateReactLibrary
  const generatorFunctionName = `generate${generatorPascalCaseName}`;
  options['generatorFunctionName'] = generatorFunctionName;

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
    `4. Finally implement ${generatorModuleName} to generate real code.`
  );
  console.log();
  console.log('options available for this generator:');
  console.log(JSON.stringify(options, null, '  '));
  console.log();

  return Promise.resolve();
}
