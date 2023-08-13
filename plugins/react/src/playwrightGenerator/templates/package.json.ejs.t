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
    "@playwright/test": "^1.37.0",
    "dotenv": "16.3.1",
    "eslint": "^8.43.0",
    "eslint-config-custom": "*",
    "typescript": "^5.1.3",
    "typescript-config-custom": "*"
  }
}
