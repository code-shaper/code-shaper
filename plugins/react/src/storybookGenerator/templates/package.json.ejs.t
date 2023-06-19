{
  "name": "<%= packageName %>",
  "description": "<%= itemNameCapitalCase %>",
  "private": true,
  "version": "0.0.1",
  "scripts": {
    "dev": "storybook dev -p 6006",
    "build": "storybook build",
    "lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "clean": "rimraf .turbo node_modules storybook-static"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@storybook/addon-a11y": "^7.0.22",
    "@storybook/addon-essentials": "^7.0.22",
    "@storybook/addon-interactions": "^7.0.22",
    "@storybook/addon-links": "^7.0.22",
    "@storybook/blocks": "^7.0.22",
    "@storybook/react": "^7.0.22",
    "@storybook/react-vite": "^7.0.22",
    "@storybook/testing-library": "^0.0.14-next.2",
    "@types/react": "^18.2.13",
    "@types/react-dom": "^18.2.6",
    "@typescript-eslint/eslint-plugin": "^5.60.0",
    "@typescript-eslint/parser": "^5.60.0",
    "@vitejs/plugin-react": "^4.0.0",
    "eslint": "^8.43.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-storybook": "^0.6.12",
    "prop-types": "^15.8.1",
    "storybook": "^7.0.22",
    "typescript": "^5.1.3",
    "vite": "^4.3.9",
    "vite-tsconfig-paths": "^4.2.0"
  },
  "overrides": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
