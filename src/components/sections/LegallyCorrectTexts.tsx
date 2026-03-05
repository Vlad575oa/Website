import CopyButton from "../ui/CopyButton";

interface LegallyCorrectTextsProps {
    t: any;
}

export default function LegallyCorrectTexts({ t }: LegallyCorrectTextsProps) {
    const tc = t.legislation_page.correct_texts;

    return (
        <section className="pt-10 pb-10 bg-transparent relative z-10">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4">{tc.title}</h2>
                    <p className="text-slate-400">{tc.subtitle}</p>
                </div>

                <div className="space-y-6">
                    {tc.texts.map((item: any, idx: number) => {
                        const id = `text-${idx}`;
                        return (
                            <div key={id} className="p-8 rounded-3xl bg-[#1a1f26]/60 backdrop-blur-md border border-slate-700/50 group relative hover:border-[#137fec]/30 transition-all">
                                <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-4">{item.title}</h3>
                                <p className="text-slate-200 text-lg leading-relaxed pr-20">{item.content}</p>

                                <CopyButton title="Скопировать" content={item.content} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
