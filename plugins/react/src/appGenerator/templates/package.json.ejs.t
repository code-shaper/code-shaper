{
  "name": "<%= packageName %>",
  "description": "<%= itemNameCapitalCase %>",
  "private": true,
  "version": "0.0.1",
  "scripts": {
    "build": "tsc && vite build",
    "clean": "rimraf .turbo node_modules dist coverage",
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
    "react-router-dom": "^6.16.0"
  },
  "devDependencies": {
    "@storybook/react": "^7.4.2",
    "@testing-library/dom": "^9.3.3",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^14.0.0",
    "@testing-library/user-event": "^14.5.1",
    "@types/jest": "^29.5.5",
    "@types/node": "^20.6.2",
    "@types/react": "^18.2.22",
    "@types/react-dom": "^18.2.7",
    "@vitejs/plugin-react": "^4.0.4",
    "eslint": "^8.49.0",
    "eslint-config-custom": "*",
    "jest": "^29.7.0",
    "jest-config-custom": "*",
    "jest-environment-jsdom": "^29.7.0",
    "msw": "1.3.1",
    "ts-jest": "^29.1.1",
    "typescript": "^5.2.2",
    "vite": "^4.4.9",
    "vite-tsconfig-paths": "^4.2.1"
  },
  "msw": {
    "workerDirectory": "public"
  }
}
