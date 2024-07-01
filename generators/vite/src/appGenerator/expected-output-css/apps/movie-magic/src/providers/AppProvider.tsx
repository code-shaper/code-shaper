import { HomePage } from '@/routes/home';
import { RootLayout } from '@/routes/root';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
]);

export function AppProvider() {
  return <RouterProvider router={router} />;
}
