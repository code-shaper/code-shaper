import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => [
  { title: 'Movie Magic' },
  { name: 'description', content: 'Movie Magic' },
];

export default function Index() {
  return (
    <div className="container relative mx-auto max-w-screen-xl px-8 py-4">
      This app is bootstrapped with{' '}
      <a className="text-blue-600" href="https://code-shaper.dev">
        Code Shaper
      </a>
      .
    </div>
  );
}
