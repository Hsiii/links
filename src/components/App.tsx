import type { JSX } from 'react';

export function App(): JSX.Element {
    // Keep App.tsx coordinating screens and providers. Extract components early
    // so this never becomes a 3,000-line god file.
    return (
        <main className='app'>
            <section className='app__content'>
                <p className='app__eyebrow'>hsichen.dev</p>
                <h1 className='app__title'>Next.js, React, and TypeScript.</h1>
                <p className='app__description'>
                    A clean baseline with strict tooling, useful tokens, and no
                    unnecessary UI noise.
                </p>
            </section>
        </main>
    );
}
