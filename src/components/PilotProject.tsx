'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiCheckCircle, HiTrophy, HiShieldCheck, HiChartBar, HiLightBulb } from 'react-icons/hi2';
import { pilotProjectData } from '@/data/pilotProject';

const ResultIcon: React.FC<{ index: number }> = ({ index }) => {
  const icons = [
    <HiTrophy key="trophy" className="w-4 h-4" />,
    <HiShieldCheck key="shield" className="w-4 h-4" />,
    <HiChartBar key="chart" className="w-4 h-4" />,
  ];
  return <>{icons[index] || icons[0]}</>;
};

const PilotProject: React.FC = () => {
  return (
    <section id="pilot" className="relative overflow-x-hidden py-16 md:py-24 bg-white px-5 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Номер секции «02 — Пилотный проект» */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
          className="block text-sm font-bold text-orange-500/60 tracking-widest uppercase lg:text-left text-center"
        >
          02 — Пилотный проект
        </motion.span>

        {/* Side-tag вместо pill-бейджа */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-center lg:text-left mt-2"
        >
          <span className="inline-flex items-center gap-2 pl-3 border-l-2 border-l-orange-400 text-sm font-semibold text-orange-700 lg:mx-0 mx-auto">
            {pilotProjectData.label}
          </span>
        </motion.div>

        {/* Заголовок */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.15] tracking-tight max-w-xl lg:mx-0 mx-auto lg:text-left text-center"
        >
          {pilotProjectData.heading}
        </motion.h2>

        {/* Подзаголовок */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base md:text-lg text-foreground-accent max-w-lg lg:mx-0 mx-auto lg:text-left text-center"
        >
          {pilotProjectData.subheading}
        </motion.p>

        {/* Двухколоночная часть */}
        <div className="flex flex-col lg:flex-row lg:items-start items-center gap-12 lg:gap-16 mt-10">

          {/* ЛЕВАЯ КОЛОНКА — списки */}
          <div className="lg:w-[58%] lg:pr-8 lg:text-left text-center">

            {/* Что сделали — h3 с оранжевой полоской слева */}
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg font-semibold text-foreground pl-3 border-l-2 border-l-orange-400"
            >
              Что сделали
            </motion.h3>
            <ul className="mt-3 space-y-3">
              {pilotProjectData.doneItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                  className="flex items-start gap-3 lg:justify-start justify-center"
                >
                  <HiCheckCircle className="text-orange-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-base text-foreground-accent text-left">{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Результат — h3 с оранжевой полоской слева + мини-карточки */}
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg font-semibold text-foreground mt-8 pl-3 border-l-2 border-l-orange-400"
            >
              Результат
            </motion.h3>
            <div className="mt-4 space-y-3">
              {pilotProjectData.resultItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: 0.55 + i * 0.08 }}
                  className="result-card"
                >
                  <div className="flex items-start gap-3">
                    <div className="result-icon-circle">
                      <ResultIcon index={i} />
                    </div>
                    <span className="text-base text-foreground-accent text-left">
                      {item.icon === '🛡' ? (
                        <>
                          Вычислили и <strong>заблокировали</strong> склик конкурентов — ваша реклама <strong>защищена</strong>
                        </>
                      ) : (
                        item.text
                      )}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* ПРАВАЯ КОЛОНКА — мокап телефона */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:w-[42%] lg:pl-8 lg:mt-8 flex flex-col items-center"
          >
            {/* Timeline-декор — только десктоп */}
            <div className="hidden lg:flex items-center gap-4 w-full mb-6">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-orange-500" />
                <div className="w-0.5 h-8 bg-orange-200" />
                <div className="w-2 h-2 rounded-full bg-orange-300" />
                <div className="w-0.5 h-8 bg-orange-200" />
                <div className="w-3 h-3 rounded-full bg-orange-500" />
              </div>
              <div className="flex flex-col justify-between h-full py-1">
                <span className="text-xs text-orange-400 font-medium">Настройка</span>
                <span className="text-xs text-orange-400 font-medium">Запуск</span>
                <span className="text-xs text-orange-400 font-medium">ТОП-1</span>
              </div>
            </div>

            {/* Мокап с glow + лейблом */}
            <div className="relative">
              {/* Оранжевое свечение под мокапом */}
              <div className="phone-glow" />

              <div className="relative">
                <div className="rounded-[2rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden bg-gray-900 w-56 md:w-[280px]">
                  {/* Лейбл «ПОИСК ЯНДЕКС» */}
                  <div className="absolute top-0 left-0 right-0 z-10 bg-gray-900/70 backdrop-blur-sm px-3 py-1.5 flex items-center gap-1.5">
                    <span className="text-red-500 text-xs font-bold">Я</span>
                    <span className="text-white/80 text-[10px] font-medium tracking-wide uppercase">Поиск</span>
                  </div>
                  <Image
                    src={pilotProjectData.screenshotImage}
                    width={280}
                    height={498}
                    quality={100}
                    unoptimized={true}
                    alt="ТОП-1 в Яндекс — скриншот результата поиска «эвакуатор челябинск»"
                    className="rounded-[1.5rem] w-full h-auto object-cover"
                  />
                </div>

                {/* Существующий бейдж ✓ #1 */}
                <div className="absolute -bottom-3 -right-3 z-10">
                  <span className="inline-flex items-center gap-1 rounded-full bg-orange-500 text-white text-xs font-bold px-3 py-1.5 shadow-lg">
                    ✓ #1
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-400 mt-3 text-center">
              {pilotProjectData.screenshotCaption}
            </p>
          </motion.div>

        </div>

        {/* Плашка «Вывод» */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 max-w-4xl"
        >
          <div className="conclusion-card">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <HiLightBulb className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p className="text-sm font-bold text-orange-700 uppercase tracking-wide mb-1">Вывод</p>
                <p className="text-base md:text-lg text-orange-900/80 font-medium">
                  {pilotProjectData.conclusion}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

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

export default PilotProject;
