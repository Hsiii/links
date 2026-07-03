'use client';

import type { JSX } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { App } from '@/components/App';

const queryClient = new QueryClient();

export function ClientOnly(): JSX.Element {
    return (
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    );
}
