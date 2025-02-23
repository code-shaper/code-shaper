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

const reactFixableRules = {
  'react/destructuring-assignment': 'error',
  'react/function-component-definition': 'error',
  'react/jsx-boolean-value': 'error',
  'react/jsx-closing-bracket-location': 'error',
  'react/jsx-closing-tag-location': 'error',
  'react/jsx-curly-brace-presence': 'error',
  'react/jsx-curly-newline': 'error',
  'react/jsx-curly-spacing': 'error',
  'react/jsx-equals-spacing': 'error',
  'react/jsx-first-prop-new-line': 'error',
  'react/jsx-fragments': 'error',
  'react/jsx-indent': 'error',
  'react/jsx-indent-props': 'error',
  'react/jsx-max-props-per-line': 'error',
  'react/jsx-newline': 'error',
  'react/jsx-no-leaked-render': 'error',
  'react/jsx-no-useless-fragment': 'error',
  'react/jsx-one-expression-per-line': 'error',
  'react/jsx-props-no-multi-spaces': 'error',
  'react/jsx-sort-props': 'error',
  'react/jsx-tag-spacing': 'error',
  'react/jsx-wrap-multilines': 'error',
  'react/no-arrow-function-lifecycle': 'error',
  'react/prefer-read-only-props': 'error',
  'react/self-closing-comp': 'error',
  'react/sort-prop-types': 'error',
};

const reactCustomRules = {
  'react/jsx-no-useless-fragment': 'off',
  'react/prefer-read-only-props': 'off',
};

const testingLibraryFixableRules = {
  'testing-library/await-async-events': 'error',
  'testing-library/no-dom-import': 'error',
  'testing-library/no-global-regexp-flag-in-query': 'error',
  'testing-library/prefer-find-by': 'error',
};

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
        'plugin:import/react',
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
      ],
      parserOptions: { project: true },
      rules: {
        ...reactFixableRules,
        ...reactCustomRules,
        ...typescriptFixableRules,
        ...typescriptCustomRules,
      },
      settings: {
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
          },
        },
        react: {
          version: 'detect',
        },
      },
    },
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: [
        'plugin:jest/recommended',
        'plugin:jest/style',
        'plugin:jest-dom/recommended',
      ],
      rules: {
        ...jestFixableRules,
        ...jestCustomRules,
      },
    },
    {
      files: ['**/__tests__/**/*.[t]s?(x)', '**/?(*.)+(spec|test).[t]s?(x)'],
      extends: ['plugin:testing-library/react'],
      rules: {
        ...jestFixableTypescriptOnlyRules,
        ...testingLibraryFixableRules,
      },
    },
    {
      files: ['**/*.+(js|jsx|ts|tsx)'],
      extends: ['prettier'],
    },
  ],
  plugins: ['only-error'],
};
