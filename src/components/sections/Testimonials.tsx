interface TestimonialsProps {
    t: {
        title: string;
        subtitle: string;
        items: Array<{
            name: string;
            role: string;
            quote: string;
            initials: string;
        }>;
    };
}

export default function Testimonials({ t }: TestimonialsProps) {
    return (
        <section className="py-24 bg-transparent relative z-10">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                        {t.title}
                    </h2>
                    <p className="text-slate-400 text-lg">
                        {t.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {t.items.map((item, idx) => (
                        <article
                            key={idx}
                            className="p-8 rounded-2xl border border-slate-700/50 bg-[#1a1f26]/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#137fec]/20 hover:border-[#137fec]/50"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                {/* Avatar — fixed size to prevent CLS */}
                                <div
                                    className="w-[56px] h-[56px] rounded-full bg-gradient-to-br from-[#137fec] to-purple-600 shadow-md shadow-[#137fec]/30 flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                                    style={{ aspectRatio: "1 / 1" }}
                                >
                                    {item.initials}
                                </div>
                                <div>
                                    <p className="font-bold text-white">{item.name}</p>
                                    <p className="text-sm text-slate-400">{item.role}</p>
                                </div>
                            </div>
                            <blockquote className="text-slate-300 leading-relaxed">
                                &ldquo;{item.quote}&rdquo;
                            </blockquote>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
