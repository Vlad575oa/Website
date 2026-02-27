const services = [
    {
        title: "Веб-дизайн",
        description: "Премиальный, минималистичный и ориентированный на пользователя дизайн, который возвышает ваш бренд.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
        ),
    },
    {
        title: "E-Commerce",
        description: "Высококонверсионные, молниеносные магазины, оптимизированные для продаж и роста.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
        ),
    },
    {
        title: "SEO Оптимизация",
        description: "Архитектура, созданная для максимальной видимости. Быстрая загрузка, семантика и индексируемость.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        ),
    },
    {
        title: "Веб-приложения",
        description: "Сложные, масштабируемые веб-приложения на React и Next.js, адаптированные под вашу бизнес-логику.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-transparent relative z-10">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">Наша экспертиза</h2>
                    <p className="text-slate-400 text-lg">Мы создаем комплексные цифровые решения, ориентированные на эстетику и производительность.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className="group p-8 rounded-2xl border border-slate-700/50 bg-[#1a1f26]/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#137fec]/20 hover:border-[#137fec]/50"
                        >
                            <div className="w-12 h-12 bg-[#137fec]/10 text-[#137fec] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#137fec] group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{service.title}</h3>
                            <p className="text-slate-400 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
