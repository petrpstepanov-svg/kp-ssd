'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { HiPhone } from 'react-icons/hi2';

import Container from './Container';
import { siteDetails } from '@/data/siteDetails';

/* ------------------------------------------------------------------ */
/*  SVG-иконки мессенджеров                                           */
/* ------------------------------------------------------------------ */

const MaxIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 13.2c-.2.36-.64.48-1 .28l-2.78-1.6v3.2c0 .4-.34.72-.76.72s-.76-.32-.76-.72v-3.2l-2.78 1.6c-.36.2-.8.08-1-.28-.2-.36-.08-.8.28-1l2.78-1.6-2.78-1.6c-.36-.2-.48-.64-.28-1 .2-.36.64-.48 1-.28l2.78 1.6V8.52c0-.4.34-.72.76-.72s.76.32.76.72v3.2l2.78-1.6c.36-.2.8-.08 1 .28.2.36.08.8-.28 1l-2.78 1.6 2.78 1.6c.36.2.48.64.28 1z"/>
    </svg>
);

const TelegramIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.92 6.2l-1.64 7.72c-.12.56-.44.68-.88.42l-2.44-1.8-1.18 1.14c-.12.12-.24.24-.48.24l.16-2.44 4.48-4.04c.2-.16-.04-.24-.28-.08l-5.52 3.48-2.38-.74c-.52-.16-.52-.52.12-.76l9.28-3.58c.44-.16.8.12.64.72z"/>
    </svg>
);

/* ------------------------------------------------------------------ */
/*  Данные контактов                                                   */
/* ------------------------------------------------------------------ */

const CONTACTS = {
    phone: '+7 921 704-09-66',
    phoneHref: 'tel:+79217040966',
    maxUrl: 'https://max.ru/u/f9LHodD0cOLENBlukjoCKMDwG7ZiW1d5HByn2RRKSLguAFaemuOMAwmy0yc',
    telegramUrl: 'https://t.me/Petr_Petrovich60',
} as const;

/* ------------------------------------------------------------------ */
/*  Основной компонент                                                 */
/* ------------------------------------------------------------------ */

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 mx-auto w-full transition-all duration-300">
            {/* Оранжевая полоска сверху */}
            <div className="h-[3px] bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 absolute top-0 left-0 right-0 z-[60]" />

            <Container className="!px-0">
                <nav className={`
                    mx-auto flex justify-between items-center py-2 px-5
                    transition-all duration-300
                    ${scrolled
                        ? 'bg-white/80 backdrop-blur-md shadow-sm py-2'
                        : 'bg-white shadow-md py-2'
                    }
                `}>
                    {/* Logo — Точка+ */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo-tochka.svg"
                            alt={siteDetails.siteName}
                            width={160}
                            height={36}
                            className="h-7 md:h-8 w-auto"
                            priority
                        />
                    </Link>

                    {/* Кнопки связи — видны на всех экранах */}
                    <div className="flex items-center gap-2 md:gap-2.5">
                        {/* Макс */}
                        <a
                            href={CONTACTS.maxUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="header-contact-btn"
                            title="Написать в Макс"
                        >
                            <MaxIcon className="w-5 h-5" />
                            <span className="hidden lg:inline text-xs font-medium">Макс</span>
                        </a>

                        {/* Телеграм */}
                        <a
                            href={CONTACTS.telegramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="header-contact-btn"
                            title="Написать в Telegram"
                        >
                            <TelegramIcon className="w-5 h-5" />
                            <span className="hidden lg:inline text-xs font-medium">Telegram</span>
                        </a>

                        {/* Позвонить */}
                        <a
                            href={CONTACTS.phoneHref}
                            className="header-phone-btn"
                            title={CONTACTS.phone}
                        >
                            <HiPhone className="w-4 h-4 md:w-5 md:h-5" />
                            <span className="hidden md:inline text-sm font-semibold">{CONTACTS.phone}</span>
                        </a>
                    </div>
                </nav>
            </Container>
        </header>
    );
};

export default Header;
