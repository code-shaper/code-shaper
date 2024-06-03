import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './src/gql/**.graphql',
  generates: {
    './src/generated/resolvers-types.ts': {
      config: {
        useIndexSignature: true,
        contextType: '../types/DataSourceContext#DataSourceContext',
      },
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
};

export default config;
