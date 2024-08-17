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
    "build": "rimraf dist && tsc && _copyTemplates",
    "lint": "eslint src/**/*.ts*",
    "test": "echo No tests in this package yet",
    "clean": "rimraf .turbo node_modules dist coverage",
    "_copyTemplates": "copyfiles --all --up 1 \"src/*/templates/**/*\" dist"
  },
  "dependencies": {
    "@code-shaper/shaper-utils": "latest",
    "inquirer": "^8.2.6",
    "inquirer-directory": "^2.2.0",
    "yargs": "^17.7.2"
  },
  "devDependencies": {
    "@code-shaper/eslint-config": "^2.*",
    "@code-shaper/jest-config": "^1.*",
    "@code-shaper/typescript-config": "^1.*",
    "@types/jest": "^29.5.5",
    "@types/inquirer": "^8.2.6",
    "@types/node": "^22.4.0",
    "@types/yargs": "^17.0.24",
    "copyfiles": "^2.4.1",
    "eslint": "^8.57.0",
    "jest": "^29.7.0",
    "ts-jest": "^29.2.4",
    "typescript": "^5.5.4"
  }
}
