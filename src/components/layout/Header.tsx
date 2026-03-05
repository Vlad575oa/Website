import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n";

export default async function Header({ locale }: { locale: Locale }) {
    const t = await getDictionary(locale);

    return (
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap px-6 py-4 bg-[#1a1f26]/80 backdrop-blur-lg border-b border-slate-700/50 w-full transition-all">
            <Link href={`/${locale}`} className="flex items-center gap-3 group">
                <div className="flex items-center justify-center size-10 rounded-xl bg-gradient-to-br from-[#137fec] to-purple-600 text-white tile-neu transition-transform group-hover:scale-105">
                    <span className="material-symbols-outlined !text-[24px]">code</span>
                </div>
                <h2 className="text-slate-100 text-xl font-bold leading-tight tracking-tight">{t.common.logo}</h2>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
                <Link className="btn-neu bg-[#1a1f26] text-slate-300 hover:text-white px-5 py-2 rounded-xl transition-colors text-sm font-medium" href={`/${locale}/#services`}>{t.common.nav.services}</Link>
                <Link className="btn-neu bg-[#1a1f26] text-slate-300 hover:text-white px-5 py-2 rounded-xl transition-colors text-sm font-medium" href={`/${locale}/legislation`}>{t.common.nav.legislation}</Link>
            </nav>

            <div className="flex items-center gap-3">
                <LanguageSwitcher />
                <MobileMenu locale={locale} dict={t.common.nav} />
            </div>
        </header>
    );
}
