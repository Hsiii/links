import type { JSX } from 'react';

import { ClientOnly } from './client';

export function generateStaticParams() {
    return [{ slug: [''] }];
}

export default function HomePage(): JSX.Element {
    return <ClientOnly />;
}
