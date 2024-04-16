const baseFixableRules = {
  'arrow-body-style': 'error',
  'capitalized-comments': 'error',
  curly: 'error',
  'dot-notation': 'error',
  eqeqeq: 'error',
  'logical-assignment-operators': 'error',
  'multiline-comment-style': 'error',
  'no-confusing-arrow': 'error',
  'no-div-regex': 'error',
  'no-else-return': 'error',
  'no-extra-bind': 'error',
  'no-extra-label': 'error',
  'no-floating-decimal': 'error',
  'no-implicit-coercion': 'error',
  'no-lonely-if': 'error',
  'no-undef-init': 'error',
  'no-unneeded-ternary': 'error',
  'no-useless-computed-key': 'error',
  'no-useless-rename': 'error',
  'no-useless-return': 'error',
  'no-var': 'error',
  'object-shorthand': 'error',
  'one-var': 'error',
  'one-var-declaration-per-line': 'error',
  'operator-assignment': 'error',
  'prefer-arrow-callback': 'error',
  'prefer-const': 'error',
  'prefer-destructuring': 'error',
  'prefer-exponentiation-operator': 'error',
  'prefer-numeric-literals': 'error',
  'prefer-object-has-own': 'error',
  'prefer-object-spread': 'error',
  'prefer-template': 'error',
  'quote-props': 'error',
  'sort-imports': 'error',
  'sort-vars': 'error',
  'spaced-comment': 'error',
  strict: 'error',
  yoda: 'error',
};

const baseCustomRules = {
  camelcase: 'error',
  'capitalized-comments': 'off',
  'consistent-return': 'error',
  'no-constant-binary-expression': 'error',
  'no-empty-function': 'error',
  'no-loop-func': 'error',
  'no-proto': 'error',
  'no-restricted-syntax': [
    'error',
    {
      selector:
        ':not(BinaryExpression:matches([operator="!=="], [operator="==="])) > Literal[value=null]',
      message:
        'Usage of "null" is deprecated except when received from legacy APIs; use "undefined" instead',
    },
  ],
  'no-return-await': 'error',
  'no-use-before-define': 'error',
  'no-useless-call': 'error',
  'no-useless-constructor': 'error',
  'one-var': 'off',
  'sort-imports': 'off',
  'sort-vars': 'off',
};

/*
 * eslint-comments has no fixable rules, hence we don't have
 * a commentsFixableRules section
 */

const commentsCustomRules = {
  'eslint-comments/no-unused-disable': 'error',
};

const importFixableRules = {
  'import/consistent-type-specifier-style': 'error',
  'import/first': 'error',
  'import/newline-after-import': 'error',
  'import/no-absolute-path': 'error',
  'import/no-empty-named-blocks': 'error',
  'import/no-import-module-exports': 'error',
  'import/no-relative-packages': 'error',
  'import/no-namespace': 'error',
  'import/no-useless-path-segments': 'error',
  'import/order': 'error',
};

const importCustomRules = {
  'import/extensions': ['error', 'never', { json: 'always' }],
  'import/no-extraneous-dependencies': 'error',
  'import/no-mutable-exports': 'error',
  'import/no-named-default': 'error',
  'import/no-namespace': 'off',
  'import/no-unused-modules': 'error',
  'import/order': ['error', { alphabetize: { order: 'asc' }, groups: [] }],
};

const typescriptFixableRules = {
  '@typescript-eslint/consistent-type-exports': 'error',
  '@typescript-eslint/consistent-type-imports': 'error',
  '@typescript-eslint/explicit-member-accessibility': 'error',
  '@typescript-eslint/member-delimiter-style': 'error',
  '@typescript-eslint/method-signature-style': 'error',
  '@typescript-eslint/no-confusing-void-expression': 'error',
  '@typescript-eslint/no-duplicate-type-constituents': 'error',
  '@typescript-eslint/no-import-type-side-effects': 'error',
  '@typescript-eslint/no-unnecessary-qualifier': 'error',
  '@typescript-eslint/no-useless-empty-export': 'error',
  '@typescript-eslint/prefer-readonly': 'error',
  '@typescript-eslint/prefer-regexp-exec': 'error',
  '@typescript-eslint/promise-function-async': 'error',
  '@typescript-eslint/sort-type-constituents': 'error',
  '@typescript-eslint/strict-boolean-expressions': 'error',
  '@typescript-eslint/type-annotation-spacing': 'error',
};

const typescriptCustomRules = {
  '@typescript-eslint/no-misused-promises': [
    'error',
    {
      checksVoidReturn: {
        attributes: false,
      },
    },
  ],
  '@typescript-eslint/no-unused-vars': [
    'error',
    { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
  ],
  '@typescript-eslint/strict-boolean-expressions': [
    'error',
    { allowString: true, allowNullableObject: true },
  ],
  '@typescript-eslint/switch-exhaustiveness-check': 'error',
};

const jestFixableRules = {
  'jest/consistent-test-it': 'error',
  'jest/prefer-comparison-matcher': 'error',
  'jest/prefer-expect-resolves': 'error',
  'jest/prefer-lowercase-title': 'error',
  'jest/prefer-mock-promise-shorthand': 'error',
  'jest/prefer-spy-on': 'error',
  'jest/prefer-todo': 'error',
};

const jestFixableTypescriptOnlyRules = {
  'jest/no-untyped-mock-factory': 'error',
};

const jestCustomRules = {
  'jest/no-duplicate-hooks': 'error',
  'jest/no-test-return-statement': 'error',
  'jest/prefer-equality-matcher': 'error',
  'jest/prefer-hooks-in-order': 'error',
  'jest/prefer-hooks-on-top': 'error',
  'jest/prefer-strict-equal': 'error',
  'jest/require-to-throw-message': 'error',
  'jest/require-top-level-describe': 'error',
  'jest/unbound-method': 'error',
  '@typescript-eslint/consistent-type-imports': 'off',
  '@typescript-eslint/no-var-requires': 'off',
  '@typescript-eslint/unbound-method': 'off',
};

module.exports = {
  baseCustomRules,
  baseFixableRules,
  commentsCustomRules,
  importCustomRules,
  importFixableRules,
  typescriptCustomRules,
  typescriptFixableRules,
  jestCustomRules,
  jestFixableRules,
  jestFixableTypescriptOnlyRules,
};
