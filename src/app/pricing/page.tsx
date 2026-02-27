import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "DevStudio - Pricing",
    description: "Clear, fixed pricing for premium Next.js development. No hidden fees.",
};

export default function PricingPage() {
    return (
        <div className="flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col max-w-[960px] w-full gap-12">

                {/* Hero Section */}
                <div className="flex flex-col gap-4 text-center items-center">
                    <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em] text-balance">
                        Pricing &amp; <span className="text-[#137fec]">Transparency</span>
                    </h1>
                    <p className="text-slate-400 text-lg font-normal leading-relaxed max-w-2xl text-balance">
                        Clear, fixed pricing for premium Next.js development. No hidden fees. We believe in building trust through upfront clarity.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {/* Card 1: Landing */}
                    <div className="flex flex-col gap-6 rounded-2xl border border-slate-700/50 bg-[#1a1f26]/60 backdrop-blur-md p-8 shadow-2xl hover:border-[#137fec]/30 transition-all duration-500 relative overflow-hidden group">
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#137fec]/10 rounded-full blur-3xl group-hover:bg-[#137fec]/20 transition-all"></div>
                        <div className="flex flex-col gap-2 relative z-10">
                            <div className="flex items-center justify-between">
                                <h3 className="text-white text-xl font-black leading-tight tracking-tight">Landing Page</h3>
                                <span className="text-white text-[10px] font-black uppercase tracking-widest rounded-full bg-emerald-500/20 border border-emerald-500/50 px-3 py-1 text-emerald-400">Best Value</span>
                            </div>
                            <p className="text-slate-400 text-sm">Perfect for product launches and campaigns.</p>
                        </div>
                        <div className="flex items-baseline gap-1 text-white relative z-10">
                            <span className="text-4xl font-black tracking-tighter">15,000 ₽</span>
                            <span className="text-base font-medium text-slate-500">/ project</span>
                        </div>
                        <div className="h-px bg-white/5 w-full"></div>
                        <div className="flex flex-col gap-3 relative z-10">
                            {[
                                "Custom UI/UX Design",
                                "Next.js Performance Optimization",
                                "Fully Mobile Responsive",
                                "SEO Basic Setup & Meta Tags"
                            ].map((feature, i) => (
                                <div key={i} className="flex gap-3 items-center text-slate-300 text-sm font-medium">
                                    <span className="material-symbols-outlined text-[#137fec] text-[20px]">check_circle</span>
                                    {feature}
                                </div>
                            ))}
                        </div>
                        <div className="mt-auto pt-4 relative z-10">
                            <button className="w-full cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-white/5 hover:bg-white/10 text-white text-sm font-black transition-all border border-white/10 active:scale-95">
                                Order Landing Page
                            </button>
                        </div>
                    </div>

                    {/* Card 2: Multi-page */}
                    <div className="flex flex-col gap-6 rounded-2xl border-2 border-[#137fec]/40 bg-[#1a1f26]/80 backdrop-blur-md p-8 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#137fec]"></div>
                        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#137fec]/10 rounded-full blur-3xl group-hover:bg-[#137fec]/20 transition-all"></div>
                        <div className="flex flex-col gap-2 relative z-10">
                            <div className="flex items-center justify-between">
                                <h3 className="text-white text-xl font-black leading-tight tracking-tight">Multi-page Site</h3>
                                <span className="text-white text-[10px] font-black uppercase tracking-widest rounded-full bg-[#137fec] px-3 py-1 shadow-lg shadow-[#137fec]/30">Popular</span>
                            </div>
                            <p className="text-slate-400 text-sm">For businesses needing a complete web presence.</p>
                        </div>
                        <div className="flex items-baseline gap-1 text-white relative z-10">
                            <span className="text-base font-bold text-slate-500">from</span>
                            <span className="text-4xl font-black tracking-tighter">25,000 ₽</span>
                        </div>
                        <div className="h-px bg-white/5 w-full"></div>
                        <div className="flex flex-col gap-3 relative z-10">
                            {[
                                "Includes 5 Unique Pages",
                                "Custom Design System & Assets",
                                "Dynamic Content (Headless CMS)",
                                "Advanced Technical SEO",
                                "Admin Dashboard Integration"
                            ].map((feature, i) => (
                                <div key={i} className="flex gap-3 items-center text-slate-200 text-sm font-medium">
                                    <span className="material-symbols-outlined text-[#137fec] text-[20px]">verified</span>
                                    {feature}
                                </div>
                            ))}
                        </div>
                        <div className="mt-auto pt-4 relative z-10">
                            <button className="w-full cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-[#137fec] hover:bg-blue-600 text-white text-sm font-black transition-all shadow-xl shadow-[#137fec]/25 active:scale-95">
                                Order Multi-page Site
                            </button>
                        </div>
                    </div>
                </div>

                {/* Trust Section */}
                <div className="flex flex-col gap-8 py-10">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-white text-3xl font-black leading-tight tracking-tight">
                            Our <span className="text-[#137fec]">Promise</span>
                        </h2>
                        <p className="text-slate-400 text-base leading-relaxed">We build trust through transparency and quality delivery.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: "payments", title: "Fixed Price", desc: "The price we agree on is the final price. No unexpected extra charges or hidden fees later on." },
                            { icon: "handshake", title: "Safe Payment", desc: "Pay only after the project is delivered and you are 100% satisfied with the result." },
                            { icon: "verified_user", title: "Quality Guarantee", desc: "Pixel-perfect implementation, clean code structure, and high Google Lighthouse performance scores." }
                        ].map((feature, i) => (
                            <div key={i} className="flex flex-col gap-4 rounded-2xl border border-slate-700/50 bg-[#1a1f26]/60 backdrop-blur-md p-6 hover:border-[#137fec]/30 transition-all group">
                                <div className="text-[#137fec] group-hover:scale-110 transition-transform duration-500">
                                    <span className="material-symbols-outlined text-[32px]">{feature.icon}</span>
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
