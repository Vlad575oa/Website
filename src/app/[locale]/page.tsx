import Hero from "@/components/sections/Hero";
import Expertise from "@/components/sections/Expertise";

import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import Portfolio from "@/components/sections/Portfolio";
import FAQ from "@/components/sections/FAQ";
import { getDictionary } from "@/lib/get-dictionary";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";

  return {
    title: isEn ? "DevVlad — High-End Web Development" : "ДевВлад — Премиальная веб-разработка",
    description: isEn
      ? "Unique websites that grow your business. Next.js, Performance, SEO-first."
      : "Уникальные сайты для роста вашего бизнеса. Next.js, производительность, ориентация на SEO.",
    alternates: {
      canonical: `/${locale}`,
    }
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getDictionary(locale as "ru" | "en");

  return (
    <div className="flex flex-col w-full">
      <Hero t={t.hero} />
      <Expertise t={t.expertise} />

      <Process t={t.process} />
      <Portfolio t={t.portfolio} />
      <Pricing t={t.pricing} />
      <FAQ t={t.faq} />
    </div>
  );
}
