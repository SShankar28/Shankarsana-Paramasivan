"use client";

import { useState } from "react";

export default function Projects() {
    const [tappedIndex, setTappedIndex] = useState<number | null>(null);

    const projects = [
        {
            title: "Perforated Tessillation Prosthetic Hand",
            description: "This final year project focuses on developing a lightweight perforated 3D-printed prosthetic hand using a tessellation-based design. A patient-specific workflow is demonstrated through 3D scanning and CAD modelling. Finite Element Analysis evaluates structural performance under various loading conditions. The selected design is fabricated using PETG and integrated with a simple cable-driven mechanism.",
            tech: ["CATIA V5", "nTopology", "Abaqus", "Peel3D", "Orcaslicer", "Keyshot", "Canva"],
            image: "/project1.jpg",
        },
        {
            title: "VR Headset",
            description: "This project focuses on developing a VR headset concept to strengthen advanced 3D modeling and surface design capabilities. The design was created in CATIA V5 using Part Design, Generative Shape Design, and Assembly modules to build the exterior structure, overall form, and key visual elements.",
            tech: ["CATIA V5", "Keyshot"],
            image: "/project2.jpg",
        },
        {
            title: "Car Rim",
            description: "This project focuses on developing a car rim design to improve my CAD modeling, rendering, and visualization workflow. I explored two different rim concepts to understand how small design changes can influence the overall look and visual impact. The goal was to strengthen both my technical design skills and my ability to present mechanical products with strong aesthetics.",
            tech: ["CATIA V5", "Keyshot"],
            image: "/project3.jpg",
        },
        {
            title: "Coronary Stent",
            description: "This project focuses on coronary stent design and balloon expansion simulation using Abaqus. It covers geometry creation, material modelling, and nonlinear deployment analysis. Key outcomes include uniform expansion, realistic springback, and artery interaction assessment, strengthening skills in finite element analysis, biomechanics, and medical implant design.",
            tech: ["CATIA V5", "Abaqus", "Keyshot"],
            image: "/project4.jpg",
        },
        {
            title: "RC Boat",
            description: "This project focuses on designing an affordable, beginner-friendly RC boat. It covers concept development, CAD modeling, 3D-printed prototyping, and functional testing. The design emphasizes cost-effectiveness, ease of use, aesthetics, and reliable propulsion, showcasing skills in design, modeling, and practical prototyping.",
            tech: ["CATIA V5", "Keyshot", "Qidi Slicer", "Canva"],
            image: "/project5.jpg",
        },
        {
            title: "Bus Headlamp",
            description: "This project focuses on designing a modular bus headlamp system for SKS Bus to establish a distinctive brand identity. The work includes concept development, CAD modeling in CATIA, KeyShot visualization, and functional simulation. The design emphasizes aesthetics, modularity, and ease of replacement, achieving positive feedback from industry and academic reviewers.",
            tech: ["CATIA V5", "Adobe Illustrator", "Keyshot", "Canva"],
            image: "/project6.jpg",
        },
        {
            title: "Electric Scooter",
            description: "This project focuses on developing a prototype electric scooter for campus transportation, emphasizing comfort, safety, and innovation. It involved CAD modeling, simulation, animation, and prototype testing. The final design, featuring a sitting configuration and improved visibility, earned a Bronze Award at EREKA 2023, highlighting practical skills in design, prototyping, and teamwork.",
            tech: ["CATIA V5", "Keyshot", "Canva"],
            image: "/project7.jpg",
        },
        {
            title: "Coming Soon",
            description: "Coming Soon.....",
            tech: ["Coming Soon", "Coming Soon", "Coming Soon"],
            image: "/project8.jpg",
            comingSoon: true,
        },
    ];

    return (
        <section id="projects" className="relative z-20 bg-[#121212] py-32 px-8 md:px-24 border-t border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
            <div className="max-w-7xl mx-auto">
                <h3 className="relative z-10 text-center text-4xl md:text-5xl font-bold mb-16 pb-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                    Project Portfolio
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className={`group relative rounded-2xl overflow-hidden bg-[#1a1a1a] shadow-lg border border-white/10 transition-all duration-500 ease-in-out ${project.comingSoon ? 'aspect-video' : `cursor-pointer ${tappedIndex === i ? 'aspect-[4/5] sm:aspect-square md:aspect-video' : 'aspect-video'}`
                                }`}
                            onClick={() => {
                                if (!project.comingSoon) {
                                    setTappedIndex(tappedIndex === i ? null : i);
                                }
                            }}
                            onMouseLeave={() => setTappedIndex(null)}
                        >
                            {/* Base Image */}
                            <div
                                className={`absolute inset-0 bg-cover bg-center transition-all duration-500 ${project.comingSoon
                                    ? 'blur-md scale-105 opacity-50'
                                    : `group-hover:scale-105 group-hover:blur-md ${tappedIndex === i ? 'scale-105 blur-md' : ''}`
                                    }`}
                                style={{ backgroundImage: `url(${project.image})` }}
                            />

                            {project.comingSoon ? (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="px-6 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white font-bold tracking-widest shadow-xl">
                                        COMING SOON
                                    </span>
                                </div>
                            ) : (
                                <>
                                    {/* Dark Overlay (Transitions in on hover/tap) */}
                                    <div className={`absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${tappedIndex === i ? 'opacity-100' : ''}`} />

                                    {/* Content (Transitions in on hover/tap) */}
                                    <div className={`absolute inset-0 p-6 sm:p-8 flex flex-col justify-end opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 ${tappedIndex === i ? 'opacity-100 translate-y-0' : ''}`}>
                                        <div className="flex justify-between items-start mb-4">
                                            <h4 className="text-xl sm:text-2xl font-bold text-indigo-300 drop-shadow-[0_0_8px_rgba(129,120,248,0.8)] leading-tight">
                                                {project.title}
                                            </h4>
                                        </div>

                                        <p className="text-sm sm:text-base text-justify text-gray-300 mb-6 transition-all duration-500">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.tech.map((t) => (
                                                <span
                                                    key={t}
                                                    className="px-2 py-1 text-xs sm:text-sm rounded border border-white/20 text-white/80 bg-white/10 backdrop-blur-sm pointer-events-none"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
