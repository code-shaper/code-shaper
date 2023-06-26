import { App } from './App';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/main.css';

// Start mock service worker in dev environment
async function startMockServiceWorker() {
  if (import.meta.env.DEV) {
    const { worker } = await import('./mocks/browser');
    await worker.start();
    worker.printHandlers();
  }
}

startMockServiceWorker()
  .then(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const root = createRoot(document.getElementById('root')!);
    root.render(
      <React.StrictMode>
        <Router>
          <App />
        </Router>
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
