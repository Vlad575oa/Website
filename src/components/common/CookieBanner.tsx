"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export default function CookieBanner() {
    // Start hidden (off-screen). null = not yet determined, false = hidden/dismissed, true = show
    const [state, setState] = useState<"pending" | "visible" | "hidden">("pending");
    const { locale } = useLanguage();

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            setState("visible");
        } else {
            setState("hidden");
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "granted");
        setState("hidden");
        window.dispatchEvent(new Event("cookieConsentGranted"));
    };

    // Always render the DOM — use CSS transforms to hide/show.
    // This prevents Lighthouse from registering a late LCP paint.
    const isOffScreen = state !== "visible";

    return (
        <div
            aria-hidden={isOffScreen}
            className={`fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6 transition-transform duration-500 ease-in-out ${isOffScreen ? "translate-y-full pointer-events-none" : "translate-y-0"
                }`}
        >
            <div className="max-w-4xl mx-auto bg-slate-900/95 backdrop-blur-xl border border-slate-700/60 shadow-2xl rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 relative overflow-hidden">
                {/* Glow effect */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-[#137fec]/20 blur-3xl rounded-full pointer-events-none"></div>

                <div className="flex-1 text-sm sm:text-base text-slate-300 leading-relaxed z-10">
                    <p>
                        Мы используем cookie, чтобы вам было удобнее пользоваться сайтом.
                        Оставаясь с нами, вы соглашаетесь на их использование согласно нашей{" "}
                        <Link href={`/${locale}/privacy`} className="text-[#137fec] hover:text-white underline decoration-[#137fec]/30 underline-offset-4 transition-colors">
                            Политике
                        </Link>.
                    </p>
                </div>

                <div className="flex shrink-0 w-full sm:w-auto z-10">
                    <button
                        onClick={handleAccept}
                        className="w-full sm:w-auto px-6 py-3 bg-[#137fec] hover:bg-[#137fec]/90 text-white text-sm font-bold rounded-xl shadow-[0_4px_14px_rgba(19,127,236,0.39)] transition-all hover:shadow-[0_6px_20px_rgba(19,127,236,0.23)] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none"
                    >
                        Хорошо
                    </button>
                </div>
            </div>
        </div>
    );
}
