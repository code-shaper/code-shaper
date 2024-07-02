{
  "name": "<%= packageName %>",
  "description": "<%= itemNameCapitalCase %>",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "build": "run-s _codegen _build",
    "clean": "rimraf .turbo node_modules build coverage src/generated storybook-static",
    "dev": "remix --port=3000 vite:dev",
    "format": "prettier --list-different '**/*.{js,jsx,ts,tsx,json,md}'",
    "format:fix": "npm run format -- --write",
    "lint": "eslint '**/*.{js,jsx,ts,tsx}'",
    "lint:fix": "npm run lint -- --fix",
    "start": "PORT=3000 remix-serve ./build/server/index.js",
    "typecheck": "tsc",
    "_build": "remix vite:build",
    "_codegen": "echo add any code generation steps here"
  },
  "dependencies": {
    "@remix-run/node": "^2.9.2",
    "@remix-run/react": "^2.9.2",
    "@remix-run/serve": "^2.9.2",
    "isbot": "^4.4.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@code-shaper/eslint-config": "^1.*",
    "@dword-design/eslint-plugin-import-alias": "^5.0.0",
    "@remix-run/dev": "^2.9.2",
    "@types/node": "^20.12.11",
    "@types/react": "^18.3.2",
    "@types/react-dom": "^18.3.0",
<% if (useTailwindcss){ -%>
    "autoprefixer": "^10.4.19",
<% } -%>
    "eslint": "^8.57.0",
    "jest": "^29.7.0",
<% if (useTailwindcss){ -%>
    "postcss": "^8.4.38",
    "postcss-import": "^16.1.0",
    "tailwindcss": "^3.4.3",
<% } -%>
    "typescript": "^5.4.5",
    "vite": "^5.2.11",
    "vite-tsconfig-paths": "^4.3.2"
  },
  "engines": {
    "npm": "10.2.3",
    "node": "20.10.0"
  }
}
