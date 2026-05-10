'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen bg-hero-background pt-28 md:pt-36 lg:pt-40 pb-16 md:pb-24 px-5 md:px-8 overflow-x-hidden"
    >
      {/* Лёгкий тёплый ореол сверху */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(249,115,22,0.06),transparent)] pointer-events-none" />

      {/* Декоративные элементы — только десктоп */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none overflow-hidden">
        {/* Тонкая диагональная линия справа */}
        <div className="absolute top-32 right-[8%] w-px h-40 bg-gradient-to-b from-orange-300/0 via-orange-300/20 to-orange-300/0 rotate-12" />
        {/* Три точки слева */}
        <div className="absolute top-[45%] left-[5%] flex flex-col gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-orange-300/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-orange-300/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-orange-300/10" />
        </div>
        {/* Короткая горизонтальная линия снизу-слева */}
        <div className="absolute bottom-[15%] left-[10%] w-16 h-px bg-orange-300/15" />
      </div>

      <div className="relative max-w-6xl mx-auto w-full">

        {/* Номер секции «01 — Результат» — декоративный элемент */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
          className="block text-sm font-bold text-orange-500/60 tracking-widest uppercase lg:text-left text-center mt-2"
        >
          01 — Результат
        </motion.span>

        {/* Бейдж — на ПК слева, на мобильном по центру */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
          className="text-center lg:text-left mt-3"
        >
          <span className="inline-block rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-sm font-medium text-orange-700 ring-2 ring-orange-100">
            {heroDetails.badge}
          </span>
        </motion.div>

        {/* Двухколоночная часть */}
        {/* items-start на ПК — чтобы мокап можно было опустить через mt */}
        {/* items-center на мобильном — центрирование */}
        <div className="flex flex-col lg:flex-row lg:items-start items-center gap-12 lg:gap-16 mt-8">

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
                  className="stat-card-premium flex flex-col items-center text-center rounded-xl bg-white border border-gray-100 shadow-sm px-4 py-3 md:px-5 md:py-4 border-l-4 border-l-orange-400"
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
                {heroDetails.phoneCta.text}
              </a>
            </motion.div>

          </div>

          {/* ПРАВАЯ КОЛОНКА — мокап телефона */}
          {/* lg:mt-20 — ФИКС ИЕРАРХИИ: мокап ниже заголовка, на уровне статистики */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
            className="lg:w-[42%] lg:pl-8 lg:mt-20 flex flex-col items-center"
          >
            {/* Контейнер мокапа — relative для позиционирования бейджа + оранжевое свечение */}
            <div className="relative">
              {/* Оранжевое свечение под мокапом */}
              <div className="phone-glow absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-24 bg-orange-400/20 rounded-full blur-2xl pointer-events-none" />

              {/* Существующий контейнер мокапа */}
              <div className="relative">
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

                {/* ФИКС ИЕРАРХИИ №2: Оранжевый бейдж-маркер «✓ ТОП-1» */}
                {/* «Печать подтверждения» — связывает мокап с карточкой ТОП-1 в статистике */}
                <div className="absolute -bottom-3 -right-3 z-10">
                  <span className="inline-flex items-center gap-1 rounded-full bg-orange-500 text-white text-xs font-bold px-3 py-1.5 shadow-lg">
                    ✓ ТОП-1
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-400 mt-4 text-center">
              Фактический результат поиска в Яндекс
            </p>
          </motion.div>

        </div>
      </div>

      {/* Волна-разделитель: переход hero-background → white */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="relative block w-full h-[40px] md:h-[60px]"
        >
          <path
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
