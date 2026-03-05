"use client";

import Link from "next/link";
import ExternalTGLink from "../common/ExternalTGLink";
import ExternalWALink from "../common/ExternalWALink";
import { useLanguage } from "@/lib/i18n";

export default function Footer() {
    const { t, locale } = useLanguage();

    return (
        <footer className="bg-[#0a0f14] border-t border-slate-800/50 relative z-10">
            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col items-center md:items-start gap-1">
                        <p className="text-slate-400 text-sm font-medium">{t.footer.inn}</p>
                        <a href="mailto:vlad575@mail.ru" className="text-slate-400 text-sm hover:text-[#137fec] transition-colors">
                            vlad575@mail.ru
                        </a>
                        <p className="text-slate-500 text-xs mt-1">
                            {t.footer.copyright}
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <a href="tel:+79263177226" className="flex items-center gap-2 text-slate-300 hover:text-[#137fec] transition-colors group">
                            <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">call</span>
                            <span className="font-bold">+7 (926) 317-72-26</span>
                        </a>
                    </div>

                    <div className="flex gap-4 items-center">
                        <ExternalWALink
                            href="https://wa.me/79263177226"
                            className="flex items-center justify-center size-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-[#25D366] border border-slate-700 transition-all hover:scale-110 shadow-lg shadow-[#25D366]/5"
                        >
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.766-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.747-2.874-2.512-2.96-2.626-.087-.115-.708-.941-.708-1.797 0-.856.448-1.277.607-1.441.159-.164.346-.205.462-.205.115 0 .231.001.332.006.107.005.25-.04.391.299.144.35.491 1.2.534 1.287.043.087.072.188.014.304-.058.115-.087.188-.173.289l-.26.304c-.087.101-.177.211-.077.383.101.173.447.739.96 1.196.662.593 1.22.78 1.393.866.173.087.274.072.376-.043.101-.115.433-.505.548-.678.115-.173.231-.144.39-.087.159.058 1.011.477 1.184.564.173.087.289.13.332.202.045.072.045.419-.1.824z" />
                            </svg>
                        </ExternalWALink>

                        <ExternalTGLink
                            href="https://t.me/vlad557"
                            className="flex items-center justify-center size-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-[#0088cc] border border-slate-700 transition-all hover:scale-110 shadow-lg shadow-[#0088cc]/5"
                        >
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.52-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.88.03-.24.37-.48 1.01-.73 3.94-1.71 6.57-2.84 7.89-3.38 3.76-1.54 4.54-1.81 5.05-1.82.11 0 .36.03.52.17.13.11.17.26.18.37.01.08 0 .23-.02.32z" />
                            </svg>
                        </ExternalTGLink>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-slate-500">
                    <div className="flex items-center gap-1.5">
                        <span className="text-slate-500">{t.footer.all_rights_reserved}</span>
                        <ExternalTGLink
                            href="https://t.me/vlad557"
                            className="flex items-center gap-1.5 hover:text-[#137fec] transition-colors group cursor-pointer"
                        >
                            <span className="font-bold text-slate-400 group-hover:text-[#137fec] transition-colors">{t.common.logo}</span>
                            <div className="size-4 bg-gradient-to-br from-[#137fec] to-purple-600 rounded-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-[10px] text-white">code</span>
                            </div>
                        </ExternalTGLink>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href={`/${locale}/privacy`} className="hover:text-white transition-colors">{t.footer.privacy_policy}</Link>
                        <Link href={`/${locale}/terms`} className="hover:text-white transition-colors">{t.footer.terms_of_use}</Link>
                        <Link href={`/${locale}/cookies`} className="hover:text-white transition-colors">{t.footer.cookie_settings}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
