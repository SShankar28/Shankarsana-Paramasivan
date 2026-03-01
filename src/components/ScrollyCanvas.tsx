"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 112; // 000 to 111

export default function ScrollyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load all images on mount
    useEffect(() => {
        let loadedCount = 0;
        const imgArray: HTMLImageElement[] = [];

        for (let i = 0; i < TOTAL_FRAMES; i++) {
            const img = new Image();
            // Keep frame number formatted as 3 digits
            const x = i.toString().padStart(3, "0");
            // Original files have weird names but all have common prefixes frame_XXX_delay-...
            // It's safer to rename them cleanly but assuming they are exactly as listed
            // Wait we don't know exact delays for all without reading, wait.
            // Ah, the list_dir showed: frame_000_delay-0.071s.png, frame_001_delay-0.072s.png etc. 
            // This is a bit chaotic because the delay varies. Let's rename them first in a command.

            // I will assume they are renamed to `frame_${x}.png` to make it easy.
            img.src = `/sequence/frame_${x}.png`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === TOTAL_FRAMES) {
                    setIsLoaded(true);
                }
            };
            imgArray.push(img);
        }
        setImages(imgArray);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

    useMotionValueEvent(frameIndex, "change", (latest) => {
        if (!isLoaded || images.length === 0) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const currentFrame = Math.round(latest);
        const img = images[currentFrame];
        if (!img) return;

        // Handle object-fit: cover logic
        const cw = canvas.width;
        const ch = canvas.height;
        const iw = img.width;
        const ih = img.height;

        const scale = Math.max(cw / iw, ch / ih);
        const x = cw / 2 - (iw * scale) / 2;
        const y = ch / 2 - (ih * scale) / 2;

        ctx.clearRect(0, 0, cw, ch);
        ctx.drawImage(img, x, y, iw * scale, ih * scale);
    });

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            const canvas = canvasRef.current;
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                // Trigger a re-render of current frame
                frameIndex.set(frameIndex.get() + 0.0001); // hacky way to force useMotionValueEvent
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial setup

        return () => window.removeEventListener("resize", handleResize);
    }, [frameIndex]);

    // Force an initial draw immediately after images load
    useEffect(() => {
        if (isLoaded) {
            frameIndex.set(frameIndex.get() + 0.0001);
        }
    }, [isLoaded, frameIndex]);

    return (
        <div ref={containerRef} className="relative w-full h-[500vh]">
            <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#121212]">
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center text-white z-50 bg-[#121212]">
                        Loading Sequence...
                    </div>
                )}
                <canvas
                    ref={canvasRef}
                    className="w-full h-full block"
                />
            </div>
        </div>
    );
}
