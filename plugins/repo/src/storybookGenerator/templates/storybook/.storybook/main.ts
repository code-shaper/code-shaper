module.exports = {
  stories: [
    '../../packages/*/src/**/*.stories.mdx',
    '../../packages/*/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../apps/*/src/**/*.stories.mdx',
    '../../apps/*/src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/react',
};
