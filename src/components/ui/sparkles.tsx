"use client";

import { useState, useEffect, useId, useRef, useMemo, useCallback } from "react";
import { cn } from "@/lib/utils";

type ParticlesProps = {
    id?: string;
    className?: string;
    background?: string;
    minSize?: number;
    maxSize?: number;
    speed?: number;
    particleColor?: string;
    particleDensity?: number;
};

const observerOptions: IntersectionObserverInit = { threshold: 0.1 };

const useIntersectionObserver = (
    ref: React.RefObject<Element | null>,
    options: IntersectionObserverInit = observerOptions
) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [ref, options]);

    return isVisible;
};

export const SparklesCore = (props: ParticlesProps) => {
    const {
        id,
        className,
        background = "transparent",
        minSize = 0.6,
        maxSize = 1.4,
        speed = 1,
        particleColor = "#FFFFFF",
        particleDensity = 120,
    } = props;

    const containerRef = useRef<HTMLDivElement>(null);
    const isVisible = useIntersectionObserver(containerRef);
    const generatedId = useId();

    const [engineReady, setEngineReady] = useState(false);
    const [ParticlesComponent, setParticlesComponent] = useState<any>(null);

    // Lazy-load tsparticles only when the component becomes visible
    useEffect(() => {
        if (!isVisible || engineReady) return;

        let cancelled = false;

        (async () => {
            const [{ default: Particles }, { initParticlesEngine }, { loadSlim }] = await Promise.all([
                import("@tsparticles/react"),
                import("@tsparticles/react"),
                import("@tsparticles/slim"),
            ]);

            if (cancelled) return;

            await initParticlesEngine(async (engine) => {
                await loadSlim(engine);
            });

            if (cancelled) return;

            setParticlesComponent(() => Particles);
            setEngineReady(true);
        })();

        return () => { cancelled = true; };
    }, [isVisible, engineReady]);

    const particlesOptions = useMemo(() => ({
        background: {
            color: {
                value: background,
            },
        },
        fullScreen: {
            enable: false,
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: false,
                },
                resize: { enable: true },
            },
            modes: {
                push: {
                    quantity: 4,
                },
            },
        },
        particles: {
            color: {
                value: particleColor,
            },
            move: {
                enable: true,
                speed: {
                    min: 0.1,
                    max: speed,
                },
                direction: "none" as const,
                outModes: {
                    default: "out" as const,
                },
            },
            number: {
                density: {
                    enable: true,
                    width: 400,
                    height: 400,
                },
                value: particleDensity,
            },
            opacity: {
                value: {
                    min: 0.1,
                    max: 1,
                },
                animation: {
                    enable: true,
                    speed: speed * 0.5,
                    sync: false,
                },
            },
            shape: {
                type: "circle",
            },
            size: {
                value: {
                    min: minSize,
                    max: maxSize,
                },
            },
        },
        detectRetina: true,
    }), [background, particleColor, speed, particleDensity, minSize, maxSize]);

    return (
        <div ref={containerRef} className={cn("h-full w-full", className)}>
            {isVisible && engineReady && ParticlesComponent && (
                <ParticlesComponent
                    id={id || generatedId}
                    className="h-full w-full"
                    options={particlesOptions}
                />
            )}
        </div>
    );
};

SparklesCore.displayName = "SparklesCore";
