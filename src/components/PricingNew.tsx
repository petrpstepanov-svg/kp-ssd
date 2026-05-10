'use client';

import { useState } from 'react';
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
        <span
          className={`ml-2 shrink-0 text-gray-400 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        >
          ▼
        </span>
      </button>

      {/* Список пунктов */}
      {open && (
        <ul className="space-y-2 mt-0 pb-4">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-0.5 shrink-0 text-orange-500 font-bold">✓</span>
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
      {/* ---- Две карточки: Запуск + Сопровождение ---- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ========== Карточка «Запуск» ========== */}
        <div className="rounded-2xl border-2 border-orange-300 bg-white shadow-lg overflow-hidden">
          {/* Верхняя часть */}
          <div className="px-6 pt-6 pb-4">
            {/* Лейбл */}
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700">
              <span>{launch.labelIcon}</span>
              {launch.label}
            </span>

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
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
          {/* Верхняя часть */}
          <div className="px-6 pt-6 pb-4">
            {/* Лейбл */}
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-700">
              <span>{maintenance.labelIcon}</span>
              {maintenance.label}
            </span>

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

          {/* Список пунктов — без аккордеона */}
          <div className="px-6 pb-4">
            {maintenance.items.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0"
              >
                <span className="text-xl shrink-0">{item.icon}</span>
                <span className="text-sm text-foreground-accent">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---- Рекламный бюджет — плашка ---- */}
      <div className="rounded-2xl bg-gray-50 border border-gray-200 px-6 py-5 md:px-8 md:py-6 mt-8 max-w-3xl mx-auto">
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
              className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0"
            >
              {/* Левая часть */}
              <div>
                <span className="text-foreground font-medium">
                  {i === 0 ? '🚗' : '🛡'} {item.label}
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
          <div className="flex items-center justify-between pt-4 mt-1">
            <div>
              <span className="font-bold text-orange-500">{adBudget.total}</span>
              <p className="text-xs text-foreground mt-0.5">{adBudget.totalDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingNew;
