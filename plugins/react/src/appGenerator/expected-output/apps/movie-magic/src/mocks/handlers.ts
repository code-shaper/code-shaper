import { rest } from 'msw';
import { MOCK_API_URL } from './constants';

export const handlers = [
  rest.get(`${MOCK_API_URL}/products`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([]));
  }),
];
