/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: [
        '@lucasfranzolin/config',
        '@lucasfranzolin/api-trpc',
        '@lucasfranzolin/icons',
        '@lucasfranzolin/ui',
    ],
};

module.exports = nextConfig;
