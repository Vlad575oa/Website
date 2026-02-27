import Hero from "@/components/sections/Hero";
import Expertise from "@/components/sections/Expertise";
import Benefits from "@/components/sections/Benefits";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import Portfolio from "@/components/sections/Portfolio";
import FAQ from "@/components/sections/FAQ";
import { getDictionary } from "@/lib/get-dictionary";

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
      <Benefits t={t.benefits} />
      <Process t={t.process} />
      <Portfolio t={t.portfolio} />
      <Pricing t={t.pricing} />
      <FAQ t={t.faq} />
    </div>
  );
}
