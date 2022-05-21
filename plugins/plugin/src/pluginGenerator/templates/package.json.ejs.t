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
    "clean": "rimraf .turbo node_modules dist"
  },
  "dependencies": {
    "@code-shaper/shaper-utils": "latest",
    "inquirer": "^8.2.4",
    "yargs": "^17.5.1"
  },
  "devDependencies": {
    "@types/inquirer": "^8.2.1",
    "@types/node": "^17.0.35",
    "@types/yargs": "^17.0.10",
    "copyfiles": "^2.4.1",
    "eslint": "^8.16.0",
    "eslint-config-custom": "*",
    "typescript": "^4.6.4",
    "typescript-config": "*"
  }
}
