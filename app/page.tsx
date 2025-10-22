"use client"

import React, { useState, useEffect, useMemo } from 'react';

// --- TYPE AND DATA DEFINITIONS ---

// Define the shape of the content for type safety in TypeScript
interface LanguageContent {
    lang_label: string;
    hero_headline: string;
    hero_subline: string;
    hero_cta: string;
    services_title: string;
    service_1_title: string;
    service_1_desc: string;
    service_2_title: string;
    service_2_desc: string;
    service_3_title: string;
    service_3_desc: string;
    cta_title: string;
    cta_text: string;
    contact_name_placeholder: string;
    contact_email_placeholder: string;
    contact_message_placeholder: string;
    contact_submit: string;
    footer_rights: string;
}

// Language Data Object (now typed)
const LANGUAGES: Record<string, LanguageContent> = {
    en: {
        lang_label: "Language",
        hero_headline: "Accelerate Your Future. <span class='accent-color'>Code Your Success.</span>",
        hero_subline: "Leading IT solutions for web innovation, deep system integrations, and total business automation.",
        hero_cta: "START YOUR DIGITAL TRANSFORMATION",
        services_title: "Our Core <span class='accent-color'>Digital Services</span>",
        service_1_title: "Web Development & Design",
        service_1_desc: "We build stunning, high-performance websites and web applications (WebApps) designed for speed, security, and exceptional user experience across all devices.",
        service_2_title: "Business Automation",
        service_2_desc: "Streamline operations, eliminate manual work, and increase efficiency with tailored business process automation (BPA) solutions built just for your company.",
        service_3_title: "System Integration",
        service_3_desc: "Seamlessly connect your existing software, databases, and third-party tools via custom APIs and robust integration pipelines for unified data flow.",
        cta_title: "Ready to Build the Future?",
        cta_text: "Let's discuss how NEXUS DIGITAL can solve your hardest technology challenges.",
        contact_name_placeholder: "Your Name",
        contact_email_placeholder: "Work Email",
        contact_message_placeholder: "Tell us about your project...",
        contact_submit: "Send Inquiry",
        footer_rights: "All Rights Reserved.",
    },
    ru: {
        lang_label: "Язык",
        hero_headline: "Ускорьте Ваше Будущее. <span class='accent-color'>Кодируйте Свой Успех.</span>",
        hero_subline: "Ведущие IT-решения для веб-инноваций, глубокой интеграции систем и полной автоматизации бизнеса.",
        hero_cta: "НАЧАТЬ ЦИФРОВУЮ ТРАНСФОРМАЦИЮ",
        services_title: "Наши Основные <span class='accent-color'>Цифровые Услуги</span>",
        service_1_title: "Веб-Разработка и Дизайн",
        service_1_desc: "Мы создаем потрясающие, высокопроизводительные веб-сайты и веб-приложения (WebApps), разработанные для скорости, безопасности и исключительного пользовательского опыта.",
        service_2_title: "Автоматизация Бизнеса",
        service_2_desc: "Оптимизируйте операции, исключите ручной труд и повысьте эффективность с помощью индивидуальных решений для автоматизации бизнес-процессов (BPA).",
        service_3_title: "Интеграция Систем",
        service_3_desc: "Бесшовно подключайте существующее программное обеспечение, базы данных и сторонние инструменты с помощью пользовательских API и надежных конвейеров интеграции для унифицированного потока данных.",
        cta_title: "Готовы Строить Будущее?",
        cta_text: "Давайте обсудим, как NEXUS DIGITAL может решить ваши самые сложные технологические задачи.",
        contact_name_placeholder: "Ваше Имя",
        contact_email_placeholder: "Рабочий Email",
        contact_message_placeholder: "Расскажите нам о вашем проекте...",
        contact_submit: "Отправить Запрос",
        footer_rights: "Все права защищены.",
    },
    uz: {
        lang_label: "Til",
        hero_headline: "Kelajagingizni Tezlashtiring. <span class='accent-color'>Muvaﬀaqiyatingizni Kodlang.</span>",
        hero_subline: "Veb innovatsiyalari, chuqur tizim integratsiyasi va to‘liq biznes avtomatizatsiyasi uchun yetakchi IT yechimlar.",
        hero_cta: "RAQAMLI O‘ZGARISHNI BOSHLASH",
        services_title: "Asosiy <span class='accent-color'>Raqamli Xizmatlarimiz</span>",
        service_1_title: "Veb Rivojlantirish va Dizayn",
        service_1_desc: "Biz tezlik, xavfsizlik va barcha qurilmalarda ajoyib foydalanuvchi tajribasi uchun mo‘ljallangan ajoyib, yuqori samarali veb-saytlar va veb-ilovalar (WebApps) yaratamiz.",
        service_2_title: "Biznesni Avtomatlashtirish",
        service_2_desc: "Maxsus biznes jarayonlarini avtomatlashtirish (BPA) yechimlari bilan operatsiyalarni soddalashtiring, qo‘l mehnatini yo‘q qiling va samaradorlikni oshiring.",
        service_3_title: "Tizim Integratsiyasi",
        service_3_desc: "Yagona ma’lumotlar oqimi uchun maxsus API’lar va ishonchli integratsiya quvurlari orqali mavjud dasturiy ta’minotingiz, ma’lumotlar bazalaringiz va uchinchi tomon vositalarini uzluksiz ulang.",
        cta_title: "Kelajakni Qurishga Tayyormisiz?",
        cta_text: "Keling, NEXUS DIGITAL sizning eng qiyin texnologik muammolaringizni qanday hal qila olishini muhokama qilaylik.",
        contact_name_placeholder: "Ismingiz",
        contact_email_placeholder: "Ish E-pochtasi",
        contact_message_placeholder: "Loyihangiz haqida bizga gapirib bering...",
        contact_submit: "So‘rov Yuborish",
        footer_rights: "Barcha Huquqlar Himoyalangan.",
    },
    kz: {
        lang_label: "Тіл",
        hero_headline: "Болашағыңызды Жылдамдатыңыз. <span class='accent-color'>Табысыңызды Кодтаңыз.</span>",
        hero_subline: "Веб-инновациялар, терең жүйелік интеграция және толық бизнес автоматтандыру үшін жетекші IT шешімдер.",
        hero_cta: "ЦИФРЛЫҚ ТРАНСФОРМАЦИЯҢЫЗДЫ БАСТАҢЫЗ",
        services_title: "Негізгі <span class='accent-color'>Цифрлық Қызметтеріміз</span>",
        service_1_title: "Веб-Әзірлеу және Дизайн",
        service_1_desc: "Біз жылдамдық, қауіпсіздік және барлық құрылғылардағы ерекше пайдаланушы тәжірибесі үшін әзірленген керемет, жоғары өнімді веб-сайттар мен веб-қосымшалар (WebApps) жасаймыз.",
        service_2_title: "Бизнесті Автоматтандыру",
        service_2_desc: "Операцияларды жеңілдетіңіз, қол еңбегін жойыңыз және сіздің компанияңыз үшін арнайы жасалған бизнес-процестерді автоматтандыру (BPA) шешімдері арқылы тиімділікті арттырыңыз.",
        service_3_title: "Жүйелік Интеграция",
        service_3_desc: "Бірыңғай деректер ағыны үшін арнайы API және сенімді интеграция құбырлары арқылы бар бағдарламалық құралдарыңызды, дерекқорларыңызды және үшінші тарап құралдарын үздіксіз қосыңыз.",
        cta_title: "Болашақты Құруға Дайынсыз ба?",
        cta_text: "NEXUS DIGITAL сіздің ең күрделі технологиялық мәселелеріңізді қалай шеше алатынын талқылайық.",
        contact_name_placeholder: "Сіздің Атыңыз",
        contact_email_placeholder: "Жұмыс Email",
        contact_message_placeholder: "Жобаңыз туралы айтып беріңіз...",
        contact_submit: "Сұрау Жіберу",
        footer_rights: "Барлық Құқықтар Қорғалған.",
    }
};

// --- REACT COMPONENT ---

const NexusDigitalLandingPage = () => {
    // State to manage the selected language
    const [lang, setLang] = useState<'en' | 'ru' | 'uz' | 'kz'>('en');
    
    // Get the current content based on the language state using useMemo for optimization
    const content = useMemo(() => LANGUAGES[lang], [lang]);

    // Effect to update the document's language attribute
    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.documentElement.lang = lang;
        }
    }, [lang]);

    // Handler for language change
    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLang(e.target.value as 'en' | 'ru' | 'uz' | 'kz');
    };

    // Note: In a real Next.js/React app, you would load Inter font via _app.tsx or next/font,
    // and use a dedicated CSS file for the custom styles. Here, we use inline styles for the
    // single-file mandate.
    
    // Custom styles derived from the original HTML's <style> block
    const customStyles = `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        body {
            font-family: 'Inter', sans-serif;
            background-color: #0d1117; 
            color: #e5e7eb;
            overflow-x: hidden;
            position: relative;
        }

        .dynamic-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -10;
            opacity: 0.15;
            /* Updated gradient colors to vibrant green/teal */
            background: radial-gradient(circle at 10% 20%, rgba(104, 204, 75, 0.2) 0%, transparent 50%),
                        radial-gradient(circle at 90% 80%, rgba(50, 150, 80, 0.2) 0%, transparent 50%);
            background-size: 200% 200%;
            animation: moveGradient 30s ease infinite alternate;
        }

        @keyframes moveGradient {
            0% { background-position: 0% 0%; }
            100% { background-position: 100% 100%; }
        }

        /* Custom accent color (Vibrant Data Green) */
        .accent-color {
            color: #68CC4B;
        }
        .accent-bg {
            background-color: #68CC4B;
            box-shadow: 0 0 20px rgba(104, 204, 75, 0.5);
        }
        .accent-border {
            border-color: #68CC4B;
        }

        .cta-button {
            transition: all 0.3s ease;
        }
        .cta-button:hover {
            transform: translateY(-2px) scale(1.02);
            box-shadow: 0 10px 30px rgba(104, 204, 75, 0.4);
            background-color: #55B53C;
        }
        
        /* Using standard Tailwind classes, but defining the base colors for custom classes */
        .border-cyan-500 { border-color: #68CC4B !important; }
        .focus\:ring-cyan-500:focus { --tw-ring-color: #68CC4B !important; }
        .focus\:border-cyan-500:focus { border-color: #68CC4B !important; }
        .hover\:border-cyan-500\/50:hover { border-color: rgba(104, 204, 75, 0.5) !important; }
        .border-cyan-900\/50 { border-color: rgba(104, 204, 75, 0.5) !important; }
    `;

    return (
        // Note: In Next.js, <body> and <head> tags are usually managed outside this component.
        // We include the custom styles here using <style> for the single-file mandate.
        <>
            <style dangerouslySetInnerHTML={{ __html: customStyles }} />
            
            <div className="min-h-screen">
                {/* Dynamic Background Element */}
                <div className="dynamic-bg"></div>

                {/* MAIN CONTAINER */}
                <div className="relative z-10">

                    {/* HEADER / NAVIGATION */}
                    <header className="p-4 md:p-6 sticky top-0 bg-[#0d1117]/90 backdrop-blur-sm z-50 rounded-b-xl shadow-lg shadow-black/50">
                        <div className="max-w-7xl mx-auto flex justify-between items-center">
                            {/* Logo/Brand */}
                            <a href="#" className="text-3xl font-extrabold tracking-wider">
                                <span className="accent-color">NEXUS</span> <span className="text-white">DIGITAL</span>
                            </a>

                            {/* Language Toggle */}
                            <div className="flex items-center space-x-2">
                                <label 
                                    htmlFor="language-select" 
                                    className="text-sm text-gray-400 hidden sm:block"
                                >
                                    {content.lang_label}
                                </label>
                                <select 
                                    id="language-select" 
                                    value={lang}
                                    onChange={handleLanguageChange}
                                    className="bg-gray-800 text-white text-sm p-2 rounded-lg border border-cyan-500 focus:ring-cyan-500 focus:border-cyan-500 transition duration-300 cursor-pointer"
                                >
                                    <option value="en">English</option>
                                    <option value="ru">Русский</option>
                                    <option value="uz">O'zbekcha</option>
                                    <option value="kz">Қазақша</option>
                                </select>
                            </div>
                        </div>
                    </header>

                    {/* HERO SECTION */}
                    <section className="py-20 md:py-32 text-center max-w-5xl mx-auto px-4">
                        <h1 
                            className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 tracking-tighter"
                            // Dangerously set inner HTML to render the colored <span> within the text
                            dangerouslySetInnerHTML={{ __html: content.hero_headline }} 
                        />
                        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto">
                            {content.hero_subline}
                        </p>
                        <a href="#contact" className="inline-block px-10 py-4 text-lg font-semibold rounded-full accent-bg text-gray-900 cta-button">
                            {content.hero_cta}
                        </a>
                    </section>

                    {/* SERVICES SECTION */}
                    <section id="services" className="py-16 md:py-24 bg-gray-900/50 rounded-t-3xl border-t border-cyan-900/50">
                        <div className="max-w-7xl mx-auto px-4">
                            <h2 
                                className="text-4xl md:text-5xl font-bold text-center mb-16"
                                dangerouslySetInnerHTML={{ __html: content.services_title }} 
                            />

                            <div className="grid md:grid-cols-3 gap-8">

                                {/* Service 1: Web Development & Design */}
                                <div className="p-8 bg-gray-800/80 rounded-2xl shadow-2xl hover:bg-gray-700/80 transition duration-500 border border-transparent hover:border-cyan-500/50 group">
                                    <div className="text-5xl accent-color mb-4">
                                        {/* Icon: Web/Code */}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75l-2.5 2.5m0 0l-2.5-2.5m2.5 2.5v7.5m6.829-10.871L21 12m0 0l-5.671 4.871L15 21l-3-3m0 0l-3 3-1.329-3.129M3 12l5.671 4.871L9 21l3-3m0 0l3 3m-3-3v3m0-12V6M3 6h18M3 18h18M6 3h12" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-3 group-hover:accent-color">
                                        {content.service_1_title}
                                    </h3>
                                    <p className="text-gray-400">
                                        {content.service_1_desc}
                                    </p>
                                </div>

                                {/* Service 2: Business Automation */}
                                <div className="p-8 bg-gray-800/80 rounded-2xl shadow-2xl hover:bg-gray-700/80 transition duration-500 border border-transparent hover:border-cyan-500/50 group">
                                    <div className="text-5xl accent-color mb-4">
                                        {/* Icon: Automation/Robot */}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v-.375c0-.621.503-1.125 1.125-1.125h4.75c.621 0 1.125.504 1.125 1.125v.375M3.75 6.25c0 .621.503 1.125 1.125 1.125h14.25c.621 0 1.125-.504 1.125-1.125V5.5c0-.621-.504-1.125-1.125-1.125H4.875C4.254 4.375 3.75 4.879 3.75 5.5v.75zM2.25 12h19.5" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 00-4.72-2.316l-1.325.295c-.808.18-.808 1.155 0 1.335l1.325.295A6 6 0 0012 21.75v-3z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 014.72-2.316l1.325.295c.808.18.808 1.155 0 1.335l-1.325.295A6 6 0 0112 21.75v-3z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-3 group-hover:accent-color">
                                        {content.service_2_title}
                                    </h3>
                                    <p className="text-gray-400">
                                        {content.service_2_desc}
                                    </p>
                                </div>

                                {/* Service 3: Integrations & APIs */}
                                <div className="p-8 bg-gray-800/80 rounded-2xl shadow-2xl hover:bg-gray-700/80 transition duration-500 border border-transparent hover:border-cyan-500/50 group">
                                    <div className="text-5xl accent-color mb-4">
                                        {/* Icon: Integration/Connect */}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5h-3m3 0a.75.75 0 100-1.5h-3a.75.75 0 000 1.5m3 0v.75m3-.75a.75.75 0 100-1.5h-3a.75.75 0 000 1.5m-3 0V11m6-1.5a.75.75 0 100-1.5h-3a.75.75 0 000 1.5m-3 0V11m3-1.5a.75.75 0 100-1.5h-3a.75.75 0 000 1.5m3 0V11m0 0a.75.75 0 100-1.5h-3a.75.75 0 000 1.5m3 0V11m-3 0a.75.75 0 100-1.5h-3a.75.75 0 000 1.5m3 0V11m-3 0a.75.75 0 100-1.5h-3a.75.75 0 000 1.5m3 0V11m0 0a.75.75 0 100-1.5h-3a.75.75 0 000 1.5m3 0V11m-3 0a.75.75 0 100-1.5h-3a.75.75 0 000 1.5m3 0V11" />
                                        </svg>

                                    </div>
                                    <h3 className="text-2xl font-semibold mb-3 group-hover:accent-color">
                                        {content.service_3_title}
                                    </h3>
                                    <p className="text-gray-400">
                                        {content.service_3_desc}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </section>

                    {/* CTA / CONTACT SECTION */}
                    <section id="contact" className="py-20 md:py-28 text-center px-4">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            {content.cta_title}
                        </h2>
                        <p className="text-lg text-gray-400 mb-8">
                            {content.cta_text}
                        </p>
                        <form className="max-w-xl mx-auto space-y-4">
                            <input type="text" placeholder={content.contact_name_placeholder} required className="w-full p-4 bg-gray-800 rounded-lg border border-gray-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white placeholder-gray-500 transition" />
                            <input type="email" placeholder={content.contact_email_placeholder} required className="w-full p-4 bg-gray-800 rounded-lg border border-gray-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white placeholder-gray-500 transition" />
                            <textarea placeholder={content.contact_message_placeholder} rows={4} required className="w-full p-4 bg-gray-800 rounded-lg border border-gray-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white placeholder-gray-500 transition"></textarea>
                            <button type="submit" className="w-full px-8 py-4 text-lg font-bold rounded-lg accent-bg text-gray-900 cta-button">
                                {content.contact_submit}
                            </button>
                        </form>
                    </section>

                    {/* FOOTER */}
                    <footer className="py-8 bg-gray-900/80 mt-10">
                        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
                            <p>&copy; 2025 NEXUS DIGITAL. <span>{content.footer_rights}</span></p>
                        </div>
                    </footer>

                </div>
            </div>
        </>
    );
};

export default NexusDigitalLandingPage;
