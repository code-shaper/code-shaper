module.exports = {
  root: true,
  extends: [
    '@code-shaper/eslint-config/strict',
    'plugin:@dword-design/import-alias/recommended',
  ],
  env: {
    node: true,
  },
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
