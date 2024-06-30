import { AppHeader } from '@/components/AppHeader';
import { Outlet } from 'react-router-dom';

export function RootLayout() {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  );
}
