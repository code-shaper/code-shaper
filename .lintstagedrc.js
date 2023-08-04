// eslint and prettier modify files and therefore must run sequentially in order
module.exports = {
  './*.{js,ts}': ['eslint --fix', 'prettier --write'],
  './*.{json,md}': 'prettier --write',
};
