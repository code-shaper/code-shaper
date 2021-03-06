{
  "name": "<%= packageName %>",
  "description": "<%= itemNameCapitalCase %>",
  "private": true,
  "version": "0.0.1",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint src/**/*.ts*",
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
    "@storybook/react": "^6.5.9",
    "@testing-library/dom": "^8.13.0",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^14.2.0",
    "@types/jest": "^28.1.1",
    "@types/node": "^18.0.0",
    "@types/react": "^18.0.13",
    "@types/react-dom": "^18.0.5",
    "@vitejs/plugin-react": "^1.3.2",
    "cypress": "^10.1.0",
    "eslint": "^8.17.0",
    "eslint-config-custom": "*",
    "jest": "^28.1.1",
    "jest-config-custom": "*",
    "jest-environment-jsdom": "^28.1.1",
    "msw": "^0.42.1",
    "ts-jest": "^28.0.5",
    "typescript": "^4.7.3",
    "typescript-config-custom": "*",
    "vite": "^2.9.12"
  },
  "msw": {
    "workerDirectory": "public"
  }
}
