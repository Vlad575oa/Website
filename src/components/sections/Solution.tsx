import Image from "next/image";

interface SolutionProps {
    t: {
        title: string;
        accent: string;
        items: {
            title: string;
            description: string;
        }[];
        extra: {
            multi: string;
            ssl: string;
            funnels: string;
            analytics: string;
        };
    };
}

export default function Solution({ t }: SolutionProps) {
    const services = [
        { icon: "language", label: t.extra.multi, image: "/multilingual.png" },
        { icon: "shield", label: t.extra.ssl, image: "/ssl_security.png" },
        { icon: "conversion_path", label: t.extra.funnels, image: "/sales_funnels.png" },
        { icon: "monitoring", label: t.extra.analytics, image: "/analytics_360.png" },
    ];

    return (
        <section className="py-20 bg-transparent relative z-10" id="services">
            <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#137fec]/10 rounded-full blur-3xl"></div>
                        <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight text-white">
                            {t.title} <span className="text-[#137fec] relative">
                                {t.accent}
                                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#137fec]/30 blur-[2px]"></span>
                            </span>
                        </h2>
                        <ul className="space-y-6">
                            {t.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-4 group/item">
                                    <div className="bg-[#137fec]/10 text-[#137fec] p-1 rounded-full shrink-0 group-hover/item:bg-[#137fec] group-hover/item:text-white transition-colors duration-300">
                                        <span className="material-symbols-outlined">done</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-white group-hover/item:text-blue-300 transition-colors">{item.title}</h4>
                                        <p className="text-slate-400">{item.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4 pt-8">
                            {services.slice(0, 2).map((item, i) => (
                                <div key={i} className="bg-[#1a1f26]/60 backdrop-blur-md p-4 rounded-xl border border-slate-700/50 hover:border-[#137fec]/50 transition-all group overflow-hidden">
                                    <div className="relative aspect-square rounded-lg overflow-hidden mb-3 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                                        <Image
                                            src={item.image}
                                            alt={item.label}
                                            fill
                                            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] to-transparent opacity-60"></div>
                                        <div className="absolute bottom-3 left-3 bg-[#137fec]/20 backdrop-blur-sm p-1.5 rounded-lg border border-white/10">
                                            <span className="material-symbols-outlined text-white text-xl">{item.icon}</span>
                                        </div>
                                    </div>
                                    <p className="font-bold text-sm text-center text-white tracking-tight">{item.label}</p>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-4">
                            {services.slice(2, 4).map((item, i) => (
                                <div key={i} className="bg-[#1a1f26]/60 backdrop-blur-md p-4 rounded-xl border border-slate-700/50 hover:border-[#137fec]/50 transition-all group overflow-hidden">
                                    <div className="relative aspect-square rounded-lg overflow-hidden mb-3 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                                        <Image
                                            src={item.image}
                                            alt={item.label}
                                            fill
                                            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] to-transparent opacity-60"></div>
                                        <div className="absolute bottom-3 left-3 bg-[#137fec]/20 backdrop-blur-sm p-1.5 rounded-lg border border-white/10">
                                            <span className="material-symbols-outlined text-white text-xl">{item.icon}</span>
                                        </div>
                                    </div>
                                    <p className="font-bold text-sm text-center text-white tracking-tight">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
