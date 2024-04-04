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
    "build": "rimraf dist && run-s bundle copy-css",
    "bundle": "tsup",
    "clean": "rimraf .turbo node_modules dist coverage",
    "copy-css": "copyfiles --all --up 1 \"src/**/*.css\" dist",
    "dev": "npm run bundle -- --watch && npm run copy-css",
    "format": "prettier --list-different '**/*.{js,jsx,ts,tsx,json,md}'",
    "format:fix": "npm run format -- --write",
    "lint": "eslint '**/*.{js,jsx,ts,tsx}'",
    "lint:fix": "npm run lint -- --fix",
    "test": "jest --coverage"
  },
  "dependencies": {
    "clsx": "^1.2.1"
  },
  "devDependencies": {
    "@storybook/react": "^7.4.2",
    "@swc/core": "^1.3.86",
    "@testing-library/dom": "^9.3.3",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^14.0.0",
    "@testing-library/user-event": "^14.5.1",
    "@types/jest": "^29.5.5",
    "@types/node": "^18.17.17",
    "@types/react": "^18.2.22",
    "copyfiles": "^2.4.1",
    "eslint": "^8.49.0",
    "eslint-config-custom": "*",
    "jest": "^29.7.0",
    "jest-config-custom": "*",
    "jest-environment-jsdom": "^29.7.0",
    "ts-jest": "^29.1.1",
    "tsup": "^7.2.0",
    "typescript": "^5.2.2",
    "typescript-config-custom": "*"
  },
  "peerDependencies": {
    "react": "^18.*"
  }
}
