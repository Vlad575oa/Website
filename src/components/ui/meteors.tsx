"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const Meteors = ({
    number,
    className,
}: {
    number?: number;
    className?: string;
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const meteors = new Array(number || 20).fill(true);

    if (!isMounted) return null;

    return (
        <div
            className="animate-[fadeIn_0.5s_ease-in-out]"
        >
            {meteors.map((el, idx) => {
                const meteorCount = number || 20;
                const position = idx * (100 / meteorCount);

                return (
                    <span
                        key={"meteor" + idx}
                        className={cn(
                            "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
                            "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
                            className,
                        )}
                        style={{
                            top: "-40px",
                            left: position + "%",
                            animationDelay: Math.random() * 5 + "s",
                            animationDuration: Math.floor(Math.random() * (10 - 5) + 5) + "s",
                        }}
                    ></span>
                );
            })}
        </div>
    );
};
