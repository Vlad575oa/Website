interface CTAProps {
    t: {
        title: string;
        description: string;
    };
    contactText: string;
}

export default function CTA({ t, contactText }: CTAProps) {
    return (
        <section
            id="contact"
            className="py-24 bg-transparent relative z-10"
        >
            <div className="container mx-auto px-4 text-center max-w-4xl">
                <div className="bg-[#1a1f26]/80 backdrop-blur-md rounded-3xl p-12 md:p-16 border border-slate-700/50 shadow-2xl shadow-[#137fec]/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#137fec] opacity-[0.05] blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 opacity-[0.05] blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance text-white relative z-10">
                        {t.title}
                    </h2>
                    <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto relative z-10">
                        {t.description}
                    </p>
                    <a
                        href="mailto:vlad575@mail.ru"
                        className="btn-neu inline-block bg-[#1a1f26] text-white px-12 py-5 rounded-2xl text-xl font-bold transition-all relative z-10 hover:text-[#137fec]"
                    >
                        {contactText}
                    </a>
                </div>
            </div>
        </section>
    );
}
