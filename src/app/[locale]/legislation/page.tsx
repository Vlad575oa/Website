import { Metadata } from "next";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n";
import LegislationHero from "@/components/sections/LegislationHero";
import AntiPenaltyChecklist from "@/components/sections/AntiPenaltyChecklist";
import PenaltyTable from "@/components/sections/PenaltyTable";
import LegallyCorrectTexts from "@/components/sections/LegallyCorrectTexts";
import UIStandards from "@/components/sections/UIStandards";
import { Meteors } from "@/components/ui/meteors";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getDictionary(locale);
    const th = t.legislation_page.hero;

    return {
        title: th.title,
        description: t.legislation_page.checklist.description,
        alternates: {
            canonical: `/${locale}/legislation`,
        },
        openGraph: {
            title: th.title,
            description: t.legislation_page.checklist.description,
            url: `https://devvlad.ru/${locale}/legislation`,
        }
    };
}

export default async function LegislationPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;

    return (
        <main className="min-h-screen bg-[#0a0f14] relative overflow-hidden">
            {/* Unified Page Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[10%] left-[-10%] size-[600px] bg-[#137fec]/10 rounded-full blur-[150px] opacity-50" />
                <div className="absolute bottom-[20%] right-[-10%] size-[600px] bg-purple-600/10 rounded-full blur-[150px] opacity-50" />
                <Meteors number={50} />
            </div>

            <article className="relative z-10">
                <LegislationHero />
                <AntiPenaltyChecklist />
                <PenaltyTable />
                <LegallyCorrectTexts />
                <UIStandards />
            </article>

            {/* Schema.org Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Аудит соответствия веб-ресурсов законодательству РФ",
                        "description": "Профессиональный анализ сайтов на соответствие 152-ФЗ, 168-ФЗ и другим нормативным актам РФ.",
                        "provider": {
                            "@type": "Organization",
                            "name": "DevVlad",
                            "url": "https://devvlad.ru"
                        },
                        "areaServed": "RU",
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Юридический аудит сайта",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Проверка ПДн (152-ФЗ)"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Проверка закона о языке (168-ФЗ)"
                                    }
                                }
                            ]
                        }
                    }),
                }}
            />
        </main>
    );
}
