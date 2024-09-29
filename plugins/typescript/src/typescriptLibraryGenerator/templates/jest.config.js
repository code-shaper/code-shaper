module.exports = {
  preset: '@code-shaper/jest-config',
  testEnvironment: 'node',

  // Set coverage threshold as appropriate
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};
