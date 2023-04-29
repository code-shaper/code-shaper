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
    "clean": "rimraf .turbo node_modules dist coverage test-output"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.3.0"
  },
  "devDependencies": {
    "@storybook/react": "^6.5.10",
    "@testing-library/dom": "^8.16.1",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^14.4.2",
    "@types/jest": "^28.1.6",
    "@types/node": "^18.6.4",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.1",
    "@typescript-eslint/eslint-plugin": "^5.59.1",
    "@typescript-eslint/parser": "^5.59.1",
    "@vitejs/plugin-react": "^4.0.0",
    "cypress": "^10.4.0",
    "eslint": "^8.39.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.3.5",
    "jest": "^28.1.3",
    "jest-config-custom": "*",
    "jest-environment-jsdom": "^28.1.3",
    "msw": "1.2.1",
    "ts-jest": "^28.0.7",
    "typescript": "^5.0.4",
    "vite": "^4.3.3"
  },
  "msw": {
    "workerDirectory": "public"
  }
}
