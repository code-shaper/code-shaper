import { router } from './routes';
import bodyParser from 'body-parser';
import cors from 'cors';
import type { Request, Response, NextFunction } from 'express';
import express from 'express';
import morgan from 'morgan';

function appErrorHandler(
  err: Error,
  _: Request,
  res: Response,
  next: NextFunction
) {
  if (err.message) {
    res.status(500).send({ error: err.message });
  } else {
    next(err);
  }
}

export function createApp() {
  // Create Express App
  const app = express();

  // Add middleware to log requests
  app.use(morgan('combined'));

  // Add middleware to enable CORS
  app.use(cors());

  // Add middleware to parse the POST data of the body
  app.use(bodyParser.urlencoded({ extended: true }));

  // Add middleware to parse application/json
  app.use(bodyParser.json());

  // Add routes
  app.use(router);

  // Add application error handler
  app.use(appErrorHandler);

  return app;
}
