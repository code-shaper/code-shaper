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
    "express": "^4.19.2",
    "morgan": "^1.10.0"
  },
  "devDependencies": {
    "@code-shaper/eslint-config": "^1.*",
    "@code-shaper/jest-config": "^1.*",
    "@code-shaper/typescript-config": "^1.*",
    "@types/cors": "^2.8.17",
    "@types/express": "^4.17.21",
    "@types/jest": "^29.5.12",
    "@types/morgan": "^1.9.9",
    "@types/node": "^20.13.0",
    "eslint": "^8.57.0",
    "jest": "^29.7.0",
    "nodemon": "^3.1.2",
    "ts-jest": "^29.1.4",
    "ts-node": "^10.9.2",
    "typescript": "^5.4.5"
  }
}
