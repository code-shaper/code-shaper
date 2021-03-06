{
  "name": "<%= packageName %>",
  "description": "<%= itemNameCapitalCase %>",
  "version": "0.0.1",
  "publishConfig": {
    "access": "public"
  },
  "main": "./dist/index.js",
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
    "inquirer": "^8.2.4",
    "inquirer-directory": "^2.2.0",
    "yargs": "^17.5.1"
  },
  "devDependencies": {
    "@types/jest": "^27.5.1",
    "@types/inquirer": "^8.2.1",
    "@types/node": "^17.0.36",
    "@types/yargs": "^17.0.10",
    "copyfiles": "^2.4.1",
    "eslint": "^8.16.0",
    "eslint-config-custom": "*",
    "jest": "^28.1.0",
    "jest-config-custom": "*",
    "ts-jest": "^28.0.3",
    "typescript": "^4.7.2",
    "typescript-config-custom": "*"
  }
}
