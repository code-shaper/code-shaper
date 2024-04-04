const typescriptCustomRules = {
  '@typescript-eslint/ban-ts-comment': 'off',
  '@typescript-eslint/no-unused-vars': [
    'error',
    { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
  ],
  '@typescript-eslint/no-var-requires': 'off',
};

module.exports = {
  overrides: [
    {
      files: ['**/*.+(js|jsx|ts|tsx)'],
      extends: ['eslint:recommended', 'plugin:import/recommended'],
    },
    {
      files: ['**/*.+(ts|tsx)'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
      ],
      parserOptions: { project: true },
      rules: {
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
      files: ['**/*.+(js|jsx|ts|tsx)'],
      extends: ['prettier'],
    },
  ],
};
