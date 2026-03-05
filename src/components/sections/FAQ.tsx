import dynamic from "next/dynamic";
import FaqAccordion from "./FaqAccordion";

const SparklesCore = dynamic(() => import("../ui/sparkles").then(mod => mod.SparklesCore), {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
});

interface FAQProps {
    t: {
        title: string;
        subtitle: string;
        items: {
            question: string;
            answer: string;
        }[];
    };
}

export default function FAQ({ t }: FAQProps) {
    return (
        <section className="pt-10 pb-20 bg-transparent relative z-10 overflow-hidden" id="faq">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <SparklesCore
                    id="sparkles-faq"
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={70}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">{t.title}</h2>
                    {t.subtitle && <p className="text-slate-400">{t.subtitle}</p>}
                </div>
                <FaqAccordion items={t.items} />
            </div>
        </section>
    );
}
