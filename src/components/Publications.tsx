"use client";

import { BookText, Award, ExternalLink } from "lucide-react";

export default function Publications() {
    return (
        <section id="publications" className="relative z-20 bg-[#121212] pt-12 pb-12 px-8 md:px-24">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12">
                    <h3 className="text-center text-4xl md:text-5xl font-bold pb-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                        Publications & Certifications
                    </h3>
                </div>

                <div className="space-y-8">
                    {/* Publication Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-4 text-[#be9af1]">
                            <BookText className="w-5 h-5" />
                            <h4 className="text-sm font-bold tracking-widest uppercase">Publication</h4>
                            <div className="h-px bg-white/10 ml-2 flex-1"></div>
                        </div>

                        <a
                            href="https://doi.org/10.58915/aset.v3i1.802"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative block p-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(255,255,255,0.05)] hover:bg-white/10 hover:border-white/30 transition-all cursor-pointer overflow-hidden"
                        >
                            <div className="relative z-10">
                                <h5 className="text-lg font-bold text-white mb-1" style={{ fontFamily: 'Calibri, sans-serif' }}>
                                    Analysis of Tesla CyberTruck Speed on Velocity and Pressure Distribution Using SimFlow
                                </h5>
                                <p className="text-gray-400 text-sm" style={{ fontFamily: 'sans-serif' }}>
                                    ASEAN S.E.E.T. Journal · Vol. 4, No. 1 · Jun 2024
                                </p>
                                <div className="inline-flex items-center gap-1 text-sky-400 text-sm mt-2 group-hover:text-sky-300 group-hover:underline underline-offset-4 transition-colors">
                                    doi.org/10.58915/aset.v3i1.802
                                    <ExternalLink className="w-3 h-3" />
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Certification Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-4 text-[#be9af1]">
                            <Award className="w-5 h-5" />
                            <h4 className="text-sm font-bold tracking-widest uppercase">Certification</h4>
                            <div className="h-px bg-white/10 ml-2 flex-1"></div>
                        </div>

                        <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                            <h5 className="text-lg font-bold text-white mb-1" style={{ fontFamily: 'Calibri, sans-serif' }}>
                                K-Youth: AI Integrated Circuit Design & Semiconductor Fabrication
                            </h5>
                            <p className="text-gray-400 text-sm" style={{ fontFamily: 'sans-serif' }}>
                                Intensive training programme · Sept 2025
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
