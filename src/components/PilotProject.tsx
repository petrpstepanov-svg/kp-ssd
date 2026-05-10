'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { pilotProjectData } from '@/data/pilotProject';

const PilotProject: React.FC = () => {
  return (
    <section id="pilot" className="py-16 md:py-24 bg-white px-5 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Лейбл-бейдж */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0 }}
          className="text-center lg:text-left"
        >
          <span className="inline-block rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-sm font-medium text-orange-700">
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

            {/* Что сделали */}
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg font-semibold text-foreground"
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
                  <span className="text-orange-500 font-bold text-lg flex-shrink-0">✓</span>
                  <span className="text-base text-foreground-accent text-left">{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Результат */}
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg font-semibold text-foreground mt-8"
            >
              Результат
            </motion.h3>
            <ul className="mt-3 space-y-3">
              {pilotProjectData.resultItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: 0.55 + i * 0.08 }}
                  className="flex items-start gap-3 lg:justify-start justify-center"
                >
                  <span className="text-lg flex-shrink-0">{item.icon}</span>
                  <span className="text-base text-foreground-accent text-left">
                    {item.icon === '🛡' ? (
                      <>
                        Вычислили и <strong>заблокировали</strong> склик конкурентов — ваша реклама <strong>защищена</strong>
                      </>
                    ) : (
                      item.text
                    )}
                  </span>
                </motion.li>
              ))}
            </ul>

          </div>

          {/* ПРАВАЯ КОЛОНКА — мокап телефона */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:w-[42%] lg:pl-8 lg:mt-8 flex flex-col items-center"
          >
            <div className="relative">
              <div className="rounded-[2rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden bg-gray-900 w-56 md:w-[280px]">
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

              {/* Оранжевый бейдж-маркер */}
              <div className="absolute -bottom-3 -right-3 z-10">
                <span className="inline-flex items-center gap-1 rounded-full bg-orange-500 text-white text-xs font-bold px-3 py-1.5 shadow-lg">
                  ✓ #1
                </span>
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
          <div className="rounded-2xl border border-orange-200 bg-orange-50 px-6 py-5 md:px-8 md:py-6 lg:text-left text-center">
            <p className="text-base md:text-lg text-orange-900 font-medium">
              <span className="mr-2">💡</span>
              {pilotProjectData.conclusion}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PilotProject;
