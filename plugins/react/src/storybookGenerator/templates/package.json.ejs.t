{
  "name": "<%= packageName %>",
  "description": "<%= itemNameCapitalCase %>",
  "private": true,
  "version": "0.0.1",
  "scripts": {
    "build": "storybook build",
    "clean": "rimraf .turbo node_modules storybook-static",
    "dev": "storybook dev -p 6006",
    "format": "prettier --list-different '**/*.{js,jsx,ts,tsx,json,md}'",
    "format:fix": "npm run format -- --write",
    "lint": "eslint '**/*.{js,jsx,ts,tsx}'",
    "lint:fix": "npm run lint -- --fix"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@storybook/addon-a11y": "^7.4.2",
    "@storybook/addon-essentials": "^7.4.2",
    "@storybook/addon-interactions": "^7.4.2",
    "@storybook/addon-links": "^7.4.2",
    "@storybook/blocks": "^7.4.2",
    "@storybook/react": "^7.4.2",
    "@storybook/react-vite": "^7.4.2",
    "@storybook/testing-library": "^0.2.1",
    "@types/react": "^18.2.22",
    "@types/react-dom": "^18.2.7",
    "@typescript-eslint/eslint-plugin": "^5.62.0",
    "@typescript-eslint/parser": "^5.62.0",
    "@vitejs/plugin-react": "^4.0.4",
    "eslint": "^8.49.0",
    "eslint-config-custom": "*",
    "eslint-plugin-storybook": "^0.6.13",
    "prop-types": "^15.8.1",
    "storybook": "^7.4.2",
    "typescript": "^5.2.2",
    "vite": "^4.4.9",
    "vite-tsconfig-paths": "^4.2.1"
  }
}
