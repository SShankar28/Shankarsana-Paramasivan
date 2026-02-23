"use client";

import { useState } from "react";

export default function Projects() {
    const [tappedIndex, setTappedIndex] = useState<number | null>(null);

    const projects = [
        {
            title: "Perforated Tessillation Prosthetic Hand",
            description: "A cyberpunk-themed e-commerce platform built with Next.js and WebGL. Features 3D product configurators and seamless checkout.",
            tech: ["Next.js", "Three.js", "Stripe"],
            image: "/project1.jpg",
        },
        {
            title: "Flow State",
            description: "AI-powered productivity tool. Analyzes work patterns using machine learning to suggest optimal rest intervals.",
            tech: ["React", "Python", "TensorFlow"],
            image: "/project2.jpg",
        },
        {
            title: "Aura Architecture",
            description: "Award-winning portfolio for an interior design agency. Focuses on typographic rhythm and fluid layout transitions.",
            tech: ["SvelteKit", "GSAP", "Tailwind"],
            image: "/project3.jpg",
        },
        {
            title: "Chronos",
            description: "Minimalist time-tracking menubar app for macOS, designed for freelancers and independent contractors.",
            tech: ["Electron", "Vue", "SQLite"],
            image: "/project4.jpg",
        },
        {
            title: "Orbit Analytics",
            description: "Real-time dashboard visualizing satellite telemetry data. Built for high-frequency data ingestion and rendering.",
            tech: ["React", "D3.js", "WebSockets"],
            image: "/project5.jpg",
        },
        {
            title: "Echo Core",
            description: "A headless CMS designed for audio streaming platforms. Provides APIs for seamless podcast and music distribution.",
            tech: ["Node.js", "GraphQL", "PostgreSQL"],
            image: "/project6.jpg",
        },
        {
            title: "Prism Protocol",
            description: "Decentralized finance (DeFi) trading interface with real-time charting, order book depth, and liquidity pooling.",
            tech: ["React", "Web3.js", "Solidity"],
            image: "/project7.jpg",
        },
        {
            title: "Synth Studio",
            description: "Browser-based digital audio workstation (DAW) leveraging Web Audio API for synthesis and sequencing.",
            tech: ["Vue", "Web Audio API", "WebAssembly"],
            image: "/project8.jpg",
            comingSoon: true,
        },
    ];

    return (
        <section id="projects" className="relative z-20 bg-[#121212] py-32 px-8 md:px-24 border-t border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
            <div className="max-w-7xl mx-auto">
                <h3 className="relative z-10 text-4xl md:text-5xl font-bold mb-16 pb-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
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

                                        <p className="text-sm sm:text-base text-gray-300 mb-6 transition-all duration-500">
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
