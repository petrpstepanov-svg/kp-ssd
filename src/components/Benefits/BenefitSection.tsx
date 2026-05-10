"use client"
import Image from "next/image";
import clsx from "clsx";
import { motion, Variants } from "framer-motion"

import BenefitBullet from "./BenefitBullet";
import SectionTitle from "../SectionTitle";
import { IBenefit } from "@/types";
import { HiGlobeAlt, HiMapPin, HiChartBar } from 'react-icons/hi2';

interface Props {
    benefit: IBenefit;
    imageAtRight?: boolean;
    index: number;
}

const containerVariants: Variants = {
    offscreen: {
        opacity: 0,
        y: 100
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.9,
            delayChildren: 0.2,
            staggerChildren: 0.1,
        }
    }
};

export const childVariants = {
    offscreen: {
        opacity: 0,
        x: -50,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 1,
        }
    },
};

const BenefitSection: React.FC<Props> = ({ benefit, imageAtRight, index }: Props) => {
    const { title, description, imageSrc, bullets } = benefit;

    return (
        <section className="benefit-section">
            <motion.div
                className="flex flex-wrap flex-col items-center justify-center gap-2 lg:flex-row lg:gap-20 lg:flex-nowrap mb-20"
                variants={containerVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
            >
                <div
                    className={clsx("flex flex-wrap items-center w-full max-w-xl", { "justify-start": imageAtRight, "lg:order-1 justify-end": !imageAtRight })}
                >
                    <div className="w-full text-center lg:text-left">
                        <motion.div
                            className="flex flex-col w-full"
                            variants={childVariants}
                        >
                            {/* Side-tag */}
                            <div className="flex items-center gap-2.5 justify-center lg:justify-start mb-3">
                                <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                                    {index === 0 ? (
                                        <HiGlobeAlt className="w-4 h-4 text-orange-500" />
                                    ) : index === 1 ? (
                                        <HiMapPin className="w-4 h-4 text-orange-500" />
                                    ) : (
                                        <HiChartBar className="w-4 h-4 text-orange-500" />
                                    )}
                                </div>
                                <span className="text-sm font-semibold text-orange-700">
                                    {index === 0 ? 'Сайт' : index === 1 ? 'Карты' : 'Трафик'}
                                </span>
                            </div>

                            <SectionTitle>
                                <h3 className="lg:max-w-2xl border-l-4 border-l-orange-400 pl-4">
                                    {title}
                                </h3>
                            </SectionTitle>

                            <p className="mt-1.5 mx-auto lg:ml-0 leading-normal text-foreground-accent">
                                {description}
                            </p>
                        </motion.div>

                        <div className="mx-auto lg:ml-0 w-full">
                            {bullets.map((item, index) => (
                                <BenefitBullet key={index} title={item.title} icon={item.icon} description={item.description} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className={clsx("mt-5 lg:mt-0", { "lg:order-2": imageAtRight })}>
                    <div className={clsx("w-fit flex", { "justify-start": imageAtRight, "justify-end": !imageAtRight })}>
                        <div className="benefit-image-frame group">
                            <Image
                                src={imageSrc}
                                alt={title}
                                width="420"
                                height="315"
                                quality={100}
                                className="rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default BenefitSection
