import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const locales = ["ru", "en"];
const defaultLocale = "ru";

function getLocale(request: NextRequest): string {
    const acceptLanguage = request.headers.get("accept-language") || "";

    // Explicitly prioritize Russian if it's present in the headers at all.
    // This handles cases where English might have higher q-factor but user knows Russian.
    if (acceptLanguage.toLowerCase().includes("ru")) {
        return "ru";
    }

    const headers = { "accept-language": acceptLanguage };
    const languages = new Negotiator({ headers }).languages();

    try {
        return match(languages, locales, defaultLocale);
    } catch (e) {
        return defaultLocale;
    }
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Check if the pathname has a locale
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    // Redirect if there is no locale
    const locale = getLocale(request);

    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname}`;

    // Force HTTPS if running behind a proxy (like Traefik in Dokploy)
    const forwardedProto = request.headers.get("x-forwarded-proto");
    const forwardedHost = request.headers.get("x-forwarded-host");

    // If we're on the production domain and not on https, or if the proxy says it's https
    if (forwardedProto === "https" || (forwardedHost === "devvlad.ru" && !request.nextUrl.protocol.includes("https"))) {
        url.protocol = "https:";
    }

    return NextResponse.redirect(url);
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        "/((?!_next|api|public|.*\\..*).*)",
    ],
};
