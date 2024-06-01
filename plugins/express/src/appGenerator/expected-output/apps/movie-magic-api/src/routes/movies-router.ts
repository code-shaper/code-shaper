import movies from './data/movies.json';
import { Router } from 'express';

export const moviesRouter = Router();

/** get all movies */
moviesRouter.get('/', (_, res) => {
  res.send(movies);
});

/** get movie with the specified id */
moviesRouter.get('/:id', (req, res) => {
  const movie = movies.find((movie) => movie.id === req.params.id);
  if (movie) {
    res.send(movie);
  } else {
    res.status(404).end();
  }
});
