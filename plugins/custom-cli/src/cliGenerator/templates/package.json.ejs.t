{
  "name": "<%= packageName %>",
  "description": "<%= itemNameCapitalCase %>",
  "version": "0.0.1",
  "publishConfig": {
    "access": "public"
  },
  "main": "./dist/index.js",
  "files": [
    "bin/<%= itemName %>",
    "dist",
    "README.md"
  ],
  "bin": {
    "<%= itemName %>": "bin/<%= itemName %>"
  },
  "scripts": {
    "build": "rimraf dist && tsc && copyfiles --all --up 1 \"src/**/templates/**/*\" dist",
    "lint": "eslint src/**/*.ts*",
    "test": "echo No tests in this package yet",
    "clean": "rimraf .turbo node_modules dist coverage test-output"
  },
  "dependencies": {
    "@code-shaper/shaper-utils": "*",
    "inquirer": "^8.2.5",
    "inquirer-directory": "^2.2.0",
    "yargs": "^17.7.1"
  },
  "devDependencies": {
    "@types/jest": "^29.5.1",
    "@types/inquirer": "^8.2.6",
    "@types/node": "^18.16.0",
    "@types/yargs": "^17.0.24",
    "copyfiles": "^2.4.1",
    "eslint": "^8.39.0",
    "eslint-config-custom": "*",
    "jest": "^29.5.0",
    "jest-config-custom": "*",
    "ts-jest": "^29.1.0",
    "typescript": "^5.0.4",
    "typescript-config-custom": "*"
  }
}
