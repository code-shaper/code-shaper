import type { MoviesApi } from '@/datasources/MoviesApi';

// This interface is used with graphql-codegen to generate types for resolvers context
export interface DataSourceContext {
  dataSources: {
    moviesApi: MoviesApi;
  };
}
