import {
    HiComputerDesktop,
    HiMapPin,
    HiMagnifyingGlass,
    HiCursorArrowRays,
    HiArrowTrendingUp,
    HiUserGroup,
    HiCodeBracket,
    HiCheckCircle
} from "react-icons/hi2";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Современный сайт",
        description: "Отдельные страницы для каждой услуги, прозрачные тарифы и кнопка «Позвонить» на видном месте. Оптимизирован под мобильные — 90% клиентов звонят с телефона.",
        bullets: [
            {
                title: "Эвакуация, аварийный комиссар, техпомощь",
                description: "Отдельная страница для каждого направления с тарифами и описанием.",
                icon: <HiComputerDesktop className="w-6 h-6" />
            },
            {
                title: "Конверсия в заявку с первого визита",
                description: "Прозрачные тарифы и кнопка «Позвонить» на видном месте.",
                icon: <HiCursorArrowRays className="w-6 h-6" />
            },
            {
                title: "Мобильная адаптация",
                description: "90% клиентов звонят с телефона — сайт оптимизирован под мобильные.",
                icon: <HiUserGroup className="w-6 h-6" />
            }
        ],
        imageSrc: "/photo-1.jpg"
    },
    {
        title: "Яндекс Карты и Бизнес",
        description: "Полный профиль ООО «ССД»: услуги, фото, часы работы, описание. Система сбора отзывов, рост рейтинга. Вы в ТОП-3 на картах при поиске «эвакуатор рядом».",
        bullets: [
            {
                title: "Полный бизнес-профиль",
                description: "Все услуги, описание, УТП, 10–15 фотографий техники.",
                icon: <HiMapPin className="w-6 h-6" />
            },
            {
                title: "Система работы с отзывами",
                description: "Шаблоны ответов, стимулирование, рост рейтинга.",
                icon: <HiCheckCircle className="w-6 h-6" />
            },
            {
                title: "Регулярные публикации",
                description: "Акции и публикации для поддержания активности профиля.",
                icon: <HiArrowTrendingUp className="w-6 h-6" />
            }
        ],
        imageSrc: "/photo-3.jpg"
    },
    {
        title: "SEO и контент + Яндекс Директ",
        description: "Техническая оптимизация, продвижение по ключевым запросам, экспертные статьи. Параллельно — две кампании Яндекс Директ для максимального охвата.",
        bullets: [
            {
                title: "SEO-оптимизация",
                description: "Метатеги, микроразметка, 200+ ключевых запросов, контент-маркетинг.",
                icon: <HiMagnifyingGlass className="w-6 h-6" />
            },
            {
                title: "Яндекс Директ",
                description: "Две кампании: эвакуация + аварийный комиссар. Только Челябинск.",
                icon: <HiCursorArrowRays className="w-6 h-6" />
            },
            {
                title: "Окупаемость 1:5",
                description: "Постоянная оптимизация, снижение стоимости клика, рост ROI.",
                icon: <HiCodeBracket className="w-6 h-6" />
            }
        ],
        imageSrc: "/top1-screenshot.jpg"
    },
]
