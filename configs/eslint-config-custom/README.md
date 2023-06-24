# eslint-config-custom

This package publishes 3 shared ESLint configurations from which all other
`.eslintrc.js`'s inherit.

1. `eslint-config-custom`: This is the default configuration and points to
   `eslint-config-lenient`.
2. `eslint-config-lenient`: A rather lenient configuration which can be used
   with code bases that don't follow very opinionated coding conventions.
3. `eslint-config-strict`: A stricter configuration intended for code bases that
   follow very opinionated coding conventions.

To switch from `lenient` to `strict` configuration, simply change line 1 in
`./index.js` to `module.exports = require('./strict');`. This will change the
entire repo to enforce strict coding conventions. You can also opt to switch
over gradually by specifying `strict` mode one workspace at a time. To do this,
change the `.eslintrc.js` file of the desired workspace to extend
`custom/strict` instead of `custom`.

## Plugins

This config pulls in the following eslint rules/plugins. In addition to these
plugins, there are a few customizations that have been made to select individual
rules. These customizations and all rules used are clearly marked in the
package's [lenient.js](lenient.js) & [strict.js](strict.js).

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
