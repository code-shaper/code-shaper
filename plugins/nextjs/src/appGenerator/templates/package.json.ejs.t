{
  "name": "<%= packageName %>",
  "description": "<%= itemNameCapitalCase %>",
  "private": true,
  "version": "0.0.1",
  "scripts": {
    "build": "next build",
    "clean": "rimraf .turbo node_modules build coverage .next out",
    "dev": "next dev --port 3000",
    "format": "prettier --list-different '**/*.{js,jsx,ts,tsx,json,md}'",
    "format:fix": "npm run format -- --write",
    "lint": "next lint",
    "lint:fix": "npm run lint -- --fix",
    "start": "next start",
    "test": "jest"
  },
  "dependencies": {
    "next": "^13.4.7",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@storybook/react": "^7.0.23",
    "@testing-library/dom": "^9.3.1",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^14.0.0",
    "@testing-library/user-event": "^14.4.3",
    "@types/jest": "^29.5.2",
    "@types/node": "^18.16.18",
    "@types/react": "^18.2.14",
    "@types/react-dom": "^18.2.6",
    "eslint": "^8.43.0",
    "eslint-config-custom": "*",
    "eslint-config-next": "^13.4.7",
    "jest": "^29.5.0",
    "jest-config-custom": "*",
    "jest-environment-jsdom": "^29.5.0",
    "ts-jest": "^29.1.0",
    "typescript": "^5.1.3"
  }
}
