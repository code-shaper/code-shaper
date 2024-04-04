// eslint and prettier modify files and therefore must run sequentially in order
module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{json,md}': 'prettier --write',
};
