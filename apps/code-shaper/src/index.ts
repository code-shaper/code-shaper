// @ts-ignore
import inquirer from 'inquirer';
import yargs from 'yargs/yargs';
import {getPlugin, Plugin, getAvailablePlugins} from '@code-shaper/shaper-utils';

async function main() {
  const argv = await yargs().parse(process.argv.slice(2));

  const nameArg = argv._[0] as string;
  const dir: string = argv["pluginDir"] as string || 'node_modules';

  // get available plugins
  const availablePlugins = getAvailablePlugins(dir);

  if (availablePlugins.length > 0) {

    const questions = [
      {
        type: 'list',
        name: 'pluginName',
        message: 'Which plugin would you like to run?',
        choices: availablePlugins,
      }
    ];
    
    const {pluginName} = await inquirer.prompt(questions, {pluginName: nameArg ? nameArg : undefined});

    let plugin: Plugin;
    try {
      plugin = getPlugin(pluginName, dir);
    } catch (err) {
      console.log(`could not find a plugin named ${pluginName} in the ${dir} directory.`);
      process.exit();
    }

    // call the plugin with the rest of the args
    plugin(argv._.slice(1));
  } else {
    console.log(`There are no plugins in the ${dir} directory.`);
  }
}

main().catch((err) => console.error(err));
