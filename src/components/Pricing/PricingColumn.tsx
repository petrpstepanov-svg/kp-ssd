import clsx from "clsx";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { IPricing } from "@/types";

interface Props {
    tier: IPricing;
    highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
    const { name, price, features } = tier;

    return (
        <div className={clsx("w-full max-w-sm mx-auto bg-white rounded-xl border border-gray-200 lg:max-w-full", { "shadow-lg border-orange-300": highlight })}>
            <div className="p-6 border-b border-gray-200 rounded-t-xl">
                <h3 className="text-2xl font-semibold mb-4">{name}</h3>
                <p className="text-2xl md:text-3xl font-bold mb-6">
                    <span className={clsx({ "text-primary": highlight })}>
                        {typeof price === 'number' ? `${price} ₽` : price}
                    </span>
                </p>
                <a href="tel:+79080555555" className={clsx("block w-full py-3 px-4 rounded-full transition-colors text-center font-semibold", { "bg-primary hover:bg-primary-accent text-white": highlight, "bg-hero-background hover:bg-gray-200": !highlight })}>
                    Обсудить
                </a>
            </div>
            <div className="p-6 mt-1">
                <p className="font-bold mb-0">Что входит</p>
                <p className="text-foreground-accent mb-5">Полный список услуг</p>
                <ul className="space-y-4 mb-8">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                            <BsFillCheckCircleFill className="h-5 w-5 text-orange-500 mr-2 shrink-0" />
                            <span className="text-foreground-accent">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PricingColumn
