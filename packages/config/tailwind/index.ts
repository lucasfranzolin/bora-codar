import { type Config } from 'tailwindcss';

export { default as shadcnPreset } from './shadcn.preset';

export default {
    content: [],
    plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
} satisfies Config;
