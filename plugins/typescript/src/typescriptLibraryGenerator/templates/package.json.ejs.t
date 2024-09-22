{
  "name": "<%= packageName %>",
  "description": "<%= itemName %>",
  "version": "0.0.1",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "sideEffects": false,
  "files": [
    "dist",
    "README.md"
  ],
  "scripts": {
    "build": "rimraf dist && run-s bundle",
    "bundle": "tsup",
    "clean": "rimraf .turbo node_modules dist coverage",
    "dev": "npm run bundle -- --watch",
    "format": "prettier --list-different '**/*.{js,jsx,ts,tsx,json,md}'",
    "format:fix": "npm run format -- --write",
    "lint": "eslint '**/*.{js,ts}'",
    "lint:fix": "npm run lint -- --fix",
    "test": "jest --coverage"
  },
  "devDependencies": {
    "@code-shaper/jest-config": "^1.*",
    "@code-shaper/typescript-config": "^1.*",
    "@swc/core": "^1.7.26",
    "@types/jest": "^29.5.13",
    "@types/node": "^22.5.5",
    "eslint": "^8.57.1",
    "jest": "^29.7.0",
    "ts-jest": "^29.2.5",
    "tsup": "^7.3.0",
    "typescript": "^5.6.2"
  }
}
