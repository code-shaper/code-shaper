import { parse, ParseError, printParseErrorCode } from 'jsonc-parser';
import { FileUtils } from './FileUtils';

type JsonParseOptions = {
  /**
   * Expect JSON with javascript-style comments
   * If comments are expected, then uses a parser that supports comments
   * @default true
   */
  expectComments: boolean;

  /**
   * Disallow javascript-style comments
   * If comments are disallowed, then uses a parser that does not support
   * comments and throws an error if comments are found
   * @default false
   */
  disallowComments: boolean;
};

/**
 * Reads a JSON file and returns an object representing the JSON content.
 *
 * @param path A path to a file
 * @param options JSON parse options
 * @returns Object representing the JSON content
 */
function readJsonFile(path: string, options: Partial<JsonParseOptions> = {}) {
  const content = FileUtils.readFile(path);
  try {
    return parseJson(content, options);
  } catch (e) {
    if (e instanceof Error) {
      e.message = e.message.replace('JSON', path);
    }
    throw e;
  }
}

/**
 * Parses a JSON string and returns an object representing the JSON content.
 *
 * @param input JSON content as string
 * @param options JSON parse options
 * @returns Object representing the JSON content
 */
function parseJson(input: string, options: Partial<JsonParseOptions> = {}) {
  const opts = Object.assign(
    {
      expectComments: true,
      disallowComments: false,
    },
    options
  );

  try {
    if (opts.expectComments !== true || opts.disallowComments === true) {
      return JSON.parse(input);
    }
  } catch (error) {
    if (opts.disallowComments === true) {
      throw error;
    }
  }

  const errors: ParseError[] = [];
  const result = parse(input, errors);

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
  parseJson,
};
