'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen bg-hero-background pt-28 md:pt-36 lg:pt-40 pb-16 md:pb-24 px-5 md:px-8"
    >
      {/* Лёгкий тёплый ореол сверху */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(249,115,22,0.06),transparent)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full">

        {/* Бейдж — на ПК слева, на мобильном по центру */}
        <div className="lg:text-left text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
            className="inline-block rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-sm font-medium text-orange-700"
          >
            {heroDetails.badge}
          </motion.span>
        </div>

        {/* Двухколоночная часть — на ПК row, на мобильном col */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mt-8">

          {/* ЛЕВАЯ КОЛОНКА — текст */}
          <div className="lg:w-[58%] lg:pr-8 lg:text-left text-center">

            {/* Заголовок */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.15] tracking-tight max-w-xl lg:mx-0 mx-auto"
            >
              Мы{' '}
              <span className="relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-orange-400 after:rounded-full">
                {heroDetails.headingAccent}
              </span>
              {' '}вывели вас в ТОП-1 по эвакуации в Челябинске
            </motion.h1>

            {/* Подзаголовок */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
              className="mt-6 text-base md:text-lg text-foreground-accent max-w-lg lg:mx-0 mx-auto"
            >
              {heroDetails.subheading}
            </motion.p>

            {/* Статистика */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45, ease: 'easeOut' }}
              className="flex items-center lg:justify-start justify-center gap-3 md:gap-5 mt-10"
            >
              {heroDetails.stats.map((stat) => (
                <div
                  key={stat.value}
                  className="flex flex-col items-center text-center rounded-xl bg-white border border-gray-100 shadow-sm px-4 py-3 md:px-5 md:py-4"
                >
                  <span className="text-xl md:text-2xl lg:text-3xl font-bold text-orange-500">
                    {stat.value}
                  </span>
                  <span className="text-sm text-gray-500 mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 mt-10"
            >
              <a
                href={heroDetails.primaryCta.href}
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 bg-orange-500 text-white font-semibold text-base shadow-lg shadow-orange-500/25 transition-all duration-300 hover:bg-orange-600 hover:-translate-y-0.5"
              >
                {heroDetails.primaryCta.text}
              </a>
              <a
                href={heroDetails.phoneCta.href}
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 border-2 border-orange-300 text-orange-600 font-medium text-base transition-all duration-300 hover:border-orange-400 hover:bg-orange-50"
              >
                📞 {heroDetails.phoneCta.text}
              </a>
            </motion.div>

          </div>

          {/* ПРАВАЯ КОЛОНКА — мокап телефона */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="lg:w-[42%] lg:pl-8 flex flex-col items-center"
          >
            <div className="rounded-[2rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden bg-gray-900 w-64 md:w-80">
              <Image
                src={heroDetails.screenshotImage}
                width={320}
                height={569}
                quality={100}
                unoptimized={true}
                alt="ТОП-1 в Яндекс — скриншот результата поиска «эвакуатор челябинск»"
                className="rounded-[1.5rem] w-full h-auto object-cover"
              />
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center">
              Фактический результат поиска в Яндекс
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
