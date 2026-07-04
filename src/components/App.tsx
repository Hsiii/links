import type { JSX } from 'react';
import Image from 'next/image';

type LinkTone =
    | 'blue'
    | 'green'
    | 'ink'
    | 'mint'
    | 'pink'
    | 'rose'
    | 'sky'
    | 'violet';

interface SocialLink {
    readonly label: string;
    readonly note: string;
    readonly href: string;
    readonly logoAlt: string;
    readonly logoSrc?: string;
    readonly mark?: string;
    readonly tone: LinkTone;
}

const socialLinks: readonly SocialLink[] = [
    {
        label: 'Facebook',
        note: 'people',
        href: 'https://www.facebook.com/profile.php?id=100011113621038',
        logoAlt: 'Facebook',
        logoSrc: '/svgl/facebook.svg',
        tone: 'blue',
    },
    {
        label: 'Instagram',
        note: 'photos',
        href: 'https://www.instagram.com/ccc_hsi/',
        logoAlt: 'Instagram',
        logoSrc: '/svgl/instagram.svg',
        tone: 'pink',
    },
    {
        label: 'Threads',
        note: 'posts',
        href: 'https://www.threads.com/@ccc_hsi',
        logoAlt: 'Threads',
        logoSrc: '/svgl/threads.svg',
        tone: 'ink',
    },
    {
        label: 'Discord',
        note: 'chat',
        href: 'discord://-/users/917446775873343600',
        logoAlt: 'Discord',
        logoSrc: '/svgl/discord.svg',
        tone: 'violet',
    },
    {
        label: 'Twitter',
        note: 'posts',
        href: 'https://x.com/OrangeSago',
        logoAlt: 'X',
        logoSrc: '/svgl/x.svg',
        tone: 'sky',
    },
    {
        label: 'GitHub',
        note: 'code',
        href: 'https://github.com/Hsiii',
        logoAlt: 'GitHub',
        logoSrc: '/svgl/github.svg',
        tone: 'ink',
    },
    {
        label: 'Pixiv',
        note: 'art',
        href: 'https://www.pixiv.net/users/64764125',
        logoAlt: 'Pixiv',
        mark: 'P',
        tone: 'rose',
    },
    {
        label: 'TETR.IO',
        note: 'stacking',
        href: 'https://ch.tetr.io/u/sagocream',
        logoAlt: 'TETR.IO',
        mark: 'T',
        tone: 'green',
    },
    {
        label: 'Spotify',
        note: 'music',
        href: 'https://open.spotify.com/user/31bturepoosptp5xv2vln3nqz7ca',
        logoAlt: 'Spotify',
        logoSrc: '/svgl/spotify.svg',
        tone: 'mint',
    },
    {
        label: 'LinkedIn',
        note: 'work',
        href: 'https://www.linkedin.com/in/its-hsi-chen/',
        logoAlt: 'LinkedIn',
        logoSrc: '/svgl/linkedin.svg',
        tone: 'blue',
    },
    {
        label: 'Steam',
        note: 'games',
        href: 'https://steamcommunity.com/id/sagocream/',
        logoAlt: 'Steam',
        logoSrc: '/svgl/steam.svg',
        tone: 'ink',
    },
];

export function App(): JSX.Element {
    return (
        <main className='app'>
            <div className='linktree'>
                <header className='profile'>
                    <Image
                        alt=''
                        className='profile__avatar'
                        height={88}
                        priority
                        src='/favicon.png'
                        width={88}
                    />
                    <div className='profile__copy'>
                        <h1 className='profile__title'>Hsi Chen</h1>
                        <p className='profile__description'>
                            Places I post, play, draw, listen, and connect.
                        </p>
                    </div>
                </header>

                <nav aria-label='Social links' className='social-list'>
                    {socialLinks.map(
                        ({
                            label,
                            note,
                            href,
                            logoAlt,
                            logoSrc,
                            mark,
                            tone,
                        }) => (
                            <a
                                className={`social-link social-link--${tone}`}
                                href={href}
                                key={label}
                                rel='noreferrer noopener'
                                target='_blank'
                            >
                                <span aria-hidden className='social-link__icon'>
                                    {logoSrc === undefined ? (
                                        <span className='social-link__mark'>
                                            {mark ?? ''}
                                        </span>
                                    ) : (
                                        <Image
                                            alt={logoAlt}
                                            className='social-link__logo'
                                            height={24}
                                            src={logoSrc}
                                            width={24}
                                        />
                                    )}
                                </span>
                                <span className='social-link__copy'>
                                    <span className='social-link__label'>
                                        {label}
                                    </span>
                                    <span className='social-link__note'>
                                        {note}
                                    </span>
                                </span>
                            </a>
                        )
                    )}
                </nav>
            </div>
        </main>
    );
}
