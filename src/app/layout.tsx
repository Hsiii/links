import type { JSX, ReactNode } from 'react';
import type { Metadata } from 'next';

import './global.css';

export const metadata: Metadata = {
    title: 'Hsi | Links',
    description: 'A simple link tree for Hsi Chen.',
    icons: {
        icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
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
