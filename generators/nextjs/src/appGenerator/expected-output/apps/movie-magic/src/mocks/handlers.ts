import { http, HttpResponse } from 'msw';

export const handlers = [http.get('/products', () => HttpResponse.json([]))];
