import type { Metadata } from "next";
import { getDictionary } from "@/lib/get-dictionary";

export const metadata: Metadata = {
    title: "DevStudio - Pricing",
    description: "Clear, fixed pricing for premium Next.js development. No hidden fees.",
};

export default async function PricingPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getDictionary(locale as "ru" | "en");
    const tp = t.pricing_page;

    return (
        <div className="flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col max-w-[960px] w-full gap-12">

                {/* Hero Section */}
                <div className="flex flex-col gap-4 text-center items-center">
                    <h1 className="text-white text-4xl md:text-7xl font-black leading-tight tracking-[-0.033em] text-balance">
                        {tp.hero.title_prefix} <span className="text-[#137fec]">{tp.hero.title_accent}</span>
                    </h1>
                    <p className="text-slate-400 text-lg font-normal leading-relaxed max-w-2xl text-balance">
                        {tp.hero.description}
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {tp.plans.map((plan, index) => (
                        <div key={index} className={`flex flex-col gap-6 rounded-2xl border ${index === 1 ? 'border-2 border-[#137fec]/40 bg-[#1a1f26]/80' : 'border-slate-700/50 bg-[#1a1f26]/60'} backdrop-blur-md p-8 shadow-2xl transition-all duration-500 relative overflow-hidden group`}>
                            {index === 1 && <div className="absolute top-0 left-0 w-full h-1 bg-[#137fec]"></div>}
                            <div className={`absolute ${index === 0 ? '-top-24 -right-24' : '-bottom-24 -left-24'} w-48 h-48 bg-[#137fec]/10 rounded-full blur-3xl group-hover:bg-[#137fec]/20 transition-all`}></div>

                            <div className="flex flex-col gap-2 relative z-10">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-white text-xl font-black leading-tight tracking-tight">{plan.name}</h3>
                                    <span className={`text-white text-[10px] font-black uppercase tracking-widest rounded-full px-3 py-1 ${index === 0 ? 'bg-emerald-500/20 border border-emerald-500/50 text-emerald-400' : 'bg-[#137fec] shadow-lg shadow-[#137fec]/30'}`}>
                                        {plan.badge}
                                    </span>
                                </div>
                                <p className="text-slate-400 text-sm">{plan.desc}</p>
                            </div>

                            <div className="flex items-baseline gap-1 text-white relative z-10">
                                {index === 1 && <span className="text-base font-bold text-slate-500">{plan.unit} </span>}
                                <span className="text-4xl font-black tracking-tighter">{plan.price}</span>
                                {index === 0 && <span className="text-base font-medium text-slate-500"> {plan.unit}</span>}
                            </div>

                            <div className="h-px bg-white/5 w-full"></div>

                            <div className="flex flex-col gap-3 relative z-10">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex gap-3 items-center text-slate-300 text-sm font-medium">
                                        <span className="material-symbols-outlined text-[#137fec] text-[20px]">
                                            {index === 0 ? 'check_circle' : 'verified'}
                                        </span>
                                        {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto pt-4 relative z-10">
                                <button className={`w-full cursor-pointer items-center justify-center rounded-xl h-12 px-6 ${index === 0 ? 'bg-white/5 hover:bg-white/10 text-white border border-white/10' : 'bg-[#137fec] hover:bg-blue-600 text-white shadow-xl shadow-[#137fec]/25'} text-sm font-black transition-all active:scale-95`}>
                                    {plan.cta}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Section */}
                <div className="flex flex-col gap-8 py-10">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-white text-3xl font-black leading-tight tracking-tight">
                            {tp.promise.title_prefix} <span className="text-[#137fec]">{tp.promise.title_accent}</span>
                        </h2>
                        <p className="text-slate-400 text-base leading-relaxed">{tp.promise.subtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {tp.promise.items.map((feature, i) => (
                            <div key={i} className="flex flex-col gap-4 rounded-2xl border border-slate-700/50 bg-[#1a1f26]/60 backdrop-blur-md p-6 hover:border-[#137fec]/30 transition-all group">
                                <div className="text-[#137fec] group-hover:scale-110 transition-transform duration-500">
                                    <span className="material-symbols-outlined text-[32px]">
                                        {i === 0 ? 'payments' : i === 1 ? 'handshake' : 'verified_user'}
                                    </span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-white text-lg font-black tracking-tight">{feature.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
