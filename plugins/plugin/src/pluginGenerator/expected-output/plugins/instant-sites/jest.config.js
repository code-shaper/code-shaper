module.exports = {
  preset: '@code-shaper/jest-config',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['expected-output*', 'test-output*'],
  modulePathIgnorePatterns: ['expected-output*', 'test-output*'],
};
