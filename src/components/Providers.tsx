"use client";

import { LanguageProvider } from "@/lib/i18n";
import { useEffect, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export function Providers({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        });
    }, []);

    return (
        <LanguageProvider>
            {children}
        </LanguageProvider>
    );
}
