import fs from 'fs-extra';
import { parse, ParseError, printParseErrorCode } from 'jsonc-parser';

interface JsonParseOptions {
  /**
   * Expect JSON with javascript-style
   * @default false
   */
  expectComments?: boolean;
  /**
   * Disallow javascript-style
   * @default false
   */
  disallowComments?: boolean;
}

interface JsonReadOptions extends JsonParseOptions {
  /**
   * mutable field recording whether JSON ends with new line
   * @default false
   */
  endsWithNewline?: boolean;
}

/**
 * Reads a JSON file and returns the object the JSON content represents.
 *
 * @param path A path to a file.
 * @param options JSON parse options
 * @returns Object the JSON content of the file represents
 */
function readJsonFile<T extends object = any>(
  path: string,
  options?: JsonReadOptions
): T {
  const content = fs.readFileSync(path, 'utf-8');
  if (options) {
    options.endsWithNewline = content.charCodeAt(content.length - 1) === 10;
  }
  try {
    return parseJson<T>(content, options);
  } catch (e: any) {
    e.message = e.message.replace('JSON', path);
    throw e;
  }
}

/**
 * Parses the given JSON string and returns the object the JSON content represents.
 * By default javascript-style comments are allowed.
 *
 * @param input JSON content as string
 * @param options JSON parse options
 * @returns Object the JSON content represents
 */
function parseJson<T extends object = any>(
  input: string,
  options?: JsonParseOptions
): T {
  try {
    if (
      options?.disallowComments === true ||
      options?.expectComments !== true
    ) {
      return JSON.parse(input);
    }
  } catch (error) {
    if (options?.disallowComments === true) {
      throw error;
    }
  }

  const errors: ParseError[] = [];
  const result: T = parse(input, errors);

  if (errors.length > 0) {
    const { error, offset } = errors[0];
    throw new Error(
      `${printParseErrorCode(error)} in JSON at position ${offset}`
    );
  }

  return result;
}

export const JsonUtils = {
  readJsonFile,
};
