"use client";

import { useState, useRef } from "react";

interface HeroVisualProps {
    t: {
        replay: string;
        slogan_1: string;
        slogan_2: string;
    };
}

export default function HeroVisual({ t }: HeroVisualProps) {
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
        <div className="relative flex-1 w-full flex flex-col justify-center lg:mt-6 z-10 w-full max-w-[650px] 2xl:max-w-[760px] ml-auto">
            <div className="absolute inset-0 top-16 bg-gradient-to-tr from-[#137fec]/10 to-purple-500/10 rounded-[2rem] blur-2xl -z-10 transform rotate-3 scale-95"></div>
            <div className="relative w-full max-w-[650px] 2xl:max-w-[760px] ml-auto group [perspective:2000px]">
                {/* Laptop Frame Mockup */}
                <div className="relative z-10 bg-[#0f1115] border border-slate-700/50 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transform transition-all duration-700 group-hover:[transform:rotateY(-2deg)_rotateX(2deg)]">
                    <div className="flex items-center gap-2 px-4 py-3 bg-[#13161c] border-b border-slate-800">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        </div>
                        <div className="flex-1 mx-4 h-6 bg-[#0a0c10] rounded-md border border-slate-800/80 flex items-center px-3 text-[10px] text-slate-500 font-mono">
                            https://devvlad.ru
                        </div>
                    </div>

                    <div className="aspect-[4/3] 2xl:aspect-video w-full bg-[#0a0c10] relative overflow-hidden group/screen">
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
                                className="absolute inset-0 z-10 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-6 text-center transition-opacity duration-1000 opacity-100"
                            >
                                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black leading-[1.2] mb-12 lg:mb-16 drop-shadow-2xl">
                                    <span className="inline-block text-purple-400 drop-shadow-md">{t.slogan_1}</span><br />
                                    <span className="inline-block text-white drop-shadow-md mt-2">{t.slogan_2}</span>
                                </h2>

                                <div className="flex items-center justify-center mt-4 lg:mt-8">
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
    );
}
