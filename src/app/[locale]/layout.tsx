import type { Metadata } from "next";
import { inter, manrope, notoSans } from "@/lib/fonts";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Analytics from "@/components/Analytics";
import FloatingSocials from "@/components/common/FloatingSocials";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "DevStudio | Premium Web Development",
  description: "Modern. Fast. Mobile-Friendly. We craft high-end digital experiences.",
  alternates: {
    canonical: "https://example.com",
  },
};

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

