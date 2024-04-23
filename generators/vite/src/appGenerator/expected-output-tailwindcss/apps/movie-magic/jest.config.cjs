module.exports = {
  coveragePathIgnorePatterns: ['src/mock', 'src/generated'],
  preset: '@code-shaper/jest-config',
  testEnvironment: 'jest-environment-jsdom',
  coveragePathIgnorePatterns: ['./src/main.tsx', './src/utils/api.ts'],

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
