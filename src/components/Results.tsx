'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiArrowRight, HiArrowPath, HiMegaphone, HiChartBar } from 'react-icons/hi2';
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
    <section id="results" className="relative overflow-x-hidden py-16 md:py-24 bg-hero-background px-5 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Номер секции «03 — Результаты» */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0 }}
          className="block text-sm font-bold text-orange-500/60 tracking-widest uppercase lg:text-left text-center"
        >
          03 — Результаты
        </motion.span>

        {/* Заголовок секции */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.15] tracking-tight lg:text-left text-center"
        >
          {heading}
        </motion.h2>

        {/* Подзаголовок */}
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

        {/* 5 метрик-карточек */}
        {/* Мобильный: grid-cols-2 (2+2+1, ROI по центру), ПК: 5 в ряд */}
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.value}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className={`metric-card ${i === 4 ? 'metric-card-accent col-span-2 md:col-span-1' : ''}`}
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
              {metric.badge && (
                <span className="metric-badge">
                  {metric.badge}
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Бюджетная строка с progress-bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 budget-card"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Вложено */}
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-2xl md:text-3xl font-bold text-foreground">
                {budget.invested.value}
              </span>
              <span className="text-sm text-gray-400">{budget.invested.label}</span>
            </div>

            {/* Стрелка + progress-bar */}
            <div className="flex items-center gap-2 flex-1 justify-center sm:px-4">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="budget-progress"
              >
                <div className="budget-progress-fill" />
              </motion.div>
              <HiArrowRight className="text-orange-400 w-5 h-5 flex-shrink-0" />
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
                <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center">
                  <HiArrowPath className="w-3.5 h-3.5 text-green-500" />
                </div>
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

        {/* Фото-карусель парка техники */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10"
        >
          <div className="flex items-center gap-3 md:gap-4 overflow-x-auto snap-x snap-mandatory sm:overflow-visible">
            {photos.map((photo) => (
              <div
                key={photo.src}
                className="flex-1 min-w-[70vw] sm:min-w-0 snap-center sm:snap-none"
              >
                <div className="photo-frame">
                  <Image
                    src={photo.src}
                    width={400}
                    height={224}
                    quality={90}
                    unoptimized={true}
                    alt={photo.alt}
                    className="rounded-xl object-cover h-48 md:h-56 w-full"
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-3 text-center">
            {photosCaption}
          </p>
        </motion.div>

        {/* Плашка «Аварийный комиссар» */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 lg:max-w-3xl"
        >
          <div className="commissioner-card">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <HiMegaphone className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p className="text-lg md:text-xl font-bold text-orange-700">
                  {commissioner.title}
                </p>
                <p className="text-base text-orange-600 mt-1">
                  {commissioner.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Масштабирование (прогноз) — карточка */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-8 max-w-2xl lg:mx-0 mx-auto"
        >
          <div className="scaling-card">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <HiChartBar className="w-5 h-5 text-orange-500" />
              </div>
              <p className="text-base md:text-lg text-foreground-accent text-left">
                {scaling}
              </p>
            </div>
          </div>
        </motion.div>

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

export default Results;
