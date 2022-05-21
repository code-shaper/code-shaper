{
  "name": "<%= packageName %>",
  "description": "<%= pluginName %> plugin",
  "version": "0.0.1",
  "license": "MIT",
  "publishConfig": {
    "access": "public"
  },
  "main": "./dist/index.js",
  "scripts": {
    "build": "rimraf dist && tsc && copyfiles --all --up 1 \"src/**/templates/**/*\" dist",
    "lint": "eslint src/**/*.ts*",
    "test": "jest --coverage",
    "clean": "rimraf .turbo node_modules dist"
  },
  "dependencies": {
    "@code-shaper/shaper-utils": "latest",
    "inquirer": "^8.2.4",
    "yargs": "^17.5.1"
  },
  "devDependencies": {
    "@types/jest": "^27.5.1",
    "@types/inquirer": "^8.2.1",
    "@types/node": "^17.0.35",
    "@types/yargs": "^17.0.10",
    "copyfiles": "^2.4.1",
    "eslint": "^8.16.0",
    "eslint-config-custom": "*",
    "jest": "^28.1.0",
    "jest-config": "*",
    "ts-jest": "^28.0.2",
    "typescript": "^4.6.4",
    "typescript-config": "*"
  }
}
