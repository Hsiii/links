import type { JSX, ReactNode } from 'react';
import type { Metadata } from 'next';

import './global.css';

const siteUrl = new URL('https://links.hsichen.dev');
const siteTitle = 'Hsi Chen | Links';
const siteDescription =
    'Links to Hsi Chen on GitHub, LinkedIn, Instagram, Threads, and other social profiles.';

export const metadata: Metadata = {
    metadataBase: siteUrl,
    title: {
        default: siteTitle,
        template: '%s | Hsi Chen',
    },
    description: siteDescription,
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: siteTitle,
        description: siteDescription,
        url: '/',
        siteName: 'Hsi Chen Links',
        type: 'profile',
    },
    twitter: {
        card: 'summary',
        title: siteTitle,
        description: siteDescription,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
        },
    },
    icons: {
        icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    },
    verification: {
        google: 'U0MZAhyxx3hG4euT-pHfkimkVmT8oOu0dAlgD0OFoaQ',
    },
};

interface RootLayoutProps {
    readonly children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    );
}
