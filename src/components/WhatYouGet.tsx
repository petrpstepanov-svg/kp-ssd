'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { whatYouGetData } from '@/data/whatYouGet';

const WhatYouGet: React.FC = () => {
  const { heading, subheading, sites, advantages } = whatYouGetData;

  return (
    <section id="what-you-get" className="py-16 md:py-24 bg-white px-5 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Заголовок секции */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.15] tracking-tight text-center"
        >
          {heading}
        </motion.h2>

        {/* Подзаголовок */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-base md:text-lg text-foreground-accent max-w-2xl mx-auto text-center"
        >
          {subheading}
        </motion.p>

        {/* ============================================= */}
        {/* Секция 1: Две карточки сайтов + связь         */}
        {/* ============================================= */}
        <div className="mt-12 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-0">

          {/* Карточка эвакуатора */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 max-w-md"
          >
            <SiteCard site={sites[0]} />
          </motion.div>

          {/* Визуальная связь между карточками — только на ПК */}
          <div className="hidden lg:flex flex-col items-center justify-center px-6 self-center">
            <div className="flex items-center gap-2 text-orange-500">
              <span className="text-2xl">↔</span>
            </div>
            <div className="w-px h-16 border-l-2 border-dashed border-orange-300 my-2" />
            <span className="text-xs text-orange-500 font-medium whitespace-nowrap">Перекрёстные ссылки</span>
            <div className="w-px h-16 border-l-2 border-dashed border-orange-300 my-2" />
            <div className="flex items-center gap-2 text-orange-500">
              <span className="text-2xl">↔</span>
            </div>
          </div>

          {/* Карточка комиссара */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex-1 max-w-md"
          >
            <SiteCard site={sites[1]} />
          </motion.div>

        </div>

        {/* ============================================= */}
        {/* Секция 2: Яндекс Карты — визуализация          */}
        {/* ============================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-xl md:text-2xl font-bold text-foreground text-center mb-8">
            Две карточки в Яндекс Картах — двойной трафик
          </h3>

          {/* CSS-визуализация Яндекс Карт */}
          <div className="max-w-sm mx-auto rounded-2xl bg-white border border-gray-200 shadow-lg overflow-hidden">
            {/* Строка поиска */}
            <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
              <span className="text-gray-400 text-sm">🔍</span>
              <span className="text-sm text-gray-500">эвакуатор челябинск</span>
            </div>

            {/* Карточка бизнеса — Эвакуатор */}
            <div className="border-l-4 border-orange-400 px-4 py-3 bg-gray-50">
              <p className="text-sm font-semibold text-foreground">🚗 Эвакуатор Челябинск</p>
              <p className="text-xs text-gray-500 mt-1">
                <span className="text-yellow-400">★</span>{' '}
                <span className="font-medium text-foreground">4.8</span> · 68 отзывов
              </p>
              <p className="text-xs text-gray-500 mt-0.5">📍 Челябинск, 24/7</p>
              <p className="text-xs text-orange-500 mt-0.5">📞 +7 (921) 704-09-66</p>
            </div>

            {/* Разделитель */}
            <div className="border-t border-gray-100" />

            {/* Карточка бизнеса — Аварийный комиссар */}
            <div className="border-l-4 border-orange-400 px-4 py-3 bg-gray-50">
              <p className="text-sm font-semibold text-foreground">🛡 Аварийный комиссар</p>
              <p className="text-xs text-gray-500 mt-1">
                <span className="text-yellow-400">★</span>{' '}
                <span className="font-medium text-foreground">4.8</span> · 68 отзывов
              </p>
              <p className="text-xs text-gray-500 mt-0.5">📍 Челябинск, 24/7</p>
              <p className="text-xs text-orange-500 mt-0.5">📞 +7 (921) 704-09-66</p>
            </div>
          </div>

          {/* Подпись */}
          <p className="text-sm text-foreground-accent text-center mt-4 max-w-md mx-auto">
            Органический трафик: клиент находит вас в Яндекс Картах по каждому направлению отдельно — без рекламы
          </p>
        </motion.div>

        {/* ============================================= */}
        {/* Секция 3: Преимущества подхода                */}
        {/* ============================================= */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {advantages.map((adv, i) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
              className="rounded-xl bg-white border border-gray-100 shadow-sm p-5"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-lg flex-shrink-0">
                  {adv.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">{adv.title}</h4>
                  <p className="text-sm text-foreground-accent mt-1">{adv.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

/* ============================================ */
/* Подкомпонент: Карточка сайта                  */
/* ============================================ */
interface SiteCardProps {
  site: {
    id: string;
    title: string;
    subtitle: string;
    screenshotImage: string;
    features: { icon: string; text: string }[];
    stats: { value: string; label: string }[];
  };
}

const SiteCard: React.FC<SiteCardProps> = ({ site }) => {
  return (
    <div className="rounded-2xl bg-gray-50 border border-gray-100 p-6 md:p-8 flex flex-col items-center text-center">
      {/* Мокап телефона */}
      <div className="rounded-[2rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden bg-gray-900 w-56 md:w-64">
        <Image
          src={site.screenshotImage}
          width={256}
          height={455}
          quality={90}
          unoptimized={true}
          alt={`Скриншот сайта — ${site.title}`}
          className="rounded-[1.5rem] w-full h-auto object-cover"
        />
      </div>

      {/* Заголовок */}
      <h3 className="mt-6 text-xl md:text-2xl font-bold text-foreground">
        {site.title}
      </h3>

      {/* Подзаголовок */}
      <p className="text-sm text-gray-500 mt-1">
        {site.subtitle}
      </p>

      {/* Мини-статистика */}
      <div className="flex items-center gap-3 mt-4">
        {site.stats.map((stat) => (
          <span
            key={stat.value}
            className="rounded-lg bg-white border border-gray-100 px-3 py-1.5 text-sm"
          >
            <span className="font-semibold text-foreground">{stat.value}</span>
            <span className="text-gray-400 ml-1">{stat.label}</span>
          </span>
        ))}
      </div>

      {/* Список «Что входит» */}
      <ul className="mt-6 space-y-2.5 w-full text-left">
        {site.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span className="text-orange-500 font-bold text-sm flex-shrink-0 mt-0.5">●</span>
            <span className="text-sm text-foreground-accent">{feature.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhatYouGet;
