import { AppProvider } from './providers';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import './globals.css';

const useMockData = import.meta.env.VITE_USE_MOCK_DATA === 'true';

// Start mock service worker in dev environment
async function enableMocking() {
  if (useMockData) {
    const { worker } = await import('./mocks/browser');

    /*
     * `worker.start()` returns a Promise that resolves
     * once the Service Worker is up and ready to intercept requests.
     */
    await worker.start();
  }
}

enableMocking()
  .then(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const root = createRoot(document.getElementById('root')!);
    root.render(
      <React.StrictMode>
        <AppProvider />
      </React.StrictMode>
    );
    return true;
  })
  .catch((error) => {
    console.log(error);
  });

/*
 * -----------------------------------------------------------------------------
 * If you don't use Mock Service Worker, simplify the above code as shown below.
 * -----------------------------------------------------------------------------
 * // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
 * const root = createRoot(document.getElementById('root')!);
 * root.render(
 *   <React.StrictMode>
 *     <Router>
 *       <App />
 *     </Router>
 *   </React.StrictMode>
 * );
 */
