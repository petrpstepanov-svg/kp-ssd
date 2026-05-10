'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi2';
import { aboutUsData } from '@/data/aboutUs';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AboutUs: React.FC = () => {
  const { heading, subheading, person, checklist, advantages } = aboutUsData;

  return (
    <section id="about" className="relative overflow-x-hidden bg-white py-16 md:py-24 px-5 md:px-8">
      {/* Волна-переход: предыдущий блок → белый фон */}
      <div className="relative left-0 right-0 overflow-hidden leading-[0] -mt-1 -mx-5 md:-mx-8">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="relative block w-full h-[40px] md:h-[60px]"
        >
          <path
            d="M0,40 C360,0 720,80 1080,40 C1260,20 1380,30 1440,40 L1440,80 L0,80 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Номер секции */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-sm font-bold text-orange-500/60 tracking-widest uppercase text-center lg:text-left block mb-4"
        >
          08 — О нас
        </motion.span>

        {/* Заголовок */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-center lg:text-left"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {heading}
        </motion.h2>

        <motion.p
          className="text-base md:text-lg text-foreground-accent max-w-lg mx-auto lg:mx-0 text-center lg:text-left mt-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {subheading}
        </motion.p>

        {/* Фото + чеклист */}
        <motion.div
          className="mt-12 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Фото */}
          <div className="flex flex-col items-center lg:items-start shrink-0">
            <div className="about-photo-frame group">
              <Image
                src={person.photo}
                alt={person.photoAlt}
                width={224}
                height={280}
                className="object-cover w-48 md:w-56 h-auto transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <p className="text-lg font-bold text-foreground text-center lg:text-left mt-4">
              {person.name}
            </p>
            <p className="text-sm font-medium text-orange-600 text-center lg:text-left">
              {person.role}
            </p>
          </div>

          {/* Чеклист */}
          <div className="space-y-3">
            {checklist.map((item, i) => (
              <div key={i} className="about-checklist-card">
                <div className="flex items-center gap-3">
                  <HiCheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                  <span className="text-base text-foreground">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Карточки преимуществ */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {advantages.map((adv, i) => (
            <motion.div
              key={i}
              className="about-advantage-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0 text-orange-500">
                  {adv.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{adv.title}</h3>
                  <p className="text-sm text-foreground-accent mt-1 leading-relaxed">{adv.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
