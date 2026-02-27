import { SparklesCore } from "../ui/sparkles";

interface ExpertiseProps {
    t: {
        title: string;
        features: {
            title: string;
            description: string;
        }[];
    };
}

export default function Expertise({ t }: ExpertiseProps) {
    const icons = ["bolt", "smartphone", "trending_up", "verified_user"];

    return (
        <section className="pt-8 pb-16 px-6 sm:px-10 bg-transparent relative z-10 overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <SparklesCore
                    id="sparkles-expertise"
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={80}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-white">{t.title}</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {t.features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col gap-4 rounded-xl border border-slate-700/50 bg-[#1a1f26]/60 backdrop-blur-md p-6 transition-all duration-300 hover:shadow-xl hover:shadow-[#137fec]/20 hover:-translate-y-1 hover:border-[#137fec]/50"
                        >
                            <div className="size-12 rounded-lg bg-[#137fec]/10 flex items-center justify-center text-[#137fec] group-hover:bg-[#137fec] group-hover:text-white transition-colors duration-300 text-center">
                                <span className="material-symbols-outlined text-[28px]">{icons[index]}</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-lg font-bold leading-tight text-white group-hover:text-purple-300 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
