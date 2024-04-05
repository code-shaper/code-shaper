{
  "name": "<%= packageName %>",
  "description": "<%= repoNameCapitalCase %> End-to-End Tests",
  "private": true,
  "version": "0.0.1",
  "scripts": {
    "clean": "rimraf .turbo node_modules playwright-report test-results",
    "ci-validate": "run-s _playwright-install e2e",
    "codegen": "playwright codegen",
    "e2e": "playwright test",
    "e2e:ui": "playwright test --ui",
    "format": "prettier --list-different '**/*.{js,jsx,ts,tsx,json,md}'",
    "format:fix": "npm run format -- --write",
    "lint": "eslint '**/*.{js,jsx,ts,tsx}'",
    "lint:fix": "npm run lint -- --fix",
    "show-report": "playwright show-report",
    "_playwright-install": "npx playwright install-deps && npx playwright install"
  },
  "dependencies": {},
  "devDependencies": {
    "@playwright/test": "^1.43.0",
    "dotenv": "16.4.5",
    "eslint": "^8.57.0",
    "@code-shaper/eslint-config": "^1.*",
    "typescript": "^5.4.4",
    "@code-shaper/typescript-config": "^1.*"
  }
}
