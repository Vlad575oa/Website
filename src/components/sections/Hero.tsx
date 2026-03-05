import dynamic from "next/dynamic";
import HeroVisual from "./HeroVisual";

const SparklesCore = dynamic(() => import("@/components/ui/sparkles").then(mod => mod.SparklesCore), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-gradient-to-br from-slate-900/20 to-transparent" />
});

interface HeroProps {
    t: {
        slogan_1: string;
        slogan_2: string;
        replay: string;
        status: string;
        title_prefix: string;
        title_accent_1: string;
        title_accent_2: string;
        desc_1: string;
        desc_2: string;
        desc_3: string;
        cta_button: string;
        stat_1_label: string;
        stat_2_label: string;
        stat_3_label: string;
    };
}

export default function Hero({ t }: HeroProps) {
    return (
        <section className="relative min-h-[calc(100vh-64px)] flex items-center pt-8 pb-12 lg:pt-12 lg:pb-20 overflow-hidden bg-transparent">
            {/* Background Gradient/Pattern */}
            <div className="absolute inset-0 z-0 h-full w-full overflow-hidden pointer-events-none">
                {/* Core Sparkles Background */}
                <div className="w-full absolute inset-0 z-10">
                    <SparklesCore
                        id="tsparticlesfullpage"
                        background="transparent"
                        minSize={0.6}
                        maxSize={1.4}
                        particleDensity={100}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />
                </div>
            </div>

            <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 md:px-8 relative z-10">

                <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-8">
                    {/* Left Column: Text Content */}
                    <div className="flex flex-col gap-8 flex-1 max-w-2xl z-20 pt-2 lg:pt-6">
                        <div className="inline-flex items-center gap-2 w-fit rounded-full bg-slate-800/50 border border-slate-700 px-3 py-1 backdrop-blur-sm">
                            <span className="flex h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                            <span className="text-xs font-medium text-slate-300">{t.status}</span>
                        </div>

                        <div className="flex flex-col gap-4 text-left">
                            <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                                <span className="block mb-2">{t.title_prefix}</span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-[#137fec] to-blue-500">
                                    {t.title_accent_1} {t.title_accent_2}
                                </span>
                            </h1>
                            <p className="text-white text-lg sm:text-xl font-medium leading-relaxed max-w-xl mt-2 tracking-wide flex flex-wrap gap-x-4 gap-y-2">
                                <span className="animate-[purpleShimmer_4s_infinite_1.7s] inline-block">{t.desc_1}</span>
                                <span className="animate-[blueShimmer_4s_infinite_2.1s] inline-block">{t.desc_2}</span>
                                <span className="animate-[greenShimmer_4s_infinite_2.5s] inline-block">{t.desc_3}</span>
                            </p>
                        </div>

                        <button className="group flex items-center justify-center gap-2 h-14 px-6 mt-4 rounded-2xl bg-slate-800/80 backdrop-blur-md text-[#137fec] hover:text-white border border-slate-700/50 text-base font-bold shadow-[6px_6px_14px_rgba(0,0,0,0.6),-6px_-6px_14px_rgba(255,255,255,0.05)] transition-all duration-300 hover:shadow-[inset_6px_6px_14px_rgba(0,0,0,0.6),inset_-6px_-6px_14px_rgba(255,255,255,0.05)] hover:bg-[#137fec]/20 hover:-translate-y-0.5 active:translate-y-1 active:shadow-[inset_8px_8px_16px_rgba(0,0,0,0.8),inset_-2px_-2px_8px_rgba(255,255,255,0.02)] w-full max-w-[480px]">
                            <span>{t.cta_button}</span>
                            <span className="material-symbols-outlined text-sm font-bold transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                        </button>

                        {/* Stats Row */}
                        <div className="flex items-center gap-6 sm:gap-10 pt-4 mt-2">
                            <div className="flex flex-col gap-1 text-left">
                                <span className="text-2xl sm:text-3xl font-bold text-white relative animate-pulse-green">98%</span>
                                <span className="text-[11px] sm:text-xs text-slate-400">{t.stat_1_label}</span>
                            </div>
                            <div className="w-px h-8 bg-slate-800"></div>
                            <div className="flex flex-col gap-1 text-left">
                                <span className="text-2xl sm:text-3xl font-bold text-white relative animate-pulse-green" style={{ animationDelay: "1s" }}>2x</span>
                                <span className="text-[11px] sm:text-xs text-slate-400">{t.stat_2_label}</span>
                            </div>
                            <div className="w-px h-8 bg-slate-800"></div>
                            <div className="flex flex-col gap-1 text-left">
                                <span className="text-2xl sm:text-3xl font-bold text-white relative animate-pulse-green" style={{ animationDelay: "2s" }}>SEO</span>
                                <span className="text-[11px] sm:text-xs text-slate-400">{t.stat_3_label}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Visual Content (Client Component) */}
                    <HeroVisual t={{ replay: t.replay, slogan_1: t.slogan_1, slogan_2: t.slogan_2 }} />
                </div>
            </div>
        </section>
    );
}
