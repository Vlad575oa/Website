import Link from "next/link";
import ExternalTGLink from "../common/ExternalTGLink";
import ExternalWALink from "../common/ExternalWALink";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n";

export default async function Footer({ locale }: { locale: Locale }) {
    const t = await getDictionary(locale);

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
                            title="WhatsApp"
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.001 12.049c0 2.123.554 4.197 1.607 6.037L0 24l6.105-1.602a11.834 11.834 0 005.937 1.598h.005c6.637 0 12.048-5.412 12.051-12.049a11.829 11.829 0 00-3.411-8.514z" />
                            </svg>
                        </ExternalWALink>
                        <ExternalTGLink
                            href="https://t.me/Vladislav_Olejnik"
                            className="flex items-center justify-center size-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-[#0088cc] border border-slate-700 transition-all hover:scale-110 shadow-lg shadow-[#0088cc]/5"
                            title="Telegram"
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.891 8.221l-1.97 9.284c-.149.658-.541.821-1.092.511l-3-2.21-1.447 1.393c-.16.16-.295.295-.604.295l.215-3.051 5.553-5.018c.241-.215-.053-.334-.374-.12l-6.864 4.32-2.956-.924c-.642-.201-.655-.642.134-.949l11.554-4.451c.535-.195.998.125.791.721z" />
                            </svg>
                        </ExternalTGLink>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800/50 flex flex-wrap justify-center gap-x-8 gap-y-4">
                    <Link href={`/${locale}/privacy`} className="text-slate-500 text-xs hover:text-[#137fec] transition-colors">
                        {t.footer.privacy_policy}
                    </Link>
                    <Link href={`/${locale}/terms`} className="text-slate-500 text-xs hover:text-[#137fec] transition-colors">
                        {t.footer.terms_of_use}
                    </Link>
                    <Link href={`/${locale}/cookies`} className="text-slate-500 text-xs hover:text-[#137fec] transition-colors">
                        {t.footer.cookie_settings}
                    </Link>
                </div>
            </div>
        </footer>
    );
}
