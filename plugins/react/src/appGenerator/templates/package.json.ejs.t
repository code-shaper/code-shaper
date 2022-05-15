{
  "name": "<%= packageName %>",
  "description": "<%= appName %>",
  "private": true,
  "version": "0.0.1",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint src/**/*.ts*",
    "test": "jest --coverage",
    "cypress": "cypress open",
    "clean": "rm -rf .turbo && rm -rf node_modules && rm -rf dist"
  },
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-router-dom": "^6.3.0"
  },
  "devDependencies": {
    "@storybook/react": "next",
    "@testing-library/dom": "^8.13.0",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.1.1",
    "@testing-library/user-event": "^14.1.1",
    "@types/jest": "^27.4.1",
    "@types/node": "^17.0.25",
    "@types/react": "^18.0.7",
    "@types/react-dom": "^18.0.2",
    "@vitejs/plugin-react": "^1.3.1",
    "cypress": "^9.5.4",
    "eslint": "^8.15.0",
    "eslint-config-custom": "*",
    "jest": "^27.5.1",
    "msw": "^0.39.2",
    "ts-jest": "^27.1.4",
    "typescript": "^4.6.3",
    "typescript-config": "*",
    "vite": "^2.9.5"
  }
}
