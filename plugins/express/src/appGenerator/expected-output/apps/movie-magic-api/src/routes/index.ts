import { moviesRouter } from './movies-router';
import { rootRouter } from './root-router';
import { Router } from 'express';

export const router = Router();
router.use('/', rootRouter);
router.use('/movies', moviesRouter);
