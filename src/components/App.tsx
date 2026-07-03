import type { JSX } from 'react';
import {
    AtSign,
    Camera,
    Code2,
    ExternalLink,
    Gamepad2,
    ImageIcon,
    MessageCircle,
    MountainSnow,
    Music2,
    UsersRound,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Image from 'next/image';

type LinkTone =
    | 'blue'
    | 'gold'
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
    readonly Icon: LucideIcon;
    readonly tone: LinkTone;
}

const socialLinks: readonly SocialLink[] = [
    {
        label: 'Facebook',
        note: 'people',
        href: 'https://www.facebook.com/',
        Icon: UsersRound,
        tone: 'blue',
    },
    {
        label: 'Instagram',
        note: 'photos',
        href: 'https://www.instagram.com/',
        Icon: Camera,
        tone: 'pink',
    },
    {
        label: 'Discord',
        note: 'chat',
        href: 'https://discord.com/',
        Icon: MessageCircle,
        tone: 'violet',
    },
    {
        label: 'Twitter',
        note: 'posts',
        href: 'https://x.com/',
        Icon: AtSign,
        tone: 'sky',
    },
    {
        label: 'GitHub',
        note: 'code',
        href: 'https://github.com/Hsiii',
        Icon: Code2,
        tone: 'ink',
    },
    {
        label: 'Pixiv',
        note: 'art',
        href: 'https://www.pixiv.net/',
        Icon: ImageIcon,
        tone: 'rose',
    },
    {
        label: 'TETR.IO',
        note: 'stacking',
        href: 'https://tetr.io/',
        Icon: Gamepad2,
        tone: 'green',
    },
    {
        label: 'Spotify',
        note: 'music',
        href: 'https://open.spotify.com/',
        Icon: Music2,
        tone: 'mint',
    },
    {
        label: 'Slopes',
        note: 'snow days',
        href: 'https://getslopes.com/',
        Icon: MountainSnow,
        tone: 'gold',
    },
];

const maybeLinks = [
    'Bluesky',
    'Threads',
    'Mastodon',
    'YouTube',
    'Twitch',
    'Steam',
    'LinkedIn',
    'Letterboxd',
    'TikTok',
    'Reddit',
    'SoundCloud',
    'Tumblr',
    'Itch.io',
    'Ko-fi',
    'Patreon',
    'Last.fm',
    'AniList',
    'MyAnimeList',
    'Strava',
    'Figma Community',
] as const;

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
                        <p className='profile__eyebrow'>hsichen.dev</p>
                        <h1 className='profile__title'>Hsi Chen</h1>
                        <p className='profile__description'>
                            Places I post, play, draw, listen, and ski.
                        </p>
                    </div>
                </header>

                <nav aria-label='Social links' className='social-list'>
                    {socialLinks.map(({ label, note, href, Icon, tone }) => (
                        <a
                            className={`social-link social-link--${tone}`}
                            href={href}
                            key={label}
                            rel='noreferrer noopener'
                            target='_blank'
                        >
                            <span aria-hidden className='social-link__icon'>
                                <Icon size={22} strokeWidth={2.25} />
                            </span>
                            <span className='social-link__copy'>
                                <span className='social-link__label'>
                                    {label}
                                </span>
                                <span className='social-link__note'>
                                    {note}
                                </span>
                            </span>
                            <ExternalLink
                                aria-hidden
                                className='social-link__arrow'
                                size={18}
                                strokeWidth={2}
                            />
                        </a>
                    ))}
                </nav>

                <section aria-labelledby='maybe-title' className='maybe'>
                    <h2 className='maybe__title' id='maybe-title'>
                        Might also have
                    </h2>
                    <ul className='maybe__list'>
                        {maybeLinks.map((link) => (
                            <li className='maybe__item' key={link}>
                                {link}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </main>
    );
}
