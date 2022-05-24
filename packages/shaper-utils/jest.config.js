module.exports = {
  preset: 'jest-config-custom',
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
