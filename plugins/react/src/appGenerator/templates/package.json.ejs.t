{
  "name": "<%= packageName %>",
  "description": "<%= itemNameCapitalCase %>",
  "private": true,
  "version": "0.0.1",
  "scripts": {
    "build": "tsc && vite build",
    "clean": "rimraf .turbo node_modules dist coverage",
    "cypress": "cypress open",
    "dev": "vite",
    "format": "prettier --list-different '**/*.{js,jsx,ts,tsx,json,md}'",
    "format:fix": "npm run format -- --write",
    "lint": "eslint '**/*.{js,jsx,ts,tsx}'",
    "lint:fix": "npm run lint -- --fix",
    "preview": "vite preview",
    "test": "jest"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.14.2"
  },
  "devDependencies": {
    "@storybook/react": "^7.2.1",
    "@testing-library/dom": "^9.3.1",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^14.0.0",
    "@testing-library/user-event": "^14.4.3",
    "@types/jest": "^29.5.3",
    "@types/node": "^20.4.9",
    "@types/react": "^18.2.19",
    "@types/react-dom": "^18.2.7",
    "@vitejs/plugin-react": "^4.0.4",
    "cypress": "^12.17.3",
    "eslint": "^8.46.0",
    "eslint-config-custom": "*",
    "jest": "^29.6.2",
    "jest-config-custom": "*",
    "jest-environment-jsdom": "^29.6.2",
    "msw": "1.2.3",
    "ts-jest": "^29.1.1",
    "typescript": "^5.1.6",
    "vite": "^4.4.9",
    "vite-tsconfig-paths": "^4.2.0"
  },
  "msw": {
    "workerDirectory": "public"
  }
}
