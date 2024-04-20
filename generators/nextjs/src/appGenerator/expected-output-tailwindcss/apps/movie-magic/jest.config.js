const nextJest = require('next/jest');

module.exports = nextJest({ dir: './' })({
  coveragePathIgnorePatterns: ['src/mock', 'src/generated'],
  preset: '@code-shaper/jest-config',
  testEnvironment: 'jest-environment-jsdom',

  // Set coverage threshold as appropriate
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
});
