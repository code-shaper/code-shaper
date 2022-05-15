import { Options } from './Options';

export interface Generator {
  /**
   * Identifier of the generator
   * Must be unique within a plugin
   * Example: "app"
   */
  id: string;

  /**
   * Human-readable name
   * Example: "Application"
   */
  name: string;

  /**
   * Short description
   * Keep it under 80 characters
   * Example: "generates a React application"
   */
  description: string;

  /**
   * Runs the generator
   * @param options specific to the generator - if a required option is not
   * specified, the generator should prompt for it.
   */
  generate: (options: Options) => Promise<void>;
}

export type GeneratorMap = { [id: string]: Generator };

/**
 * returns generator choices to drive inquirer list prompt
 *
 * @param generatorMap
 * @return Example:
 * [
 *   { name: 'Application', value: 'app' }
 *   { name: 'Component', value: 'component' }
 * ]
 */
export function getGeneratorChoices(generatorMap: GeneratorMap) {
  const genIds = Object.keys(generatorMap);
  return genIds.map((genId) => {
    const generator = generatorMap[genId];
    return {
      name: `${generator.name} (${generator.description})`,
      value: generator.id,
    };
  });
}
