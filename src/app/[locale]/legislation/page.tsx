import { Metadata } from "next";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n";
import LegislationHero from "@/components/sections/LegislationHero";
import AntiPenaltyChecklist from "@/components/sections/AntiPenaltyChecklist";
import PenaltyTable from "@/components/sections/PenaltyTable";
import LegallyCorrectTexts from "@/components/sections/LegallyCorrectTexts";
import UIStandards from "@/components/sections/UIStandards";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getDictionary(locale);
    const tm = t.legislation_page.hero;

    return {
        title: `${tm.title_prefix} ${tm.title_accent}`,
        description: t.legislation_page.checklist.description,
        alternates: {
            canonical: `https://terra.art/${locale}/legislation`,
        },
    };
}

export default async function LegislationPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;

    return (
        <main className="min-h-screen bg-[#0a0f14]">
            <article>
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
                            "name": "DevStudio",
                            "url": "https://terra.art"
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
