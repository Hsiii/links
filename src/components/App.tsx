import type { JSX } from 'react';
import {
    AtSign,
    BriefcaseBusiness,
    Camera,
    Code2,
    ExternalLink,
    Gamepad2,
    ImageIcon,
    Joystick,
    MessageCircle,
    MessagesSquare,
    Music2,
    UsersRound,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
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
    readonly Icon: LucideIcon;
    readonly tone: LinkTone;
}

const socialLinks: readonly SocialLink[] = [
    {
        label: 'Facebook',
        note: 'people',
        href: 'https://www.facebook.com/profile.php?id=100011113621038',
        Icon: UsersRound,
        tone: 'blue',
    },
    {
        label: 'Instagram',
        note: 'photos',
        href: 'https://www.instagram.com/ccc_hsi/',
        Icon: Camera,
        tone: 'pink',
    },
    {
        label: 'Threads',
        note: 'posts',
        href: 'https://www.threads.com/@ccc_hsi',
        Icon: MessagesSquare,
        tone: 'ink',
    },
    {
        label: 'Discord',
        note: 'chat',
        href: 'discord://-/users/917446775873343600',
        Icon: MessageCircle,
        tone: 'violet',
    },
    {
        label: 'Twitter',
        note: 'posts',
        href: 'https://x.com/OrangeSago',
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
        href: 'https://www.pixiv.net/users/64764125',
        Icon: ImageIcon,
        tone: 'rose',
    },
    {
        label: 'TETR.IO',
        note: 'stacking',
        href: 'https://ch.tetr.io/u/sagocream',
        Icon: Gamepad2,
        tone: 'green',
    },
    {
        label: 'Spotify',
        note: 'music',
        href: 'https://open.spotify.com/user/31bturepoosptp5xv2vln3nqz7ca',
        Icon: Music2,
        tone: 'mint',
    },
    {
        label: 'LinkedIn',
        note: 'work',
        href: 'https://www.linkedin.com/in/its-hsi-chen/',
        Icon: BriefcaseBusiness,
        tone: 'blue',
    },
    {
        label: 'Steam',
        note: 'games',
        href: 'https://steamcommunity.com/id/sagocream/',
        Icon: Joystick,
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
                        <p className='profile__eyebrow'>hsichen.dev</p>
                        <h1 className='profile__title'>Hsi Chen</h1>
                        <p className='profile__description'>
                            Places I post, play, draw, listen, and connect.
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
            </div>
        </main>
    );
}
