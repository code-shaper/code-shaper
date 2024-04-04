import { Inter } from 'next/font/google';
import type * as React from 'react';
import './globals.css';

/*
 * Load the Inter font using next/font/google. For details, see
 * https://beta.nextjs.org/docs/optimizing/fonts
 */
const inter = Inter({ subsets: ['latin'] });

/*
 * This is causing jest to fail when collecting coverage
 * See https://github.com/vercel/next.js/issues/47299
 * export const metadata = {
 *   title: 'Movie Magic',
 *   description: 'Movie Magic',
 * };
 */

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
