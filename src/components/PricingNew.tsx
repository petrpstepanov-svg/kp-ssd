'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    HiChevronDown,
    HiCheckCircle,
    HiArrowTrendingUp,
} from 'react-icons/hi2';
import { pricingData } from '@/data/pricingNew';

/* ------------------------------------------------------------------ */
/*  Аккордеон-секция для карточки «Запуск»                             */
/* ------------------------------------------------------------------ */
const AccordionSection = ({
  title,
  items,
  defaultOpen = true,
}: {
  title: string;
  items: string[];
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-100 last:border-0">
      {/* Заголовок — кликабельный */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="text-lg font-semibold text-foreground">{title}</span>
        <HiChevronDown
          className={`ml-2 shrink-0 w-5 h-5 text-gray-400 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Список пунктов */}
      {open && (
        <ul className="space-y-2 mt-0 pb-4">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <HiCheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
              <span className="text-sm text-foreground-accent">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Основной компонент PricingNew                                      */
/* ------------------------------------------------------------------ */
const PricingNew: React.FC = () => {
  const { launch, maintenance, adBudget } = pricingData;

  return (
    <div className="w-full">
      {/* Номер секции */}
      <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-sm font-bold text-orange-500/60 tracking-widest uppercase text-center block mb-6"
      >
          07 — Стоимость
      </motion.span>

      {/* ---- Две карточки: Запуск + Сопровождение ---- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ========== Карточка «Запуск» ========== */}
        <div className="pricing-card-launch">
          {/* Верхняя часть */}
          <div className="px-6 pt-6 pb-4">
            {/* Лейбл — side-tag */}
            <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    {launch.labelIcon}
                </div>
                <span className="text-sm font-semibold text-orange-700">{launch.label}</span>
            </div>

            {/* Цена */}
            <p className="mt-4 text-4xl md:text-5xl font-bold text-orange-500">
              {launch.price}
            </p>
            <p className="text-sm text-gray-400">{launch.priceNote}</p>

            {/* Описание */}
            <p className="text-sm text-foreground-accent mt-2">
              {launch.description}
            </p>
          </div>

          {/* Аккордеон-секции */}
          <div className="px-6 pb-4">
            {launch.sections.map((section, i) => (
              <AccordionSection
                key={i}
                title={section.title}
                items={section.items}
                defaultOpen={true}
              />
            ))}
          </div>
        </div>

        {/* ========== Карточка «Сопровождение» ========== */}
        <div className="pricing-card-maintenance">
          {/* Верхняя часть */}
          <div className="px-6 pt-6 pb-4">
            {/* Лейбл — side-tag */}
            <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    {maintenance.labelIcon}
                </div>
                <span className="text-sm font-semibold text-gray-700">{maintenance.label}</span>
            </div>

            {/* Цена */}
            <p className="mt-4 text-4xl md:text-5xl font-bold text-foreground">
              {maintenance.price}
            </p>
            <p className="text-sm text-gray-400">{maintenance.priceNote}</p>

            {/* Описание */}
            <p className="text-sm text-foreground-accent mt-2">
              {maintenance.description}
            </p>
          </div>

          {/* Список пунктов — мини-карточки */}
          <div className="px-6 pb-4 space-y-3">
            {maintenance.items.map((item, i) => (
                <div key={i} className="pricing-bullet-card">
                    <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 text-orange-500">
                            {item.icon}
                        </div>
                        <span className="text-sm text-foreground-accent pt-1.5">{item.text}</span>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---- Рекламный бюджет — conclusion-card ---- */}
      <div className="pricing-adbudget-card">
        {/* Заголовок */}
        <h3 className="text-lg font-semibold text-foreground">
          {adBudget.title}
        </h3>
        <p className="text-xs text-gray-400 mt-1">{adBudget.note}</p>

        {/* Строки */}
        <div className="mt-4">
          {adBudget.items.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-3 border-b border-orange-100 last:border-0"
            >
              {/* Левая часть */}
              <div>
                <span className="text-foreground font-medium flex items-center gap-2">
                    <span className="text-orange-500">{item.icon}</span>
                    {item.label}
                </span>
                <p className="text-xs text-gray-400 mt-0.5">{item.description}</p>
              </div>
              {/* Правая часть */}
              <span className="font-semibold text-foreground shrink-0 ml-4">
                {item.value}
              </span>
            </div>
          ))}

          {/* Итого */}
          <div className="flex items-center justify-between pt-4 mt-1 border-t border-orange-200">
            <div>
              <span className="text-lg font-bold text-orange-600">{adBudget.total}</span>
              <p className="text-xs text-foreground-accent mt-0.5">{adBudget.totalDescription}</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
              <HiArrowTrendingUp className="w-5 h-5 text-orange-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Волна-разделитель */}
      <div className="relative left-0 right-0 overflow-hidden leading-[0] -mb-1 -mx-6 md:-mx-8 mt-12">
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
    </div>
  );
};

export default PricingNew;
