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
    readonly href: string;
    readonly logoAlt: string;
    readonly logoSrc: string;
    readonly tone: LinkTone;
}

const socialLinks: readonly SocialLink[] = [
    {
        label: 'Facebook',
        href: 'https://www.facebook.com/profile.php?id=100011113621038',
        logoAlt: 'Facebook',
        logoSrc: '/svgl/facebook.svg',
        tone: 'blue',
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/ccc_hsi/',
        logoAlt: 'Instagram',
        logoSrc: '/svgl/instagram.svg',
        tone: 'pink',
    },
    {
        label: 'Threads',
        href: 'https://www.threads.com/@ccc_hsi',
        logoAlt: 'Threads',
        logoSrc: '/svgl/threads.svg',
        tone: 'ink',
    },
    {
        label: 'Discord',
        href: 'discord://-/users/917446775873343600',
        logoAlt: 'Discord',
        logoSrc: '/svgl/discord.svg',
        tone: 'violet',
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/its-hsi-chen/',
        logoAlt: 'LinkedIn',
        logoSrc: '/svgl/linkedin.svg',
        tone: 'blue',
    },
    {
        label: 'GitHub',
        href: 'https://github.com/Hsiii',
        logoAlt: 'GitHub',
        logoSrc: '/svgl/github.svg',
        tone: 'ink',
    },
    {
        label: 'Twitter',
        href: 'https://x.com/OrangeSago',
        logoAlt: 'X',
        logoSrc: '/svgl/x.svg',
        tone: 'sky',
    },
    {
        label: 'Pixiv',
        href: 'https://www.pixiv.net/users/64764125',
        logoAlt: 'Pixiv',
        logoSrc: '/svgl/pixiv.jpeg',
        tone: 'rose',
    },
    {
        label: 'TETR.IO',
        href: 'https://ch.tetr.io/u/sagocream',
        logoAlt: 'TETR.IO',
        logoSrc: '/svgl/tetrio.svg',
        tone: 'green',
    },
    {
        label: 'Spotify',
        href: 'https://open.spotify.com/user/31bturepoosptp5xv2vln3nqz7ca',
        logoAlt: 'Spotify',
        logoSrc: '/svgl/spotify.svg',
        tone: 'mint',
    },
    {
        label: 'Steam',
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
                        ({ label, href, logoAlt, logoSrc, tone }) => (
                            <a
                                className={`social-link social-link--${tone}`}
                                href={href}
                                key={label}
                                rel='noreferrer noopener'
                                target='_blank'
                            >
                                <span aria-hidden className='social-link__icon'>
                                    <Image
                                        alt={logoAlt}
                                        className='social-link__logo'
                                        height={24}
                                        src={logoSrc}
                                        width={24}
                                    />
                                </span>
                                <span className='social-link__copy'>
                                    <span className='social-link__label'>
                                        {label}
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
