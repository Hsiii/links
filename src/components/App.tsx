import type { JSX } from 'react';
import Image from 'next/image';

interface SocialLink {
    readonly label: string;
    readonly href: string;
    readonly logoAlt: string;
    readonly logoSrc: string;
}

const socialLinks: readonly SocialLink[] = [
    {
        label: 'Facebook',
        href: 'https://www.facebook.com/profile.php?id=100011113621038',
        logoAlt: 'Facebook',
        logoSrc: '/svgl/facebook.svg',
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/ccc_hsi/',
        logoAlt: 'Instagram',
        logoSrc: '/svgl/instagram.svg',
    },
    {
        label: 'Threads',
        href: 'https://www.threads.com/@ccc_hsi',
        logoAlt: 'Threads',
        logoSrc: '/svgl/threads.svg',
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/its-hsi-chen/',
        logoAlt: 'LinkedIn',
        logoSrc: '/svgl/linkedin.svg',
    },
    {
        label: 'GitHub',
        href: 'https://github.com/Hsiii',
        logoAlt: 'GitHub',
        logoSrc: '/svgl/github.svg',
    },
    {
        label: 'Twitter',
        href: 'https://x.com/OrangeSago',
        logoAlt: 'X',
        logoSrc: '/svgl/x.svg',
    },
    {
        label: 'Pixiv',
        href: 'https://www.pixiv.net/users/64764125',
        logoAlt: 'Pixiv',
        logoSrc: '/svgl/pixiv.jpeg',
    },
    {
        label: 'Discord',
        href: 'discord://-/users/917446775873343600',
        logoAlt: 'Discord',
        logoSrc: '/svgl/discord.svg',
    },
    {
        label: 'Spotify',
        href: 'https://open.spotify.com/user/31bturepoosptp5xv2vln3nqz7ca',
        logoAlt: 'Spotify',
        logoSrc: '/svgl/spotify.svg',
    },
    {
        label: 'Steam',
        href: 'https://steamcommunity.com/id/sagocream/',
        logoAlt: 'Steam',
        logoSrc: '/svgl/steam.svg',
    },
    {
        label: 'TETR.IO',
        href: 'https://ch.tetr.io/u/sagocream',
        logoAlt: 'TETR.IO',
        logoSrc: '/svgl/tetrio.svg',
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
                    <p className='identity-card__description'>
                        Design-focused software developer.
                    </p>
                </header>

                <nav aria-label='Social links' className='social-list'>
                    {socialLinks.map(({ label, href, logoAlt, logoSrc }) => (
                        <a
                            className='social-link'
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
                    ))}
                </nav>

                <footer className='identity'>
                    <h2 className='identity-card__title'>Orange Sago Cream</h2>
                    <p className='identity-card__description'>
                        My creative side for art, music, and games.
                    </p>
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
