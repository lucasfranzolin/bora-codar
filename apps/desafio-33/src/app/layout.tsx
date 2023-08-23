import '@lucasfranzolin/ui/styles.css';
//
import '@/styles/globals.css';

import { siteConfig } from '@/config/site';
import { fontSans } from '@/lib/fonts';
import TRPCProvider from '@/lib/trpc/provider';
import { Toaster } from '@lucasfranzolin/ui/components';
import { ThemeProvider } from '@lucasfranzolin/ui/theme';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: ['Next.js', 'React', 'Tailwind CSS', 'Server Components', 'Radix UI'],
    authors: [
        {
            name: 'Lucas Franzolin',
            url: 'https://www.linkedin.com/in/lucasfranzolin/',
        },
    ],
    creator: 'Lucas Franzolin',
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
    openGraph: {
        type: 'website',
        locale: 'pt_BR',
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },
    manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
            <body className={fontSans.variable}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <TRPCProvider>{children}</TRPCProvider>
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}
