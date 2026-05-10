'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';

import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 mx-auto w-full transition-all duration-300">
            {/* Оранжевая полоска 3px сверху */}
            <div className="h-[3px] bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 absolute top-0 left-0 right-0 z-[60]" />

            <Container className="!px-0">
                <nav className={`
                    mx-auto flex justify-between items-center py-2 px-5 md:py-10
                    transition-all duration-300
                    ${scrolled
                        ? 'md:bg-white/80 md:backdrop-blur-md md:shadow-sm md:py-4'
                        : 'md:bg-transparent md:shadow-none'
                    }
                    bg-white shadow-md
                `}>
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/logo-ssd.svg" alt={siteDetails.siteName} width={40} height={40} className="min-w-fit md:w-10 md:h-10" />
                        <span className="manrope text-xl font-semibold text-foreground cursor-pointer">
                            {siteDetails.siteName}
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6 items-center">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className="nav-link-hover relative text-foreground hover:text-orange-500 transition-colors duration-200">
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <a href="tel:+79080555555" className="text-white bg-primary hover:bg-primary-accent px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5">
                                Позвонить
                            </a>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-primary text-white focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-6 w-6" aria-hidden="true" />
                            )}
                            <span className="sr-only">Навигация</span>
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Mobile Menu with Transition */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div id="mobile-menu" className="md:hidden bg-white shadow-lg">
                    <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className="text-foreground hover:text-primary block" onClick={toggleMenu}>
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <a href="tel:+79080555555" className="text-white bg-primary hover:bg-primary-accent px-5 py-2 rounded-full block w-fit" onClick={toggleMenu}>
                                Позвонить
                            </a>
                        </li>
                    </ul>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
