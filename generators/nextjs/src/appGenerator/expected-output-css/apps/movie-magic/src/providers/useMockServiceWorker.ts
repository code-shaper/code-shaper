import type { SetupWorker } from 'msw/browser';
import * as React from 'react';

export function useMockServiceWorker(useMockData: boolean) {
  const [hasWorkerStarted, setWorkerStarted] = React.useState(false);

  React.useEffect(() => {
    if (useMockData && typeof window === 'object') {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { worker } = require('@/mocks/browser') as {
        worker: SetupWorker;
      };
      // eslint-disable-next-line promise/always-return
      void worker.start({ onUnhandledRequest: 'bypass' }).then(() => {
        setWorkerStarted(true);
      });
    } else {
      setWorkerStarted(true);
    }
  }, [useMockData]);

  return hasWorkerStarted;
}
