module.exports = {
    root: true,
    env: {browser: true, es2020: true},
    ignorePatterns: ['dist', '.eslintrc.cjs', 'eslintRules'],
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsdoc/recommended',
        'plugin:react-hooks/recommended'
    ],
    plugins: ['@typescript-eslint', 'jsdoc', 'react-refresh'],
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'error',
        'jsdoc/check-alignment': 'error',
        'jsdoc/check-access': 'error',
        'jsdoc/check-param-names': 'error',
        'jsdoc/check-property-names': 'error',
        'jsdoc/check-tag-names': 'error',
        'jsdoc/check-types': 'error',
        'jsdoc/check-values': 'error',
        'jsdoc/empty-tags': 'error',
        'jsdoc/implements-on-classes': 'error',
        'jsdoc/multiline-blocks': 'error',
        'jsdoc/no-undefined-types': 'error',
        'jsdoc/no-defaults': 'error',
        'jsdoc/no-multi-asterisks': 'error',
        'jsdoc/no-types': 'error',
        'jsdoc/require-jsdoc': [
            'error',
            {
                require: {
                    FunctionDeclaration: true,
                    MethodDefinition: true,
                    ClassDeclaration: true,
                    ArrowFunctionExpression: false,
                    FunctionExpression: false
                }
            }
        ],

        'jsdoc/require-param': 'error',
        'jsdoc/require-description': 'error',
        'jsdoc/require-file-overview': 'error',
        'jsdoc/require-param-description': 'error',
        'jsdoc/require-param-name': 'error',
        'jsdoc/require-property': 'error',
        'jsdoc/require-property-description': 'error',
        'jsdoc/require-property-name': 'error',
        'jsdoc/require-returns': 'error',
        'jsdoc/require-returns-check': 'error',
        'jsdoc/require-returns-description': 'error',
        'jsdoc/require-returns-type': 'off',
        'jsdoc/require-yields': 'error',
        'jsdoc/valid-types': 'error',
        'react-refresh/only-export-components': [
            'warn',
            {allowConstantExport: true}
        ]
    },
    settings: {
        jsdoc: {
            mode: 'typescript'
        }
    }
};
