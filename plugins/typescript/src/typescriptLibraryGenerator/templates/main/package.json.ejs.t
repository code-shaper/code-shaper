{
  "name": "<%= packageName %>",
  "description": "<%= itemName %>",
  "version": "0.0.1",
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "sideEffects": false,
  "license": "MIT",
  "files": [
    "dist/**"
  ],
  "scripts": {
    "build": "rimraf dist && tsc",
    "lint": "eslint src/**/*.ts*",
    "test": "jest --coverage",
    "clean": "rimraf .turbo node_modules dist coverage"
  },
  "devDependencies": {
    "@types/jest": "^27.5.1",
    "@types/node": "^17.0.35",
    "eslint": "^8.16.0",
    "eslint-config-custom": "*",
    "jest": "^28.1.0",
    "jest-config-custom": "*",
    "ts-jest": "^28.0.3",
    "typescript": "^4.6.4",
    "typescript-config-custom": "*"
  }
}
