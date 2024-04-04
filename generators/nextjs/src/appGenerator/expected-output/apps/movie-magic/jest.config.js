const nextJest = require('next/jest');

module.exports = nextJest({ dir: './' })({
  preset: '@code-shaper/jest-config',
  testEnvironment: 'jest-environment-jsdom',
});
