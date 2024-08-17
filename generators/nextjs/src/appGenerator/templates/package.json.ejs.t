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
    "format": "prettier --list-different '**/*.{css,js,jsx,ts,tsx,json,md}'",
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
    "next": "^14.2.5",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@chromatic-com/storybook": "^1.6.1",
    "@code-shaper/jest-config": "^1.*",
    "@dword-design/eslint-plugin-import-alias": "^5.0.1",
    "@faker-js/faker": "^8.4.1",
    "@storybook/addon-a11y": "^8.2.9",
    "@storybook/addon-docs": "^8.2.9",
    "@storybook/addon-essentials": "^8.2.9",
    "@storybook/addon-interactions": "^8.2.9",
    "@storybook/addon-links": "^8.2.9",
    "@storybook/blocks": "^8.2.9",
    "@storybook/nextjs": "^8.2.9",
    "@storybook/react": "^8.2.9",
    "@storybook/test": "^8.2.9",
    "@storybook/theming": "^8.2.9",
    "@testing-library/dom": "^9.3.4",
    "@testing-library/jest-dom": "^6.4.8",
    "@testing-library/react": "^14.3.1",
    "@testing-library/user-event": "^14.5.2",
    "@types/jest": "^29.5.12",
    "@types/node": "^22.4.0",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
<% if (useTailwindcss){ -%>
    "autoprefixer": "^10.4.20",
<% } -%>
    "deepmerge": "^4.3.1",
    "eslint": "^8.57.0",
    "eslint-config-next": "^14.2.5",
    "eslint-plugin-storybook": "^0.8.0",
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0",
    "msw": "^2.3.5",
<% if (useTailwindcss){ -%>
    "postcss": "^8.4.41",
    "postcss-import": "^16.1.0",
<% } -%>
    "storybook": "^8.2.9",
    "storybook-dark-mode": "^4.0.2",
<% if (useTailwindcss){ -%>
    "tailwindcss": "^3.4.10",
<% } -%>
    "ts-jest": "^29.2.4",
    "typescript": "^5.5.4"
  },
  "msw": {
    "workerDirectory": [
      "public"
    ]
  }
}
