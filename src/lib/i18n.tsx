"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { ru } from "@/locales/ru";
import { en } from "@/locales/en";

export type Locale = "ru" | "en";
type Translations = typeof ru;

interface LanguageContextType {
    locale: Locale;
    t: Translations;
    setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>("ru");

    useEffect(() => {
        const savedLocale = localStorage.getItem("NEXT_LOCALE") as Locale;
        if (savedLocale && (savedLocale === "ru" || savedLocale === "en")) {
            setLocaleState(savedLocale);
        } else {
            const browserLang = navigator.language.slice(0, 2);
            if (browserLang === "en") {
                setLocaleState("en");
            }
        }
    }, []);

    const setLocale = (newLocale: Locale) => {
        setLocaleState(newLocale);
        localStorage.setItem("NEXT_LOCALE", newLocale);
        document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    };

    const t = locale === "ru" ? ru : en;

    return (
        <LanguageContext.Provider value={{ locale, t, setLocale }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
