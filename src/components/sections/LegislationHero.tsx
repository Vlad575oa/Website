"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export default function LegislationHero() {
    const { t } = useLanguage();
    const th = t.legislation_page.hero;

    return (
        <section className="relative pt-12 pb-12 overflow-hidden bg-transparent z-10">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] size-[600px] bg-[#137fec]/10 rounded-full blur-[150px] opacity-70" />
                <div className="absolute bottom-[-10%] right-[-10%] size-[600px] bg-purple-600/10 rounded-full blur-[150px] opacity-70" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight max-w-5xl mx-auto">
                    {th.title_prefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#137fec] to-purple-400">{th.title_accent}</span>
                </h1>

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
