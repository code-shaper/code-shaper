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
    "build": "rimraf dist && run-s _bundle _copyTemplates",
    "clean": "rimraf --glob .turbo node_modules dist coverage ./**/test-output*",
    "format": "prettier --list-different '**/*.{js,jsx,ts,tsx,json,md}'",
    "format:fix": "npm run format -- --write",
    "lint": "eslint '**/*.{js,jsx,ts,tsx}'",
    "lint:fix": "npm run lint -- --fix",
    "test": "jest",
    "_bundle": "tsc --project tsconfig.build.json",
    "_copyTemplates": "copyfiles --all --up 1 \"src/*/templates/**/*\" dist"
  },
  "dependencies": {
    "@code-shaper/shaper-utils": "latest",
    "inquirer": "^8.2.6",
    "inquirer-directory": "^2.2.0"
  },
  "devDependencies": {
    "@types/jest": "^29.5.5",
    "@types/inquirer": "^8.2.6",
    "@types/node": "^20.6.2",
    "copyfiles": "^2.4.1",
    "eslint": "^8.57.0",
    "@code-shaper/eslint-config": "^1.*",
    "jest": "^29.7.0",
    "@code-shaper/jest-config": "^1.*",
    "ts-jest": "^29.1.1",
    "typescript": "^5.2.2",
    "@code-shaper/typescript-config": "^1.*"
  },
  "shaper": {}
}
