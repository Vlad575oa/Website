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
            if (footer) observer.unobserve(footer);
        };
    }, []);

    return (
        <div
            className={`fixed bottom-8 right-8 z-[100] transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-10 pointer-events-none"
                }`}
        >
            <div className="animate-wobble">
                <ExternalTGLink
                    href="https://t.me/vlad557"
                    className="relative flex items-center justify-center size-14 rounded-full bg-[#24A1DE] text-white shadow-2xl shadow-[#24A1DE]/40 transition-all hover:scale-110 active:scale-95 border-2 border-white/20 cursor-pointer"
                    title="Написать в Telegram"
                >
                    {/* Classic Paper Plane Icon */}
                    <svg className="size-8 -translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>

                    {/* Info Badge */}
                    <div className="absolute top-0 right-0 size-5 rounded-full bg-white flex items-center justify-center shadow-md -translate-y-1 translate-x-1 border border-blue-500/10">
                        <span className="text-[#24A1DE] text-[10px] font-black">i</span>
                    </div>
                </ExternalTGLink>
            </div>
        </div>
    );
}
