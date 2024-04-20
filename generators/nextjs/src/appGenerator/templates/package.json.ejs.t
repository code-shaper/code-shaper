{
  "name": "<%= packageName %>",
  "description": "<%= itemNameCapitalCase %>",
  "private": true,
  "version": "0.0.1",
  "scripts": {
    "build": "run-s _codegen _build",
    "build-storybook": "storybook build --webpack-stats-json",
    "ci-validate": "run-s build-storybook",
    "clean": "rimraf .turbo node_modules build coverage .next next-env.d.ts out src/generated storybook-static",
    "dev": "next dev --port 3000",
    "format": "prettier --list-different '**/*.{js,jsx,ts,tsx,json,md}'",
    "format:fix": "npm run format -- --write",
    "lint": "eslint '**/*.{js,jsx,ts,tsx}'",
    "lint:fix": "npm run lint -- --fix",
    "start": "next start",
    "storybook": "storybook dev -p 6006",
    "test": "jest --coverage",
    "_build": "next build",
    "_codegen": "echo add any code generation steps here"
  },
  "dependencies": {
    "next": "^14.2.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@code-shaper/eslint-config": "^1.*",
    "@code-shaper/jest-config": "^1.*",
    "@dword-design/eslint-plugin-import-alias": "^5.0.0",
    "@faker-js/faker": "^8.4.1",
    "@storybook/addon-a11y": "^7.6.17",
    "@storybook/addon-docs": "^7.6.17",
    "@storybook/addon-essentials": "^7.6.17",
    "@storybook/addon-interactions": "^7.6.17",
    "@storybook/addon-links": "^7.6.17",
    "@storybook/blocks": "^7.6.17",
    "@storybook/nextjs": "^7.6.17",
    "@storybook/react": "^7.6.17",
    "@storybook/test": "^7.6.17",
    "@storybook/theming": "^7.6.17",
    "@testing-library/dom": "^9.3.4",
    "@testing-library/jest-dom": "^6.4.2",
    "@testing-library/react": "^14.3.1",
    "@testing-library/user-event": "^14.5.2",
    "@types/jest": "^29.5.12",
    "@types/node": "^20.12.7",
    "@types/react": "^18.2.79",
    "@types/react-dom": "^18.2.25",
<% if (useTailwindcss){ -%>
    "autoprefixer": "^10.4.19",
<% } -%>
    "deepmerge": "^4.3.1",
    "eslint": "^8.57.0",
    "eslint-config-next": "^14.2.1",
    "eslint-plugin-storybook": "^0.8.0",
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0",
    "msw": "^2.2.14",
<% if (useTailwindcss){ -%>
    "postcss": "^8.4.38",
    "postcss-import": "^16.1.0",
<% } -%>
    "storybook": "^7.6.17",
    "storybook-dark-mode": "^3.0.3",
<% if (useTailwindcss){ -%>
    "tailwindcss": "^3.4.3",
<% } -%>
    "ts-jest": "^29.1.2",
    "typescript": "^5.4.5"
  },
  "msw": {
    "workerDirectory": [
      "public"
    ]
  }
}
