/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: [
        'next',
        'turbo',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
    ],
    rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@next/next/no-html-link-for-pages': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/consistent-type-imports': [
            'error',
            { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
        ],
    },
    ignorePatterns: ['**/*.config.js', '**/*.config.cjs', 'packages/config/**'],
    reportUnusedDisableDirectives: true,
};
