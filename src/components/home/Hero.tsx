"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { Camera } from "lucide-react";
import { useRef, useState } from "react";
import { ViewfinderUI } from "./ViewfinderUI";

export function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const [showFlash, setShowFlash] = useState(false);

    // Parallax mouse movement
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
            const width = rect.width;
            const height = rect.height;
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            x.set(mouseX / width - 0.5);
            y.set(mouseY / height - 0.5);
        }
    };

    const handleClick = () => {
        setShowFlash(true);
        setTimeout(() => {
            setShowFlash(false);
        }, 150);
    };

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const yPos = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section 
            ref={containerRef} 
            onMouseMove={handleMouseMove}
            onClick={handleClick}
            className="relative h-screen flex items-center justify-center overflow-hidden cursor-none"
        >
            {/* Background Video */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className="absolute w-full h-full object-cover brightness-50"
                >
                    <source src="/assets/midhun-video.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Camera Shutter Flash */}
            <motion.div 
                initial={false}
                animate={{ opacity: showFlash ? 1 : 0 }}
                className="absolute inset-0 bg-white z-50 pointer-events-none"
            />

            {/* Viewfinder UI Overlay */}
            <ViewfinderUI />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black/30 pointer-events-none" />

            {/* Content */}
            <div className="relative z-40 max-w-7xl mx-auto px-4 w-full flex flex-col items-center md:items-start md:pl-20 text-center md:text-left">
                <motion.div style={{ y: yPos, opacity }}>
                    <motion.h1
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "circOut" }}
                        className="text-7xl md:text-9xl lg:text-[11rem] font-black tracking-[-0.04em] text-white mb-4 leading-[0.85] drop-shadow-2xl uppercase"
                    >
                        Midhun
                        <br />
                        <span className="text-zinc-500">Shyam</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
                        className="text-lg md:text-xl text-zinc-300 mb-10 max-w-xl font-light tracking-[0.3em] uppercase"
                    >
                        Director of Photography & Visual Storyteller
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4, ease: "circOut" }}
                        className="flex flex-col sm:flex-row items-center md:justify-start justify-center gap-6"
                    >
                        <Link href="/portfolio">
                            <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors flex items-center gap-3">
                                <Camera className="w-5 h-5" />
                                Capture Stories
                            </button>
                        </Link>
                        <Link href="/contact">
                            <button className="px-8 py-4 border border-white/30 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
                                Get in touch
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Custom Mouse Cursor (Lens) */}
            <motion.div 
                style={{ x: mouseXSpring, y: mouseYSpring }}
                className="fixed top-0 left-0 w-12 h-12 border border-white/50 rounded-full z-[100] pointer-events-none -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            >
                <div className="w-1 h-1 bg-red-500 rounded-full" />
            </motion.div>
        </section>
    );
}
