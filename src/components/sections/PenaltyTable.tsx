interface PenaltyTableProps {
    t: any;
}

export default function PenaltyTable({ t }: PenaltyTableProps) {
    const tp = t.legislation_page.penalties;

    return (
        <section id="penalty-table" className="pt-10 pb-20 bg-transparent relative z-10">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-black text-white">{tp.title}</h2>
                </div>

                <div className="overflow-hidden rounded-3xl border border-slate-700/50 bg-[#1a1f26]/60 backdrop-blur-md shadow-2xl">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#101922] text-white">
                                <th className="p-6 text-sm font-black uppercase tracking-wider">{tp.head_violation}</th>
                                <th className="p-6 text-sm font-black uppercase tracking-wider">{tp.head_law}</th>
                                <th className="p-6 text-sm font-black uppercase tracking-wider">{tp.head_fine}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-700/50">
                            {tp.rows.map((item: any, i: number) => (
                                <tr key={i} className={`group hover:bg-white/5 transition-colors ${item.highlight ? "bg-red-500/5" : ""}`}>
                                    <td className="p-6">
                                        <div className="font-bold text-white group-hover:text-blue-300 transition-colors">{item.violation}</div>
                                    </td>
                                    <td className="p-6">
                                        <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-slate-400 uppercase">
                                            {item.law}
                                        </div>
                                    </td>
                                    <td className="p-6">
                                        <div className={`font-black text-lg ${item.highlight ? "text-red-400 drop-shadow-[0_0_8px_rgba(248,113,113,0.3)]" : "text-white"}`}>
                                            {item.fine}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    );
}
