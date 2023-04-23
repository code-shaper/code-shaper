module.exports = {
  preset: 'jest-config-custom',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['expected-output', 'test-output'],
  modulePathIgnorePatterns: ['expected-output', 'test-output'],
};
