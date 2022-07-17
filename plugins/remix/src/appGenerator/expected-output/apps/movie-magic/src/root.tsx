import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import mainStylesHref from '../styles/main.css';
import interStylesHref from '../styles/inter.css';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Movie Magic',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => {
  return [
    // preload Inter font for performance (font weights 300, 400, 500, 600)
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/Inter-Italic.woff2',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/Inter-Light.woff2',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/Inter-LightItalic.woff2',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/Inter-Medium.woff2',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/Inter-MediumItalic.woff2',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/Inter-Regular.woff2',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },

    // load local styles
    { rel: 'stylesheet', href: mainStylesHref },
    { rel: 'stylesheet', href: interStylesHref },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
