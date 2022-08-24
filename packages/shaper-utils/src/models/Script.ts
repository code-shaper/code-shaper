import { Options } from './Options';

export interface Script {
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
  run: (rootDir: string, options: Options) => Promise<void>;
}

export type ScriptMap = { [id: string]: Script };
