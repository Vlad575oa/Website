"use client";

import { useEffect, useState } from "react";
import ExternalTGLink from "./ExternalTGLink";

export default function FloatingSocials() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(!entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        const footer = document.querySelector("footer");
        if (footer) observer.observe(footer);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div
            className={`fixed bottom-8 right-8 z-[100] flex flex-col gap-4 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-10 pointer-events-none"
                }`}
        >
            <div className="animate-wobble" style={{ animationDelay: "0.5s" }}>
                <ExternalTGLink
                    href="https://t.me/vlad557"
                    className="relative flex items-center justify-center size-14 rounded-full bg-[#24A1DE] text-white shadow-2xl shadow-[#24A1DE]/40 transition-all hover:scale-110 active:scale-95 border-2 border-white/20 cursor-pointer"
                    title="Написать в Telegram"
                >
                    <svg className="size-8 -translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                </ExternalTGLink>
            </div>
        </div>
    );
}
