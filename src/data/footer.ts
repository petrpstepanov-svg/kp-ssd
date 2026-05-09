import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    address: string;
    companyName: string;
    author: string;
    socials: ISocials;
} = {
    subheading: "Коммерческое предложение по интернет-маркетингу для ООО «ССД». Эвакуация и аварийный комиссар в Челябинске.",
    quickLinks: [
        {
            text: "Услуги",
            url: "#features"
        },
        {
            text: "Цены",
            url: "#pricing"
        },
        {
            text: "Результаты",
            url: "#testimonials"
        }
    ],
    email: '',
    telephone: '+7 (908) 055-55-55',
    address: 'г. Челябинск, пр. Ленина, 27, стр. 4',
    companyName: 'ООО «ССД»',
    author: 'Степанов П.П. · Точка+ · Май 2026',
    socials: {}
}
