"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Eliminate dead zones between sections so the next text appears immediately after the previous one fades
    // Section 1: Starts visible, starts fading out at 15%, completely gone by 20%
    const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.2], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]); // Parallax up

    // Section 2: Starts fading in at 30% (delay), fully visible 35%-50%, fades out by 55%
    const opacity2 = useTransform(scrollYProgress, [0.3, 0.35, 0.5, 0.55], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.3, 0.55], [50, -50]); // Parallax up

    // Section 3: Starts fading in at 65% (delay), fully visible 70%-90%, fades out by 95%
    const opacity3 = useTransform(scrollYProgress, [0.65, 0.7, 0.9, 0.95], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.65, 0.95], [50, -50]); // Parallax up

    return (
        <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">
            <div className="sticky top-0 w-full h-screen overflow-hidden text-white flex flex-col justify-center px-8 md:px-24">

                {/* Section 1 */}
                <motion.div
                    style={{ opacity: opacity1, y: y1, display: useTransform(opacity1, (o) => o === 0 ? "none" : "block") }}
                    className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
                        Shankarsana Paramasivan
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-medium tracking-wide uppercase">
                        Mechanical Engineer
                    </p>
                </motion.div>

                {/* Section 2 */}
                <motion.div
                    style={{ opacity: opacity2, y: y2, display: useTransform(opacity2, (o) => o === 0 ? "none" : "block") }}
                    className="absolute left-8 md:left-24 top-1/2 -translate-y-1/2 max-w-lg"
                >
                    <h2 className="text-4xl md:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-l from-gray-100 to-gray-200">
                        I Design and Develop Mechanical Solutions
                    </h2>
                </motion.div>

                {/* Section 3 */}
                <motion.div
                    style={{ opacity: opacity3, y: y3, display: useTransform(opacity3, (o) => o === 0 ? "none" : "block") }}
                    className="absolute right-8 md:right-24 top-1/2 -translate-y-1/2 max-w-lg text-right"
                >
                    <h2 className="text-4xl md:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-200">
                        Bridging Design and Engineering to Create Functional Products
                    </h2>
                </motion.div>

            </div>
        </div>
    );
}
