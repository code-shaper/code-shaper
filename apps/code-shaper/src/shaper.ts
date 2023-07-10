import {
  getPluginChoices,
  Options,
  Plugin,
  PluginUtils,
  PluginMap,
} from '@code-shaper/shaper-utils';
import { prompt } from 'inquirer';

// ---------- Plugin Map ----------
const pluginMap: PluginMap = {};

// ---------- Plugin Registration ----------
function registerPlugin(plugin: Plugin) {
  const { id } = plugin;
  pluginMap[id] = plugin;
}

// Register dynamic plugins
const dynamicPlugins = PluginUtils.getDynamicPlugins(process.cwd());
dynamicPlugins.forEach(registerPlugin);

// ---------- Run shaper ----------
async function run(
  pluginId: string | undefined,
  options: Options
): Promise<void> {
  let selectedPluginId: string;

  // Make sure that a plugin is selected
  if (pluginId) {
    selectedPluginId = pluginId;
  } else {
    const pluginChoices = getPluginChoices(pluginMap);

    const questions = [
      {
        type: 'list',
        name: 'pluginId',
        pageSize: 20,
        message: 'Which plugin would you like to run?',
        choices: pluginChoices,
      },
    ];

    const answers = await prompt(questions);
    selectedPluginId = answers.pluginId;
  }

  const selectedPlugin = pluginMap[selectedPluginId];
  if (!selectedPlugin) {
    console.error(`Plugin ${selectedPluginId} not found`);
    return Promise.resolve();
  }

  return selectedPlugin.run(options);
}

export const shaper = {
  run,
};
