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
    "dev": "nodemon --watch src -e ts --exec ts-node src/index.ts",
    "build": "rimraf dist && tsc",
    "lint": "eslint src/**/*.ts*",
    "test": "jest --coverage --passWithNoTests",
    "clean": "rimraf .turbo node_modules dist coverage"
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
    "@types/jest": "^29.5.2",
    "@types/morgan": "^1.9.4",
    "@types/node": "^18.16.18",
    "eslint": "^8.43.0",
    "eslint-config-custom": "*",
    "jest": "^29.5.0",
    "jest-config-custom": "*",
    "nodemon": "^2.0.22",
    "ts-jest": "^29.1.0",
    "ts-node": "^10.9.1",
    "typescript": "^5.1.3",
    "typescript-config-custom": "*"
  }
}