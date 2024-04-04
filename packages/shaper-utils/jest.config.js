module.exports = {
  preset: '@code-shaper/jest-config',
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 5,
      statements: 5,
    },
  },
};
