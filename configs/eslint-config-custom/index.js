module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',

    // https://github.com/benmosher/eslint-plugin-import
    'plugin:import/recommended',
    'plugin:import/typescript',

    // https://prettier.io/docs/en/integrating-with-linters.html
    // https://github.com/prettier/eslint-config-prettier
    'prettier',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
};
