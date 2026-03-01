"use client";

import { useState, useEffect, useRef } from "react";

export default function Header() {
    const [activeSection, setActiveSection] = useState("home");
    const isClickScrolling = useRef(false);
    const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (isClickScrolling.current) return;

            const sections = ["home", "about", "skills", "projects", "contact"];
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
        <header className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-max max-w-[95vw]">
            <nav className="flex items-center justify-center gap-0 sm:gap-2 p-1 sm:p-1.5 bg-white/3.5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)] rounded-full">
                <button
                    onClick={() => scrollTo('home')}
                    className={`px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-full text-[11px] min-[380px]:text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 ${activeSection === 'home' ? 'bg-white/10 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                >
                    Home
                </button>
                <button
                    onClick={() => scrollTo('about')}
                    className={`px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-full text-[11px] min-[380px]:text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 ${activeSection === 'about' ? 'bg-white/10 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                >
                    About
                </button>
                <button
                    onClick={() => scrollTo('skills')}
                    className={`px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-full text-[11px] min-[380px]:text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 ${activeSection === 'skills' ? 'bg-white/10 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                >
                    Skills
                </button>
                <button
                    onClick={() => scrollTo('projects')}
                    className={`px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-full text-[11px] min-[380px]:text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 ${activeSection === 'projects' ? 'bg-white/10 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                >
                    Portfolio
                </button>
                <button
                    onClick={() => scrollTo('contact')}
                    className={`px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-full text-[11px] min-[380px]:text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 ${activeSection === 'contact' ? 'bg-white/10 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                >
                    Contact
                </button>
            </nav>
        </header>
    );
}
