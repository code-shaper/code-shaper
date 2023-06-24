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
    "dev": "npm run bundle -- --watch",
    "build": "rimraf dist && npm run bundle",
    "lint": "eslint src/**/*.ts*",
    "test": "jest --coverage",
    "bundle": "tsup src/index.ts --format esm,cjs --dts --external react",
    "clean": "rimraf .turbo node_modules dist coverage"
  },
  "devDependencies": {
    "@swc/core": "^1.3.53",
    "@types/jest": "^29.5.1",
    "@types/node": "^18.16.0",
    "eslint": "^8.39.0",
    "eslint-config-custom": "*",
    "jest": "^29.5.0",
    "jest-config-custom": "*",
    "ts-jest": "^29.1.0",
    "tsup": "^6.7.0",
    "typescript": "^5.0.4",
    "typescript-config-custom": "*"
  }
}
