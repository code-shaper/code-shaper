{
  "name": "<%= packageName %>",
  "description": "<%= itemNameCapitalCase %>",
  "private": true,
  "version": "0.0.1",
  "scripts": {
    "dev": "next dev --port 3000",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "jest",
    "clean": "rimraf .turbo node_modules .next out build"
  },
  "dependencies": {
    "next": "13.4.6",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  },
  "devDependencies": {
    "@storybook/react": "^7.0.22",
    "@testing-library/dom": "^9.3.1",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^14.0.0",
    "@testing-library/user-event": "^14.4.3",
    "@types/jest": "^29.5.2",
    "@types/node": "20.3.1",
    "@types/react": "18.2.13",
    "@types/react-dom": "18.2.6",
    "@types/testing-library__jest-dom": "5.14.6",
    "eslint": "8.43.0",
    "eslint-config-next": "13.4.6",
    "jest": "^29.5.0",
    "jest-environment-jsdom": "^29.5.0",
    "typescript": "5.1.3"
  }
}
