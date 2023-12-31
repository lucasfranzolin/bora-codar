/* eslint-disable turbo/no-undeclared-env-vars */
export function getBaseUrl() {
    if (typeof window !== 'undefined') {
        // browser should use relative url
        return '';
    }
    if (process.env.VERCEL_URL) {
        // SSR should use vercel url
        return `https://${process.env.VERCEL_URL}`;
    }

    return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
}
