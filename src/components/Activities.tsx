"use client";

import { Users, Banknote, Gamepad2, BriefcaseMedical } from "lucide-react";

export default function Activities() {
    const activities = [
        {
            role: "Program Director",
            event: "Product Design Family Day 2025",
            icon: Users,
            colorClass: "text-[#be9af1]",
            bgClass: "bg-[#be9af1]/10",
            borderClass: "border-[#be9af1]/20"
        },
        {
            role: "Treasurer",
            event: "Majlis Apresiasi UR6521004",
            icon: Banknote,
            colorClass: "text-blue-400",
            bgClass: "bg-blue-400/10",
            borderClass: "border-blue-400/20"
        },
        {
            role: "Committee — Registration",
            event: "1st MLBB PD E-Sports 2024",
            icon: Gamepad2,
            colorClass: "text-[#be9af1]",
            bgClass: "bg-[#be9af1]/10",
            borderClass: "border-[#be9af1]/20"
        },
        {
            role: "Member",
            event: "St. John Ambulance Malaysia",
            icon: BriefcaseMedical,
            colorClass: "text-red-400",
            bgClass: "bg-red-400/10",
            borderClass: "border-red-400/20"
        }
    ];

    return (
        <section id="activities" className="relative z-20 bg-[#121212] pt-4 pb-12 px-8 md:px-24">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12">
                    <h3 className="text-center text-4xl md:text-5xl font-bold pb-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                        Activities & Leadership
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activities.map((item, i) => (
                        <div key={i} className="flex items-center gap-4 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                            <div className={`w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center border ${item.bgClass} ${item.borderClass} ${item.colorClass}`}>
                                <item.icon className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-[16px] leading-tight mb-1" style={{ fontFamily: 'Calibri, sans-serif' }}>{item.role}</h4>
                                <p className="text-gray-400 text-sm" style={{ fontFamily: 'sans-serif' }}>{item.event}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
