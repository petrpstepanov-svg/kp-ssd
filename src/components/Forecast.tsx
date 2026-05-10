'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  HiChartBar,
  HiMagnifyingGlass,
  HiMapPin,
  HiSparkles,
  HiChevronRight,
  HiChevronDown,
  HiRocketLaunch,
} from 'react-icons/hi2';
import { forecastData } from '@/data/forecast';

/* ============================================================ */
/* Inline SVG-график роста трафика (премиум-анимации)            */
/* ============================================================ */
const GrowthChart: React.FC = () => {
  const { monthLabels, seoValues, directValues, yAxisLabel, seoLabel, directLabel } = forecastData.chart;

  const vbW = 600;
  const vbH = 280;
  const padL = 55;
  const padR = 20;
  const padT = 20;
  const padB = 40;
  const chartW = vbW - padL - padR;
  const chartH = vbH - padT - padB;

  const maxVal = 20;
  const xStep = chartW / (monthLabels.length - 1);

  const toX = (i: number) => padL + i * xStep;
  const toY = (v: number) => padT + chartH - (v / maxVal) * chartH;

  const seoPts = seoValues.map((v, i) => ({ x: toX(i), y: toY(v) }));

  /* Плавная кривая SEO (catmull-rom → cubic bezier) */
  const seoPath = seoPts.reduce((acc, pt, i) => {
    if (i === 0) return `M ${pt.x} ${pt.y}`;
    const prev = seoPts[i - 1];
    const cpx1 = prev.x + (pt.x - prev.x) * 0.4;
    const cpy1 = prev.y;
    const cpx2 = pt.x - (pt.x - prev.x) * 0.4;
    const cpy2 = pt.y;
    return `${acc} C ${cpx1} ${cpy1}, ${cpx2} ${cpy2}, ${pt.x} ${pt.y}`;
  }, '');

  /* Заливка под SEO-кривой */
  const seoFillPath = `${seoPath} L ${seoPts[seoPts.length - 1].x} ${padT + chartH} L ${seoPts[0].x} ${padT + chartH} Z`;

  /* Direct-линия (пунктирная, стабильная) */
  const directPts = directValues.map((v, i) => ({ x: toX(i), y: toY(v) }));
  const directPath = directPts.reduce((acc, pt, i) => {
    if (i === 0) return `M ${pt.x} ${pt.y}`;
    return `${acc} L ${pt.x} ${pt.y}`;
  }, '');

  /* Горизонтальные направляющие */
  const gridLines = [0, 5, 10, 15, 20];

  return (
    <div className="max-w-2xl w-full mx-auto mt-8">
      <svg
        viewBox={`0 0 ${vbW} ${vbH}`}
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-auto"
      >
        {/* Сетка: горизонтальные линии */}
        {gridLines.map((v) => (
          <line
            key={v}
            x1={padL}
            y1={toY(v)}
            x2={vbW - padR}
            y2={toY(v)}
            stroke="#e5e7eb"
            strokeWidth="1"
            strokeDasharray="4 3"
          />
        ))}

        {/* Ось Y-подпись */}
        <text
          x={14}
          y={padT + chartH / 2}
          fill="#9ca3af"
          fontSize="11"
          textAnchor="middle"
          transform={`rotate(-90, 14, ${padT + chartH / 2})`}
        >
          {yAxisLabel}
        </text>

        {/* Y-цифры */}
        {gridLines.map((v) => (
          <text
            key={v}
            x={padL - 8}
            y={toY(v) + 4}
            fill="#9ca3af"
            fontSize="11"
            textAnchor="end"
          >
            {v}
          </text>
        ))}

        {/* X-подписи (месяцы) */}
        {monthLabels.map((label, i) => (
          <text
            key={label}
            x={toX(i)}
            y={padT + chartH + 24}
            fill="#9ca3af"
            fontSize="12"
            textAnchor="middle"
          >
            {label}
          </text>
        ))}

        {/* SEO заливка — анимированная */}
        <motion.path
          d={seoFillPath}
          fill="rgba(249,115,22,0.12)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
        />

        {/* SEO кривая — анимированная */}
        <motion.path
          d={seoPath}
          fill="none"
          stroke="#f97316"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        />

        {/* SEO точки — крупные с обводкой */}
        {seoPts.map((pt, i) => (
          <motion.circle
            key={i}
            cx={pt.x}
            cy={pt.y}
            r="4.5"
            fill="#f97316"
            stroke="white"
            strokeWidth="2"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
          />
        ))}

        {/* Direct пунктирная линия — анимированная */}
        <motion.path
          d={directPath}
          fill="none"
          stroke="#9ca3af"
          strokeWidth="2"
          strokeDasharray="8 4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        />

        {/* Direct точки */}
        {directPts.map((pt, i) => (
          <motion.circle
            key={i}
            cx={pt.x}
            cy={pt.y}
            r="3"
            fill="#9ca3af"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 1 + i * 0.06 }}
          />
        ))}

        {/* X-ось подпись */}
        <text x={padL + chartW / 2} y={vbH - 2} fill="#9ca3af" fontSize="11" textAnchor="middle">
          мес
        </text>
      </svg>

      {/* Легенда — увеличенная */}
      <div className="flex items-center justify-center gap-8 mt-5">
        <div className="flex items-center gap-2.5">
          <span className="w-5 h-1.5 bg-orange-500 rounded-full" />
          <span className="text-sm font-medium text-foreground-accent">{seoLabel}</span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="w-5 h-0.5 border-t-2 border-dashed border-gray-400" />
          <span className="text-sm font-medium text-foreground-accent">{directLabel}</span>
        </div>
      </div>
    </div>
  );
};

/* ============================================================ */
/* Подкомпонент: Карточка этапа таймлайна (премиум)               */
/* ============================================================ */
interface TimelineStep {
  month: string;
  title: string;
  items: string[];
}

const TimelineCard: React.FC<{ step: TimelineStep; isAccent?: boolean }> = ({ step, isAccent }) => {
  return (
    <div className={`timeline-card ${isAccent ? 'timeline-card-accent' : ''}`}>
      {/* Маркер */}
      <div className="flex flex-col items-center mb-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
          isAccent
            ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
            : 'bg-orange-500 text-white'
        }`}>
          {step.month}
        </div>
        <span className="text-xs text-gray-400 mt-1">{step.month} мес</span>
      </div>
      {/* Заголовок */}
      <h4 className="text-lg font-semibold text-foreground text-center">{step.title}</h4>
      {/* Список пунктов */}
      <ul className="mt-3 space-y-2">
        {step.items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-orange-500 font-bold text-sm flex-shrink-0 mt-0.5">●</span>
            <span className="text-sm text-foreground-accent">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

/* ============================================================ */
/* Основной компонент Forecast (премиум)                          */
/* ============================================================ */
const Forecast: React.FC = () => {
  const {
    heading,
    subheading,
    direct,
    organic,
    synergy,
    timeline,
    conclusion,
  } = forecastData;

  return (
    <section id="forecast" className="relative overflow-x-hidden py-16 md:py-24 bg-hero-background px-5 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* ── Номер секции: 05 — Прогноз ── */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0 }}
          className="block text-sm font-bold text-orange-500/60 tracking-widest uppercase text-center"
        >
          05 — Прогноз
        </motion.span>

        {/* ── Подсекция 1: Заголовок ── */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.15] tracking-tight text-center mt-2"
        >
          {heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-sm md:text-base text-foreground-accent max-w-2xl mx-auto text-center"
        >
          {subheading}
        </motion.p>

        {/* ── Подсекция 2: Яндекс Директ — side-tag + 4 карточки ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10"
        >
          <div className="flex items-center gap-2.5 lg:justify-start justify-center">
            <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
              <HiChartBar className="w-4 h-4 text-orange-500" />
            </div>
            <span className="text-sm font-semibold text-orange-700">{direct.label}</span>
          </div>
        </motion.div>

        <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {direct.metrics.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className="forecast-metric-card"
            >
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500">
                {m.value}
              </span>
              <p className="text-sm font-semibold text-foreground mt-2">{m.title}</p>
              <p className="text-xs text-gray-400 mt-0.5">{m.description}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Подсекция 3: Органический трафик — side-tag + 3 карточки + акцент ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12"
        >
          <div className="flex items-center gap-2.5 lg:justify-start justify-center">
            <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
              <HiMagnifyingGlass className="w-4 h-4 text-orange-500" />
            </div>
            <span className="text-sm font-semibold text-orange-700">{organic.label}</span>
          </div>
        </motion.div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-5">
          {organic.metrics.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: 0.55 + i * 0.08 }}
              className={`forecast-metric-card ${i === 2 ? 'forecast-metric-card-accent' : ''}`}
            >
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500">
                {m.value}
              </span>
              <p className="text-sm font-semibold text-foreground mt-2">{m.title}</p>
              <p className="text-xs text-gray-400 mt-0.5">{m.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Акцент-плашка: Яндекс Карты — conclusion-card стиль */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-6"
        >
          <div className="forecast-accent-card">
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <HiMapPin className="w-4 h-4 text-orange-500" />
              </div>
              <div>
                <p className="text-sm font-bold text-orange-700 mb-1">Приоритет</p>
                <p className="text-base text-orange-700/80">
                  <span className="font-bold">Яндекс Карты:</span>{' '}
                  {organic.accent.text}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Подсекция 4: Синергия — мини-карточка ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="mt-8 max-w-3xl lg:mx-0 mx-auto"
        >
          <div className="forecast-synergy-card">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <HiSparkles className="w-5 h-5 text-orange-500" />
              </div>
              <p className="text-base md:text-lg text-foreground-accent text-left">
                {synergy.text}
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Подсекция 5: График роста ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-foreground mt-12 text-center">
            Динамика заказов
          </h3>
          <GrowthChart />
        </motion.div>

        {/* ── Подсекция 6: Таймлайн — премиум ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-foreground mt-12 text-center lg:text-left">
            Долгосрочная стратегия
          </h3>

          {/* ПК: горизонтальный таймлайн */}
          <div className="hidden lg:flex items-start mt-8 gap-0">
            {timeline.map((step, i) => (
              <React.Fragment key={step.month}>
                <div className="flex-1">
                  <TimelineCard step={step} isAccent={i === 1} />
                </div>
                {i < timeline.length - 1 && (
                  <div className="flex items-center self-center px-3">
                    <div className="flex items-center gap-1">
                      <div className="w-8 h-0.5 bg-orange-200" />
                      <HiChevronRight className="text-orange-400 w-4 h-4" />
                      <div className="w-8 h-0.5 bg-orange-200" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Мобильный: вертикальный таймлайн */}
          <div className="lg:hidden flex flex-col items-center mt-8 gap-0">
            {timeline.map((step, i) => (
              <React.Fragment key={step.month}>
                <TimelineCard step={step} isAccent={i === 1} />
                {i < timeline.length - 1 && (
                  <div className="flex flex-col items-center my-2">
                    <div className="w-0.5 h-6 bg-orange-200" />
                    <HiChevronDown className="text-orange-400 w-4 h-4" />
                    <div className="w-0.5 h-6 bg-orange-200" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* ── Подсекция 7: Итоговый акцент — conclusion-card ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="mt-12"
        >
          <div className="forecast-conclusion-card">
            <div className="flex items-start gap-3 justify-center lg:justify-start">
              <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <HiRocketLaunch className="w-5 h-5 text-orange-500" />
              </div>
              <div className="text-center lg:text-left">
                <p className="text-sm font-bold text-orange-700 uppercase tracking-wide mb-1">Итог</p>
                <p className="text-base md:text-lg text-foreground-accent">
                  {conclusion}
                </p>
              </div>
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

export default Forecast;
