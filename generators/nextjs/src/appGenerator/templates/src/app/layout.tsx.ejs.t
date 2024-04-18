import { AppHeader } from '@/components/AppHeader';
import { AppProvider } from '@/providers';
import type { Metadata } from 'next';
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
  title: '<%= itemNameCapitalCase %>',
  description: '<%= itemNameCapitalCase %>',
};

/*
 * This allows us to read environment variables at run-time instead of build-time
 * see https://github.com/vercel/next.js/discussions/44628#discussioncomment-7015224
 */
/* istanbul ignore next */
export const dynamic = 'force-dynamic';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const baseApiUrl = process.env.BASE_API_URL ?? 'http://localhost:8080';
  const useMockData = process.env.USE_MOCK_DATA === 'true';

  return (
    <html
      className={`${inter.variable} ${robotoMono.variable}`}
      lang="en"
      suppressHydrationWarning
    >
      <head />
      <body className="bg-background min-h-screen font-sans antialiased">
        <AppProvider baseApiUrl={baseApiUrl} useMockData={useMockData}>
          <div className="bg-background relative flex min-h-screen flex-col">
            <AppHeader />
            <main className="flex-1">{children}</main>
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
