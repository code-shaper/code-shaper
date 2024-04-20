'use client';

import { useMockServiceWorker } from './useMockServiceWorker';

export interface AppProviderProps {
  baseApiUrl: string;
  useMockData: boolean;
  children?: React.ReactNode;
}

export function AppProvider({
  baseApiUrl,
  useMockData,
  children,
}: AppProviderProps) {
  console.log('baseApiUrl', baseApiUrl);
  const hasWorkerStarted = useMockServiceWorker(useMockData);
  if (!hasWorkerStarted) {
    return undefined;
  }

  return <>{children}</>;
}
