import { Locale } from "@/lib/i18n";

interface UIStandardsProps {
    t: any;
    locale: Locale;
}

export default function UIStandards({ t, locale }: UIStandardsProps) {
    const tu = t.legislation_page.ui_standards;

    return (
        <section className="pt-10 pb-20 bg-transparent relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4">{tu.title}</h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        {tu.subtitle}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Standard 1: Forms */}
                    <div className="space-y-8">
                        <div className="p-8 rounded-3xl bg-[#1a1f26]/60 backdrop-blur-md border border-slate-700/50 shadow-2xl relative overflow-hidden">
                            <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-6">{tu.form.title}</h3>
                            <div className="space-y-4">
                                <input type="text" placeholder={tu.form.name_ph} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#137fec] text-white" disabled />
                                <input type="text" placeholder={tu.form.phone_ph} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#137fec] text-white" disabled />

                                <div className="space-y-3 pt-2">
                                    <label className="flex items-start gap-3 text-sm text-slate-400">
                                        <input type="checkbox" checked className="mt-1 size-4 rounded border-slate-600 bg-slate-800 text-[#137fec]" disabled />
                                        <span>
                                            {(() => {
                                                const pdMatch = locale === 'ru' ? "персональных данных" : "personal data";
                                                const ppMatch = locale === 'ru' ? "политикой конфиденциальности" : "privacy policy";

                                                if (!tu.form.consent_pd.includes(pdMatch) || !tu.form.consent_pd.includes(ppMatch)) {
                                                    return tu.form.consent_pd;
                                                }

                                                const [part1, rest] = tu.form.consent_pd.split(pdMatch);
                                                const [part2, part3] = rest.split(ppMatch);

                                                return (
                                                    <>
                                                        {part1}
                                                        <span className="text-[#137fec] underline">{pdMatch}</span>
                                                        {part2}
                                                        <span className="text-[#137fec] underline">{ppMatch}</span>
                                                        {part3}
                                                    </>
                                                );
                                            })()}
                                        </span>
                                    </label>
                                    <label className="flex items-start gap-3 text-sm text-slate-400">
                                        <input type="checkbox" className="mt-1 size-4 rounded border-slate-600 bg-slate-800 text-[#137fec]" disabled />
                                        <span>{tu.form.consent_mk}</span>
                                    </label>
                                </div>

                                <button className="w-full py-4 bg-[#137fec] text-white font-black rounded-xl mt-4 opacity-80">
                                    {tu.form.btn}
                                </button>
                            </div>
                        </div>
                        <div className="p-6 rounded-2xl bg-blue-500/5 border border-[#137fec]/20 italic text-sm text-blue-300 leading-relaxed backdrop-blur-sm">
                            <span className="font-bold text-[#137fec]">{(t.common && t.common.analysis) || "Анализ"}:</span> {tu.form.analysis}
                        </div>
                    </div>

                    {/* Standard 2: Messengers */}
                    <div className="space-y-8">
                        <div className="p-8 rounded-3xl bg-[#1a1f26]/60 backdrop-blur-md border border-slate-700/50 shadow-2xl">
                            <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-6">{tu.messenger.title}</h3>
                            <div className="space-y-6">
                                <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/20 text-orange-300 text-xs backdrop-blur-sm">
                                    {tu.messenger.warning}
                                </div>
                                <button className="w-full flex items-center justify-center gap-3 py-4 bg-[#0088cc] text-white font-black rounded-xl shadow-lg shadow-blue-500/10 hover:bg-[#0088cc]/90 transition-all active:scale-95">
                                    <svg className="size-6 fill-current" viewBox="0 0 24 24">
                                        <path d="M11.944 0C5.346 0 0 5.346 0 11.944c0 6.598 5.346 11.944 11.944 11.944 6.598 0 11.944-5.346 11.944-11.944C23.888 5.346 18.542 0 11.944 0zm5.206 8.19c-.15 1.544-1.383 9.074-2.015 12.445-.266 1.42-.782 1.894-1.287 1.94-.404.037-.81-.044-1.18-.236-.37-.193-.687-.487-.915-.845-.593-.448-3.08-2.015-3.86-2.583l-1.02-.756c-.73-.55-.173-.853.385-1.425l.135-.135c.135-.135 4.312-3.883 4.39-4.225.01-.045.013-.092.01-.138-.003-.046-.015-.09-.035-.13-.056-.113-.157-.145-.255-.125-.097.02-.3.083-.495.148-.195.065-2.015 1.253-5.694 3.738l-1.01.7c-.43.3-.82.253-1.13.155l-2.073-.655c-.29-.092-.51-.185-.51-.39-.002-.12.062-.234.175-.31.114-.076.26-.144.43-.198 1.13-.53 6.944-2.88 9.38-3.88.75-.3 1.57-.45 2.4-.45.345.003.69.04.1.01.077z" />
                                    </svg>
                                    {tu.messenger.btn}
                                </button>
                            </div>
                        </div>
                        <div className="p-6 rounded-2xl bg-orange-500/5 border border-orange-500/20 italic text-sm text-orange-300 leading-relaxed backdrop-blur-sm">
                            <span className="font-bold text-orange-400">{(t.common && t.common.analysis) || "Анализ"}:</span> {tu.messenger.analysis}
                        </div>
                    </div>
                </div>

                {/* Footer Example */}
                <div className="mt-16 p-10 rounded-3xl bg-[#1a1f26]/80 backdrop-blur-md text-white border border-slate-700/50 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 size-64 bg-[#137fec]/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#137fec]/10 transition-all"></div>
                    <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-10">{tu.footer.title}</h3>
                    <div className="grid md:grid-cols-4 gap-12">
                        <div className="space-y-4">
                            <div className="text-xs font-black text-slate-600 uppercase tracking-wider mb-2">{tu.footer.legal_title}</div>
                            <ul className="space-y-2 text-sm text-slate-400">
                                {tu.footer.legal_links.map((link: string, i: number) => (
                                    <li key={i} className="hover:text-white cursor-pointer transition-colors">{link}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <div className="text-xs font-black text-slate-600 uppercase tracking-wider mb-2">{tu.footer.req_title}</div>
                            <div className="text-xs text-slate-400 leading-loose whitespace-pre-line">
                                {tu.footer.req_content}
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="text-xs font-black text-slate-600 uppercase tracking-wider mb-2">{tu.footer.lang_title}</div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-black uppercase">
                                {tu.footer.lang_status}
                            </div>
                        </div>
                        <div className="space-y-4 flex flex-col justify-end">
                            <p className="text-[10px] text-slate-600 uppercase font-bold text-center md:text-right whitespace-pre-line">
                                {tu.footer.copy}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
