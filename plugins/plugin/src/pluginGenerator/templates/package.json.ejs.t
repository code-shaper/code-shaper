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
    "build": "rimraf dist && tsc --project tsconfig.build.json && copyfiles --all --up 1 \"src/**/templates/**/*\" dist",
    "lint": "eslint src/**/*.ts*",
    "test": "jest",
    "clean": "rimraf .turbo node_modules dist coverage **/test-output"
  },
  "devDependencies": {
    "@code-shaper/shaper-utils": "*",
    "@types/jest": "^28.1.1",
    "@types/inquirer": "^8.2.1",
    "@types/node": "^18.0.0",
    "copyfiles": "^2.4.1",
    "eslint": "^8.17.0",
    "eslint-config-custom": "*",
    "jest": "^28.1.1",
    "jest-config-custom": "*",
    "ts-jest": "^28.0.5",
    "typescript": "^4.7.3",
    "typescript-config-custom": "*"
  },
  "peerDependencies": {
    "inquirer": "^8.x",
    "inquirer-directory": "^2.x"
  },
  "shaper": {}
}
