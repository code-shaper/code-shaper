module.exports = {
  stories: [
    '../../packages/*/src/**/*.stories.mdx',
    '../../packages/*/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../apps/*/src/**/*.stories.mdx',
    '../../apps/*/src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
  ],
  framework: '@storybook/react',
};
