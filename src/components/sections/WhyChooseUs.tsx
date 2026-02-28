const advantages = [
    {
        title: "Fast Performance",
        description: "Core Web Vitals compliant. LCP under 2.5s, no layout shifts, blazing fast.",
    },
    {
        title: "Clean Code",
        description: "Maintainable, scalable, and heavily documented architectures.",
    },
    {
        title: "Mobile First",
        description: "Flawless experiences across all devices and screen sizes.",
    },
    {
        title: "SEO Ready",
        description: "Server-side rendered (SSR/SSG) content, semantic HTML, schema ready.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-slate-900 text-white">
            <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Built for scale, speed, and ranking.</h2>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-xl">
                            We never compromise on architecture. Every product we build undergoes strict performance auditing to ensure it ranks well and provides the best user experience.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block bg-white text-slate-900 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors"
                        >
                            Get a Free Consultation
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {advantages.map((adv, idx) => (
                            <div key={idx} className="p-6 rounded-2xl bg-slate-800 border border-slate-700">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                                    <h3 className="font-bold text-lg">{adv.title}</h3>
                                </div>
                                <p className="text-slate-400 text-sm">{adv.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
