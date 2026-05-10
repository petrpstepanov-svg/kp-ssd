import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { HiPhone, HiMapPin, HiBuildingOffice2 } from 'react-icons/hi2';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';

const Footer: React.FC = () => {
    return (
        <footer className="bg-hero-background text-foreground py-10">
            <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/logo-tochka.svg" alt={siteDetails.siteName} width={120} height={28} />
                    </Link>
                    <p className="mt-3.5 text-foreground-accent">
                        {footerDetails.subheading}
                    </p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Навигация</h4>
                    <ul className="text-foreground-accent">
                        {footerDetails.quickLinks.map(link => (
                            <li key={link.text} className="mb-2">
                                <Link href={link.url} className="hover:text-foreground">{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Контакты</h4>

                    {footerDetails.telephone && (
                        <a href={`tel:${footerDetails.telephone.replace(/[^\d+]/g, '')}`} className="flex items-center gap-2 text-foreground-accent hover:text-foreground">
                            <HiPhone className="w-4 h-4 text-orange-500 shrink-0" />
                            {footerDetails.telephone}
                        </a>
                    )}

                    {footerDetails.address && (
                        <p className="flex items-center gap-2 text-foreground-accent mt-2">
                            <HiMapPin className="w-4 h-4 text-orange-500 shrink-0" />
                            {footerDetails.address}
                        </p>
                    )}

                    {footerDetails.companyName && (
                        <p className="flex items-center gap-2 text-foreground-accent mt-2">
                            <HiBuildingOffice2 className="w-4 h-4 text-orange-500 shrink-0" />
                            {footerDetails.companyName}
                        </p>
                    )}
                </div>
            </div>
            <div className="mt-8 md:text-center text-foreground-accent px-6">
                <div className="flex items-center justify-center gap-3 mb-3">
                    <Image src="/logo-tochka.svg" alt="Точка+" width={56} height={14} className="opacity-60" />
                    <span className="text-sm text-gray-500">Коммерческое предложение</span>
                </div>
                <p className="text-sm text-gray-500">{footerDetails.author}</p>
            </div>
        </footer>
    );
};

export default Footer;
