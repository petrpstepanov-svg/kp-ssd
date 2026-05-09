import { FiPhone } from "react-icons/fi";
import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "22 звонка",
        icon: <FiPhone size={34} className="text-orange-500" />,
        description: "Целевых обращений за 10 дней тестовой кампании в Яндекс Директ."
    },
    {
        title: "1 : 5",
        icon: <BsBarChartFill size={34} className="text-orange-500" />,
        description: "Возврат на вложенное: 10 500 ₽ вложено — 50 000 ₽ получено в заказах."
    },
    {
        title: "ТОП-1",
        icon: <BsFillStarFill size={34} className="text-orange-500" />,
        description: "Позиция в Яндексе по запросу «эвакуатор Челябинск» и «аварийный комиссар Челябинск»."
    }
];
