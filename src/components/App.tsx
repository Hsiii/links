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
        label: 'Discord',
        href: 'discord://-/users/917446775873343600',
        logoAlt: 'Discord',
        logoSrc: '/svgl/discord.svg',
        tone: 'violet',
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
    {
        label: 'TETR.IO',
        href: 'https://ch.tetr.io/u/sagocream',
        logoAlt: 'TETR.IO',
        logoSrc: '/svgl/tetrio.svg',
        tone: 'green',
    },
];

export function App(): JSX.Element {
    return (
        <main className='app'>
            <div className='linktree'>
                <header className='identity'>
                    <Image
                        alt='Hsi Chen'
                        className='identity-card__avatar'
                        height={104}
                        priority
                        src='/profile/hsi.png'
                        width={104}
                    />
                    <h1 className='identity-card__title'>Hsi Chen</h1>
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

                <footer className='identity'>
                    <h2 className='identity-card__title'>Orange Sago Cream</h2>
                    <Image
                        alt='Orange Sago Cream'
                        className='identity-card__avatar'
                        height={104}
                        src='/favicon.png'
                        width={104}
                    />
                </footer>
            </div>
        </main>
    );
}
