"use client"
import { motion } from "framer-motion"
import { IBenefitBullet } from "@/types"
import { childVariants } from "./BenefitSection"

const BenefitBullet: React.FC<IBenefitBullet> = ({ title, description, icon }: IBenefitBullet) => {
    return (
        <motion.div
            className="benefit-bullet-card mt-5"
            variants={childVariants}
        >
            <div className="flex items-start gap-3.5">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500">
                    {icon}
                </div>
                <div>
                    <h4 className="text-base font-semibold text-foreground">
                        {title}
                    </h4>
                    <p className="text-sm text-foreground-accent mt-0.5 leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default BenefitBullet
