{
  "name": "<%= packageName %>",
  "description": "<%= itemNameCapitalCase %>",
  "version": "0.0.1",
  "main": "index.js",
  "scripts": {
    "build": "run-s _codegen _build",
    "clean": "rimraf .turbo node_modules dist coverage src/generated",
    "dev": "nodemon",
    "format": "prettier --list-different '**/*.{js,jsx,ts,tsx,json,md}'",
    "format:fix": "npm run format -- --write",
    "lint": "eslint '**/*.{js,jsx,ts,tsx}'",
    "lint:fix": "npm run lint -- --fix",
    "start": "node dist/index.js",
    "test": "jest --coverage --passWithNoTests",
    "_build": "tsup",
    "_codegen": "graphql-codegen --config codegen.ts"
  },
  "dependencies": {
    "@apollo/server": "^4.10.4",
    "graphql": "^16.8.1",
    "graphql-tag": "latest",
    "tslib": "^2.6.3"
  },
  "devDependencies": {
    "@code-shaper/eslint-config": "^2.*",
    "@code-shaper/jest-config": "^1.*",
    "@code-shaper/typescript-config": "^1.*",
    "@dword-design/eslint-plugin-import-alias": "^5.0.0",
    "@graphql-codegen/cli": "^5.0.2",
    "@graphql-eslint/eslint-plugin": "^3.20.1",
    "@graphql-codegen/typescript": "^4.0.7",
    "@graphql-codegen/typescript-resolvers": "^4.1.0",
    "@types/jest": "^29.5.12",
    "@types/node": "^22.4.0",
    "eslint": "^8.57.0",
    "jest": "^29.7.0",
    "nodemon": "^3.1.2",
    "tsup": "^8.1.0",
    "typescript": "^5.5.4"
  }
}
