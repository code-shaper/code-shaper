import { registerPrompt } from 'inquirer';
// @ts-ignore
import inquirerDirectory from 'inquirer-directory';
import yargs from 'yargs/yargs';
import { shaper } from './shaper';

// Register inquirer prompts
registerPrompt('directory', inquirerDirectory);

async function main() {
  // Parse command line
  const argv = await yargs().parse(process.argv.slice(2));
  const { _, $0: command, ...options } = argv; // eslint-disable-line

  // Set pluginId if specified on the command line
  // Otherwise, leave it as undefined
  let pluginId;
  if (_.length > 0 && typeof _[0] === 'string') {
    pluginId = _[0];
  }

  // Run shaper
  await shaper.run(pluginId, options);
}

main().catch((err) => console.error('Error:', err));
