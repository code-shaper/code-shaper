import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    'storybook-dark-mode',
  ],
  docs: {
    autodocs: 'tag',
  },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  // this is to pick up favicon.ico
  staticDirs: ['../src/app'],
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/*/src/**/*.mdx',
    '../../../packages/*/src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
};

export default config;
