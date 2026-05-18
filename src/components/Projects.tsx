"use client";

import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<any>(null);

    const projects = [
        {
            title: "Perforated Prosthetic Hand",
            subtitle: "Final Year Project",
            description: "This final year project focuses on developing a lightweight perforated 3D-printed prosthetic hand using a tessellation-based design. A patient-specific workflow is demonstrated through 3D scanning and CAD modelling. Finite Element Analysis evaluates structural performance under various loading conditions. The selected design is fabricated using PETG and integrated with a simple cable-driven mechanism.",
            tech: ["FYP", "CATIA V5", "Abaqus", "nTopology", "Peel3D", "Orcaslicer", "Keyshot", "Canva"],
            image: "/project1.jpg",
        },
        {
            title: "VR Headset",
            subtitle: "Surface Design Concept",
            description: "This project focuses on developing a VR headset concept to strengthen advanced 3D modeling and surface design capabilities. The design was created in CATIA V5 using Part Design, Generative Shape Design, and Assembly modules to build the exterior structure, overall form, and key visual elements.",
            tech: ["CATIA V5", "Keyshot"],
            image: "/project2.jpg",
        },
        {
            title: "Car Rim",
            subtitle: "Automotive Styling",
            description: "This project focuses on developing a car rim design to improve my CAD modeling, rendering, and visualization workflow. I explored two different rim concepts to understand how small design changes can influence the overall look and visual impact. The goal was to strengthen both my technical design skills and my ability to present mechanical products with strong aesthetics.",
            tech: ["CATIA V5", "Keyshot"],
            image: "/project3.jpg",
        },
        {
            title: "Coronary Stent",
            subtitle: "Biomedical Device Simulation",
            description: "This project focuses on coronary stent design and balloon expansion simulation using Abaqus. It covers geometry creation, material modelling, and nonlinear deployment analysis. Key outcomes include uniform expansion, realistic springback, and artery interaction assessment, strengthening skills in finite element analysis, biomechanics, and medical implant design.",
            tech: ["CATIA V5", "Abaqus", "Keyshot"],
            image: "/project4.jpg",
        },
        {
            title: "RC Boat",
            subtitle: "Prototyping & Fabrication",
            description: "This project focuses on designing an affordable, beginner-friendly RC boat. It covers concept development, CAD modeling, 3D-printed prototyping, and functional testing. The design emphasizes cost-effectiveness, ease of use, aesthetics, and reliable propulsion, showcasing skills in design, modeling, and practical prototyping.",
            tech: ["CATIA V5", "Keyshot", "Qidi Slicer", "Canva"],
            image: "/project5.jpg",
        },
        {
            title: "Bus Headlamp",
            subtitle: "Industrial Design",
            description: "This project focuses on designing a modular bus headlamp system for SKS Bus to establish a distinctive brand identity. The work includes concept development, CAD modeling in CATIA, KeyShot visualization, and functional simulation. The design emphasizes aesthetics, modularity, and ease of replacement, achieving positive feedback from industry and academic reviewers.",
            tech: ["Best Design & Presenter Award", "CATIA V5", "Adobe Illustrator", "Keyshot", "Canva"],
            image: "/project6.jpg",
        },
        {
            title: "Electric Scooter",
            subtitle: "Campus Transportation",
            description: "This project focuses on developing a prototype electric scooter for campus transportation, emphasizing comfort, safety, and innovation. It involved CAD modeling, simulation, animation, and prototype testing. The final design, featuring a sitting configuration and improved visibility, earned a Bronze Award at EREKA 2023, highlighting practical skills in design, prototyping, and teamwork.",
            tech: ["Bronze — EREKA 2023", "CATIA V5", "Keyshot", "Canva"],
            image: "/project7.jpg",
        },
        {
            title: "Coming Soon",
            subtitle: "Future Work",
            description: "Coming Soon.....",
            tech: ["Coming Soon", "Coming Soon", "Coming Soon"],
            image: "/project8.jpg",
            comingSoon: true,
        },
    ];

    return (
        <section id="projects" className="relative z-20 bg-[#121212] pt-12 pb-12 px-8 md:px-24 border-t border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
            <div className="max-w-7xl mx-auto">
                <h3 className="relative z-10 text-center text-4xl md:text-5xl font-bold mb-12 pb-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                    Project Portfolio
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            onClick={() => !project.comingSoon && setSelectedProject(project)}
                            className={`group relative rounded-2xl overflow-hidden shadow-lg border border-white/5 flex flex-col justify-end transition-all duration-300 hover:border-white/10 hover:shadow-2xl min-h-[300px] sm:min-h-[340px] ${!project.comingSoon ? 'cursor-pointer' : ''}`}
                        >
                            {/* Base Image filling the entire card */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-100"
                                style={{ backgroundImage: `url(${project.image})` }}
                            />

                            {/* Dark Gradient Overlay to ensure text readability - only show if not coming soon */}
                            {!project.comingSoon && (
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/80 via-[#0a0a0c]/30 to-transparent" />
                            )}

                            {project.comingSoon && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-10">
                                    <span className="px-6 py-2 rounded-full bg-white/10 border border-white/20 text-white font-bold tracking-widest shadow-xl">
                                        COMING SOON
                                    </span>
                                </div>
                            )}

                            {/* Content Section floating at the bottom - hidden for coming soon */}
                            {!project.comingSoon && (
                                <div className="flex flex-col relative z-20 mt-auto w-full">
                                    <div className="px-6 pt-6 pb-2 sm:px-8 sm:pt-8 sm:pb-2">
                                        <h4 className="text-lg font-bold text-white tracking-tight leading-none">
                                            {project.title}
                                        </h4>
                                        {project.subtitle && (
                                            <p className="text-sm font-medium text-gray-400 mt-1 leading-none">
                                                {project.subtitle}
                                            </p>
                                        )}
                                    </div>

                                    {/* Blurred bottom section starting at the line */}
                                    <div className="relative px-6 pt-0 pb-4 sm:px-8 sm:pt-0 sm:pb-5">
                                        <div className="absolute inset-0 backdrop-blur-md bg-[#0a0a0c]/40 border-t border-white/5" />

                                        <div className="relative z-10 flex flex-col">
                                            <hr className="border-white/10 mb-3" />

                                            <div className="flex flex-wrap gap-2 mb-2">
                                                {project.tech.map((t) => {
                                                    const isAward = t === "Best Design & Presenter Award" || t === "Bronze — EREKA 2023" || t === "FYP";
                                                    return (
                                                        <span
                                                            key={t}
                                                            className={`px-3 py-1 text-xs font-medium rounded-full ${isAward
                                                                ? "text-[#c8922a] bg-[#c8922a]/5"
                                                                : "border border-sky-500/30 bg-sky-500/10 text-sky-400"
                                                                }`}
                                                            style={isAward ? { border: '0.5px solid #89621aff' } : {}}
                                                        >
                                                            {t}
                                                        </span>
                                                    );
                                                })}
                                            </div>

                                            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-400 group-hover:text-white transition-colors">
                                                <ArrowRight className="w-4 h-4" />
                                                View Project
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                {/* Modal Overlay */}
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6"
                        >
                            {/* Hide the global floating header and lock body scroll while modal is open */}
                            <style>{`
                                header { opacity: 0 !important; pointer-events: none !important; }
                                body { overflow: hidden !important; }
                            `}</style>

                            {/* Backdrop */}
                            <div
                                className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                                onClick={() => setSelectedProject(null)}
                            />

                            {/* Modal Box */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ duration: 0.3 }}
                                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden bg-[#0a0a0c] border border-white/10 rounded-2xl shadow-2xl z-10 flex flex-col"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-white/10 rounded-full text-white transition-colors backdrop-blur-md border border-white/10"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                {/* Figure at top */}
                                <div className="w-full h-64 sm:h-80 md:h-[400px] relative shrink-0">
                                    <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover rounded-t-2xl" />
                                </div>

                                {/* Content below */}
                                <div className="p-6 sm:p-8 flex flex-col gap-4">
                                    <div>
                                        <h2 className="text-2xl sm:text-3xl font-bold text-[#FFBF00] tracking-tight">{selectedProject.title}</h2>
                                        {selectedProject.subtitle && (
                                            <p className="text-white/90 font-medium mt-1">{selectedProject.subtitle}</p>
                                        )}
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {selectedProject.tech.map((t: string) => {
                                            const isAward = t === "Best Design & Presenter Award" || t === "Bronze — EREKA 2023" || t === "FYP";
                                            return (
                                                <span
                                                    key={t}
                                                    className={`px-3 py-1 text-xs font-medium rounded-full ${isAward
                                                        ? "text-[#D4AF37] bg-[#c8922a]/5"
                                                        : "border border-sky-500/30 bg-sky-500/10 text-sky-400"
                                                        }`}
                                                    style={isAward ? { border: '0.5px solid #FFBF00' } : {}}
                                                >
                                                    {t}
                                                </span>
                                            );
                                        })}
                                    </div>

                                    <div className="mt-2">
                                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-justify">
                                            {selectedProject.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
