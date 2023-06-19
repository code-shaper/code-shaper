{
  "name": "<%= packageName %>",
  "description": "<%= itemNameCapitalCase %>",
  "private": true,
  "version": "0.0.1",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "test": "jest --coverage",
    "cypress": "cypress open",
    "clean": "rimraf .turbo node_modules dist coverage"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.11.0"
  },
  "devDependencies": {
    "@storybook/react": "^7.0.7",
    "@testing-library/dom": "^9.2.0",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^14.0.0",
    "@testing-library/user-event": "^14.4.3",
    "@types/jest": "^29.5.1",
    "@types/node": "^18.16.3",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.1",
    "@typescript-eslint/eslint-plugin": "^5.59.1",
    "@typescript-eslint/parser": "^5.59.1",
    "@vitejs/plugin-react": "^4.0.0",
    "cypress": "^12.11.0",
    "eslint": "^8.39.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "jest": "^29.5.0",
    "jest-config-custom": "*",
    "jest-environment-jsdom": "^29.5.0",
    "msw": "1.2.1",
    "ts-jest": "^29.1.0",
    "typescript": "^5.0.4",
    "vite": "^4.3.3",
    "vite-tsconfig-paths": "^4.2.0"
  },
  "msw": {
    "workerDirectory": "public"
  }
}
