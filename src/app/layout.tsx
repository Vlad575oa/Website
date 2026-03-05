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
                <link rel="icon" href="/favicon.jpg" type="image/jpeg" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    rel="preload"
                    as="style"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL@24,400,0..1&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL@24,400,0..1&display=swap"
                    media="print"
                    onLoad="this.media='all'"
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
