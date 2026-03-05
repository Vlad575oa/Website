"use client";

import { useState } from "react";
import Link from "next/link";
import { Locale } from "@/lib/i18n";

interface MobileMenuProps {
    locale: Locale;
    dict: {
        services: string;
        legislation: string;
    };
}

export default function MobileMenu({ locale, dict }: MobileMenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center size-10 rounded-xl bg-[#1a1f26]/80 hover:bg-[#1a1f26] border border-slate-700/50 backdrop-blur-md transition-all active:scale-95 shadow-sm"
                aria-label="Toggle menu"
            >
                <span className="material-symbols-outlined text-slate-300">
                    {isOpen ? "close" : "menu"}
                </span>
            </button>

            {/* Backdrop for mobile menu to close when clicking outside isn't strictly needed for full mobile screen but nice to have, we will just rely on the links right now */}
            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 top-[73px] bg-black/50 backdrop-blur-sm z-40"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute top-[80px] left-0 w-full p-6 z-50 animate-in fade-in slide-in-from-top-4 duration-200">
                        <nav className="flex flex-col gap-3 p-4 bg-[#1a1f26]/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl">
                            <Link
                                className="bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white px-5 py-4 rounded-xl transition-all text-base font-bold flex items-center justify-between"
                                href={`/${locale}/#services`}
                                onClick={() => setIsOpen(false)}
                            >
                                {dict.services}
                                <span className="material-symbols-outlined text-sm opacity-50">arrow_forward</span>
                            </Link>
                            <Link
                                className="bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white px-5 py-4 rounded-xl transition-all text-base font-bold flex items-center justify-between"
                                href={`/${locale}/legislation`}
                                onClick={() => setIsOpen(false)}
                            >
                                {dict.legislation}
                                <span className="material-symbols-outlined text-sm opacity-50">arrow_forward</span>
                            </Link>
                        </nav>
                    </div>
                </>
            )}
        </div>
    );
}
