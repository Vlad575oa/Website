import { SparklesCore } from "../ui/sparkles";

interface PricingProps {
    t: {
        title: string;
        subtitle: string;
        popular: string;
        select: string;
        contact: string;
        tiers: {
            name: string;
            price: string;
            desc: string;
            features: string[];
        }[];
    };
}

export default function Pricing({ t }: PricingProps) {
    return (
        <section className="py-24 px-6 sm:px-10 bg-transparent relative z-10 overflow-hidden" id="pricing">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <SparklesCore
                    id="sparkles-pricing"
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={70}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                        {t.title}
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        {t.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {t.tiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`flex flex-col rounded-3xl p-8 transition-all duration-300 relative group overflow-hidden ${index === 1
                                ? "bg-[#161f28] border-2 border-[#137fec] shadow-2xl shadow-[#137fec]/10 scale-105 z-20"
                                : "bg-[#1a1f26]/60 backdrop-blur-md border border-slate-700/50 hover:border-slate-500 z-10"
                                }`}
                        >
                            {index === 1 && (
                                <div className="absolute top-4 right-4 bg-[#137fec] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    {t.popular}
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-4">{tier.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-black text-white">{tier.price}</span>
                                    {tier.price !== "Custom" && <span className="text-slate-500 font-medium">/проект</span>}
                                </div>
                                <p className="text-slate-400 text-sm mt-4 leading-relaxed">{tier.desc}</p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {tier.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-center gap-3 text-slate-300 text-sm">
                                        <span className="material-symbols-outlined text-[18px] text-[#137fec]">check_circle</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${index === 1
                                    ? "bg-[#137fec] hover:bg-blue-500 text-white shadow-lg shadow-[#137fec]/20"
                                    : "bg-slate-800 hover:bg-slate-700 text-white"
                                    }`}
                            >
                                {tier.price === "Custom" ? t.contact : t.select}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
