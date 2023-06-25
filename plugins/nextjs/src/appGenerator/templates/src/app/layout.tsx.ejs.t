import { Inter } from 'next/font/google';
import type * as React from 'react';
import './globals.css';

/*
 * Load the Inter font using next/font/google. For details, see
 * https://beta.nextjs.org/docs/optimizing/fonts
 */
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '<%= itemNameCapitalCase %>',
  description: '<%= itemNameCapitalCase %>',
};

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
