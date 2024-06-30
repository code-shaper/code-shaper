{
  "name": "<%= packageName %>",
  "description": "<%= itemNameCapitalCase %>",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "build": "run-s _codegen _build",
    "build-storybook": "storybook build",
    "ci-validate": "run-s build-storybook",
    "clean": "rimraf .turbo node_modules dist coverage src/generated storybook-static",
    "dev": "vite",
    "format": "prettier --list-different '**/*.{js,jsx,ts,tsx,json,md}'",
    "format:fix": "npm run format -- --write",
    "lint": "eslint '**/*.{js,jsx,ts,tsx}'",
    "lint:fix": "npm run lint -- --fix",
    "preview": "vite preview",
    "storybook": "storybook dev -p 6006",
    "test": "jest --coverage",
    "_build": "tsc && vite build",
    "_codegen": "echo add any code generation steps here"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.24.0"
  },
  "devDependencies": {
    "@chromatic-com/storybook": "^1.3.3",
    "@code-shaper/eslint-config": "^1.*",
    "@code-shaper/jest-config": "^1.*",
    "@dword-design/eslint-plugin-import-alias": "^5.0.0",
    "@faker-js/faker": "^8.4.1",
    "@storybook/addon-a11y": "^8.0.9",
    "@storybook/addon-docs": "^8.0.9",
    "@storybook/addon-essentials": "^8.0.9",
    "@storybook/addon-interactions": "^8.0.9",
    "@storybook/addon-links": "^8.0.9",
    "@storybook/blocks": "^8.0.9",
    "@storybook/react": "^8.0.9",
    "@storybook/react-vite": "^8.0.9",
    "@storybook/test": "^8.0.9",
    "@storybook/theming": "^8.0.9",
    "@testing-library/dom": "^9.3.4",
    "@testing-library/jest-dom": "^6.4.5",
    "@testing-library/react": "^14.3.1",
    "@testing-library/user-event": "^14.5.2",
    "@types/jest": "^29.5.12",
    "@types/node": "^20.12.8",
    "@types/react": "^18.3.1",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.2.1",
<% if (useTailwindcss){ -%>
    "autoprefixer": "^10.4.19",
<% } -%>
    "deepmerge": "^4.3.1",
    "eslint": "^8.57.0",
    "eslint-plugin-storybook": "^0.8.0",
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0",
    "msw": "^2.2.14",
<% if (useTailwindcss){ -%>
    "postcss": "^8.4.38",
    "postcss-import": "^16.1.0",
<% } -%>
    "storybook": "^8.0.9",
    "storybook-dark-mode": "^4.0.1",
<% if (useTailwindcss){ -%>
    "tailwindcss": "^3.4.3",
<% } -%>
    "ts-jest": "^29.1.2",
    "typescript": "^5.4.5",
    "vite": "^5.2.11"
  },
  "msw": {
    "workerDirectory": [
      "public"
    ]
  }
}
