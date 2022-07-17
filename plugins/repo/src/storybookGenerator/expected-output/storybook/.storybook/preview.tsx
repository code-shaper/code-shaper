// Import any required css here
// Example:
// import '../../packages/ui-lib/src/styles/main.css';

export const parameters = {
  // Show calls to "on*" arguments (based on user actions) in the Actions panel
  actions: { argTypesRegex: '^on[A-Z].*' },

  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
