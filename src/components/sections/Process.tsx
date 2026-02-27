"use client";

import { SparklesCore } from "../ui/sparkles";

interface ProcessProps {
    t: {
        title: string;
        subtitle: string;
        steps: {
            title: string;
            description: string;
            icon: string;
        }[];
    };
}

export default function Process({ t }: ProcessProps) {
    return (
        <section className="pt-6 pb-20 px-6 sm:px-10 bg-transparent relative z-10 overflow-hidden" id="process">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <SparklesCore
                    id="sparkles-process"
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">{t.title}</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">{t.subtitle}</p>
                </div>

                <div className="relative">
                    {/* Connection Line */}
                    <div className="hidden lg:block absolute top-[2.25rem] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent -z-10"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                        {t.steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center group">
                                <div
                                    className="size-16 rounded-2xl bg-[#1a1f26] border border-slate-700 flex items-center justify-center text-xl font-bold text-white mb-6 relative transition-all duration-300 group-hover:border-[#137fec] group-hover:shadow-[0_0_20px_rgba(19,127,236,0.3)] group-hover:-translate-y-1"
                                >
                                    <span className="material-symbols-outlined text-3xl text-[#137fec]">
                                        {step.icon}
                                    </span>
                                    <div className="absolute inset-0 rounded-2xl bg-[#137fec]/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#137fec] transition-colors">{step.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed max-w-[280px]">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
