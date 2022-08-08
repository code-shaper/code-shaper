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
  run: (
    options: Options,
    runType: number,
    runName: string | undefined
  ) => Promise<void>;
}

export type PluginMap = { [id: string]: Plugin };

/**
 * returns plugin choices to drive inquirer list prompt
 *
 * @param plugins
 * @return Example:
 * [
 *   { name: 'React', value: '@code-shaper/react' }
 *   { name: 'Nextjs', value: '@code-shaper/nextjs' }
 * ]
 */
export function getPluginChoices(plugins: PluginMap) {
  const pluginIds = Object.keys(plugins);
  return pluginIds.map((pluginId) => {
    const plugin = plugins[pluginId];
    return {
      name: `${plugin.name} (${plugin.id} - ${plugin.description})`,
      value: plugin.id,
    };
  });
}
