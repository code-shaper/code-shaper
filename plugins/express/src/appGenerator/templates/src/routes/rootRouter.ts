import rootResource from './data/root-resource.json';
import { Router } from 'express';

export const rootRouter = Router();

rootRouter.get('/', (_, res) => {
  res.send(rootResource);
});
