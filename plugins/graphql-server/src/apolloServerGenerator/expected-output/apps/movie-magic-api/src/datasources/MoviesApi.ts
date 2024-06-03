import movies from './movies.json';
import type { Movie } from '@/generated/resolvers-types';

export class MoviesApi {
  public async getMovies(): Promise<Movie[]> {
    return Promise.resolve(movies);
  }

  public async getMovie(id: string): Promise<Movie | null> {
    const movie = movies.find((movie) => movie.id === id);
    // eslint-disable-next-line no-restricted-syntax
    return Promise.resolve(movie ?? null);
  }
}
