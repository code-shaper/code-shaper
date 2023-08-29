import { rootRouter } from './rootRouter';
import { top10MoviesRouter } from './top10MoviesRouter';
import { Router } from 'express';

export const router = Router();
router.use('/', rootRouter);
router.use('/top-10-movies', top10MoviesRouter);
