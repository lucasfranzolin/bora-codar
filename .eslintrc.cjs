/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    extends: ['custom'], // uses the config in `packages/eslint-config-custom`
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json', './apps/*/tsconfig.json', './packages/*/tsconfig.json'],
    },
    settings: {
        next: {
            rootDir: ['apps/desafio-33'],
        },
    },
    rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        // Note: you must disable the base rule as it can report incorrect errors
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/ban-ts-comment': 'warn',
    },
};
