# Code Shaper

A delightful, modular code generator

## Building Code Shaper

### Development Build

```shell
# Run ci in the root directory to install dependencies
npm ci

# Run a full build
npm run build

# Test
npm test
```

### Publishing a package

```shell
# Run a full build
npm run build

# Test
npm test

# Change working directory to the package that needs to be published, e.g.
cd plugins/react
npm publish  # you will be prompted for an OTP from Google Authenticator
```

### Package publishing order

1. packages/shaper-utils
2. plugins/repo
3. apps/code-shaper
4. remaining plugins
