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
    "next": "^12.2.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@storybook/react": "^6.5.9",
    "@testing-library/dom": "^8.16.0",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^14.2.5",
    "@types/jest": "^28.1.6",
    "@types/node": "18.0.5",
    "@types/react": "18.0.15",
    "@types/react-dom": "18.0.6",
    "eslint": "8.20.0",
    "eslint-config-next": "12.2.2",
    "jest": "^28.1.3",
    "jest-config-custom": "*",
    "jest-environment-jsdom": "^28.1.3",
    "ts-jest": "^28.0.7",
    "typescript": "4.7.4"
  }
}
