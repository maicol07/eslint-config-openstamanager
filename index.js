/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
    env: {
        browser: true,
        es6: true,
        es2017: true,
        es2020: true,
        es2021: true
    },
    parser: '@babel/eslint-parser', // TODO: consider moving this into `eslint-config-adeira`
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2021,
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: [
        "new-with-error",
        "simple-import-sort"
    ],
    extends: [
        "@adeira/eslint-config/base",
        "@adeira/eslint-config/flowtype",
        "plugin:wc/recommended",
        "plugin:lit/recommended",
        "plugin:github/recommended",
        "plugin:mithril/recommended",
        "plugin:regexp/recommended",
        "plugin:sonarjs/recommended",
        "plugin:unicorn/recommended",
        "plugin:you-dont-need-lodash-underscore/compatible"
    ],
    globals: {
        m: "readonly",
        $: true
    },
    rules: {
        "capitalized-comments": [
            "error",
            "always",
            {
                "ignorePattern": "pragma|ignored|noinspection",
                "ignoreInlineComments": true
            }
        ],
        "comma-dangle": [
            "error",
            "never"
        ],
        "class-methods-use-this": "off",
        "eol-last": "off",
        "func-names": "off",
        "lines-between-class-members": ["error", "always", {exceptAfterSingleLine: true}],
        "no-invalid-this": "off",
        "no-multiple-empty-lines": "off",
        "no-param-reassign": ["error", {props: false}],
        "no-restricted-syntax": "off",
        "no-underscore-dangle": "off",
        "no-unused-vars": ["error", {"vars": "all", "args": "none", "ignoreRestSiblings": false}],
        "object-curly-spacing": "off",
        "sort-imports": "off", // See simple-import-sort plugin

        // Plugins
        //"custom-elements/extends-correct-class": "off", // Conflicts when extending other Web Components
        "flowtype/no-types-missing-file-annotation": "off",
        "flowtype/require-valid-file-annotation": "off",
        "filenames/match-regex": "off",
        "github/array-foreach": "off", // Already handled (better) by unicorn/no-array-for-each
        "i18n-text/no-en": "off",
        "import/extensions": ["error",
            {
                js: "never",
                jsx: "always",
                json: "always",
                png: "always",
                css: "always",
                scss: "always"
            }
        ], // Allow imports to modules without extension
        "import/no-unresolved": "off", // This rule doesn't work with relative imports
        "import/order": "off", // Already handled (better) by simple-import-sort/imports
        "mithril/jsx-no-target-blank": "off",
        "new-with-error/new-with-error": "error",
        "no-secrets/no-secrets":"error",
        "prettier/prettier": "off",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "unicorn/filename-case": "off"
    }
}
