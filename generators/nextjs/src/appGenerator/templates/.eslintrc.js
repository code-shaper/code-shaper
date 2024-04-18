module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    '@code-shaper/eslint-config/strict-react',
    'plugin:@next/next/core-web-vitals',
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
