"use client";

import { useState } from "react";

interface FaqItem {
    question: string;
    answer: string;
}

interface FaqAccordionProps {
    items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {items.map((faq, i) => {
                const isOpen = openIndex === i;
                const icons = ["edit_note", "support_agent", "credit_card"];
                const icon = icons[i] || "quiz";

                return (
                    <div
                        key={i}
                        className={`border border-slate-700/50 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? "bg-[#1a1f26]/80 shadow-lg shadow-[#137fec]/10 border-[#137fec]/50" : "bg-[#1a1f26]/40 backdrop-blur-sm hover:border-slate-600"}`}
                    >
                        <button
                            onClick={() => toggleFaq(i)}
                            className="w-full flex items-center gap-4 p-6 text-left font-bold text-lg transition-colors text-white group"
                        >
                            <div className={`p-2 rounded-lg transition-colors ${isOpen ? "bg-[#137fec]/10 text-[#137fec]" : "bg-slate-800/50 text-slate-400 group-hover:text-slate-300"}`}>
                                <span className="material-symbols-outlined text-2xl">
                                    {icon}
                                </span>
                            </div>
                            <span className="flex-1">{faq.question}</span>
                            <span className={`material-symbols-outlined transition-transform duration-300 text-[#137fec] ${isOpen ? "rotate-180" : ""}`}>
                                expand_more
                            </span>
                        </button>
                        <div
                            className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] pb-6 opacity-100" : "max-h-0 opacity-0"}`}
                        >
                            <div className="text-slate-400 leading-relaxed border-t border-slate-700/30 pt-4 pl-12">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
