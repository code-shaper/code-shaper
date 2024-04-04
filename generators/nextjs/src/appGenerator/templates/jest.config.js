const nextJest = require('next/jest');

module.exports = nextJest({ dir: './' })({
  preset: 'jest-config-custom',
  testEnvironment: 'jest-environment-jsdom',
});
