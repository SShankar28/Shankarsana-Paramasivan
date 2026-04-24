"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const education = [
    {
        course: "B.Eng.Tech. (Hons) Mechanical Engineering (Product Design)",
        college: "Universiti Malaysia Perlis (UniMAP)",
        date: "Oct 2022 - Oct 2026",
        cgpa: "3.85",
        fyp: "Development of Perforated 3D-Printed Prosthetic Hand"
    },
    {
        course: "Diploma in Mechanical Engineering",
        college: "Politeknik Seberang Perai",
        date: "June 2019 - July 2022",
        cgpa: "3.78",
        fyp: "Solar Powered Watering and Fertilizing System"
    }
];

const experience = [
    {
        job: "Maintenance Engineering Intern",
        company: "Ibiden Electronics Malaysia (IEM), Penang",
        date: "Feb 2026 - Aug 2026",
        department: "Maintenance Engineering",
        description: [
            "Supported maintenance and troubleshooting of electroplating production systems (VCP & DSC), diagnosing mechanical, pneumatic, and process-related faults to restore equipment functionality and sustain production continuity.",
            "Performed preventive and corrective maintenance (TBM/PM) on critical components (rollers, pumps, valves, linear motion systems), contributing to equipment reliability and early fault detection.",
            "Contributed to a predictive maintenance initiative by installing and configuring vibration sensors, enabling real-time equipment condition monitoring.",
            "Conducted large-scale inventory verification (>10,000 spare parts) and identified discrepancies in stock accuracy, supporting maintenance readiness and reducing risk of part unavailability during breakdowns."
        ]
    },
    {
        job: "Freelance CAD Designer",
        company: "Self-Employed",
        date: "March 2023 - Present",
        department: "Mechanical & Product Design",
        description: [
            "Delivered custom 3D CAD models and design modifications for product, mechanism, and prototype applications.",
            "Created renderings/animations in KeyShot and guided junior students in CAD fundamentals."
        ]
    },
    {
        job: "Engineering Intern",
        company: "Lam Research, Penang",
        date: "Feb 2022 - Sept 2022",
        department: "Manufacturing System Engineering",
        description: [
            "Established disconnect bin system to improve part flow between workstations, increasing assembly throughput by 5%.",
            "Standardized workstation hand-shake sequence to reduce tool misplacement risk.",
            "Upgraded safety compliance for confined space tasking by identifying hazards and enforcing protective equipment usage."
        ]
    }
];

export default function About() {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <section id="about" className="relative z-20 bg-[#121212] py-24 px-8 md:px-24 border-t border-white/5">
            <div className="max-w-4xl mx-auto text-center md:text-left">
                <h3 className="text-center text-4xl md:text-5xl font-bold mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                    About Me
                </h3>
                <h4 className="text-center text-xl md:text-2xl font-medium text-gray-300 mb-8 uppercase tracking-wider">
                    Mechanical Engineer & Product Designer
                </h4>

                <div className="space-y-6 text-gray-400 leading-relaxed text-lg text-justify">
                    <p>
                        I am a Mechanical Engineer who enjoys turning ideas into practical and useful products. My interest in engineering started from a curiosity about how machines and systems work, and it has grown into a strong focus on designing solutions that are reliable, efficient, and ready for real-world use.
                    </p>
                    <p>
                        I have experience in product design, CAD modelling, and engineering simulation using tools such as CATIA V5, SolidWorks, and Abaqus. I enjoy improving designs through analysis, testing, and problem solving, especially in areas like automation, hardware development, and mechanical systems.
                    </p>
                    <p>
                        I work well in team environments where engineers, designers, and other professionals collaborate to solve problems. I am always learning new technologies and methods in manufacturing, automation, and product development so that I can continue to grow and contribute to meaningful projects.
                    </p>
                </div>

                {/* Expandable Sections */}
                <div className="mt-16 space-y-4 text-left">
                    {/* Education Background */}
                    <div className="border border-white/10 rounded-xl overflow-hidden bg-white/5 shadow-lg">
                        <button
                            onClick={() => toggleSection('edu')}
                            className="w-full flex items-center justify-between px-6 py-4 hover:bg-white/10 transition-colors"
                        >
                            <span className="text-xl font-bold text-white tracking-wide">Education Background</span>
                            <motion.div animate={{ rotate: openSection === 'edu' ? 180 : 0 }}>
                                <ChevronDown className="w-6 h-6 text-gray-400" />
                            </motion.div>
                        </button>
                        <AnimatePresence>
                            {openSection === 'edu' && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-6 pt-0 space-y-8 border-t border-white/10 mt-2">
                                        {education.map((item, i) => (
                                            <div key={i} className="relative pl-4 border-l-2 border-indigo-500/50">
                                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-1 sm:gap-4">
                                                    <h5 className="text-lg font-bold text-indigo-300">{item.course}</h5>
                                                    <span className="text-xs sm:text-sm font-semibold text-gray-400 whitespace-nowrap sm:mt-1">{item.date}</span>
                                                </div>
                                                <h6 className="text-md font-medium text-gray-200 mb-3">{item.college}</h6>
                                                <div className="text-sm text-gray-400 space-y-1.5">
                                                    <p><span className="text-gray-500 font-semibold uppercase tracking-wider text-[11px] mr-2">CGPA:</span> {item.cgpa}</p>
                                                    <p><span className="text-gray-500 font-semibold uppercase tracking-wider text-[11px] mr-2">Final Year Project:</span> <span className="text-pink-300/80">{item.fyp}</span></p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Work Experience */}
                    <div className="border border-white/10 rounded-xl overflow-hidden bg-white/5 shadow-lg">
                        <button
                            onClick={() => toggleSection('work')}
                            className="w-full flex items-center justify-between px-6 py-4 hover:bg-white/10 transition-colors"
                        >
                            <span className="text-xl font-bold text-white tracking-wide">Work Experience</span>
                            <motion.div animate={{ rotate: openSection === 'work' ? 180 : 0 }}>
                                <ChevronDown className="w-6 h-6 text-gray-400" />
                            </motion.div>
                        </button>
                        <AnimatePresence>
                            {openSection === 'work' && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-6 pt-0 space-y-8 border-t border-white/10 mt-2">
                                        {experience.map((item, i) => (
                                            <div key={i} className="relative pl-4 border-l-2 border-pink-500/50">
                                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-1 sm:gap-4">
                                                    <h5 className="text-lg font-bold text-pink-300">{item.job}</h5>
                                                    <span className="text-xs sm:text-sm font-semibold text-gray-400 whitespace-nowrap sm:mt-1">{item.date}</span>
                                                </div>
                                                <h6 className="text-md font-medium text-gray-200 mb-3">{item.company}</h6>
                                                <div className="text-sm text-gray-400 space-y-2">
                                                    <p><span className="text-gray-500 font-semibold uppercase tracking-wider text-[11px] mr-2">Department:</span> {item.department}</p>
                                                    <ul className="leading-relaxed text-gray-300 bg-black/20 p-4 rounded-lg list-disc pl-8 space-y-1.5 marker:text-pink-500/50">
                                                        {item.description.map((bullet, idx) => (
                                                            <li key={idx}>{bullet}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

            </div>
        </section>
    );
}
