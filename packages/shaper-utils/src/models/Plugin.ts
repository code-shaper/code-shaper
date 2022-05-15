import { Options } from './Options';

export interface Plugin {
  /**
   * Unique identifier of the plugin
   * By convention we use the package name
   * Example: "@code-shaper/react"
   */
  id: string;

  /**
   * Human-readable name
   * Example: "React"
   */
  name: string;

  /**
   * Short description
   * Keep it under 80 characters
   * Example: "generates React applications"
   */
  description: string;

  /**
   * Runs the plugin
   * @param options specific to the plugin - if a required option is not
   * specified, the plugin should prompt for it.
   */
  run: (options: Options) => Promise<void>;
}

export type PluginMap = { [id: string]: Plugin };

/**
 * returns plugin choices to drive inquirer list prompt
 *
 * @param pluginMap
 * @return Example:
 * [
 *   { name: 'React', value: '@code-shaper/react' }
 *   { name: 'Nextjs', value: '@code-shaper/nextjs' }
 * ]
 */
export function getPluginChoices(pluginMap: PluginMap) {
  const pluginIds = Object.keys(pluginMap);
  return pluginIds.map((pluginId) => {
    const plugin = pluginMap[pluginId];
    return {
      name: `${plugin.name} (${plugin.description})`,
      value: plugin.id,
    };
  });
}
