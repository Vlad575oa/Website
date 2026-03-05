"use client";

import { cn } from "@/lib/utils";

type ParticlesProps = {
    id?: string;
    className?: string;
    particleColor?: string;
};

export const SparklesCore = (props: ParticlesProps) => {
    const { className, particleColor = "#FFFFFF" } = props;

    return (
        <div
            className={cn("h-full w-full", className)}
            style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, ${particleColor}15 0%, transparent 50%), radial-gradient(circle at 80% 80%, ${particleColor}10 0%, transparent 50%)`,
            }}
        />
    );
};

SparklesCore.displayName = "SparklesCore";
