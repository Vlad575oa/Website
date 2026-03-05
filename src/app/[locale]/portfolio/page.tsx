import type { Metadata } from "next";
import Image from "next/image";
import { getDictionary } from "@/lib/get-dictionary";
import Link from "next/link";
import { Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
    const { locale } = await params;
    const isEn = locale === "en";

    return {
        title: isEn ? "Portfolio | DevVlad" : "Портфолио | ДевВлад",
        description: isEn
            ? "Explore our latest projects and find inspiration for your next digital product."
            : "Ознакомьтесь с нашими последними проектами и найдите вдохновение для своего следующего цифрового продукта.",
        alternates: {
            canonical: `/${locale}/portfolio`,
        }
    };
}

export default async function PortfolioPage({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const t = await getDictionary(locale as "ru" | "en");
    const tp = t.portfolio_page;

    const portfolioImages = [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCeBIVmvuIqvXTm45j9x_Sdu55gCLfZzhxOZ9uX08FYwPIACh8WcYJb9x_3JEyAURIf0MVm0Cl8_x2Bpxo0ifGVDcMqdbv15UGFJlhq2N90U804iaGdbvN4Co8Tp3l8slJ5nTFLqWR8mwibLWuUnxJm7YqC7LvVexEkDpmE9ml1EcXnY4s2bRgQ2ewzgnW1RYclQM6zgr1mT41v0eoipEvxE2MSUW7W6M9bgLzIdqKOKBXG_aeUuZn8L0B0U63swRpfemTjyWdifJSF",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBzqP5yfvHTb1-tBIwZ6IDWx_UtOHdbjHTbMXytu1c1b1Id6kbJ61Zt55kx1LuwDLw85MEj5iCj4RilU07-ujkeS3JCa8wVY6FrHWFF0VwCYvNep1ax8eHscOSksYhhiy0pULMMWbgdsKC4Om3S42kbgUvQ_AUuKHv5PpxTmYMJKE9_HQpMz9fCvjXXLCOqD0JPCBNn3ZAQB8bVO1H_mZ8kGnugJ8qSRCAc-XKqQc6Rtkz5fK0CNf4xa1i4An7-b6wxEAMfSaPC4Tq4",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDEmu1UUvbP0s7ShHtroTReLJ7gzIcob5ypB7TqTZPlizyogXBABEljVaeWQrWcISVRnB3flxQBjhB7BmNWY13MYz49ia-0xX9Rpdo06CS8fVoubsoalvjwWx5sbRLjR3nDqBvYVbIsQtq5dnm5T15zU4MygW1gigN_GJKWJXTTm7AZRh8h1Q0bsRlSoOJoLpMPCxAXDhEoV7o_mHXHoTvvlwYwa-gsqa7NtjQkaNNfexVJz_Va8gCvw8du8BFULLcd7p1VfX7f-DR3",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBIpb007iGDPRJfpEns6ue4CqvmAgwVYY_Dpi2_0trUdsVRg0rxunaQu67lU3MH6Iv4KYC1Jg0U4VSyJkBY6s9zPkVE7W5tiDlqqToGkgUXycpvLjM_Lr1wuc2vnDgNr3IcMw_iDcpW9EtE67lsgGUs-FR4fSXQCU-9JD8Jqsxf8cqZgFAIamj2KB1JkL1mAE4X4w7djickTIWBbrPTlAsCvuyj1TBuaDTNOzV0gd8j0Mxd9ntarOB7YATJpkMpOGXKCTGw0eq4ps1l",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC5BmA9fdiL0Lo-9BzucJxbaypI4Ll2pnYYlpsLrO1oGJ4f5OL6LhvrplFVEBbN2NxpGGUPuLBypiKULq6-EHm0PFa5r5F-OtlmLRBgDBFRp8PLBnxZ2Ese33eMViNbJoV5-Z2dIH_nucgV4PLPfEH2Xovix1xCEt9Oc466ke65doj_Wlg3nrdOEOAyOFC2_KNe-LC3meTMFSNUDL9W9V2Gq5Nw8cDz6WfsjPSxpMqqUCtwbfKYbZpTrkG5wy6QB90yXd4p1-Mu4JqB",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuASzq7kSCD7zVCQ2qM-Z7pgF9niIlCVEgfCphjhFH88IZXk4vSfZRo6Z10i9THtIQriagCxaUTLvVpW-xyinUXHwsHfW4febxHBmJd6wm8M0L-A_oGOodtZxJIhBLkTmnA8oDRshN7A0LcDGABpA38i6ukcyK9aheytUR8j7UFkSlGbU7s1vTxR5dN4VSlD-fK8QDvzmGUWN5eG30THs8dZUeLBs6vI1B4FuIi-QwxWcZxOsOlskLPui3YEXgO82GmhqdseVO6hZHKr"
    ];

    const portfolioItems = t.portfolio.projects.map((p, i) => ({
        ...p,
        image: portfolioImages[i] || portfolioImages[0]
    }));

    const processIcons = ["search", "palette", "code", "rocket"];

    return (
        <div className="w-full max-w-7xl mx-auto px-6 py-16 relative z-10">
            {/* Hero Header */}
            <section className="mb-20 text-center md:text-left max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6 text-white">
                    {tp.hero.title_prefix} <span className="text-[#137fec]">{tp.hero.title_accent}</span>
                </h1>
                <p className="text-slate-400 text-xl leading-relaxed">
                    {tp.hero.description}
                </p>
            </section>

            {/* Portfolio Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                {portfolioItems.map((item, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-2xl bg-[#1a1f26]/60 backdrop-blur-md border border-slate-700/50 aspect-[4/3] transition-all hover:border-[#137fec]/30 shadow-2xl">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-[#0d1117]/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white backdrop-blur-md">
                            <p className="text-xl font-black mb-4 tracking-tight">{item.title}</p>
                            <button className="px-6 py-2 border-2 border-[#137fec] rounded-full text-sm font-black text-[#137fec] hover:bg-[#137fec] hover:text-white transition-all shadow-lg shadow-[#137fec]/20">
                                {tp.view_case}
                            </button>
                        </div>
                    </div>
                ))}
            </section>

            {/* Process Section */}
            <section className="mb-32">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">{tp.process.title_prefix} <span className="text-[#137fec]">{tp.process.title_accent}</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">{tp.process.subtitle}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {/* Progress Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-800/50 -z-10"></div>

                    {tp.process.steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="size-24 rounded-full bg-[#1a1f26]/60 backdrop-blur-md border-2 border-[#137fec]/20 group-hover:border-[#137fec] group-hover:shadow-[0_0_20px_rgba(19,127,236,0.3)] transition-all duration-500 flex items-center justify-center mb-6 relative">
                                <span className="material-symbols-outlined text-4xl text-[#137fec] group-hover:scale-110 transition-transform duration-500">{processIcons[index]}</span>
                            </div>
                            <h3 className="text-lg font-black text-white mb-2 tracking-tight">{step.title}</h3>
                            <p className="text-slate-400 text-sm px-4 leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="rounded-3xl bg-[#1a1f26]/80 backdrop-blur-md p-12 md:p-20 text-center relative overflow-hidden border border-slate-700/50 group">
                {/* Abstract Background */}
                <div className="absolute top-0 right-0 size-96 bg-[#137fec]/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-[#137fec]/20 transition-all"></div>
                <div className="absolute bottom-0 left-0 size-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none group-hover:bg-purple-500/10 transition-all"></div>

                <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10 text-balance text-white">{tp.cta.title}</h2>
                <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto relative z-10 text-balance leading-relaxed">{tp.cta.description}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                    <button className="bg-[#137fec] text-white px-8 py-4 rounded-xl font-black text-lg hover:bg-blue-600 transition-all shadow-xl shadow-[#137fec]/20 active:scale-95">
                        {tp.cta.schedule_call}
                    </button>
                    <Link href="/#services" className="bg-white/5 hover:bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-black text-lg transition-all border border-white/10 active:scale-95 flex items-center justify-center">
                        {tp.cta.our_services}
                    </Link>
                </div>
            </section>
        </div>
    );
}
