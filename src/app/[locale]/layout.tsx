import type { Metadata } from "next";
import { inter, manrope, notoSans } from "@/lib/fonts";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Analytics from "@/components/Analytics";
import FloatingSocials from "@/components/common/FloatingSocials";
import { Providers } from "@/components/Providers";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";

  return {
    title: isEn ? "DevVlad | Premium Web Development" : "ДевВлад | Премиальная веб-разработка",
    description: isEn
      ? "Modern. Fast. Mobile-Friendly. We craft high-end digital experiences."
      : "Современная. Быстрая. Адаптивная. Создаем цифровые продукты премиум-класса.",
    metadataBase: new URL("https://devvlad.ru"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "ru-RU": "/ru",
        "en-US": "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "ru" ? "ru_RU" : "en_US",
      url: `https://devvlad.ru/${locale}`,
      siteName: "DevVlad",
    },
  };
}

export default async function RootLocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div lang={locale} className="scroll-smooth">
      <Header />
      <main className="flex-1 w-full flex flex-col">
        {children}
      </main>
      <Footer />
      <Analytics />
      <FloatingSocials />
    </div>
  );
}

