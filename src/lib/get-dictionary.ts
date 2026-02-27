import { ru } from "@/locales/ru";
import { en } from "@/locales/en";

const dictionaries = {
    ru: () => Promise.resolve(ru),
    en: () => Promise.resolve(en),
};

export const getDictionary = async (locale: "ru" | "en") =>
    dictionaries[locale] ? dictionaries[locale]() : dictionaries.ru();
