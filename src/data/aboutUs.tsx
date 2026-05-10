import {
    HiCursorArrowRays,
    HiBolt,
    HiChartBar,
    HiUserGroup,
} from 'react-icons/hi2';
import React from 'react';

export const aboutUsData = {
  heading: 'Не агентство. Команда, которая внедряет.',
  subheading: 'Малая команда с полным циклом — от разработки до сопровождения. Прямой контакт, никаких менеджеров-посредников.',

  person: {
    name: 'Степанов П.П.',
    role: 'Руководитель проектов',
    photo: '/team-photo.webp',
    photoAlt: 'Степанов П.П. — руководитель проектов',
  },

  checklist: [
    'Малая, но эффективная команда',
    'Разработка любой сложности',
    'Маркетинг под ключ',
    'Полный цикл до результата',
  ],

  advantages: [
    {
      icon: <HiCursorArrowRays className="w-7 h-7" />,
      title: 'Без бюрократии',
      description: 'Прямой контакт с исполнителем. Решения за часы, не за дни. Без согласований через трёх менеджеров.',
    },
    {
      icon: <HiBolt className="w-7 h-7" />,
      title: 'Современный стек',
      description: 'Next.js, TypeScript, AI-инструменты. Не шаблоны — решение под вашу задачу с нуля.',
    },
    {
      icon: <HiChartBar className="w-7 h-7" />,
      title: '1:5 ROI на пилоте',
      description: 'Каждый рубль отрабатывается. Платите за результат, а не за процесс и красивые отчёты.',
    },
    {
      icon: <HiUserGroup className="w-7 h-7" />,
      title: 'Сопровождение',
      description: 'Следим за конверсией, оптимизируем, вносим правки. Вы не одни после запуска — мы рядом.',
    },
  ],
};
