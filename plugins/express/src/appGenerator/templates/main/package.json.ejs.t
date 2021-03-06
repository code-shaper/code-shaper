{
  "name": "<%= packageName %>",
  "description": "<%= itemNameCapitalCase %>",
  "version": "0.0.1",
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "sideEffects": false,
  "license": "MIT",
  "files": [
    "dist/**"
  ],
  "scripts": {
    "dev": "nodemon --watch src -e ts --exec ts-node src/index.ts",
    "build": "rimraf dist && tsc",
    "lint": "eslint src/**/*.ts*",
    "test": "jest --coverage --passWithNoTests",
    "clean": "rimraf .turbo node_modules dist coverage test-output"
  },
  "dependencies": {
    "body-parser": "^1.20.0",
    "cors": "^2.8.5",
    "express": "^4.18.1",
    "morgan": "^1.10.0"
  },
  "devDependencies": {
    "@types/cors": "^2.8.12",
    "@types/express": "^4.17.13",
    "@types/jest": "^28.1.1",
    "@types/morgan": "^1.9.3",
    "@types/node": "^18.0.0",
    "eslint": "^8.17.0",
    "eslint-config-custom": "*",
    "jest": "^28.1.1",
    "jest-config-custom": "*",
    "nodemon": "^2.0.16",
    "ts-jest": "^28.0.5",
    "ts-node": "^10.8.1",
    "typescript": "^4.7.3",
    "typescript-config-custom": "*"
  }
}
