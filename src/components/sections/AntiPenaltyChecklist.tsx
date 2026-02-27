"use client";

import { useState, useMemo } from "react";
import { useLanguage } from "@/lib/i18n";

export default function AntiPenaltyChecklist() {
    const { t } = useLanguage();
    const tc = t.legislation_page.checklist;

    // We map the internal IDs to the localized categories
    const categories = tc.categories.map((cat, idx) => ({
        id: `cat-${idx}`,
        title: cat.title,
        items: cat.items.map((label, i) => ({
            id: `item-${idx}-${i}`,
            label
        }))
    }));

    const [checked, setChecked] = useState<Set<string>>(new Set());

    const totalItems = useMemo(() => categories.reduce((acc, cat) => acc + cat.items.length, 0), [categories]);
    const completedCount = checked.size;
    const remainingCount = totalItems - completedCount;

    const riskLevel = useMemo(() => {
        const percent = (completedCount / totalItems) * 100;
        if (percent === 100) return { label: tc.risk_labels.none, color: "text-green-400", bg: "bg-green-500/10" };
        if (percent > 80) return { label: tc.risk_labels.low, color: "text-blue-400", bg: "bg-blue-500/10" };
        if (percent > 50) return { label: tc.risk_labels.medium, color: "text-yellow-400", bg: "bg-yellow-500/10" };
        if (percent > 20) return { label: tc.risk_labels.high, color: "text-orange-400", bg: "bg-orange-500/10" };
        return { label: tc.risk_labels.critical, color: "text-red-400", bg: "bg-red-500/10" };
    }, [completedCount, totalItems, tc.risk_labels]);

    const toggleItem = (id: string) => {
        const next = new Set(checked);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        setChecked(next);
    };

    return (
        <section id="check-list" className="pt-8 pb-20 bg-transparent relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Left Column: Checklist */}
                    <div className="lg:col-span-8">
                        <div className="mb-12">
                            <h2 className="text-3xl font-black text-white mb-4">{tc.title}</h2>
                            <p className="text-slate-400">{tc.description}</p>
                        </div>

                        <div className="space-y-10">
                            {categories.map(category => {
                                const catDone = category.items.filter(i => checked.has(i.id)).length;
                                return (
                                    <div key={category.id} className="space-y-4">
                                        <div className="flex items-center justify-between border-b border-slate-700/50 pb-2">
                                            <h3 className="font-bold text-white">{category.title}</h3>
                                            <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">
                                                {catDone} / {category.items.length} {tc.completed}
                                            </span>
                                        </div>
                                        <div className="space-y-3">
                                            {category.items.map(item => (
                                                <label
                                                    key={item.id}
                                                    className={`flex items-start gap-3 p-4 rounded-xl border transition-all cursor-pointer group ${checked.has(item.id)
                                                        ? "border-[#137fec]/40 bg-[#137fec]/5"
                                                        : "border-slate-700/50 bg-[#1a1f26]/40 hover:border-[#137fec]/30 hover:bg-[#1a1f26]/60"
                                                        }`}
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={checked.has(item.id)}
                                                        onChange={() => toggleItem(item.id)}
                                                        className="mt-1 size-5 rounded border-slate-600 bg-slate-800 text-[#137fec] focus:ring-[#137fec] transition-all"
                                                    />
                                                    <span className={`text-sm leading-relaxed transition-colors ${checked.has(item.id) ? "text-white" : "text-slate-400"}`}>
                                                        {item.label}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column: Status Card (Sticky) */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-32 p-8 rounded-3xl bg-[#1a1f26] text-white border border-slate-700/50 shadow-2xl relative overflow-hidden group">
                            <div className="absolute -top-10 -right-10 size-40 bg-[#137fec]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#137fec]/20 transition-all duration-500"></div>

                            <div className="mb-8 relative z-10">
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">{tc.risk_level}</p>
                                <div className={`inline-block px-4 py-1 rounded-full text-lg font-black ${riskLevel.bg} ${riskLevel.color} border border-white/5`}>
                                    {riskLevel.label}
                                </div>
                            </div>

                            <div className="space-y-6 relative z-10">
                                <div>
                                    <div className="flex justify-between text-sm font-bold mb-2">
                                        <span className="text-green-400">✅ {tc.done}: {completedCount}</span>
                                        <span className="text-red-400">⚠️ {tc.risk}: {remainingCount}</span>
                                    </div>
                                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-[#137fec] to-purple-500 transition-all duration-500 ease-out"
                                            style={{ width: `${(completedCount / totalItems) * 100}%` }}
                                        />
                                    </div>
                                </div>

                                {/* Risk Disclaimer */}
                                <div className="mt-8 pt-8 border-t border-slate-800/50">
                                    <p className="text-xs text-slate-500 leading-relaxed italic">
                                        {tc.disclaimer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
