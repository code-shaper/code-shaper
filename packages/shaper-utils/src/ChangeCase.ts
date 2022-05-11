/**
 * Case changing utilities reexported from change-case
 */
import {
  camelCase,
  capitalCase,
  constantCase,
  dotCase,
  headerCase,
  noCase,
  paramCase,
  pascalCase,
  pathCase,
  sentenceCase,
  snakeCase,
} from 'change-case';
import { lowerCase } from 'lower-case';
import { titleCase } from 'title-case';
import { upperCase } from 'upper-case';

export const cc = {
  camelCase,
  capitalCase,
  constantCase,
  dotCase,
  headerCase,
  kebabCase: paramCase,
  lowerCase,
  noCase,
  paramCase,
  pascalCase,
  pathCase,
  sentenceCase,
  snakeCase,
  titleCase,
  upperCase,
};
