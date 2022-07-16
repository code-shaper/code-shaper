import inquirer from 'inquirer';
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
   * @param rootDir directory under which files will be generated. Generally
   * this will be set to process.cwd(), but for tests the output can be directed
   * to any desired location
   * @param options specific to the generator - if a required option is not
   * specified, the generator should prompt for it.
   */
  generate: (rootDir: string, options: Options) => Promise<void>;
}

export type GeneratorMap = { [id: string]: Generator };

/**
 * returns generator choices to drive inquirer list prompt
 *
 * @param generators
 * @return Example:
 * [
 *   { name: 'Application', value: 'app' }
 *   { name: 'Component', value: 'component' }
 * ]
 */
export function getGeneratorChoices(generators: GeneratorMap) {
  const genIds = Object.keys(generators);
  return genIds.map((genId) => {
    const generator = generators[genId];
    return {
      name: `${generator.id} (${generator.description})`,
      value: generator.id,
    };
  });
}

/**
 * Selects a generator from a list
 *
 * @param generators list of generators
 * @param inputOptions options supplied by the user
 * If "--generator" option exists it will be used without prompting
 */
export async function selectGenerator(
  generators: GeneratorMap,
  inputOptions: Options
) {
  const questions = [
    {
      type: 'list',
      name: 'generator',
      message: 'Which generator would you like to run?',
      choices: getGeneratorChoices(generators),
    },
  ];

  const options = await inquirer.prompt(questions, inputOptions);
  const generatorId = options.generator;

  const generator = generators[generatorId];
  if (!generator) {
    console.error(`Generator ${generatorId} not found`);
  }

  return generator;
}
