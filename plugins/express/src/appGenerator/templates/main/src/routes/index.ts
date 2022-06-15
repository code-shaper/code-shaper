import express from 'express';
import { moviesRouter } from './moviesRouter';

export const rootRouter = express.Router();
rootRouter.use('/top-10-movies', moviesRouter);
