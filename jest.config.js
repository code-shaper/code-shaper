module.exports = {
  projects: [
    '<rootDir>/plugins/react'
  ],
  moduleDirectories: ['node_modules', 'plugins'],
  coverageThreshold: {
    global: {
      branches: 10,
      functions: 10,
      lines: 10,
      statements: 10,
    },
  },
  collectCoverageFrom: [
    '!src/app/*.svg',
    '!src/lib/*.*.tsx',
    '!src/*.tsx',
    '!*.js',
    '!src/*.ts',
    '!src/**/*.ts',
    '!**/**/*.ts',
    '!**/**/*.js',
    '!**/**/*.*.tsx',
  ],
}
