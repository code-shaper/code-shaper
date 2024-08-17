# eslint-config

This package publishes 4 shared ESLint configurations:

1. `@code-shaper/eslint-config`: Default configuration pointing to
   `@code-shaper/eslint-config-lenient`
2. `@code-shaper/eslint-config-lenient`: A lenient configuration for code bases
   that don't follow very opinionated coding conventions
3. `@code-shaper/eslint-config-strict`: A strict configuration for code bases
   that follow very opinionated coding conventions
4. `@code-shaper/eslint-config/strict-react`: The strict configuration +
   additional rules for React.

## Installation

```shell
npm install -D @code-shaper/eslint-config
```

Then modify your `.eslintrc.js` to extend one of the above configurations, e.g.

```js
module.exports = {
  root: true,
  env: { node: true },
  extends: ['@code-shaper/eslint-config/strict-react'],
};
```

Add the following dependencies to your `package.json`:

```json
{
  "dependencies": {
    "@typescript-eslint/eslint-plugin": "^8.*",
    "eslint": "^8.*",
    "eslint-config-prettier": "^9.*",
    "eslint-import-resolver-typescript": "^3.*",
    "eslint-plugin-eslint-comments": "^3.*",
    "eslint-plugin-import": "^2.*",
    "eslint-plugin-jest": "^28.*",
    "eslint-plugin-jest-dom": "^5.*",
    "eslint-plugin-jsx-a11y": "^6.*",
    "eslint-plugin-only-error": "^1.*",
    "eslint-plugin-promise": "^7.*",
    "eslint-plugin-react": "^7.*",
    "eslint-plugin-react-hooks": "^4.*",
    "eslint-plugin-regexp": "^2.*",
    "eslint-plugin-tailwindcss": "^3.*",
    "eslint-plugin-testing-library": "^6.*"
  }
}
```

> Note: If you are using `eslint-config-next` version 14, you may have to
> downgrade `@typescript-eslint/eslint-plugin` to version 7.
> `eslint-config-next` does not support `@typescript-eslint/eslint-plugin`
> version 8 yet.

## Plugins

This config pulls in the following eslint rules/plugins. In addition to these
plugins, there are a few customizations that have been made to select individual
rules. These customizations and rules are clearly marked in the source code.

### eslint

Applies the following [rules](https://eslint.org/docs/latest/rules/) to all
JavaScript and TypeScript files:

- all recommended rules
- all automatically fixable rules

### eslint-plugin-typescript

Applies the following [rules](https://typescript-eslint.io/rules/) to all
Typescript files:

- all recommended rules
- all recommended-requiring-type-checking rules
- all strict rules
- all automatically fixable rules

### eslint-plugin-import

Applies the following [rules](https://github.com/import-js/eslint-plugin-import)
to all JavaScript and TypeScript files:

- all recommended rules
- all typescript rules (only applied to TypeScript files)
- all react rules (only applied to TypeScript files)
- all automatically fixable rules

### eslint-plugin-promise

Applies the following
[rules](https://github.com/eslint-community/eslint-plugin-promise) to all
JavaScript and TypeScript files:

- all recommended rules
- all automatically fixable rules

### eslint-plugin-regexp

Applies the following [rules](https://github.com/ota-meshi/eslint-plugin-regexp)
to all JavaScript and TypeScript files:

- all recommended rules
- all automatically fixable rules

### eslint-plugin-eslint-comments

Applies the following
[rules](https://github.com/mysticatea/eslint-plugin-eslint-comments) to all
JavaScript and TypeScript files:

- all recommended rules
- all automatically fixable rules

### eslint-plugin-jsx-a11y

Applies the following
[rules](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) to all TypeScript
files:

- all recommended rules
- all automatically fixable rules

### eslint-plugin-react

Applies the following [rules](https://github.com/jsx-eslint/eslint-plugin-react)
to all TypeScript files:

- all recommended rules
- all jsx-runtime rules
- all automatically fixable rules

### eslint-plugin-react-hooks

Applies the following
[rules](https://www.npmjs.com/package/eslint-plugin-react-hooks) to all
TypeScript files:

- all recommended rules
- all automatically fixable rules

### eslint-plugin-jest

Applies the following
[rules](https://github.com/jest-community/eslint-plugin-jest) to all JavaScript
and TypeScript test files:

- all recommended rules
- all style rules
- all automatically fixable rules

### eslint-plugin-jest-dom

Applies the following
[rules](https://github.com/testing-library/eslint-plugin-jest-dom) to all
JavaScript and TypeScript test files:

- all recommended rules
- all automatically fixable rules

### eslint-plugin-testing-library

Applies the following
[rules](https://github.com/testing-library/eslint-plugin-testing-library) to all
JavaScript and TypeScript test files:

- all react rules
- all automatically fixable rules

### eslint-plugin-tailwindcss

Applies the following
[rules](https://github.com/francoismassart/eslint-plugin-tailwindcss) to all
TypeScript files:

- all recommended rules
- all automatically fixable rules

### eslint-config-prettier

Applies the
[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
plugin to disable all rules that would be covered by or would conflict with
[prettier](https://prettier.io/docs/en/configuration.html). It is recommended to
run prettier separately, _after_ running eslint.

### eslint-plugin-only-error

Applies the
[only-error](https://github.com/davidjbradshaw/eslint-plugin-only-error) plugin
to treat _all_ lint warnings as errors.
