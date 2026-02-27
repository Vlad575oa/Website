import { inter, manrope, notoSans, alumniSans } from "@/lib/fonts";
import "./globals.css";
import { Providers } from "@/components/Providers";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru" className="scroll-smooth">
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className={`${inter.variable} ${manrope.variable} ${notoSans.variable} ${alumniSans.variable} font-display bg-[#101922] text-slate-100 antialiased flex flex-col min-h-screen overflow-x-hidden`}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
