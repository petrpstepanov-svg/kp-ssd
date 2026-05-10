'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center min-h-screen pb-16 md:pb-24 pt-28 md:pt-36 lg:pt-40 px-5 md:px-8 bg-gradient-to-b from-[#0f0a1e] via-[#1a1035] to-[#2d1b4e]"
    >
      {/* Soft spotlight overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(255,255,255,0.03),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">

        {/* LEFT COLUMN */}
        <div className="flex-1 lg:max-w-xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
          >
            <span className="inline-block rounded-full border border-white/20 bg-white/[0.08] px-4 py-1.5 text-sm font-medium text-white">
              {heroDetails.badge}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight max-w-xl"
          >
            Мы{' '}
            <span className="text-orange-400">{heroDetails.headingAccent}</span>
            {' '}вывели вас в ТОП-1 по эвакуации в Челябинске
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            className="mt-6 text-base md:text-lg text-white/80 max-w-lg"
          >
            {heroDetails.subheading}
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease: 'easeOut' }}
            className="mt-8 grid grid-cols-3 gap-3 sm:gap-4"
          >
            {heroDetails.stats.map((stat) => (
              <div
                key={stat.value}
                className="flex flex-col items-center text-center rounded-2xl bg-white/[0.06] border border-white/10 px-3 py-4 sm:px-5 sm:py-4"
              >
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-400">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-white/60 mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Photo on mobile — goes between stats and CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="relative mt-8 lg:hidden"
          >
            <div className="relative">
              <Image
                src={heroDetails.mainImage}
                width={600}
                height={450}
                quality={100}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={true}
                unoptimized={true}
                alt="Техника ООО ССД — эвакуатор и аварийные комиссары"
                className="rounded-2xl shadow-2xl border border-white/10 object-cover w-full"
              />
              {/* Floating phone mockup */}
              <div className="absolute -bottom-4 -right-3 sm:-bottom-5 sm:-right-5 z-20">
                <div className="rounded-2xl border-[6px] border-gray-800 shadow-xl overflow-hidden bg-gray-800">
                  <Image
                    src={heroDetails.screenshotImage}
                    width={120}
                    height={213}
                    quality={100}
                    unoptimized={true}
                    alt="ТОП-1 в Яндекс — скриншот результата"
                    className="rounded-lg object-cover sm:hidden"
                  />
                  <Image
                    src={heroDetails.screenshotImage}
                    width={160}
                    height={284}
                    quality={100}
                    unoptimized={true}
                    alt="ТОП-1 в Яндекс — скриншот результата"
                    className="rounded-lg object-cover hidden sm:block"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href={heroDetails.primaryCta.href}
              className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 bg-orange-500 text-white font-semibold text-base shadow-lg shadow-orange-500/25 transition-all duration-300 hover:bg-orange-600 hover:-translate-y-0.5"
            >
              {heroDetails.primaryCta.text}
            </a>
            <a
              href={heroDetails.phoneCta.href}
              className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 border-2 border-white/30 text-white font-medium text-base transition-all duration-300 hover:border-white/50 hover:bg-white/10"
            >
              📞 {heroDetails.phoneCta.text}
            </a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN — photo composition (desktop only) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="relative flex-shrink-0 w-full lg:w-auto hidden lg:block"
        >
          <div className="relative">
            <Image
              src={heroDetails.mainImage}
              width={600}
              height={450}
              quality={100}
              sizes="50vw"
              priority={true}
              unoptimized={true}
              alt="Техника ООО ССД — эвакуатор и аварийные комиссары"
              className="rounded-2xl shadow-2xl border border-white/10 object-cover w-full"
            />

            {/* Floating phone mockup */}
            <div className="absolute -bottom-5 -right-5 z-20">
              <div className="rounded-2xl border-[6px] border-gray-800 shadow-xl overflow-hidden bg-gray-800">
                <Image
                  src={heroDetails.screenshotImage}
                  width={180}
                  height={320}
                  quality={100}
                  unoptimized={true}
                  alt="ТОП-1 в Яндекс — скриншот результата"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
