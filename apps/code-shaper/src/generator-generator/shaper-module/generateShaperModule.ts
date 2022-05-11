import { cc, FileUtils } from '@code-shaper/shaper-utils';
import inquirer from 'inquirer';
import path from 'path';
import { Arguments } from 'yargs-parser';

export async function generateShaperModule(inputContext: Arguments) {
  const questions = [
    {
      type: 'input',
      name: 'moduleName',
      message: 'Module name? (e.g. app)',
    },
    {
      type: 'list',
      name: 'workspace',
      message: 'Which generator should this go to?',
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

  const context = await inquirer.prompt(questions, inputContext);
  const { moduleName, workspace } = context;

  // --------------------------------------------------------------------------
  // Add more context for code generation
  // --------------------------------------------------------------------------
  // Example: component-generator
  const moduleGeneratorDir = `${moduleName}-generator`;
  context['moduleGeneratorDir'] = moduleGeneratorDir;

  // Example: generateComponent
  const moduleGeneratorFunction = `generate${cc.pascalCase(moduleName)}`;
  context['moduleGeneratorFunction'] = moduleGeneratorFunction;

  // --------------------------------------------------------------------------

  const srcDir = path.join(__dirname, 'templates');
  const dstDir = path.join(workspace, `src/${moduleGeneratorDir}`);

  console.log();
  console.log(`Creating ${moduleName}...`);

  FileUtils.transformFiles(srcDir, dstDir, context);

  console.log();
  console.log('Done');
  console.log();
  console.log(
    `1. Add the following module generator import to your main generator's src/index.ts:`
  );
  console.log(
    `     import { ${moduleGeneratorFunction} } from './${moduleGeneratorDir}/${moduleGeneratorFunction}';`
  );
  console.log();
  console.log(
    `2. Add the following switch case in the generateXyz() function of the same file:`
  );
  console.log(`     case '${moduleName}':`);
  console.log(`       await ${moduleGeneratorFunction}(context);`);
  console.log(`       break;`);
  console.log();
  console.log('3. In the root directory, run:');
  console.log(`     npm run build`);
  console.log();
  console.log(
    '4. Run the placeholder module generator from the root directory:'
  );
  console.log(`     npm run shaper`);
  console.log();
  console.log(
    `5. Finally implement your ${moduleName} module generator to generate real code.`
  );
  console.log();
}
