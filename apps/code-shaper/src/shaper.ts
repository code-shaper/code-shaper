import repoPlugin from '@code-shaper/repo';
import {
  getPluginChoices,
  Options,
  Plugin,
  PluginUtils,
  PluginMap,
  RunType,
} from '@code-shaper/shaper-utils';
import inquirer from 'inquirer';
//import { option } from 'yargs';

// ---------- Plugin Store ----------
// Static plugins are built into Code Shaper
const staticPlugins: PluginMap = {};

// Dynamic plugins are loaded at runtime
const dynamicPlugins: PluginMap = {};

// ---------- Plugin Registration ----------
function registerStaticPlugin(plugin: Plugin) {
  const { id } = plugin;
  staticPlugins[id] = plugin;
}

function registerDynamicPlugin(plugin: Plugin) {
  const { id } = plugin;
  dynamicPlugins[id] = plugin;
}

// Register static plugins
registerStaticPlugin(repoPlugin);

// Register dynamic plugins
const plugins = PluginUtils.getDynamicPlugins(process.cwd());
plugins.forEach(registerDynamicPlugin);

// ---------- Run shaper ----------
async function run(
  pluginId: string | undefined,
  runCmd: string[] | undefined,
  options: Options
): Promise<void> {
  let selectedPluginId: string;

  // Make sure that a plugin is selected
  if (pluginId) {
    selectedPluginId = pluginId;
  } else {
    const coreChoices = getPluginChoices(staticPlugins);
    const otherChoices = getPluginChoices(dynamicPlugins);
    const allChoices = coreChoices.concat(otherChoices);

    const questions = [
      {
        type: 'list',
        name: 'pluginId',
        pageSize: 20,
        message: 'Which plugin would you like to run?',
        choices: allChoices,
      },
    ];

    const answers = await inquirer.prompt(questions);
    selectedPluginId = answers.pluginId;
  }

  const plugin =
    staticPlugins[selectedPluginId] || dynamicPlugins[selectedPluginId];
  if (!plugin) {
    console.error(`Plugin ${selectedPluginId} not found`);
    return Promise.resolve();
  }

  let runType, runName;
  if (runCmd?.length == 2) {
    runType = runCmd[0];
    runName = runCmd[1];
  } else if (runCmd?.length == 1) {
    runType = 'g';
    runName = runCmd[0];
  }

  let runType_;
  if (runType === 'generate' || runType === 'g') {
    runType_ = RunType.Generator;
    options = { ['generator']: runName, ...options };
  } else if (runType === 'run' || runType === 'r') {
    runType_ = RunType.Script;
  } else {
    console.error(`Unrecognized paramter: ${runType}`);
    return Promise.resolve();
  }

  return plugin.run(options, runType_, runName);
}

export const shaper = {
  run,
};
