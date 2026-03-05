"use client";

import { useState, useEffect } from "react";

interface CopyButtonProps {
    title: string;
    content: string;
}

export default function CopyButton({ title, content }: CopyButtonProps) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(content);
        setCopied(true);
    };

    useEffect(() => {
        if (!copied) return;
        const timer = setTimeout(() => setCopied(false), 2000);
        return () => clearTimeout(timer);
    }, [copied]);

    return (
        <button
            onClick={copyToClipboard}
            className={`absolute top-8 right-8 size-12 rounded-xl flex items-center justify-center transition-all ${copied
                ? "bg-green-500 text-white"
                : "bg-white text-slate-400 hover:text-[#137fec] hover:shadow-lg border border-slate-200"
                }`}
            title={title}
        >
            <span className="material-symbols-outlined text-[20px]">
                {copied ? "done" : "content_copy"}
            </span>
        </button>
    );
}
