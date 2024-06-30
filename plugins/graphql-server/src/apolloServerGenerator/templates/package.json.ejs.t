{
  "name": "<%= packageName %>",
  "description": "<%= itemNameCapitalCase %>",
  "version": "0.0.1",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "run-s _codegen _build",
    "clean": "rimraf .turbo node_modules dist coverage",
    "dev": "nodemon --watch \"src/**\" --ext \"ts,json,graphql\" --exec \"npm run build && npm run start\" --ignore ./src/generated/",
    "format": "prettier --list-different '**/*.{js,jsx,ts,tsx,json,md}'",
    "format:fix": "npm run format -- --write",
    "lint": "eslint '**/*.{js,jsx,ts,tsx}'",
    "lint:fix": "npm run lint -- --fix",
    "start": "node dist/index.js",
    "test": "jest --coverage --passWithNoTests",
    "_build": "tsc",
    "_codegen": "graphql-codegen --config codegen.ts"
  },
  "dependencies": {
    "@apollo/server": "^4.10.4",
    "graphql": "^16.8.1",
    "graphql-tag": "latest"
  },
  "devDependencies": {
    "@code-shaper/eslint-config": "^1.*",
    "@code-shaper/jest-config": "^1.*",
    "@code-shaper/typescript-config": "^1.*",
    "@dword-design/eslint-plugin-import-alias": "^5.0.0",
    "@graphql-codegen/cli": "^5.0.2",
    "@graphql-eslint/eslint-plugin": "^3.20.1",
    "@graphql-codegen/typescript": "^4.0.7",
    "@graphql-codegen/typescript-resolvers": "^4.1.0",
    "@types/jest": "^29.5.12",
    "@types/node": "^20.14.0",
    "eslint": "^8.57.0",
    "jest": "^29.7.0",
    "nodemon": "^3.1.2",
    "ts-jest": "^29.1.4",
    "ts-node": "^10.9.2",
    "typescript": "^5.4.5"
  }
}
