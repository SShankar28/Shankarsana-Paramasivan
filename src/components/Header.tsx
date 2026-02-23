"use client";

import { useState, useEffect } from "react";

export default function Header() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "projects", "contact"];
            // Offset scroll position slightly below the top of the viewport to trigger logically
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    // For the last element (contact), we might hit the bottom of the page before the top of the element hits the 1/3 viewport mark
                    // So we also check if we are at the bottom of the page
                    const isAtBottom = (window.innerHeight + window.scrollY) >= document.body.scrollHeight - 50;

                    if (isAtBottom) {
                        setActiveSection("contact");
                    } else if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check in case user loads page midway down
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setActiveSection(id);
        }
    };

    return (
        <header className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-max max-w-[95vw]">
            <nav className="flex items-center justify-center gap-0 sm:gap-2 p-1 sm:p-1.5 bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)] rounded-full">
                <button
                    onClick={() => scrollTo('home')}
                    className={`px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-full text-[11px] min-[380px]:text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 ${activeSection === 'home' ? 'bg-white/10 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                >
                    Home
                </button>
                <button
                    onClick={() => scrollTo('projects')}
                    className={`px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-full text-[11px] min-[380px]:text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 ${activeSection === 'projects' ? 'bg-white/10 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                >
                    Project Portfolio
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
