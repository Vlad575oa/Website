"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
export default function LegislationHero() {
    const { t } = useLanguage();
    const th = t.legislation_page.hero;

    return (
        <section className="relative pt-12 pb-12 bg-transparent z-10">
            <div className="relative max-w-7xl mx-auto px-6 text-center">
                <h1 className="text-2xl md:text-4xl font-black text-white mb-6 leading-tight max-w-5xl mx-auto">
                    {th.title}
                </h1>
                <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto balance-text">
                    {th.description}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link
                        href="#check-list"
                        className="w-full sm:w-auto px-10 py-4 bg-[#137fec] hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-xl shadow-[#137fec]/20 hover:shadow-[#137fec]/40 hover:-translate-y-1 active:scale-95"
                    >
                        {th.btn_check}
                    </Link>
                    <Link
                        href="#penalty-table"
                        className="w-full sm:w-auto px-10 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold border border-white/10 backdrop-blur-md transition-all active:scale-95"
                    >
                        {th.btn_penalties}
                    </Link>
                </div>
            </div>
        </section>
    );
}
