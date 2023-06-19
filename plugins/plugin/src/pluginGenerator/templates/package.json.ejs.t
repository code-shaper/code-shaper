{
  "name": "<%= packageName %>",
  "description": "<%= pluginName %> plugin",
  "version": "0.0.1",
  "publishConfig": {
    "access": "public"
  },
  "main": "./dist/index.js",
  "files": [
    "dist",
    "README.md"
  ],
  "scripts": {
    "build": "rimraf dist && tsc --project tsconfig.build.json && copyfiles --all --up 1 \"src/**/templates/**/*\" dist",
    "lint": "eslint src/**/*.ts*",
    "test": "jest",
    "clean": "rimraf .turbo node_modules dist coverage */**/test-output"
  },
  "devDependencies": {
    "@code-shaper/shaper-utils": "*",
    "@types/jest": "^29.5.2",
    "@types/inquirer": "^8.2.6",
    "@types/node": "^18.16.18",
    "copyfiles": "^2.4.1",
    "eslint": "^8.43.0",
    "eslint-config-custom": "*",
    "jest": "^29.5.0",
    "jest-config-custom": "*",
    "ts-jest": "^29.1.0",
    "typescript": "^5.1.3",
    "typescript-config-custom": "*"
  },
  "peerDependencies": {
    "inquirer": "^8.x",
    "inquirer-directory": "^2.x"
  },
  "shaper": {}
}
