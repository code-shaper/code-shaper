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
    "clean": "rimraf .turbo node_modules dist"
  },
  "dependencies": {
    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "react-router-dom": "^6.3.0"
  },
  "devDependencies": {
    "@storybook/react": "^6.5.3",
    "@testing-library/dom": "^8.13.0",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.2.0",
    "@testing-library/user-event": "^14.2.0",
    "@types/jest": "^27.5.1",
    "@types/node": "^17.0.35",
    "@types/react": "^18.0.9",
    "@types/react-dom": "^18.0.4",
    "@vitejs/plugin-react": "^1.3.2",
    "cypress": "^9.6.1",
    "eslint": "^8.16.0",
    "eslint-config-custom": "*",
    "jest": "^28.1.0",
    "jest-config": "*",
    "jest-environment-jsdom": "^28.1.0",
    "msw": "^0.40.2",
    "ts-jest": "^28.0.2",
    "typescript": "^4.6.4",
    "typescript-config": "*",
    "vite": "^2.9.9"
  }
}
