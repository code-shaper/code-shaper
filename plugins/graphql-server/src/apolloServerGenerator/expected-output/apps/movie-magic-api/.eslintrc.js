module.exports = {
  root: true,
  extends: [
    '@code-shaper/eslint-config/strict',
    'plugin:@dword-design/import-alias/recommended',
  ],
  env: {
    node: true,
  },
  overrides: [
    {
      files: ['*.{ts}'],
      processor: '@graphql-eslint/graphql',
    },
    {
      files: ['*.graphql'],
      extends: [
        'plugin:@graphql-eslint/operations-all',
        'plugin:@graphql-eslint/schema-all',
      ],
      parser: '@graphql-eslint/eslint-plugin',
      parserOptions: {
        operations: ['src/**/*.ts'],
        schema: './src/gql/*-schema.graphql',
      },
      rules: {
        '@graphql-eslint/executable-definitions': 'off',
        '@graphql-eslint/no-one-place-fragments': 'off',
        '@graphql-eslint/no-unused-fragments': 'off',
        '@graphql-eslint/require-field-of-type-query-in-mutation-result': 'off',
        '@graphql-eslint/require-description': 'off',
        '@graphql-eslint/require-nullable-result-in-root': 'off',
        '@graphql-eslint/strict-id-in-types': [
          'error',
          {
            acceptedIdNames: ['id'],
            exceptions: { suffixes: ['Error', 'Response'] },
          },
        ],
      },
    },
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
