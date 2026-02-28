"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { SparklesCore } from "@/components/ui/sparkles";

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
    const [isVideoEnded, setIsVideoEnded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleVideoEnd = () => {
        setIsVideoEnded(true);
    };

    const handleReplayVideo = () => {
        setIsVideoEnded(false);
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play().catch(err => {
                console.error("Video play failed:", err);
            });
        }
    };

    return (
        <section className="relative min-h-[calc(100vh-64px)] flex items-center pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-transparent">
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
                <style>{`
                    @keyframes cinematicReveal {
                        0% { opacity: 0; transform: translateY(20px); filter: blur(10px); }
                        100% { opacity: 1; transform: translateY(0); filter: blur(0); }
                    }
                    @keyframes purpleShimmer {
                        0%, 100% { color: white; text-shadow: none; }
                        50% { color: #d8b4fe; text-shadow: 0 0 10px rgba(168, 85, 247, 0.5); }
                    }
                    @keyframes blueShimmer {
                        0%, 100% { color: white; text-shadow: none; }
                        50% { color: #93c5fd; text-shadow: 0 0 10px rgba(59, 130, 246, 0.5); }
                    }
                    @keyframes greenShimmer {
                        0%, 100% { color: white; text-shadow: none; }
                        50% { color: #86efac; text-shadow: 0 0 10px rgba(34, 197, 94, 0.5); }
                    }
                    @keyframes badgeSwap {
                        0% { opacity: 0; transform: translateY(4px); }
                        15% { opacity: 1; transform: translateY(0); }
                        85% { opacity: 1; transform: translateY(0); }
                        100% { opacity: 0; transform: translateY(-4px); }
                    }
                    @keyframes fadeInSimple {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }
                `}</style>

                <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-8">
                    {/* Left Column: Text Content */}
                    <div className="flex flex-col gap-8 flex-1 max-w-2xl z-20 pt-4 lg:pt-12">
                        <div className="inline-flex items-center gap-2 w-fit rounded-full bg-slate-800/50 border border-slate-700 px-3 py-1 backdrop-blur-sm opacity-0 animate-[cinematicReveal_1.5s_ease-out_forwards]">
                            <span className="flex h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                            <span className="text-xs font-medium text-slate-300">{t.status}</span>
                        </div>

                        <div className="flex flex-col gap-4 text-left">
                            <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight opacity-0 animate-[cinematicReveal_1.5s_ease-out_0.2s_forwards]">
                                <span>{t.title_prefix}</span><br className="hidden sm:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-[#137fec] to-blue-500">{t.title_accent_1}</span>
                                <span className="sm:hidden"> </span>
                                <br className="hidden sm:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-[#137fec] to-blue-500 animate-shimmer bg-[length:200%_auto] delay-500">{t.title_accent_2}</span>
                            </h1>
                            <p className="text-white text-lg sm:text-xl font-medium leading-relaxed max-w-xl mt-2 tracking-wide flex flex-wrap gap-x-4 gap-y-2">
                                <span className="opacity-0 animate-[cinematicReveal_1.5s_ease-out_0.2s_forwards,purpleShimmer_4s_infinite_1.7s]">{t.desc_1}</span>
                                <span className="opacity-0 animate-[cinematicReveal_1.5s_ease-out_0.6s_forwards,blueShimmer_4s_infinite_2.1s]">{t.desc_2}</span>
                                <span className="opacity-0 animate-[cinematicReveal_1.5s_ease-out_1.0s_forwards,greenShimmer_4s_infinite_2.5s]">{t.desc_3}</span>
                            </p>
                        </div>

                        <button className="group flex items-center justify-center gap-2 h-14 px-6 mt-4 rounded-2xl bg-slate-800/80 backdrop-blur-md text-[#137fec] hover:text-white border border-slate-700/50 text-base font-bold shadow-[6px_6px_14px_rgba(0,0,0,0.6),-6px_-6px_14px_rgba(255,255,255,0.05)] transition-all duration-300 hover:shadow-[inset_6px_6px_14px_rgba(0,0,0,0.6),inset_-6px_-6px_14px_rgba(255,255,255,0.05)] hover:bg-[#137fec]/20 hover:-translate-y-0.5 active:translate-y-1 active:shadow-[inset_8px_8px_16px_rgba(0,0,0,0.8),inset_-2px_-2px_8px_rgba(255,255,255,0.02)] w-full max-w-[480px] opacity-0 animate-[cinematicReveal_1.5s_ease-out_1.2s_forwards]">
                            <span>{t.cta_button}</span>
                            <span className="material-symbols-outlined text-sm font-bold transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                        </button>

                        {/* Stats Row */}
                        <div className="flex items-center gap-6 sm:gap-10 pt-4 mt-2 opacity-0 animate-[cinematicReveal_1.5s_ease-out_1.4s_forwards]">
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

                    {/* Right Column: Visual Content */}
                    <div className="relative flex-1 w-full flex flex-col justify-center lg:mt-10 z-10 w-full max-w-[650px] ml-auto">
                        <div className="absolute inset-0 top-16 bg-gradient-to-tr from-[#137fec]/10 to-purple-500/10 rounded-[2rem] blur-2xl -z-10 transform rotate-3 scale-95"></div>
                        <div className="relative w-full max-w-[650px] ml-auto group [perspective:2000px]">
                            {/* Laptop Frame Mockup */}
                            <div className="relative z-10 bg-[#0f1115] border border-slate-700/50 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transform transition-all duration-700 group-hover:[transform:rotateY(-2deg)_rotateX(2deg)]">
                                <div className="flex items-center gap-2 px-4 py-3 bg-[#13161c] border-b border-slate-800">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                    </div>
                                    <div className="flex-1 mx-4 h-6 bg-[#0a0c10] rounded-md border border-slate-800/80 flex items-center px-3 text-[10px] text-slate-500 font-mono">
                                        https://devstudio.ru
                                    </div>
                                </div>

                                <div className="aspect-[4/3] w-full bg-[#0a0c10] relative overflow-hidden group/screen">
                                    <video
                                        ref={videoRef}
                                        autoPlay
                                        muted
                                        playsInline
                                        onEnded={handleVideoEnd}
                                        className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-screen"
                                    >
                                        <source src="/Hero.mp4" type="video/mp4" />
                                    </video>

                                    {isVideoEnded && (
                                        <div
                                            className="absolute inset-0 z-10 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-6 text-center"
                                            style={{ opacity: 0, animation: 'fadeInSimple 1.5s ease-out forwards' }}
                                        >
                                            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black leading-[1.2] mb-12 lg:mb-16 drop-shadow-2xl">
                                                <span className="inline-block opacity-0 animate-[cinematicReveal_3s_ease-out_0.8s_forwards] text-purple-400 drop-shadow-md">{t.slogan_1}</span><br />
                                                <span className="inline-block opacity-0 animate-[cinematicReveal_3s_ease-out_2.5s_forwards] text-white drop-shadow-md mt-2">{t.slogan_2}</span>
                                            </h2>

                                            <div className="flex items-center justify-center opacity-0 animate-[cinematicReveal_2s_ease-out_4.5s_forwards] mt-4 lg:mt-8">
                                                <button
                                                    onClick={handleReplayVideo}
                                                    className="flex items-center justify-center size-14 sm:size-16 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 backdrop-blur-sm shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all hover:scale-110 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] active:scale-95 group/play"
                                                    title={t.replay}
                                                >
                                                    <span className="material-symbols-outlined filled text-3xl sm:text-4xl pl-1 group-hover:scale-110 transition-transform">play_arrow</span>
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
