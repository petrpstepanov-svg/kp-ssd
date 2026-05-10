'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  HiComputerDesktop,
  HiMapPin,
  HiMagnifyingGlass,
  HiLink,
  HiArrowsRightLeft,
  HiMap,
  HiArrowPath,
  HiArrowTrendingUp,
} from 'react-icons/hi2';
import { whatYouGetData } from '@/data/whatYouGet';

const FeatureIcon: React.FC<{ type: string }> = ({ type }) => {
  const iconMap: Record<string, React.ReactNode> = {
    layout: <HiComputerDesktop className="w-3.5 h-3.5" />,
    map: <HiMapPin className="w-3.5 h-3.5" />,
    search: <HiMagnifyingGlass className="w-3.5 h-3.5" />,
    link: <HiLink className="w-3.5 h-3.5" />,
  };
  return (
    <span className="feature-icon-dot">
      {iconMap[type] || iconMap.layout}
    </span>
  );
};

const AdvantageIcon: React.FC<{ type: string }> = ({ type }) => {
  const iconMap: Record<string, React.ReactNode> = {
    '🗺️': <HiMap className="w-5 h-5" />,
    '🔄': <HiArrowPath className="w-5 h-5" />,
    '📈': <HiArrowTrendingUp className="w-5 h-5" />,
    '🔗': <HiLink className="w-5 h-5" />,
  };
  return <>{iconMap[type] || <HiMap className="w-5 h-5" />}</>;
};

const WhatYouGet: React.FC = () => {
  const { heading, subheading, sites, advantages } = whatYouGetData;

  return (
    <section id="what-you-get" className="relative overflow-x-hidden py-16 md:py-24 bg-white px-5 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Номер секции «04 — Что вы получите» */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0 }}
          className="block text-sm font-bold text-orange-500/60 tracking-widest uppercase text-center"
        >
          04 — Что вы получите
        </motion.span>

        {/* Заголовок секции */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.15] tracking-tight text-center"
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
        {/* Секция 1: Две карточки сайтов + SVG-коннектор */}
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

          {/* SVG-коннектор — только десктоп */}
          <div className="hidden lg:flex flex-col items-center justify-center px-4 self-center">
            <svg width="80" height="120" viewBox="0 0 80 120" fill="none" className="flex-shrink-0">
              {/* Вертикальная пунктирная линия */}
              <line x1="40" y1="10" x2="40" y2="110" stroke="#FDBA74" strokeWidth="2" strokeDasharray="6 4" />

              {/* Верхний круг-маркер */}
              <circle cx="40" cy="10" r="5" fill="#F97316" />

              {/* Нижний круг-маркер */}
              <circle cx="40" cy="110" r="5" fill="#F97316" />

              {/* Анимированная точка — движется вверх-вниз */}
              <motion.circle
                cx="40"
                r="4"
                fill="#F97316"
                initial={{ cy: 20, opacity: 0.4 }}
                animate={{ cy: [20, 100, 20], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>

            {/* Подпись */}
            <span className="text-xs text-orange-500 font-medium whitespace-nowrap mt-2">
              <HiArrowsRightLeft className="w-3.5 h-3.5 inline mr-1" />
              Перекрёстные ссылки
            </span>
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
          <div className="max-w-sm mx-auto rounded-2xl bg-white border border-gray-300 shadow-xl overflow-hidden">
            {/* Строка поиска */}
            <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
              <HiMagnifyingGlass className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-500">эвакуатор челябинск</span>
            </div>

            {/* Карточка бизнеса — Эвакуатор */}
            <div className="yandex-business-card border-l-4 border-l-orange-400 px-4 py-3 bg-gray-50/50">
              <p className="text-sm font-semibold text-foreground">🚗 Эвакуатор Челябинск</p>
              <p className="text-xs text-gray-500 mt-1">
                <svg className="w-3.5 h-3.5 inline text-orange-400 -mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-medium text-foreground ml-0.5">4.8</span> · 68 отзывов
              </p>
              <p className="text-xs text-gray-500 mt-0.5">📍 Челябинск, 24/7</p>
              <p className="text-xs text-orange-500 mt-0.5">📞 +7 (921) 704-09-66</p>
            </div>

            {/* Разделитель */}
            <div className="border-t border-gray-200" />

            {/* Карточка бизнеса — Аварийный комиссар */}
            <div className="yandex-business-card border-l-4 border-l-orange-400 px-4 py-3 bg-gray-50/50">
              <p className="text-sm font-semibold text-foreground">🛡 Аварийный комиссар</p>
              <p className="text-xs text-gray-500 mt-1">
                <svg className="w-3.5 h-3.5 inline text-orange-400 -mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-medium text-foreground ml-0.5">4.8</span> · 68 отзывов
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
              className="advantage-card"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 flex-shrink-0">
                  <AdvantageIcon type={adv.icon} />
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

      {/* Волна-разделитель: переход white → hero-background */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="relative block w-full h-[40px] md:h-[60px]"
        >
          <path
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
            fill="#FFF7ED"
          />
        </svg>
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
    <div className="site-card">
      {/* Мокап телефона с оранжевым свечением */}
      <div className="relative">
        {/* Оранжевое свечение */}
        <div className="phone-glow" />

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
      </div>

      {/* Заголовок */}
      <h3 className="mt-6 text-xl md:text-2xl font-bold text-foreground">
        {site.title}
      </h3>

      {/* Подзаголовок */}
      <p className="text-sm text-gray-500 mt-1">
        {site.subtitle}
      </p>

      {/* Мини-статистика — оранжевые бейджи */}
      <div className="flex items-center gap-3 mt-4">
        {site.stats.map((stat) => (
          <span
            key={stat.value}
            className="site-stat-badge"
          >
            <span className="font-semibold text-orange-600">{stat.value}</span>
            <span className="text-orange-400 ml-1">{stat.label}</span>
          </span>
        ))}
      </div>

      {/* Список «Что входит» — SVG-иконки по типу */}
      <ul className="mt-6 space-y-2.5 w-full text-left">
        {site.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <FeatureIcon type={feature.icon} />
            <span className="text-sm text-foreground-accent">{feature.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhatYouGet;
