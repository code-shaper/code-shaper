import { AppHeader } from '@/components/AppHeader';
import { AppProvider } from '@/providers';
import type { Metadata } from 'next';
import { unstable_noStore as noStore } from 'next/cache';
import { Inter, Roboto_Mono as RobotoMono } from 'next/font/google';
import './globals.css';

/*
 * Load the fonts using next/font/google. For details, see
 * https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#with-tailwind-css
 */
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
const robotoMono = RobotoMono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});

export const metadata: Metadata = {
  title: 'Movie Magic',
  description: 'Movie Magic',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  noStore();

  const baseApiUrl = process.env.BASE_API_URL ?? '';
  const useMockData = process.env.USE_MOCK_DATA === 'true';

  return (
    <html
      className={`${inter.variable} ${robotoMono.variable}`}
      lang="en"
      suppressHydrationWarning
    >
      <head />
      <body className="min-h-screen font-sans antialiased">
        <AppProvider baseApiUrl={baseApiUrl} useMockData={useMockData}>
          <div className="relative flex min-h-screen flex-col">
            <AppHeader />
            <main className="flex-1">{children}</main>
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
