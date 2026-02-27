import { Metadata } from "next";
import LegislationHero from "@/components/sections/LegislationHero";
import AntiPenaltyChecklist from "@/components/sections/AntiPenaltyChecklist";
import PenaltyTable from "@/components/sections/PenaltyTable";
import LegallyCorrectTexts from "@/components/sections/LegallyCorrectTexts";
import UIStandards from "@/components/sections/UIStandards";

export const metadata: Metadata = {
    title: "Анализ соответствия 152-ФЗ и 168-ФЗ | Поправки 2026",
    description: "Проверьте ваш сайт на соответствие новым требованиям законодательства РФ (168-ФЗ, 152-ФЗ). Интерактивный чек-лист, таблица штрафов и готовые решения для бизнеса.",
    alternates: {
        canonical: "https://terra.art/legislation",
    },
};

export default function LegislationPage() {
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
