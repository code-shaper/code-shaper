import { cc, FileUtils } from '@code-shaper/shaper-utils';
import inquirer from 'inquirer';
import path from 'path';
import { Arguments } from 'yargs-parser';

export async function generateShaperGenerator(inputContext: Arguments) {
  const questions = [
    {
      type: 'input',
      name: 'generatorName',
      message: 'Generator name? (e.g. "react")',
    },
    {
      type: 'directory',
      name: 'parentDir',
      message: 'Parent directory? (usually "packages")',
      basePath: '.',
    },
    {
      type: 'input',
      name: 'packageName',
      message:
        'Package name used for publishing? (e.g. "my-react-generator" or "@my-org/react-generator")',
    },
  ];

  const context = await inquirer.prompt(questions, inputContext);

  const { generatorName, parentDir, packageName } = context;

  // --------------------------------------------------------------------------
  // Add more context for code generation
  // --------------------------------------------------------------------------
  // Example: react-generator
  const generatorDir = `${generatorName}-generator`;
  context['generatorDir'] = generatorDir;

  // Example: generateReact
  const generatorFunction = `generate${cc.pascalCase(generatorName)}`;
  context['generatorFunction'] = generatorFunction;

  // --------------------------------------------------------------------------

  const srcDir = path.join(__dirname, 'templates');
  const dstDir = path.join(parentDir, generatorDir);
  const dstRelativeDir = path.relative(process.cwd(), dstDir);

  console.log();
  console.log(`Creating ${dstRelativeDir}...`);

  FileUtils.transformFiles(srcDir, dstDir, context);

  console.log('Done.');
  console.log();
  console.log('1. Add the following dependency in apps/myshaper/package.json:');
  console.log(`     "${packageName}": "*"`);
  console.log();
  console.log(`2. Import ${generatorFunction} in apps/myshaper/src/index.ts:`);
  console.log(`     import { ${generatorFunction} } from '${packageName}';`);
  console.log();
  console.log(
    `3. If you see a placeholder generator named ${generatorFunction} in the same file,`
  );
  console.log(`   just delete it. It is replaced by the above import.`);
  console.log();
  console.log(
    '   Otherwise, add the following switch case in the main() function:'
  );
  console.log(`     case '${generatorName}':`);
  console.log(`       await ${generatorFunction}(context);`);
  console.log(`       break;`);
  console.log();
  console.log('4. In the root directory, run:');
  console.log(`     npm run clean`);
  console.log(`     npm install`);
  console.log(`     npm run build`);
  console.log();
  console.log('5. Run the new generator from the root directory:');
  console.log(`     myshaper`);
  console.log();
}
