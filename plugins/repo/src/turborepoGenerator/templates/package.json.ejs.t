{
  "name": "<%= itemName %>",
  "description": "",
  "version": "0.0.1",
  "private": true,
  "repository": {
    "type": "git",
    "url": "https://github.com/<%= itemName %>/<%= itemName %>"
  },
  "workspaces": [
    "apps/*",
    "configs/*",
    "packages/*",
    "plugins/*"
  ],
  "scripts": {
    "build": "turbo run build",
    "ci-validate": "run-s _ci-validate:root _ci-validate:rest",
    "clean": "run-s _clean:rest _clean:root",
    "commit": "cz",
    "dev": "turbo run dev --concurrency 100",
    "e2e": "turbo run e2e",
    "e2e:ui": "turbo run e2e:ui",
    "fix": "run-s _fix:root _fix:rest",
    "format": "run-s _format:root _format:rest",
    "graph": "turbo run build --graph",
    "lint": "run-s _lint:root _lint:rest",
    "postdeploy": "turbo run postdeploy",
    "prepare": "husky install",
    "test": "turbo run test",
    "_ci-validate:rest": "turbo run ci-validate",
    "_ci-validate:root": "run-s _lint:root _format:root",
    "_clean:rest": "turbo run clean",
    "_clean:root": "rimraf node_modules",
    "_fix:rest": "turbo run fix",
    "_fix:root": "run-s _lint:root:fix _format:root:fix",
    "_format:rest": "turbo run format",
    "_format:root": "prettier --list-different '**/*.{js,jsx,ts,tsx,json,md}' '!apps/**/*.*' '!packages/**/*.*' '!plugins/**/*.*'",
    "_format:root:fix": "npm run --silent _format:root -- --write",
    "_lint:rest": "turbo run lint",
    "_lint:root": "eslint '**/*.{js,jsx,ts,tsx}' --ignore-pattern '/apps/' --ignore-pattern '/packages/' --ignore-pattern '/plugins/'",
    "_lint:root:fix": "npm run --silent _lint:root -- --fix"
  },
  "devDependencies": {
    "@commitlint/cz-commitlint": "^17.5.0",
    "@typescript-eslint/eslint-plugin": "^5.61.0",
    "code-shaper": "latest",
    "commitizen": "^4.3.0",
    "commitlint": "^17.6.6",
    "eslint": "^8.44.0",
    "eslint-config-custom": "*",
    "husky": "^8.0.3",
    "lint-staged": "^13.2.3",
    "npm-run-all": "^4.1.5",
    "prettier": "^2.8.8",
    "rimraf": "^5.0.1",
    "turbo": "latest"
  },
  "overrides": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "engines": {
    "npm": "9.5.1",
    "node": "18.16.0"
  },
  "config": {
    "commitizen": {
      "path": "@commitlint/cz-commitlint"
    }
  }
}
