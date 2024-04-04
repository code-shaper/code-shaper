const {
  baseCustomRules,
  baseFixableRules,
  commentsCustomRules,
  importCustomRules,
  importFixableRules,
  typescriptCustomRules,
  typescriptFixableRules,
  jestCustomRules,
  jestFixableRules,
  jestFixableTypescriptOnlyRules,
} = require('./strict-rules');

module.exports = {
  overrides: [
    {
      files: ['**/*.+(js|jsx|ts|tsx)'],
      extends: [
        'eslint:recommended',
        'plugin:eslint-comments/recommended',
        'plugin:import/recommended',
        'plugin:promise/recommended',
        'plugin:regexp/recommended',
      ],
      rules: {
        ...baseFixableRules,
        ...baseCustomRules,
        ...commentsCustomRules,
        ...importFixableRules,
        ...importCustomRules,
      },
    },
    {
      files: ['**/*.+(ts|tsx)'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/strict',
        'plugin:import/typescript',
      ],
      parserOptions: { project: true },
      rules: {
        ...typescriptFixableRules,
        ...typescriptCustomRules,
      },
      settings: {
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
    },
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      rules: {
        ...jestFixableRules,
        ...jestCustomRules,
      },
    },
    {
      files: ['**/__tests__/**/*.[t]s?(x)', '**/?(*.)+(spec|test).[t]s?(x)'],
      rules: {
        ...jestFixableTypescriptOnlyRules,
      },
    },
    {
      files: ['**/*.+(js|jsx|ts|tsx)'],
      extends: ['prettier'],
    },
  ],
  plugins: ['only-error'],
};
