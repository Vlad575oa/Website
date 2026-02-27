import { SparklesCore } from "../ui/sparkles";

interface BenefitsProps {
    t: {
        title: string;
        accent: string;
        description: string;
        stats: {
            label: string;
            value: string;
        }[];
        list: string[];
    };
}

export default function Benefits({ t }: BenefitsProps) {
    const icons = ["public", "rocket_launch", "support_agent"];

    return (
        <section className="pt-6 pb-20 bg-transparent relative z-10" id="benefits">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[#1a1f26]/80 backdrop-blur-md rounded-3xl p-10 md:p-16 text-white border border-slate-700/50 shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <SparklesCore
                            id="sparkles-benefits"
                            background="transparent"
                            minSize={0.4}
                            maxSize={1}
                            particleDensity={50}
                            className="w-full h-full"
                            particleColor="#FFFFFF"
                        />
                    </div>

                    <div className="absolute top-0 right-0 w-80 h-80 bg-[#137fec]/10 rounded-full blur-[120px] -mr-32 -mt-32 group-hover:bg-[#137fec]/20 transition-all duration-500"></div>
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                                {t.title} <span className="text-[#137fec]">{t.accent}</span>
                            </h2>
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                {t.description}
                            </p>
                            <div className="grid sm:grid-cols-2 gap-8">
                                {t.stats.map((stat, i) => (
                                    <div key={i}>
                                        <div className="text-4xl font-black mb-2 text-white">{stat.value}</div>
                                        <div className="text-slate-400 text-sm">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[#101922]/60 backdrop-blur-xl rounded-2xl p-8 border border-white/5 shadow-inner relative z-10">
                            <ul className="space-y-6">
                                {t.list.map((benefit, i) => (
                                    <li key={i} className="flex items-center gap-4 group/li">
                                        <div className="size-10 rounded-lg bg-[#137fec]/10 flex items-center justify-center text-[#137fec] group-hover/li:bg-[#137fec] group-hover/li:text-white transition-all">
                                            <span className="material-symbols-outlined text-2xl">{icons[i]}</span>
                                        </div>
                                        <span className="font-medium text-lg text-slate-200 group-hover/li:text-white transition-colors">
                                            {benefit}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
