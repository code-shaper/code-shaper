import type { Resolvers } from '@/generated/resolvers-types';

export const Query: Resolvers = {
  Query: {
    movies: async (_parent, _args, { dataSources }) =>
      dataSources.moviesApi.getMovies(),

    movie: async (_parent, { id }, { dataSources }) =>
      dataSources.moviesApi.getMovie(id),
  },
};
