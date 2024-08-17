{
  "name": "<%= packageName %>",
  "description": "<%= itemNameCapitalCase %>",
  "version": "0.0.1",
  "main": "index.js",
  "sideEffects": false,
  "scripts": {
    "build": "tsup",
    "clean": "rimraf .turbo node_modules dist coverage",
    "dev": "nodemon",
    "format": "prettier --list-different '**/*.{js,jsx,ts,tsx,json,md}'",
    "format:fix": "npm run format -- --write",
    "lint": "eslint '**/*.{js,jsx,ts,tsx}'",
    "lint:fix": "npm run lint -- --fix",
    "start": "node dist/index.js",
    "test": "jest --coverage --passWithNoTests"
  },
  "dependencies": {
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "express": "^4.19.2",
    "morgan": "^1.10.0",
    "tslib": "^2.6.3"
  },
  "devDependencies": {
    "@code-shaper/eslint-config": "^2.*",
    "@code-shaper/jest-config": "^1.*",
    "@code-shaper/typescript-config": "^1.*",
    "@dword-design/eslint-plugin-import-alias": "^5.0.0",
    "@types/cors": "^2.8.17",
    "@types/express": "^4.17.21",
    "@types/jest": "^29.5.12",
    "@types/morgan": "^1.9.9",
    "@types/node": "^22.4.0",
    "eslint": "^8.57.0",
    "jest": "^29.7.0",
    "nodemon": "^3.1.2",
    "tsup": "^8.1.0",
    "typescript": "^5.5.4"
  }
}
