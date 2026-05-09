import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';

const Footer: React.FC = () => {
    return (
        <footer className="bg-hero-background text-foreground py-10">
            <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/logo-ssd.svg" alt={siteDetails.siteName} width={28} height={28} />
                        <h3 className="manrope text-xl font-semibold cursor-pointer">
                            {siteDetails.siteName}
                        </h3>
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

                    {footerDetails.telephone && <a href={`tel:${footerDetails.telephone.replace(/[^\d+]/g, '')}`} className="block text-foreground-accent hover:text-foreground">📞 {footerDetails.telephone}</a>}

                    {footerDetails.address && <p className="block text-foreground-accent mt-2">📍 {footerDetails.address}</p>}

                    {footerDetails.companyName && <p className="block text-foreground-accent mt-2">🏢 {footerDetails.companyName}</p>}
                </div>
            </div>
            <div className="mt-8 md:text-center text-foreground-accent px-6">
                <div className="flex items-center justify-center gap-3 mb-3">
                    <Image src="/logo-ssd.svg" alt="ООО «ССД»" width={24} height={24} className="opacity-60" />
                    <span className="text-sm text-gray-500">Коммерческое предложение</span>
                    <span className="text-sm text-gray-400">от</span>
                    <Image src="/logo-tochka.svg" alt="Точка+" width={20} height={20} className="opacity-60" />
                </div>
                <p className="text-sm text-gray-500">{footerDetails.author}</p>
            </div>
        </footer>
    );
};

export default Footer;
