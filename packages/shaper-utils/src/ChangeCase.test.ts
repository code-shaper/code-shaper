import { cc } from './ChangeCase';

describe('ChangeCase', () => {
  test('camelCase transforms correctly', () => {
    expect(cc.camelCase('test string')).toBe('testString');
    expect(cc.camelCase('test-string')).toBe('testString');
  });

  test('capitalCase transforms correctly', () => {
    expect(cc.capitalCase('a simple test')).toBe('A Simple Test');
    expect(cc.capitalCase('test string')).toBe('Test String');
    expect(cc.capitalCase('test-string')).toBe('Test String');
  });

  test('constantCase transforms correctly', () => {
    expect(cc.constantCase('test string')).toBe('TEST_STRING');
    expect(cc.constantCase('test-string')).toBe('TEST_STRING');
  });

  test('dotCase transforms correctly', () => {
    expect(cc.dotCase('test string')).toBe('test.string');
    expect(cc.dotCase('Test String')).toBe('test.string');
    expect(cc.dotCase('test-string')).toBe('test.string');
  });

  test('headerCase transforms correctly', () => {
    expect(cc.headerCase('test string')).toBe('Test-String');
    expect(cc.headerCase('test-string')).toBe('Test-String');
  });

  test('kebabCase transforms correctly', () => {
    expect(cc.kebabCase('test string')).toBe('test-string');
    expect(cc.kebabCase('TestString')).toBe('test-string');
  });

  test('lowerCase transforms correctly', () => {
    expect(cc.lowerCase('Test String')).toBe('test string');
    expect(cc.lowerCase('TestString')).toBe('teststring');
  });

  test('noCase transforms correctly', () => {
    expect(cc.noCase('testString')).toBe('test string');
    expect(cc.noCase('test-string')).toBe('test string');
  });

  test('paramCase transforms correctly', () => {
    expect(cc.kebabCase('test string')).toBe('test-string');
    expect(cc.kebabCase('TestString')).toBe('test-string');
  });

  test('pascalCase transforms correctly', () => {
    expect(cc.pascalCase('test string')).toBe('TestString');
    expect(cc.pascalCase('test-string')).toBe('TestString');
  });

  test('pathCase transforms correctly', () => {
    expect(cc.pathCase('test string')).toBe('test/string');
    expect(cc.pathCase('test-string')).toBe('test/string');
  });

  test('sentenceCase transforms correctly', () => {
    expect(cc.sentenceCase('testString')).toBe('Test string');
    expect(cc.sentenceCase('test-string')).toBe('Test string');
  });

  test('snakeCase transforms correctly', () => {
    expect(cc.snakeCase('testString')).toBe('test_string');
    expect(cc.snakeCase('test-string')).toBe('test_string');
  });

  test('titleCase transforms correctly', () => {
    expect(cc.titleCase('a simple test')).toBe('A Simple Test');
    expect(cc.titleCase('test string')).toBe('Test String');
    expect(cc.titleCase('test-string')).toBe('Test-String');
  });

  test('upperCase transforms correctly', () => {
    expect(cc.upperCase('Test String')).toBe('TEST STRING');
    expect(cc.upperCase('TestString')).toBe('TESTSTRING');
  });
});
