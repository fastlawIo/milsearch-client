module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
            jsx: true
        },
        extraFileExtensions: ['.vue'],
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint', 'import'],
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        es2020: true,
        jest: true,
    },
    settings: {
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true
            }
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
    },
    rules: {
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/explicit-function-return-type': [0, { allowExpressions: true }],
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/interface-name-prefix': [0, { prefixWithI: 'never' }],
        '@typescript-eslint/no-explicit-any': [0],
        '@typescript-eslint/naming-convention': [2, {
            selector: 'enum', format: ['UPPER_CASE', 'PascalCase'],
        }],
        '@typescript-eslint/no-non-null-assertion': 0,
        'arrow-body-style': 'off',
        'consistent-return': 0,
        curly: [2, 'all'],
        'default-case': 0,
        'import/no-cycle': 0,
        'import/prefer-default-export': 'off',
        'import/no-named-as-default': 0,
        indent: [0, 4],
        'no-alert': 2,
        'no-console': 2,
        'no-debugger': 2,
        'no-underscore-dangle': 'off',
        'no-useless-escape': 'off',
        'object-curly-newline': 'off',
        "max-len": [
            "error",
            120,
            2,
            {
                "ignoreUrls": true,
                "ignoreComments": false,
                "ignoreRegExpLiterals": true,
                "ignoreStrings": true,
                "ignoreTemplateLiterals": true
            }
        ],
        'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
        'jsx-quotes': [1,'prefer-double'],
        'class-methods-use-this': 0,
        "import/order": [
            "error",
            {
              "groups": [
                "builtin",
                "external",
                "internal",
                "parent",
                "index"
              ],
              "newlines-between": "always",
              "warnOnUnassignedImports": false
            }
          ],
    },
    extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
    ],
    globals: {},
};
