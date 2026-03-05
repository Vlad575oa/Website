"use client";

import dynamic from "next/dynamic";

const SparklesCore = dynamic(() => import("@/components/ui/sparkles").then((mod) => mod.SparklesCore), {
    ssr: false,
});

export default function SparkleBackgroundClient() {
    return (
        <div className="w-full absolute inset-0 z-10">
            <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={100}
                className="w-full h-full"
                particleColor="#FFFFFF"
            />
        </div>
    );
}
