"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, GraduationCap, Box, Monitor, Settings, Trophy, Medal, Briefcase, Wrench, Laptop, User } from "lucide-react";

const CADIcon = ({ className }: { className?: string }) => (
    <div className={`relative flex items-center justify-center ${className}`}>
        <Monitor className="w-full h-full" strokeWidth={1.5} />
        <Box className="absolute w-[45%] h-[45%] mb-1" strokeWidth={1.5} />
    </div>
);

const MaintenanceIcon = ({ className }: { className?: string }) => (
    <div className={`relative flex items-center justify-center ${className}`}>
        <Wrench className="w-[85%] h-[85%]" strokeWidth={1.5} />
    </div>
);

const FreelanceIcon = ({ className }: { className?: string }) => (
    <div className={`relative flex items-center justify-center ${className}`}>
        <User className="absolute top-[-15%] w-[75%] h-[75%]" strokeWidth={1.8} />
        <div className="absolute bottom-[-15%] w-[100%] h-[100%]">
            {/* Adding fill="#121212" masks the overlapping lines of the User icon behind it */}
            <Laptop className="w-full h-full" strokeWidth={1.8} fill="#121212" />
        </div>
    </div>
);

const education = [
    {
        course: "B.Eng. Mechanical Engineering Technology (Product Design) with Honours",
        college: "Universiti Malaysia Perlis (UniMAP)",
        date: "2022 – 2026",
        cgpa: "3.85",
        type: "CGPA",
        fyp: "FYP: Development of Perforated 3D-Printed Prosthetic Hand",
        icon: CADIcon,
        awards: [
            {
                title: "Best Design & Best Presenter Award",
                subtitle: "EV Headlamp Design — SKS Bus Industry Collaboration",
                date: "2024",
                badge: "Industry Award",
                icon: Medal
            },
            {
                title: "Bronze Medal — EREKA 2023",
                subtitle: "Electric Scooter Redesign — Ekspo Rekacipta UniMAP",
                date: "2023",
                badge: "Competition Award",
                icon: Medal
            }
        ]
    },
    {
        course: "Diploma in Mechanical Engineering",
        college: "Politeknik Seberang Perai",
        date: "2019 – 2022",
        cgpa: "3.78",
        type: "GPA",
        fyp: "FYP: Solar Powered Watering and Fertilizing System",
        icon: Settings,
        awards: []
    }
];

const experience = [
    {
        job: "Maintenance Engineering Intern",
        company: "Ibiden Electronics Malaysia (IEM) · PCB Manufacturer, Penang",
        date: "Feb 2026 - Aug 2026",
        icon: MaintenanceIcon,
        tags: ["Project: Vibration Sensor", "TBM/PM", "Robotic", "Pneumatics", "10,000+ Parts Verified"],
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
        icon: FreelanceIcon,
        tags: ["CATIA V5", "SolidWorks", "Keyshot"],
        description: [
            "Delivered custom 3D CAD models and design modifications for product, mechanism, and prototype applications.",
            "Created renderings/animations in KeyShot and guided junior students in CAD fundamentals."
        ]
    },
    {
        job: "Engineering Intern - Manufacturing System Engineering",
        company: "Lam Research · Semiconductor Equipment OEM, Penang",
        date: "Feb 2022 - Sept 2022",
        icon: Briefcase,
        tags: ["Disconnect Bin System", "Material Hand-shake", "Safety Compliance"],
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
        <section id="about" className="relative z-20 bg-[#121212] pt-24 pb-12 px-8 md:px-24 border-t border-white/5">
            <div className="max-w-4xl mx-auto text-center md:text-left">
                <h3 className="text-center text-4xl md:text-5xl font-bold mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                    About Me
                </h3>

                <div className="space-y-6 text-gray-400 leading-relaxed text-lg text-justify">
                    <p>
                        I am a Mechanical Engineering Technology Graduate with experience in Mechanical & Product Design, CAD modelling, and engineering simulation. My interest in engineering started from a curiosity about how machines and systems work, and it has grown into a strong focus on designing solutions. I enjoy turning ideas into practical, reliable, and efficient products through design improvement, analysis, testing, and problem solving, particularly in automation, hardware development, and mechanical systems.
                    </p>
                </div>

                {/* Expandable Sections */}
                <div className="mt-10 space-y-4 text-left">
                    {/* Education - Static Timeline */}
                    <div>
                        <div className="flex items-center justify-center gap-3 mb-2 w-full">
                            <div className="flex-1 h-px bg-white/10 mr-2"></div>
                            <GraduationCap className="w-8 h-8 text-blue-400" />
                            <h3 className="text-xl font-bold tracking-widest text-blue-400 uppercase">Education</h3>
                            <div className="flex-1 h-px bg-white/10 ml-2"></div>
                        </div>

                        <div className="pt-2">
                            {education.map((item, i) => (
                                <div key={i} className="relative pl-14 pb-2 last:pb-2 mt-2">
                                    {/* Timeline Vertical Line */}
                                    {i !== education.length - 1 && (
                                        <div className="absolute left-5 top-10 -bottom-2 w-px bg-white/10" />
                                    )}

                                    {/* Parent Icon */}
                                    <div className="absolute left-0 top-0 w-10 h-10 rounded-full border border-blue-500/30 bg-blue-500/10 flex items-center justify-center z-10 text-blue-400">
                                        <item.icon className="w-6 h-6" />
                                    </div>

                                    {/* Parent Content */}
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-0 gap-1 sm:gap-4">
                                        <h5 className="text-lg font-bold text-white" style={{ fontFamily: 'Calibri, sans-serif' }}>{item.course}</h5>
                                        <span className="text-sm font-medium text-gray-400 whitespace-nowrap sm:mt-0.5">{item.date}</span>
                                    </div>
                                    <h6 className="text-sm text-gray-400 mb-1">{item.college}</h6>
                                    <div className="flex flex-wrap gap-2 mb-1">
                                        <span className="px-3 py-1 text-xs font-semibold rounded-full border-[0.5px] border-[#2a4a6a] bg-blue-500/5 text-[#4a9fd4]">
                                            {item.type || "CGPA"} {item.cgpa}
                                        </span>
                                        {item.fyp && (
                                            <span className="px-3 py-1 text-xs font-semibold rounded-full border-[0.5px] border-[#2a4a6a] bg-blue-500/5 text-[#4a9fd4] text-left">{item.fyp}</span>
                                        )}
                                    </div>

                                    {/* Sub-items (Awards) */}
                                    {item.awards && item.awards.length > 0 && (
                                        <div className="mt-4 space-y-4">
                                            {item.awards.map((award, j) => (
                                                <div key={j} className="relative pl-12">
                                                    {/* Horizontal branch from main line */}
                                                    <div className="absolute -left-9 top-5 w-9 h-px bg-white/10" />

                                                    {/* Award Icon shifted right */}
                                                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full border-[0.5px] border-[#5a4010] bg-yellow-500/10 flex items-center justify-center z-10 text-[#c8922a]">
                                                        <award.icon className="w-4 h-4" />
                                                    </div>

                                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-0 gap-1 sm:gap-4">
                                                        <h5 className="text-[16px] font-bold text-gray-300" style={{ fontFamily: 'Calibri, sans-serif' }}>{award.title}</h5>
                                                        <span className="text-sm font-medium text-gray-400 whitespace-nowrap sm:mt-0.5">{award.date}</span>
                                                    </div>
                                                    <h6 className="text-sm text-gray-400 mb-1">{award.subtitle}</h6>
                                                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full border-[0.5px] border-[#5a4010] bg-yellow-500/5 text-[#c8922a]">{award.badge}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Work Experience - Static Timeline */}
                    <div className="mt-8">
                        <div className="flex items-center justify-center gap-3 mb-2 w-full">
                            <div className="flex-1 h-px bg-white/10 mr-2"></div>
                            <Briefcase className="w-8 h-8 text-[#be9af1]" />
                            <h3 className="text-xl font-bold tracking-widest uppercase text-[#be9af1]">Work Experience</h3>
                            <div className="flex-1 h-px bg-white/10 ml-2"></div>
                        </div>

                        <div className="pt-2">
                            {experience.map((item, i) => (
                                <div key={i} className="relative pl-14 pb-2 last:pb-2 mt-2">
                                    {/* Timeline Vertical Line */}
                                    {i !== experience.length - 1 && (
                                        <div className="absolute left-5 top-10 -bottom-2 w-px bg-white/10" />
                                    )}

                                    {/* Parent Icon */}
                                    <div className="absolute left-0 top-0 w-10 h-10 rounded-full border-[0.5px] border-[#4a2a7a] bg-purple-500/5 flex items-center justify-center z-10 text-[#be9af1]">
                                        {item.icon ? <item.icon className="w-5 h-5" /> : <Briefcase className="w-5 h-5" />}
                                    </div>

                                    {/* Parent Content */}
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-0 gap-1 sm:gap-4">
                                        <h5 className="text-lg font-bold text-white" style={{ fontFamily: 'Calibri, sans-serif' }}>{item.job}</h5>
                                        <span className="text-sm font-medium text-gray-400 whitespace-nowrap sm:mt-0.5">{item.date}</span>
                                    </div>
                                    <h6 className="text-sm text-gray-400 mb-1">{item.company}</h6>

                                    <div className="flex flex-wrap gap-2 mt-2 mb-2">
                                        {item.tags && item.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className="px-3 py-1 text-xs font-semibold rounded-full border-[0.5px] border-[#4a2a7a] bg-purple-500/5 text-[#be9af1]">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
