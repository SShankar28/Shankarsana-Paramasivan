"use client";

import { useState, useEffect, useRef } from "react";

const NAV_ITEMS = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'publications', label: 'Publications' },
    { id: 'contact', label: 'Contact' }
];

export default function Header() {
    const [activeSection, setActiveSection] = useState("home");
    const isClickScrolling = useRef(false);
    const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (isClickScrolling.current) return;

            const sections = NAV_ITEMS.map(item => item.id);
            const isAtBottom = (window.innerHeight + window.scrollY) >= document.body.scrollHeight - 50;

            if (isAtBottom) {
                setActiveSection("contact");
                return;
            }

            let currentSection = sections[0];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the top of the section has reached at least the middle of the screen
                    if (rect.top <= window.innerHeight / 2) {
                        currentSection = section;
                    }
                }
            }
            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            isClickScrolling.current = true;
            setActiveSection(id);
            element.scrollIntoView({ behavior: "smooth" });

            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }

            // Re-enable normal scroll tracking after smooth scroll finishes (approx 800ms)
            scrollTimeout.current = setTimeout(() => {
                isClickScrolling.current = false;
            }, 800);
        }
    };

    return (
        <header className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[70vw] sm:w-max flex justify-center">
            <div className="absolute inset-0 bg-white/3.5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)] rounded-full pointer-events-none"></div>
            <nav className="relative flex items-center gap-1 py-1.5 px-0 sm:p-1.5 overflow-x-auto max-w-full scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] [mask-image:linear-gradient(to_right,transparent,black_16px,black_calc(100%-16px),transparent)] sm:[mask-image:none]">
                <div className="w-3 shrink-0 sm:hidden"></div>
                {NAV_ITEMS.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollTo(item.id)}
                        className={`whitespace-nowrap px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-[11px] min-[380px]:text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 ${activeSection === item.id ? 'bg-white/10 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                    >
                        {item.label}
                    </button>
                ))}
                <div className="w-3 shrink-0 sm:hidden"></div>
            </nav>
        </header>
    );
}
