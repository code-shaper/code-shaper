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
    "dev": "npm run bundle -- --watch && npm run copy-css",
    "build": "rimraf dist && npm run bundle && npm run copy-css",
    "lint": "eslint src/**/*.ts*",
    "test": "jest --coverage",
    "bundle": "tsup src/index.ts --format esm,cjs --dts --external react",
    "copy-css": "copyfiles --all --up 1 \"src/**/*.css\" dist",
    "clean": "rimraf .turbo node_modules dist coverage test-output"
  },
  "devDependencies": {
    "@swc/core": "^1.3.42",
    "@storybook/react": "^6.5.9",
    "@testing-library/dom": "^8.13.0",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^14.2.0",
    "@types/jest": "^28.1.1",
    "@types/node": "^18.0.0",
    "@types/react": "^18.0.13",
    "copyfiles": "^2.4.1",
    "eslint": "^8.17.0",
    "eslint-config-custom": "*",
    "jest": "^28.1.1",
    "jest-config-custom": "*",
    "jest-environment-jsdom": "^28.1.1",
    "ts-jest": "^28.0.5",
    "tsup": "^6.1.2",
    "typescript": "^4.7.3",
    "typescript-config-custom": "*"
  },
  "peerDependencies": {
    "react": "^18.*"
  }
}
