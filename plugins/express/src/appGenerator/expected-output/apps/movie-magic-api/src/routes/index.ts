import { moviesRouter } from './moviesRouter';
import { Router } from 'express';

export const rootRouter = Router();
rootRouter.use('/top-10-movies', moviesRouter);
