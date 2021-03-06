{
  "name": "<%= packageName %>",
  "description": "<%= itemNameCapitalCase %>",
  "private": true,
  "version": "0.0.1",
  "sideEffects": false,
  "scripts": {
    "dev": "remix dev",
    "build": "remix build",
    "start": "remix-serve build",
    "test": "jest",
    "clean": "rimraf .turbo .cache node_modules build public/build coverage test-output"
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
    "@storybook/react": "^6.5.9",
    "@testing-library/dom": "^8.13.0",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^14.2.0",
    "@types/jest": "^28.1.1",
    "@types/node": "^18.0.0",
    "@types/react": "^18.0.14",
    "@types/react-dom": "^18.0.5",
    "eslint": "^8.17.0",
    "jest": "^28.1.1",
    "jest-config-custom": "*",
    "jest-environment-jsdom": "^28.1.1",
    "ts-jest": "^28.0.5",
    "typescript": "^4.7.3"
  },
  "engines": {
    "node": ">=14"
  }
}
