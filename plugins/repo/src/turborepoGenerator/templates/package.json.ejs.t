{
  "name": "<%= itemName %>",
  "description": "",
  "version": "0.0.1",
  "license": "MIT",
  "workspaces": [
    "apps/*",
    "configs/*",
    "packages/*",
    "plugins/*"
  ],
  "scripts": {
    "build": "turbo run build",
    "dev": "turbo run dev --parallel",
    "graph": "turbo run build --graph",
    "lint": "turbo run lint",
    "test": "turbo run test",
    "clean": "turbo run clean && rimraf node_modules",
    "format": "prettier --write \"**/README.md\" \"**/src/**/*.{js,jsx,ts,tsx,json}\""
  },
  "devDependencies": {
    "prettier": "^2.6.2",
    "rimraf": "^3.0.2",
    "turbo": "latest"
  },
  "engines": {
    "npm": ">=7.0.0",
    "node": ">=14.0.0"
  },
  "packageManager": "npm@8.4.0"
}
