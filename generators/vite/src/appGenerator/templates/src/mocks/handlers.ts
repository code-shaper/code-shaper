import { http, HttpResponse } from 'msw';

const API_URL = 'http://localhost:8080';

export const handlers = [
  http.get(`${API_URL}/products`, () => HttpResponse.json([])),
];
