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
    "next": "^13.5.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
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
    "eslint": "^8.57.0",
    "@code-shaper/eslint-config": "^1.*",
    "eslint-config-next": "13.5.1",
    "jest": "^29.7.0",
    "@code-shaper/jest-config": "^1.*",
    "jest-environment-jsdom": "^29.7.0",
    "ts-jest": "^29.1.1",
    "typescript": "^5.2.2"
  }
}
