// eslint and prettier modify files and therefore must run sequentially in order

// Following pattern is used to ignore files because lint-staged does not honor .eslintignore
// see https://github.com/okonet/lint-staged/issues/123

const ignoredFiles = [
  '**/expected-output*',
  '**/templates',
  '**/test-output*',
  '/.turbo/',
  '/dist/',
  '/node_modules/',
];

const eslintPattern = `!(${ignoredFiles.join(',')})*.{js,jsx,ts,tsx}`;

module.exports = {
  [eslintPattern]: ['eslint --fix', 'prettier --write'],
  '*.{json,md}': 'prettier --write',
};
