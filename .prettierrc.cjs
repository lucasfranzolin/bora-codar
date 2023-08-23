/** @typedef  {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig*/
/** @typedef  {import("prettier").Config} PrettierConfig*/
/** @typedef  {{ tailwindConfig: string }} TailwindConfig*/

/** @type { PrettierConfig | SortImportsConfig | TailwindConfig } */
const config = {
    arrowParens: 'always',
    printWidth: 100,
    singleQuote: true,
    jsxSingleQuote: false,
    semi: true,
    trailingComma: 'all',
    tabWidth: 4,
    pluginSearchDirs: false,
    plugins: [
        require('@ianvs/prettier-plugin-sort-imports'),
        require('prettier-plugin-tailwindcss'),
    ],
    // tailwindConfig: 'tailwind config is in ts, not supported here',
    importOrder: [
        '^(next/(.*)$)|^(next$)',
        '^(expo(.*)$)|^(expo$)',
        '<THIRD_PARTY_MODULES>',
        '',
        '^@lucasfranzolin/(.*)$',
        '',
        '^~/utils/(.*)$',
        '^~/lib/(.*)$',
        '^~/components/(.*)$',
        '^~/styles/(.*)$',
        '^~/(.*)$',
        '^[./]',
    ],
    importOrderSeparation: false,
    importOrderSortSpecifiers: true,
    importOrderBuiltinModulesToTop: true,
    importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
    importOrderMergeDuplicateImports: true,
    importOrderCombineTypeAndValueImports: true,
};

module.exports = config;
