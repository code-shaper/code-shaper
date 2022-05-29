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
    "build": "rimraf dist && tsc && copyfiles --all --up 1 \"src/**/*.css\" dist",
    "lint": "eslint src/**/*.ts*",
    "test": "jest --coverage",
    "clean": "rimraf .turbo node_modules dist coverage test-output"
  },
  "devDependencies": {
    "@storybook/react": "^6.5.5",
    "@testing-library/dom": "^8.13.0",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^14.2.0",
    "@types/jest": "^27.5.1",
    "@types/node": "^17.0.36",
    "@types/react": "^18.0.9",
    "copyfiles": "^2.4.1",
    "eslint": "^8.16.0",
    "eslint-config-custom": "*",
    "jest": "^28.1.0",
    "jest-config-custom": "*",
    "jest-environment-jsdom": "^28.1.0",
    "ts-jest": "^28.0.3",
    "typescript": "^4.7.2",
    "typescript-config-custom": "*"
  },
  "peerDependencies": {
    "react": "^18.*"
  }
}
