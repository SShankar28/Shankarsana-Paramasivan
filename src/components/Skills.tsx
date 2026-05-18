"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "All" | "Interpersonal" | "Software" | "Technical" | "Languages";

const SKILLS = [
    // Interpersonal
    { name: "Leadership", category: "Interpersonal" },
    { name: "Teamwork", category: "Interpersonal" },
    { name: "Problem-Solving", category: "Interpersonal" },
    { name: "Mentoring", category: "Interpersonal" },
    // Software
    { name: "CATIA V5", category: "Software" },
    { name: "SolidWorks", category: "Software" },
    { name: "Abaqus", category: "Software" },
    { name: "Keyshot", category: "Software" },
    { name: "ANSYS", category: "Software" },
    { name: "Excel", category: "Software" },
    // Technical
    { name: "Maintenance (TBM/PM)", category: "Technical" },
    { name: "Rapid Prototyping", category: "Technical" },
    { name: "Finite Element Analysis", category: "Technical" },
    { name: "CFD Analysis", category: "Technical" },
    { name: "DFM/DFA", category: "Technical" },
    { name: "CAD Modelling", category: "Technical" },
    // Languages
    { name: "English (Fluent)", category: "Languages" },
    { name: "Malay (Fluent)", category: "Languages" },
    { name: "Tamil (Native)", category: "Languages" },
];

const CATEGORIES: Category[] = ["All", "Interpersonal", "Software", "Technical", "Languages"];

export default function Skills() {
    const [activeTab, setActiveTab] = useState<Category>("All");

    const filteredSkills = activeTab === "All"
        ? SKILLS
        : SKILLS.filter(skill => skill.category === activeTab);

    return (
        <section id="skills" className="relative z-20 bg-[#121212] pt-12 pb-12 px-8 md:px-24 border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                <h3 className="text-4xl md:text-5xl font-bold mb-12 text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-l from-purple-400 to-pink-500 pb-2">
                    My Skills
                </h3>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
                    {CATEGORIES.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${activeTab === category
                                ? "bg-white/10 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] border border-white/20"
                                : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-transparent"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <motion.div
                    layout
                    className="flex flex-wrap justify-center gap-4"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredSkills.map((skill) => (
                            <motion.div
                                key={skill.name}
                                layout
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="group flex items-center justify-center w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.67rem)] lg:w-[calc(25%-0.75rem)] relative overflow-hidden bg-white/5 border border-white/10 rounded-xl px-3 py-2 md:px-4 md:py-2.5 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default shadow-[0_4px_24px_rgba(0,0,0,0.2)]"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <span className="relative z-10 text-sm md:text-base font-medium text-gray-200 group-hover:text-white transition-colors">
                                    {skill.name}
                                </span>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
