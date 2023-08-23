import { type Config } from 'tailwindcss';
import animatePlugin from 'tailwindcss-animate';

import shadcnPlugin from './shadcn.plugin';

export default {
    darkMode: ['class'],
    content: [],
    plugins: [animatePlugin, shadcnPlugin],
} satisfies Config;
