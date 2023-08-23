import { type Config } from 'tailwindcss';

import baseConfig from '@lucasfranzolin/config/tailwind';

export default {
    content: ['./src/**/*.tsx', '../../packages/ui/src/**/*.tsx'],
    presets: [baseConfig],
    theme: {
        extend: {
            colors: {},
        },
    },
} satisfies Config;
