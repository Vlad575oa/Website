import { Metadata } from "next";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/sparkles";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getDictionary(locale);

    return {
        title: t.terms.title,
        description: t.terms.title,
        alternates: {
            canonical: `/${locale}/terms`,
        },
    };
}

export default async function TermsPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;
    const t = await getDictionary(locale);

    return (
        <main className="min-h-screen bg-[#0a0f14] pt-32 pb-20 px-6 sm:px-10 relative overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
                <SparklesCore
                    id="sparkles-terms"
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={30}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>

            <div className="max-w-3xl mx-auto relative z-10">
                <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-10 group">
                    <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
                    {t.terms.back_home}
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">{t.terms.title}</h1>

                <div className="space-y-10 text-slate-300 leading-relaxed bg-[#1a1f26]/60 backdrop-blur-md border border-slate-700/50 p-8 sm:p-12 rounded-3xl shadow-xl">
                    {t.terms.sections.map((section: { title: string; content: string }, idx: number) => (
                        <section key={idx}>
                            <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                            <div className="whitespace-pre-line text-slate-400">
                                {section.content}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </main>
    );
}
