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
    "clean": "rimraf .turbo node_modules dist"
  },
  "peerDependencies": {
    "react": "^18.1.0"
  },
  "devDependencies": {
    "@storybook/react": "next",
    "@testing-library/dom": "^8.13.0",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.2.0",
    "@testing-library/user-event": "^14.1.1",
    "@types/jest": "^27.5.0",
    "@types/node": "^17.0.33",
    "@types/react": "^18.0.9",
    "copyfiles": "^2.4.1",
    "eslint": "^8.15.0",
    "eslint-config-custom": "*",
    "jest": "^27.5.1",
    "ts-jest": "^27.1.4",
    "typescript": "^4.6.4",
    "typescript-config": "*"
  }
}
