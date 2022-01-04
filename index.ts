/* eslint-disable unicorn/prefer-module, import/no-import-module-exports */
import type { ParserOptions } from '@typescript-eslint/parser';

const parserOptions: ParserOptions = {
  ecmaFeatures: {
    jsx: true
  },
  ecmaVersion: 'latest',
  project: ['./tsconfig.json'],
  lib: ['esnext']
};

module.exports = {
  env: {
    browser: true,
    es6: true,
    es2017: true,
    es2020: true,
    es2021: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions,
  plugins: [
    '@typescript-eslint',
    'new-with-error',
    'simple-import-sort'
  ],
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:wc/recommended',
    'plugin:lit/recommended',
    'plugin:mithril/recommended',
    'plugin:regexp/recommended',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
    'plugin:you-dont-need-lodash-underscore/compatible',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  globals: {
    m: 'readonly',
    $: true
  },
  rules: {
    'capitalized-comments': [
      'error',
      'always',
      {
        ignorePattern: 'pragma|ignored|noinspection',
        ignoreInlineComments: true
      }
    ],
    'comma-dangle': 'off',
    'class-methods-use-this': 'off',
    'eol-last': 'off',
    'func-names': 'off',
    'lines-between-class-members': 'off',
    'no-invalid-this': 'off',
    'no-multiple-empty-lines': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    'object-curly-spacing': 'off',
    'sort-imports': 'off', // See simple-import-sort plugin

    // Plugins
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    '@typescript-eslint/object-curly-spacing': ['error', 'never'],
    '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    '@typescript-eslint/no-invalid-this': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: false }],
    // "custom-elements/extends-correct-class": "off",
    // Conflicts when extending other Web Components
    'filenames/match-regex': 'off',
    'i18n-text/no-en': 'off',
    'import/extensions': ['error',
      {
        js: 'never',
        ts: 'never',
        jsx: 'never',
        tsx: 'never',
        json: 'always',
        png: 'always',
        css: 'always',
        scss: 'always'
      }
    ], // Allow imports to modules without extension
    'import/no-unresolved': 'off', // This rule doesn't work with relative imports
    'import/order': 'off', // Already handled (better) by simple-import-sort/imports
    'mithril/jsx-no-target-blank': 'off',
    'mithril/jsx-uses-mithril': 'off', // Will be declared as a global variable
    'n/file-extension-in-import': 'off',
    'new-with-error/new-with-error': 'error',
    'prettier/prettier': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'unicorn/filename-case': 'off'
  }
};
