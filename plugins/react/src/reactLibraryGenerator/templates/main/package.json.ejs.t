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
    "dist",
    "README.md"
  ],
  "scripts": {
    "dev": "npm run bundle -- --watch && npm run copy-css",
    "build": "rimraf dist && npm run bundle && npm run copy-css",
    "lint": "eslint src/**/*.ts*",
    "test": "jest --coverage",
    "bundle": "tsup src/index.ts --format esm,cjs --dts --external react --inject ./react-import.js",
    "copy-css": "copyfiles --all --up 1 \"src/**/*.css\" dist",
    "clean": "rimraf .turbo node_modules dist coverage"
  },
  "devDependencies": {
    "@storybook/react": "^7.0.7",
    "@swc/core": "^1.3.53",
    "@testing-library/dom": "^9.2.0",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^14.0.0",
    "@testing-library/user-event": "^14.4.3",
    "@types/jest": "^29.5.1",
    "@types/node": "^18.16.0",
    "@types/react": "^18.0.38",
    "copyfiles": "^2.4.1",
    "eslint": "^8.39.0",
    "eslint-config-custom": "*",
    "jest": "^29.5.0",
    "jest-config-custom": "*",
    "jest-environment-jsdom": "^29.5.0",
    "ts-jest": "^29.1.0",
    "tsup": "^6.7.0",
    "typescript": "^5.0.4",
    "typescript-config-custom": "*"
  },
  "peerDependencies": {
    "react": "^18.*"
  }
}
