'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { aboutUsData } from '@/data/aboutUs';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AboutUs: React.FC = () => {
  const { heading, subheading, person, checklist, advantages } = aboutUsData;

  return (
    <section id="about" className="bg-white py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
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
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={person.photo}
                alt={person.photoAlt}
                width={224}
                height={280}
                className="object-cover w-48 md:w-56 h-auto"
              />
            </div>
            <p className="text-lg font-bold text-foreground text-center lg:text-left mt-4">
              {person.name}
            </p>
            <p className="text-sm text-gray-500 text-center lg:text-left">
              {person.role}
            </p>
          </div>

          {/* Чеклист */}
          <div className="space-y-4">
            {checklist.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-orange-500 font-bold text-lg flex-shrink-0">✓</span>
                <span className="text-base text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Карточки преимуществ */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {advantages.map((adv, i) => (
            <motion.div
              key={i}
              className="rounded-xl bg-gray-50 border border-gray-100 p-5"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <span className="text-2xl">{adv.icon}</span>
              <h3 className="text-lg font-semibold text-foreground mt-2">{adv.title}</h3>
              <p className="text-sm text-foreground-accent mt-1">{adv.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
