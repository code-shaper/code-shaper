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
    "dev": "turbo run dev",
    "graph": "turbo run build --graph",
    "lint": "turbo run lint",
    "test": "turbo run test",
    "clean": "turbo run clean && rimraf node_modules",
    "prepare": "husky install",
    "format": "prettier --write \"**/README.md\" \"**/src/**/*.{js,jsx,ts,tsx,json}\""
  },
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^5.60.0",
    "eslint": "^8.43.0",
    "eslint-config-custom": "*",
    "husky": "^8.0.3",
    "lint-staged": "^13.2.2",
    "prettier": "^2.8.8",
    "rimraf": "^5.0.1",
    "turbo": "latest"
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx,json}": "prettier --write"
  },
  "engines": {
    "npm": ">=8.0.0",
    "node": ">=16.0.0"
  },
  "packageManager": "npm@8.15.0"
}
