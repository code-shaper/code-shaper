import { MOCK_API_URL } from './constants';
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(`${MOCK_API_URL}/products`, () => HttpResponse.json([])),
];
