{
  "name": "<%= packageName %>",
  "description": "<%= itemNameCapitalCase %>",
  "private": true,
  "version": "0.0.1",
  "sideEffects": false,
  "scripts": {
    "dev": "next dev --port 3000",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "jest",
    "clean": "rimraf .turbo node_modules .next out build"
  },
  "dependencies": {
    "next": "13.3.2",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  },
  "devDependencies": {
    "@storybook/react": "^7.0.7",
    "@testing-library/dom": "^9.2.0",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^14.0.0",
    "@testing-library/user-event": "^14.4.3",
    "@types/jest": "^29.5.1",
    "@types/node": "18.16.3",
    "@types/react": "18.2.0",
    "@types/react-dom": "18.2.1",
    "eslint": "8.39.0",
    "eslint-config-next": "13.3.2",
    "jest": "^29.5.0",
    "jest-config-custom": "*",
    "jest-environment-jsdom": "^29.5.0",
    "ts-jest": "^29.1.0",
    "typescript": "5.0.4"
  }
}
