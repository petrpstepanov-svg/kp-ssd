"use client"
import { motion } from "framer-motion"
import BenefitSection from "./BenefitSection"
import { benefits } from "@/data/benefits"

const Benefits: React.FC = () => {
    return (
        <div id="features">
            <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
                className="text-sm font-bold text-orange-500/60 tracking-widest uppercase text-center block mb-4"
            >
                06 — Возможности
            </motion.span>
            {benefits.map((item, index) => {
                return <BenefitSection key={index} benefit={item} imageAtRight={index % 2 !== 0} index={index} />
            })}
            {/* Волна-разделитель */}
            <div className="relative left-0 right-0 overflow-hidden leading-[0] -mb-1">
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
    )
}

export default Benefits
