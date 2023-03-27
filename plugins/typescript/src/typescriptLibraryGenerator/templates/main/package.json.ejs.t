{
  "name": "<%= packageName %>",
  "description": "<%= itemName %>",
  "version": "0.0.1",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "sideEffects": false,
  "license": "MIT",
  "files": [
    "dist/**"
  ],
  "scripts": {
    "dev": "npm run bundle -- --watch",
    "build": "rimraf dist && npm run bundle",
    "lint": "eslint src/**/*.ts*",
    "test": "jest --coverage",
    "bundle": "tsup src/index.ts --format esm,cjs --dts --external react",
    "clean": "rimraf .turbo node_modules dist coverage test-output"
  },
  "devDependencies": {
    "@swc/core": "^1.3.42",
    "@types/jest": "^27.5.1",
    "@types/node": "^17.0.36",
    "eslint": "^8.16.0",
    "eslint-config-custom": "*",
    "jest": "^28.1.0",
    "jest-config-custom": "*",
    "ts-jest": "^28.0.3",
    "tsup": "^6.1.2",
    "typescript": "^4.7.2",
    "typescript-config-custom": "*"
  }
}
