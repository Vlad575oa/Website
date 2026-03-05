import { Inter, Manrope, Noto_Sans, Alumni_Sans_Pinstripe } from "next/font/google";

export const inter = Inter({
    subsets: ["cyrillic", "latin"],
    display: "swap",
    variable: "--font-inter",
});

export const manrope = Manrope({
    subsets: ["cyrillic", "latin"],
    display: "swap",
    variable: "--font-manrope",
});

export const notoSans = Noto_Sans({
    subsets: ["cyrillic", "latin"],
    weight: ["400", "500", "700"],
    display: "swap",
    variable: "--font-noto-sans",
});

export const alumniSans = Alumni_Sans_Pinstripe({
    subsets: ["cyrillic", "latin"],
    weight: ["400"],
    display: "swap",
    variable: "--font-alumni-sans",
});
