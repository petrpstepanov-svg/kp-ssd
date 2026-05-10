'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ------------------------------------------------------------------ */
/*  Карта секций                                                       */
/* ------------------------------------------------------------------ */

const sections = [
    { id: 'hero', label: 'Начало' },
    { id: 'pilot', label: 'Пилот' },
    { id: 'results', label: 'Результаты' },
    { id: 'what-you-get', label: 'Возможности' },
    { id: 'forecast', label: 'Прогноз' },
    { id: 'features', label: 'Услуги' },
    { id: 'pricing', label: 'Стоимость' },
    { id: 'about', label: 'О нас' },
    { id: 'cta', label: 'Связаться' },
] as const;

/* ------------------------------------------------------------------ */
/*  Компонент                                                          */
/* ------------------------------------------------------------------ */

const FloatingNav: React.FC = () => {
    const [activeId, setActiveId] = useState<string>('hero');
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (!el) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveId(id);
                        }
                    });
                },
                {
                    rootMargin: '-20% 0px -60% 0px',
                    threshold: 0,
                }
            );

            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((obs) => obs.disconnect());
    }, []);

    const handleClick = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav
            className="floating-nav"
            aria-label="Навигация по секциям"
        >
            {sections.map(({ id, label }) => {
                const isActive = activeId === id;
                const isHovered = hoveredId === id;

                return (
                    <button
                        key={id}
                        onClick={() => handleClick(id)}
                        onMouseEnter={() => setHoveredId(id)}
                        onMouseLeave={() => setHoveredId(null)}
                        className="floating-nav-item"
                        aria-label={`Перейти к секции ${label}`}
                        aria-current={isActive ? 'true' : undefined}
                    >
                        {/* Точка */}
                        <span className="floating-nav-dot-wrapper">
                            <motion.span
                                className={`floating-nav-dot ${isActive ? 'floating-nav-dot-active' : ''}`}
                                animate={{
                                    scale: isActive ? 1.3 : 1,
                                    backgroundColor: isActive ? '#f97316' : '#d1d5db',
                                }}
                                transition={{ duration: 0.25 }}
                            />
                        </span>

                        {/* Подсказка при наведении */}
                        <AnimatePresence>
                            {isHovered && (
                                <motion.span
                                    className="floating-nav-label"
                                    initial={{ opacity: 0, x: 8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 8 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    {label}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </button>
                );
            })}
        </nav>
    );
};

export default FloatingNav;
