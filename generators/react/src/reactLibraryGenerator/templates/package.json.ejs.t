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
    "@storybook/react": "^7.6.17",
    "@swc/core": "^1.4.12",
    "@testing-library/dom": "^9.3.4",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^14.2.2",
    "@testing-library/user-event": "^14.5.2",
    "@types/jest": "^29.5.12",
    "@types/node": "^20.12.4",
    "@types/react": "^18.2.74",
    "copyfiles": "^2.4.1",
    "eslint": "^8.57.0",
    "@code-shaper/eslint-config": "^1.*",
    "jest": "^29.7.0",
    "@code-shaper/jest-config": "^1.*",
    "jest-environment-jsdom": "^29.7.0",
    "ts-jest": "^29.1.2",
    "tsup": "^7.2.0",
    "typescript": "^5.4.4",
    "@code-shaper/typescript-config": "^1.*"
  },
  "peerDependencies": {
    "react": "^18.*"
  }
}
