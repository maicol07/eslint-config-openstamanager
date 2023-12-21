import {Linter} from 'eslint';
import Config = Linter.Config;

const config: Config = {
  env: {
    browser: true,
    es6: true,
    es2017: true,
    es2020: true,
    es2021: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    project: ['./tsconfig.json'],
    lib: ['esnext']
  },
  plugins: [
    '@typescript-eslint',
    'new-with-error',
    'simple-import-sort',
    'only-warn'
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
    'new-cap': ['error', {capIsNewExceptions: ['Stream'], properties: false}],
    'no-invalid-this': 'off',
    'no-multiple-empty-lines': 'off',
    'no-param-reassign': ['error', {props: false}],
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    'no-void': ['error', {allowAsStatement: true}],
    'object-curly-spacing': 'off',
    'prefer-const': ['error', {destructuring: 'all'}],
    'sort-imports': 'off', // See simple-import-sort plugin

    // Plugins
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    '@typescript-eslint/object-curly-spacing': ['error', 'never'],
    '@typescript-eslint/lines-between-class-members': ['error', 'always', {exceptAfterSingleLine: true}],
    '@typescript-eslint/no-invalid-this': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {vars: 'all', args: 'none', ignoreRestSiblings: false}],
    // "custom-elements/extends-correct-class": "off",
    // Conflicts when extending other Web Components
    'filenames/match-regex': 'off',
    'i18n-text/no-en': 'off',
    // Allow imports to modules without extension
    'import/extensions': ['error',
      {
        js: 'ignorePackages', // Temporary fix for Lit (see https://github.com/import-js/eslint-plugin-import/issues/2141)
        ts: 'never',
        jsx: 'never',
        tsx: 'never',

        // Require extension for common assets (based on https://github.com/vitejs/vite/blob/main/packages/vite/src/node/constants.ts)

        // Images
        apng: 'always',
        png: 'always',
        jpg: 'always',
        jpeg: 'always',
        pjpeg: 'always',
        pjp: 'always',
        gif: 'always',
        svg: 'always',
        ico: 'always',
        webp: 'always',
        bmp: 'always',
        tiff: 'always',
        avif: 'always',
        raw: 'always',

        // Media
        mp4: 'always',
        webm: 'always',
        ogg: 'always',
        mp3: 'always',
        wav: 'always',
        flac: 'always',
        aac: 'always',
        oga: 'always',
        m4a: 'always',
        amr: 'always',
        wma: 'always',
        aiff: 'always',
        caf: 'always',
        ac3: 'always',
        opus: 'always',
        mkv: 'always',
        mov: 'always',
        avi: 'always',

        // Fonts
        woff: 'always',
        woff2: 'always',
        eot: 'always',
        ttf: 'always',
        otf: 'always',

        // Stylesheets
        css: 'always',
        scss: 'always',

        // Other
        json: 'always',
        yaml: 'always',
        toml: 'always',
        webmanifest: 'always',
        xml: 'always',
        md: 'always',
        txt: 'always',
        csv: 'always',
        pdf: 'always'
      }
    ],
    'import/no-extraneous-dependencies': 'off', // Dependencies are not found when installed with PNPM
    'import/no-unresolved': 'off', // This rule doesn't work with relative imports
    'import/order': 'off', // Already handled (better) by simple-import-sort/imports
    'import/prefer-default-export': 'error',
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

export = config;
