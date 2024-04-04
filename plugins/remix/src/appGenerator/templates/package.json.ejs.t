{
  "name": "<%= packageName %>",
  "description": "<%= itemNameCapitalCase %>",
  "private": true,
  "version": "0.0.1",
  "scripts": {
    "build": "remix build",
    "clean": "rimraf .cache .turbo node_modules build public/build coverage",
    "dev": "remix dev",
    "format": "prettier --list-different '**/*.{js,jsx,ts,tsx,json,md}'",
    "format:fix": "npm run format -- --write",
    "lint": "next lint",
    "lint:fix": "npm run lint -- --fix",
    "start": "remix-serve build",
    "test": "jest"
  },
  "dependencies": {
    "@remix-run/node": "^1.6.0",
    "@remix-run/react": "^1.6.0",
    "@remix-run/serve": "^1.6.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@remix-run/dev": "^1.6.0",
    "@remix-run/eslint-config": "^1.6.0",
    "@storybook/react": "^7.0.23",
    "@testing-library/dom": "^8.13.0",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^14.5.1",
    "@types/jest": "^28.1.1",
    "@types/node": "^18.0.0",
    "@types/react": "^18.0.14",
    "@types/react-dom": "^18.0.5",
    "eslint": "^8.17.0",
    "jest": "^28.1.1",
    "@code-shaper/jest-config": "^1.*",
    "jest-environment-jsdom": "^28.1.1",
    "ts-jest": "^28.0.5",
    "typescript": "^4.7.3"
  }
}
