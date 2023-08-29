{
  "name": "<%= packageName %>",
  "description": "<%= itemNameCapitalCase %>",
  "version": "0.0.1",
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "sideEffects": false,
  "files": [
    "dist/**"
  ],
  "scripts": {
    "build": "rimraf dist && tsc",
    "clean": "rimraf .turbo node_modules dist coverage",
    "dev": "nodemon --watch src -e ts --exec ts-node src/index.ts",
    "format": "prettier --list-different '**/*.{js,jsx,ts,tsx,json,md}'",
    "format:fix": "npm run format -- --write",
    "lint": "eslint '**/*.{js,jsx,ts,tsx}'",
    "lint:fix": "npm run lint -- --fix",
    "start": "node dist",
    "test": "jest --coverage --passWithNoTests"
  },
  "dependencies": {
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "morgan": "^1.10.0"
  },
  "devDependencies": {
    "@types/cors": "^2.8.13",
    "@types/express": "^4.17.17",
    "@types/jest": "^29.5.4",
    "@types/morgan": "^1.9.5",
    "@types/node": "^20.5.7",
    "eslint": "^8.48.0",
    "eslint-config-custom": "*",
    "jest": "^29.6.4",
    "jest-config-custom": "*",
    "nodemon": "^3.0.1",
    "ts-jest": "^29.1.1",
    "ts-node": "^10.9.1",
    "typescript": "^5.2.2",
    "typescript-config-custom": "*"
  }
}
