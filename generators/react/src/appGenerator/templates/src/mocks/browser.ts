import { handlers } from './handlers';
import { setupWorker } from 'msw/browser';

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers);
