{
  "name": "<%= itemName %>",
  "description": "<%= itemNameCapitalCase %>",
  "version": "0.0.1",
  "private": true,
  "repository": {
    "type": "git",
    "url": "https://github.com/<%= itemName %>/<%= itemName %>"
  },
  "workspaces": [
    "apps/*",
    "packages/*",
    "plugins/*"
  ],
  "scripts": {
    "build": "turbo run build",
    "build-storybook": "turbo run build-storybook",
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
    "pkg-check": "manypkg check",
    "pkg-fix": "manypkg fix",
    "prepare": "husky install",
    "storybook": "turbo run storybook",
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
  "dependencies": {
    "@code-shaper/commitlint-config": "^1.*",
    "@code-shaper/eslint-config": "^1.*",
    "@commitlint/cz-commitlint": "^19.2.0",
    "@manypkg/cli": "^0.21.4",
    "@typescript-eslint/eslint-plugin": "^5.62.0",
    "code-shaper": "^1.*",
    "commitizen": "^4.3.0",
    "commitlint": "^19.2.2",
    "eslint": "^8.57.0",
    "husky": "^8.0.3",
    "lint-staged": "^15.2.2",
    "npm-run-all": "^4.1.5",
    "prettier": "^2.8.8",
    "rimraf": "^5.0.5",
    "turbo": "^1.*"
  },
  "engines": {
    "npm": "10.2.3",
    "node": "20.10.0"
  }
}
