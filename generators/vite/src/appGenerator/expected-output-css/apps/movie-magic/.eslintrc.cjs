module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    '@code-shaper/eslint-config/strict-react',
    'plugin:@dword-design/import-alias/recommended',
    'plugin:storybook/recommended',
  ],
  rules: {
    '@dword-design/import-alias/prefer-alias': [
      'error',
      {
        alias: {
          '@': './src/',
        },
      },
    ],
  },
};
