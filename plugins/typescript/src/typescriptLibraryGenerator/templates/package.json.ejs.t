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
    "copy-css": "copyfiles --all --up 1 \"src/**/*.css\" dist",
    "dev": "npm run bundle -- --watch",
    "format": "prettier --list-different '**/*.{js,jsx,ts,tsx,json,md}'",
    "format:fix": "npm run format -- --write",
    "lint": "eslint '**/*.{js,ts}'",
    "lint:fix": "npm run lint -- --fix",
    "test": "jest --coverage"
  },
  "devDependencies": {
    "@swc/core": "^1.3.66",
    "@types/jest": "^29.5.2",
    "@types/node": "^18.16.18",
    "eslint": "^8.43.0",
    "eslint-config-custom": "*",
    "jest": "^29.5.0",
    "jest-config-custom": "*",
    "ts-jest": "^29.1.0",
    "tsup": "^7.2.0",
    "typescript": "^5.1.3",
    "typescript-config-custom": "*"
  }
}
