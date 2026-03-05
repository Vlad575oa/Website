import { inter, manrope, notoSans, alumniSans } from "@/lib/fonts";
import "./globals.css";
import "./animations.css";
import { Providers } from "@/components/Providers";
import AnalyticsScripts from "@/components/common/AnalyticsScripts";
import CookieBanner from "@/components/common/CookieBanner";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru" className="scroll-smooth">
            <head>
                <style
                    dangerouslySetInnerHTML={{
                        __html: `
                            :root {
                                --color-background-dark: #101822;
                            }
                            body {
                                background-color: #101822;
                                color: white;
                                margin: 0;
                                overflow-x: hidden;
                            }
                            header {
                                position: sticky;
                                top: 0;
                                z-index: 50;
                                background: rgba(26, 31, 38, 0.8);
                                backdrop-filter: blur(12px);
                                border-bottom: 1px solid rgba(51, 65, 85, 0.5);
                                height: 73px;
                            }
                            .hero-bg-dark { background-color: #0a0c10; }
                            .aspect-monitor { aspect-ratio: 4/3; }
                            @media (min-width: 1536px) { .aspect-monitor { aspect-ratio: 16/9; } }
                            .hero-title { font-weight: 900; line-height: 1.1; }
                        `,
                    }}
                />
                <link rel="icon" href="/favicon.jpg" type="image/jpeg" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="preload" href="/hero-mockup.webp" as="image" fetchPriority="high" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            var d=document,l=d.createElement('link');
                            l.rel='stylesheet';
                            l.media='print';
                            l.onload=function(){l.media='all'};
                            l.href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL@24,400,0..1&display=swap';
                            d.head.appendChild(l);
                        `,
                    }}
                />
                <noscript>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL@24,400,0..1&display=swap"
                    />
                </noscript>
            </head>
            <body className={`${inter.variable} ${manrope.variable} ${notoSans.variable} ${alumniSans.variable} font-display bg-[#101922] text-slate-100 antialiased flex flex-col min-h-screen overflow-x-hidden`}>
                <Providers>
                    {children}
                    <CookieBanner />
                </Providers>
                <AnalyticsScripts />
            </body>
        </html>
    );
}
