import { MOCK_API_URL } from './constants';
import { rest } from 'msw';

export const handlers = [
  rest.get(`${MOCK_API_URL}/products`, async (req, res, ctx) =>
    res(ctx.status(200), ctx.json([]))
  ),
];
