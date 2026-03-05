"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "@/lib/i18n";

export default function LanguageSwitcher() {
    const { setLocale } = useLanguage();
    const pathname = usePathname();
    const router = useRouter();

    // Derive current locale strictly from the URL path.
    const currentLocale = pathname.startsWith("/en") ? "en" : "ru";

    const toggleLocale = () => {
        const newLocale = currentLocale === "ru" ? "en" : "ru";
        setLocale(newLocale);

        // Replace current locale in pathname
        const segments = pathname.split("/");
        segments[1] = newLocale;
        router.push(segments.join("/"));
    };

    return (
        <button
            onClick={toggleLocale}
            className="flex items-center justify-center size-10 rounded-xl bg-[#1a1f26]/80 hover:bg-[#1a1f26] border border-slate-700/50 backdrop-blur-md transition-all hover:scale-105 active:scale-95 shadow-sm"
            title={currentLocale === "ru" ? "Switch to English" : "Переключить на русский"}
        >
            <span className="text-xl">
                {currentLocale === "ru" ? "🇷🇺" : "🇺🇸"}
            </span>
        </button>
    );
}
