import Image from "next/image";
import { SparklesCore } from "../ui/sparkles";

interface PortfolioProps {
    t: {
        title: string;
        subtitle: string;
        view_project: string;
        projects: Array<{
            title: string;
            category: string;
            link?: string;
        }>;
    };
}

export default function Portfolio({ t }: PortfolioProps) {
    const images = [
        "/1_Visa.jpg",
        "/Landscape.jpg",
        "/Transresource.jpg",
    ];

    const projects = t.projects.map((p, i) => ({
        ...p,
        image: images[i] || images[0]
    }));

    return (
        <section id="portfolio" className="pt-6 pb-24 bg-transparent relative z-10 overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <SparklesCore
                    id="sparkles-portfolio"
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={60}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>

            <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                        {t.title}
                    </h2>
                    <p className="text-slate-400 text-lg">
                        {t.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <a
                            href={project.link || "#"}
                            target={project.link ? "_blank" : undefined}
                            rel={project.link ? "noopener noreferrer" : undefined}
                            key={idx}
                            className="group block relative rounded-2xl overflow-hidden border border-slate-700/50 bg-[#1a1f26]/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#137fec]/20 hover:border-[#137fec]/50 cursor-pointer"
                        >
                            <div className="aspect-[4/3] relative overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={`${project.title} — ${project.category} project`}
                                    fill
                                    loading="lazy"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                {/* CSS Hover Overlay */}
                                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/60 transition-all duration-300 flex items-center justify-center">
                                    <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                                        {t.view_project} →
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 bg-transparent">
                                <p className="text-xs uppercase tracking-wider text-[#137fec] font-semibold mb-1">
                                    {project.category}
                                </p>
                                <h3 className="font-bold text-lg text-white group-hover:text-blue-300 transition-colors">
                                    {project.title}
                                </h3>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
