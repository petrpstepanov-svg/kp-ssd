'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { resultsData } from '@/data/results';

const Results: React.FC = () => {
  const {
    heading,
    subheading,
    subheadingAccent,
    subheadingTail,
    metrics,
    budget,
    photos,
    photosCaption,
    commissioner,
    scaling,
  } = resultsData;

  return (
    <section id="results" className="py-16 md:py-24 bg-hero-background px-5 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* 5.1 — Заголовок секции */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.15] tracking-tight lg:text-left text-center"
        >
          {heading}
        </motion.h2>

        {/* 5.2 — Подзаголовок */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-base md:text-lg text-foreground-accent max-w-2xl lg:mx-0 mx-auto lg:text-left text-center"
        >
          {subheading}{' '}
          <span className="font-semibold text-foreground">{subheadingAccent}</span>{' '}
          {subheadingTail}
        </motion.p>

        {/* 5.3 — 5 метрик-карточек */}
        {/* Мобильный: grid-cols-3 (3+2), ПК: flex 5 в ряд */}
        <div className="mt-10 grid grid-cols-3 gap-3 sm:flex sm:items-stretch sm:justify-center sm:gap-3 md:sm:gap-5">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.value}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className="flex flex-col items-center text-center rounded-2xl bg-white border border-gray-100 shadow-sm px-4 py-5 md:px-6 md:py-6 flex-1 min-w-0"
            >
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500">
                {metric.value}
              </span>
              <span className="text-sm font-semibold text-foreground mt-2">
                {metric.label}
              </span>
              <span className="text-xs text-gray-400 mt-0.5">
                {metric.description}
              </span>
              {/* Бейдж «Конверсия 27%» для карточки «6 заказов» */}
              {metric.badge && (
                <span className="text-xs font-medium text-green-600 bg-green-50 rounded-full px-2 py-0.5 mt-1">
                  {metric.badge}
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* 5.4 — Бюджетная строка */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 rounded-2xl bg-gray-50 border border-gray-100 px-6 py-5 md:px-8 md:py-6 lg:max-w-3xl"
        >
          {/* ПК: горизонтальная лента */}
          {/* Мобильный: вертикальный стек */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Вложено */}
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-2xl md:text-3xl font-bold text-foreground">
                {budget.invested.value}
              </span>
              <span className="text-sm text-gray-400">{budget.invested.label}</span>
            </div>

            {/* Стрелка */}
            <div className="flex items-center justify-center text-gray-300 text-2xl flex-shrink-0 rotate-90 sm:rotate-0">
              →
            </div>

            {/* Получено */}
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-2xl md:text-3xl font-bold text-orange-500">
                {budget.received.value}
              </span>
              <span className="text-sm text-gray-400">{budget.received.label}</span>
            </div>

            {/* Остаток */}
            <div className="flex flex-col items-center sm:items-start sm:ml-auto">
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-lg">🔄</span>
                <span className="text-xl md:text-2xl font-bold text-green-600">
                  {budget.remaining.value}
                </span>
              </div>
              <span className="text-sm text-gray-400">{budget.remaining.label}</span>
            </div>
          </div>

          {/* Подпись */}
          <p className="text-sm text-gray-400 text-center mt-3">
            {budget.note}
          </p>
        </motion.div>

        {/* 5.5 — Фото-карусель парка техники */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10"
        >
          {/* ПК: 4 фото в ряд, Мобильный: горизонтальный скролл */}
          <div className="flex items-center gap-3 md:gap-4 overflow-x-auto snap-x snap-mandatory sm:overflow-visible">
            {photos.map((photo) => (
              <div
                key={photo.src}
                className="flex-1 min-w-0 min-w-[70vw] sm:min-w-0 snap-center sm:snap-none"
              >
                <Image
                  src={photo.src}
                  width={400}
                  height={224}
                  quality={90}
                  unoptimized={true}
                  alt={photo.alt}
                  className="rounded-xl object-cover h-48 md:h-56 w-full transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-3 text-center">
            {photosCaption}
          </p>
        </motion.div>

        {/* 5.6 — Плашка «Аварийный комиссар» */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 lg:max-w-3xl"
        >
          <div className="rounded-2xl border-2 border-orange-300 bg-orange-50 px-6 py-5 md:px-8 md:py-6 lg:text-left text-center">
            <p className="text-lg md:text-xl font-bold text-orange-700">
              🚨 {commissioner.title}
            </p>
            <p className="text-base text-orange-600 mt-1">
              {commissioner.description}
            </p>
          </div>
        </motion.div>

        {/* 5.7 — Масштабирование (прогноз) */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-base md:text-lg text-foreground-accent mt-6 max-w-2xl lg:mx-0 mx-auto lg:text-left text-center"
        >
          {scaling}
        </motion.p>

      </div>
    </section>
  );
};

export default Results;
