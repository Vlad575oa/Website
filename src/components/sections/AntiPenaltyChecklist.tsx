import InteractiveChecklist from "./InteractiveChecklist";

interface AntiPenaltyChecklistProps {
    t: any;
}

export default function AntiPenaltyChecklist({ t }: AntiPenaltyChecklistProps) {
    const tc = t.legislation_page.checklist;

    // We map the internal IDs to the localized categories
    const categories = tc.categories.map((cat: any, idx: number) => ({
        id: `cat-${idx}`,
        title: cat.title,
        items: cat.items.map((label: string, i: number) => ({
            id: `item-${idx}-${i}`,
            label
        }))
    }));

    return (
        <section id="check-list" className="pt-8 pb-20 bg-transparent relative z-10">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-12">
                    <h2 className="text-3xl font-black text-white mb-4">{tc.title}</h2>
                    <p className="text-slate-400">{tc.description}</p>
                </div>

                <InteractiveChecklist categories={categories} t={tc} />
            </div>
        </section>
    );
}
