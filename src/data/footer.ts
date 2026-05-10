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
            text: "О нас",
            url: "#about"
        }
    ],
    email: '',
    telephone: '+7 921 704-09-66',
    address: 'г. Челябинск, пр. Ленина, 27, стр. 4',
    companyName: 'ООО «ССД»',
    author: 'Пётр П. · Точка+ · Май 2026',
    socials: {}
}
