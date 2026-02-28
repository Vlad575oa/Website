export const en = {
    common: {
        logo: "DevStudio",
        nav: {
            services: "Services",
            portfolio: "Portfolio",
            pricing: "Pricing",
            legislation: "Legislation",
        },
        contact_btn: "Contact",
        free_consultation: "Get a Free Consultation",
        analysis: "Analysis",
    },
    footer: {
        copyright: "© 2026, Self-employed Oleynik Vladislav Alexandrovich",
        inn: "INN: 771402421981",
        all_rights_reserved: "All rights reserved. site developed by",
        privacy_policy: "Privacy Policy",
        terms_of_use: "Terms of Use",
        cookie_settings: "Cookie Settings",
    },
    portfolio_page: {
        hero: {
            title_prefix: "Our",
            title_accent: "Portfolio",
            description: "A collection of premium web experiences crafted with precision, purpose, and a minimalist aesthetic.",
        },
        view_case: "View Case",
        process: {
            title_prefix: "Our",
            title_accent: "Process",
            subtitle: "From concept to deployment, we follow a rigorous workflow to ensure excellence at every stage of the journey.",
            steps: [
                { title: "1. Research", desc: "Understanding your goals and market landscape to build a solid foundation." },
                { title: "2. Design", desc: "Crafting intuitive and aesthetic user interfaces that captivate your audience." },
                { title: "3. Development", desc: "Building with clean, scalable, and modern code for peak performance." },
                { title: "4. Launch", desc: "Deploying your vision to the digital world and ensuring a smooth go-live." },
            ]
        },
        cta: {
            title: "Ready to start your project?",
            description: "Let's build something exceptional together. Our team is ready to bring your vision to life.",
            schedule_call: "Schedule a Call",
            our_services: "Our Services",
        }
    },
    pricing_page: {
        hero: {
            title_prefix: "Pricing &",
            title_accent: "Transparency",
            description: "Clear, fixed pricing for premium Next.js development. No hidden fees. We believe in building trust through upfront clarity.",
        },
        plans: [
            {
                name: "Landing Page",
                badge: "Best Value",
                desc: "Perfect for product launches and campaigns.",
                price: "15,000 ₽",
                unit: "/ project",
                features: ["Custom UI/UX Design", "Next.js Performance Optimization", "Fully Mobile Responsive", "SEO Basic Setup & Meta Tags"],
                cta: "Order Landing Page",
            },
            {
                name: "Multi-page Site",
                badge: "Popular",
                desc: "For businesses needing a complete web presence.",
                price: "25,000 ₽",
                unit: "from",
                features: ["Includes 5 Unique Pages", "Custom Design System & Assets", "Dynamic Content (Headless CMS)", "Advanced Technical SEO", "Admin Dashboard Integration"],
                cta: "Order Multi-page Site",
            }
        ],
        promise: {
            title_prefix: "Our",
            title_accent: "Promise",
            subtitle: "We build trust through transparency and quality delivery.",
            items: [
                { title: "Fixed Price", desc: "The price we agree on is the final price. No unexpected extra charges or hidden fees later on." },
                { title: "Safe Payment", desc: "Pay only after the project is delivered and you are 100% satisfied with the result." },
                { title: "Quality Guarantee", desc: "Pixel-perfect implementation, clean code structure, and high website loading scores." }
            ]
        },
        cta: {
            title: "Ready to start your project?",
            description: "Let's discuss your requirements and build something amazing together.",
            contact_us: "Contact Us",
        }
    },
    legislation_page: {
        hero: {
            title_prefix: "Compliance Analysis with",
            title_accent: "Local Laws",
            btn_check: "Start Check",
            btn_penalties: "Penalty Table",
        },
        checklist: {
            title: "Interactive Checklist 'Anti-Fine'",
            description: "Mark the points that are actually implemented on your site right now. The risk indicator will change in real-time.",
            completed: "completed",
            risk_level: "Risk Level",
            done: "Done",
            risk: "Risk",
            disclaimer: "* Test results are for informational purposes only and do not constitute an official legal opinion.",
            categories: [
                {
                    title: "Documentation and PDn (Protection of Data)",
                    items: [
                        "Privacy Policy is up to date for 2026, with a link in the footer on every page.",
                        "Under each form (application, calculation, call) there is an active link to consent with a checkbox.",
                        "Servers and databases are located locally (localization).",
                        "Popup cookie notification with 'Accept' button and link to rules."
                    ]
                },
                {
                    title: "Language Law — since March 1, 2026!",
                    items: [
                        "Buttons like 'Order', 'Calculate', 'Send' are duplicated in the local language with the same font and size.",
                        "Tooltips and system messages are translated into the local language.",
                        "Foreign inscriptions are left only for registered trademarks."
                    ]
                },
                {
                    title: "Messengers and AI",
                    items: [
                        "When switching to Telegram/WhatsApp, there is a warning about transferring data to a third-party service.",
                        "If an AI chat is used: the user is notified and has given consent to data processing by algorithms."
                    ]
                },
                {
                    title: "Advertising and Contacts",
                    items: [
                        "Marketing mailings: there is a separate unchecked box 'I want to receive promotions'.",
                        "The footer contains the tax ID, registration number, and full name of the legal entity."
                    ]
                },
                {
                    title: "Data Leakage",
                    items: [
                        "Lack of data transfer to Google and other foreign services.",
                        "No links to banned social network sites in the code.",
                        "If analytics are used – there is a cookie policy and the possibility to opt-out."
                    ]
                }
            ],
            risk_labels: {
                none: "No risk",
                low: "Low risk",
                medium: "Medium risk",
                high: "High risk",
                critical: "Critical risk!"
            }
        },
        penalties: {
            title: "Risk Mathematics",
            head_violation: "Violation",
            head_law: "Article / Law",
            head_fine: "Fine (for Legal Entity)",
            rows: [
                { violation: "Lack of privacy policy", law: "Admin Code", fine: "up to $1,500" },
                { violation: "Data storage on servers outside local region", law: "Data Law", fine: "up to $100,000", highlight: true },
                { violation: "Language requirements violations", law: "Language Law", fine: "up to $700 + orders" },
                { violation: "Spam mailing without explicit consent", law: "Advertising Law", fine: "up to $8,000" }
            ]
        },
        why_not_lawyer: {
            roles: [
                { title: "Developer", desc: "Focuses on code, speed, and making sure the button works." },
                { title: "Marketer", desc: "Focuses on conversion and leads." },
                { title: "US", desc: "We ensure you don't get a fine for every button pressed." }
            ],
            warning: {
                title: "Laws Change Every 3–6 Months",
                desc: "Are you sure your freelancer will update your policy text for free after the next amendment?"
            }
        },
        correct_texts: {
            title: "Ready-to-use Texts for Your Website",
            subtitle: "Copy and use right now. These are legally correct formulations for 2026.",
            texts: [
                {
                    title: "For Cookie Banner",
                    content: "We use cookies for the correct operation of the site. By staying with us, you agree to the Privacy Policy."
                },
                {
                    title: "For Messengers",
                    content: "By moving to Telegram, you confirm consent to transfer your phone number and correspondence history. Details — in the Privacy Policy."
                }
            ]
        },
        ui_standards: {
            title: "How Should It Look?",
            subtitle: "We have prepared samples of interface elements that fully comply with data protection and language laws.",
            form: {
                title: "Mandatory Form",
                name_ph: "Your Name",
                phone_ph: "+7 (___) ___-__-__",
                consent_pd: "I agree to the processing of personal data and have read the privacy policy.",
                consent_mk: "I want to receive information about discounts and promotions (marketing consent).",
                btn: "Submit Request",
                analysis: "A checkbox for PDn can be pre-filled or mandatory, but a marketing checkbox — always empty. Button names must be in local language."
            },
            messenger: {
                title: "Messengers and TG",
                warning: "Attention: by moving to Telegram, you confirm consent to transfer data to a third-party service.",
                btn: "Telegram Consultant",
                analysis: "According to local laws, if you use foreign messengers to collect data, the user must be notified of the risks of data transfer through foreign servers."
            },
            footer: {
                title: "Legally Correct Footer",
                legal_title: "Legal Information",
                legal_links: ["Data Processing Policy", "Newsletter Consent", "User Agreement"],
                req_title: "Requisites",
                req_content: "Разработка сайтов\nVAT: 7712345678 / KPP: 770101001\nOGRN: 1027700123456",
                lang_title: "Language Version",
                lang_status: "EN (Secondary) — Compliant with Laws",
                copy: "© 2026 Разработка сайтов.\nAll content is protected by copyright."
            }
        }
    },
    hero: {
        slogan_1: "Web Development",
        slogan_2: "without agencies and extra overpayments",
        replay: "Replay Video",
        status: "Available for new projects",
        title_prefix: "Need a ",
        title_accent_1: "modern",
        title_accent_2: "website?",
        desc_1: "Fast",
        desc_2: "Responsive",
        desc_3: "Scalable",
        cta_button: "Discuss a project",
        stat_1_label: "Lighthouse Score",
        stat_2_label: "Faster loading",
        stat_3_label: "Optimized",
    },
    expertise: {
        title: "Why Choose Next.js?",
        features: [
            {
                title: "Search Engine Speed",
                description: "Performance optimization (SSR & SSG) for maximum loading speed and top search engine rankings.",
            },
            {
                title: "Mobile-First Adaptation",
                description: "Perfect display and UX on any device from the start. Responsiveness without compromise.",
            },
            {
                title: "Scalability Without Limits",
                description: "Modular architecture ready to grow with your business from startup to high-load enterprise.",
            },
            {
                title: "Security and Reliability",
                description: "Built-in data protection, secure authentication, and stable performance under pressure.",
            },
        ]
    },
    services: {
        title: "Our Expertise",
        description: "We deliver end-to-end digital solutions focused on aesthetics and performance.",
        items: [
            { title: "Web Design", description: "Premium, minimal, and user-centric designs that elevate your brand." },
            { title: "E-Commerce", description: "High-converting, lightning-fast stores optimized for sales and growth." },
            { title: "SEO Optimization", description: "Architecture built for maximum visibility. Fast loading, semantic, and indexable." },
            { title: "Web Applications", description: "Complex, scalable web apps with Next.js, tailored to your business logic." },
        ]
    },
    solution: {
        title: "We Create Websites That",
        accent: "Sell",
        items: [
            { title: "Ultra-Fast Speed", description: "Loading under 2 seconds on any device worldwide." },
            { title: "SEO Foundation", description: "Clean code and proper structure for fast TOP-10 rankings." },
            { title: "CRM Integration", description: "All leads go directly to your Telegram, Bitrix24 or AmoCRM." },
            { title: "100% Responsive", description: "Perfect display on smartphones, tablets, and 4K monitors." },
        ],
        extra: {
            multi: "Multilingual",
            ssl: "SSL Security",
            funnels: "Sales Funnels",
            analytics: "Analytics 360"
        }
    },
    benefits: {
        title: "Why",
        accent: "Choose Us?",
        description: "We don't just draw pictures; we build marketing tools for your business growth.",
        stats: [
            { label: "Average launch time for an MVP project", value: "7 days" },
            { label: "Below market price due to automation", value: "-30%" },
        ],
        list: [
            "Multilingualism included by default",
            "Focus on the marketing funnel",
        ]
    },
    process: {
        title: "How It Works",
        subtitle: "Just three steps from an idea to your first client calls. No unnecessary fuss and nerves.",
        steps: [
            { title: "1. Discovery Call", description: "We'll discuss your task in 15 minutes using simple words. No jargon or complex presentations.", icon: "call" },
            { title: "2. Assembly", description: "I'll handle the technical setup and fill the site with your content (or write it for you).", icon: "build" },
            { title: "3. Launch", description: "The site is live. You check it, hit the 'Accept' button, and start receiving orders.", icon: "rocket_launch" },
        ]
    },
    pricing: {
        title: "Development Cost",
        subtitle: "Transparent pricing with no hidden fees",
        popular: "Popular",
        select: "Select Plan",
        contact: "Contact Us",
        tiers: [
            {
                name: "Start", price: "$200", desc: "1 page",
                features: [
                    "Responsive Design",
                    "SEO Optimized Code",
                    "Telegram Integration",
                    "SSL Certificate",
                ]
            },
            {
                name: "Business", price: "$350", desc: "5 pages",
                features: [
                    "All from Landing",
                    "Multilingual Support",
                    "CRM Integration",
                ]
            },
            {
                name: "Premium", price: "$490", desc: "10 pages",
                features: [
                    "Complex Business Logic",
                    "API Integration",
                    "User Accounts",
                    "Payment Processing",
                ]
            },
        ]
    },
    portfolio: {
        title: "Projects",
        subtitle: "",
        view_project: "View Project",
        projects: [
            { title: "Visa Center", category: "Corporate Site", link: "https://visa-centr.vercel.app/" },
            { title: "Art Land", category: "Web Design", link: "https://art-land.vercel.app/" },
            { title: "Resurs Trans", category: "Logistics Company", link: "https://resurs-trans-25s.vercel.app/" },
        ]
    },
    testimonials: {
        title: "What Our Clients Say",
        subtitle: "Trusted by startups and enterprises to ship fast, beautiful, and scalable products.",
        items: [
            { name: "James Carter", role: "CEO, TechNova", quote: "DevStudio built a lightning-fast site that increased our organic traffic by 180%. Their obsession with performance is unmatched.", initials: "JC" },
            { name: "Maria Gonzalez", role: "Founder, ShopWave", quote: "From design to launch, the team worked incredibly professionally. Our online store loads in less than 2 seconds, and conversions prove it.", initials: "MG" },
            { name: "Alex Kim", role: "CTO, DataPulse", quote: "Clean code, perfect Lighthouse scores, and a beautiful UI. They truly understand what modern web development should be.", initials: "AK" },
        ]
    },
    faq: {
        title: "Frequently Asked Questions",
        subtitle: "",
        items: [
            {
                question: "Can I change the text myself?",
                answer: "Yes, of course! I build it so that you don't need to know how to program to change text or images. It's as easy as writing a social media post or editing a Word file."
            },
            {
                question: "What about support?",
                answer: "I'm always here. After launch, I'm available on Telegram or WhatsApp. If something breaks or you accidentally delete something — I'll help and fix everything."
            },
            {
                question: "Are there any additional costs?",
                answer: "Only for the domain (website name) and hosting (where the site lives). This usually costs about 300-1000 rubles per month. I'll help you register everything in your name so you own it completely."
            },
        ]
    },
    cta: {
        title: "Ready to Elevate Your Business?",
        description: "Let's build something exceptional together. Get a performance audit and a detailed project plan — completely free.",
    },
    modals: {
        external_link: {
            title_tg: "Open Telegram",
            title_wa: "Open WhatsApp",
            description_tg: "You are leaving DevStudio and opening an external application. Please note that your phone number and profile data will become available to the messenger platform.",
            description_wa: "You are leaving DevStudio and opening the WhatsApp application. Please note that your phone number and profile data will become available to the messenger platform.",
            confirm: "Open",
            cancel: "Cancel",
        }
    },
    privacy: {
        title: "Privacy Policy",
        back_home: "Back to Home",
        sections: [
            {
                title: "1. General Provisions",
                content: "This personal data processing policy has been compiled in accordance with the requirements of the Federal Law of July 27, 2006. No. 152-FZ 'On Personal Data' and determines the procedure for processing personal data and measures to ensure the security of personal data taken by the WebStudio project (hereinafter referred to as the Operator)."
            },
            {
                title: "2. Basic Concepts",
                content: "Personal data — any information relating directly or indirectly to an identified or identifiable natural person (subject of personal data).\nOperator — Organizer of the WebStudio project, independently or jointly with other persons organizing and (or) processing personal data.\nProcessing of personal data — any action (operation) or set of actions (operations) with personal data."
            },
            {
                title: "3. Purposes of Processing Personal Data",
                content: "The purpose of processing the User's personal data is:\n- Providing consultations on web development and design services.\n- Conclusion and execution of contracts for website creation and IT services.\n- Informing the User by sending emails and messenger texts to discuss project details."
            },
            {
                title: "4. List of Processed Data",
                content: "The Operator processes the following personal data:\n- Surname, name, patronymic (if any);\n- Phone number;\n- Email address;\n- Information about the company or project necessary for providing services."
            },
            {
                title: "5. Withdrawal of Consent",
                content: "The User can withdraw their consent to the processing of personal data at any time by sending a notification to the Operator via e-mail to the official project address Vlad575@mail.ru with the note 'Withdrawal of consent to the processing of personal data'."
            }
        ]
    },
    terms: {
        title: "Terms of Use",
        back_home: "Back to Home",
        sections: [
            {
                title: "1. Subject of the Agreement",
                content: "This User Agreement is a legally binding document that governs the relationship between the WebStudio project (Contractor) and site users (Clients) using the project's services to familiarize themselves with web development offerings."
            },
            {
                title: "2. Rights and Obligations",
                content: "The user undertakes to use the site only for lawful purposes. The site's content (design, texts, portfolio code) is intellectual property. Copying, distributing or any other use of site materials without the prior consent of the copyright holder is prohibited."
            },
            {
                title: "3. Limitation of Liability",
                content: "The site is provided 'as is' for informational purposes. The WebStudio project is not responsible for any direct or indirect damage resulting from the use of the site. Relations regarding project development are regulated by a separate civil contract."
            }
        ]
    },
    cookies: {
        title: "Cookie Settings",
        back_home: "Back to Home",
        sections: [
            {
                title: "1. Use of Cookies",
                content: "Our WebStudio website uses cookies to ensure its operation, improve the user experience and collect analytics. By continuing to use the site, you agree to the use of cookies."
            },
            {
                title: "2. What are Cookies?",
                content: "Cookies are small text files that are saved on your device when you visit a website. They do not contain personal data that can identify you."
            },
            {
                title: "3. How to Disable Cookies",
                content: "You can disable the use of cookies in your browser settings. However, please note that some site features may not work properly."
            }
        ]
    }
};
