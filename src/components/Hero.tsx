import React from 'react';
import Image from 'next/image';

import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
        >
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                </div>
            </div>

            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(255,247,237,0.5)] to-[rgba(255,237,213,0.5)]">
            </div>

            <div className="text-center">
                <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto">{heroDetails.heading}</h1>
                <p className="mt-4 text-foreground max-w-lg mx-auto">{heroDetails.subheading}</p>
                <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 w-fit mx-auto">
                    <a
                        href="tel:+79080555555"
                        className="inline-flex items-center gap-2 rounded-full px-8 py-3 bg-primary text-white font-semibold text-base shadow-lg shadow-orange-500/25 transition-all duration-300 hover:bg-primary-accent hover:-translate-y-0.5"
                    >
                        📞 Позвонить
                    </a>
                    <a
                        href="#pricing"
                        className="inline-flex items-center gap-2 rounded-full px-8 py-3 border-2 border-primary text-primary font-semibold text-base transition-all duration-300 hover:bg-orange-50"
                    >
                        💰 Смотреть цены
                    </a>
                </div>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700">
                        ✅ ТОП-1 в Яндекс уже сейчас
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700">
                        ✅ ROI 1:5 за 10 дней
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700">
                        ✅ 50 000 ₽ выручки
                    </span>
                </div>
                <Image
                    src={heroDetails.centerImageSrc}
                    width={600}
                    height={400}
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 600px"
                    priority={true}
                    unoptimized={true}
                    alt="ООО ССД — эвакуатор Челябинск"
                    className='relative mt-12 md:mt-16 mx-auto z-10 rounded-2xl shadow-xl'
                />
            </div>
        </section>
    );
};

export default Hero;
