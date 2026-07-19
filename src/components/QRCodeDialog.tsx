'use client';

import type { JSX, KeyboardEvent, MouseEvent } from 'react';
import { useEffect, useRef, useState } from 'react';
import {
    CheckIcon,
    CopySimpleIcon,
    QrCodeIcon,
    XIcon,
} from '@phosphor-icons/react';

import './QRCodeDialog.css';

const siteUrl = 'https://links.hsichen.dev';

function getColorToken(name: string): string {
    return getComputedStyle(document.documentElement)
        .getPropertyValue(name)
        .trim();
}

export function QRCodeDialog(): JSX.Element {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const qrCodeRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const copiedResetRef = useRef<ReturnType<typeof setTimeout>>(undefined);
    const [copied, setCopied] = useState(false);
    const [qrCodeFailed, setQrCodeFailed] = useState(false);

    useEffect(() => {
        let isActive = true;

        async function renderQrCode() {
            const { default: QRCodeStyling } = await import('qr-code-styling');

            if (!isActive || !qrCodeRef.current) {
                return;
            }

            const qrCode = new QRCodeStyling({
                width: 264,
                height: 264,
                type: 'svg',
                data: siteUrl,
                margin: 0,
                qrOptions: {
                    errorCorrectionLevel: 'H',
                },
                dotsOptions: {
                    type: 'dots',
                    gradient: {
                        type: 'linear',
                        rotation: Math.PI / 4,
                        colorStops: [
                            {
                                offset: 0,
                                color: getColorToken('--clr-qr-blue'),
                            },
                            {
                                offset: 0.52,
                                color: getColorToken('--clr-accent'),
                            },
                            {
                                offset: 1,
                                color: getColorToken('--clr-text'),
                            },
                        ],
                    },
                },
                cornersSquareOptions: {
                    color: getColorToken('--clr-text'),
                    type: 'extra-rounded',
                },
                cornersDotOptions: {
                    color: getColorToken('--clr-accent'),
                    type: 'dot',
                },
                backgroundOptions: {
                    color: getColorToken('--clr-qr-background'),
                },
            });

            qrCodeRef.current.textContent = '';
            qrCode.append(qrCodeRef.current);
        }

        renderQrCode().catch(() => {
            if (isActive) {
                setQrCodeFailed(true);
            }
        });

        return () => {
            isActive = false;

            if (qrCodeRef.current) {
                qrCodeRef.current.textContent = '';
            }
        };
    }, []);

    useEffect(() => {
        const dialog = dialogRef.current;

        if (
            new URLSearchParams(globalThis.location.search).get('qr') === '1' &&
            dialog &&
            !dialog.open
        ) {
            dialog.showModal();
        }
    }, []);

    useEffect(
        () => () => {
            if (copiedResetRef.current) {
                clearTimeout(copiedResetRef.current);
            }
        },
        []
    );

    function openDialog() {
        setCopied(false);
        dialogRef.current?.showModal();
    }

    function closeDialog() {
        dialogRef.current?.close();
    }

    function closeFromBackdrop(event: MouseEvent<HTMLDialogElement>) {
        if (event.target === event.currentTarget) {
            closeDialog();
        }
    }

    function closeFromEscape(event: KeyboardEvent<HTMLDialogElement>) {
        if (event.key === 'Escape') {
            event.preventDefault();
            closeDialog();
        }
    }

    async function copyLink() {
        await navigator.clipboard.writeText(siteUrl);
        setCopied(true);

        if (copiedResetRef.current) {
            clearTimeout(copiedResetRef.current);
        }

        copiedResetRef.current = setTimeout(() => {
            setCopied(false);
        }, 2000);
    }

    function handleCopyLink() {
        copyLink().catch(() => {
            setCopied(false);
        });
    }

    return (
        <>
            <button
                aria-haspopup='dialog'
                aria-label='Show QR code'
                className='qr-trigger'
                onClick={openDialog}
                ref={triggerRef}
                title='Show QR code'
                type='button'
            >
                <QrCodeIcon aria-hidden size={24} weight='bold' />
            </button>

            <dialog
                aria-labelledby='qr-dialog-title'
                className='qr-dialog'
                onClick={closeFromBackdrop}
                onClose={() => {
                    triggerRef.current?.focus();
                }}
                onKeyDown={closeFromEscape}
                ref={dialogRef}
            >
                <section className='qr-dialog__surface'>
                    <button
                        aria-label='Close QR code'
                        className='qr-dialog__close'
                        onClick={closeDialog}
                        type='button'
                    >
                        <XIcon aria-hidden size={20} weight='bold' />
                    </button>

                    <div className='qr-dialog__heading'>
                        <h2 className='qr-dialog__title' id='qr-dialog-title'>
                            Scan to open my links
                        </h2>
                    </div>

                    <div className='qr-dialog__qr-frame'>
                        {qrCodeFailed ? (
                            <p className='qr-dialog__qr-error'>
                                The QR code could not load. Use the link below.
                            </p>
                        ) : (
                            <div
                                aria-label={`QR code for ${siteUrl}`}
                                className='qr-dialog__qr'
                                ref={qrCodeRef}
                                role='img'
                            />
                        )}
                    </div>

                    <div className='qr-dialog__link-row'>
                        <a className='qr-dialog__url' href={siteUrl}>
                            links.hsichen.dev
                        </a>
                        <button
                            aria-label={copied ? 'Copied link' : 'Copy link'}
                            aria-live='polite'
                            className='qr-dialog__copy-button'
                            onClick={handleCopyLink}
                            title={copied ? 'Copied' : 'Copy link'}
                            type='button'
                        >
                            {copied ? (
                                <CheckIcon
                                    aria-hidden
                                    size={20}
                                    weight='bold'
                                />
                            ) : (
                                <CopySimpleIcon
                                    aria-hidden
                                    size={20}
                                    weight='bold'
                                />
                            )}
                        </button>
                    </div>
                </section>
            </dialog>
        </>
    );
}
