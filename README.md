# Code Shaper

A delightful, modular code generator

## Building Code Shaper

```shell
npm ci         # install dependencies
npm run build  # run a full build
npm test       # test
```

> Note: Do not run `npm install` or `npm ci` in any of the subdirectories. It
> will break the build. There should be only one `package-lock.json` file in the
> entire repo (at the root).

## All Commands

```
npm ci                   # install dependencies
npm run build            # builds all workspaces
npm run ci-validate      # builds, lints, formats, and tests all code (simulates CI pipeline, run before pushing to remote)
npm run clean            # deletes all build artifacts
npm run commit           # displays commit helper prompt to ensure your commits use conventional commits
npm run dev              # run demo app
npm run fix              # lints, formats and attempts to fix any issues (requires `npm run build` has been ran)
npm run format           # formats all workspaces, useful for debugging format issues (generally `npm run fix` is preferred)
npm run lint             # runs the linter on all workspaces, useful for debugging lint issues (generally `npm run fix` is preferred)
npm run test             # runs full build, lint, format, and all tests
```

## Common Workflows

### Publishing a package

```shell
npm run build  # run a full build
npm test       # test

# Change working directory to the package that needs to be published, e.g.
cd plugins/react
npm publish  # you will be prompted for an OTP from Google Authenticator
```

#### Package publishing order

1. packages/shaper-utils
2. plugins/repo
3. apps/code-shaper
4. remaining plugins

### Clean build

Removes all build artifacts and performs a clean build.

```shell
npm run clean
npm ci
npm run dev
```

For an "aggressive" clean build, add one more step as shown below. This will
build the lock file from scratch.

```shell
npm run clean
rm package-lock.json
npm install
npm run dev
```

### Running unit tests

```shell
npm test
```

### Linting, formatting and fixing coding issues

```shell
npm run fix
```

### Validating local changes before pushing to remote

```shell
npm run ci-validate
```
