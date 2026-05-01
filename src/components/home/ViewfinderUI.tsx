"use client";

import { motion } from "framer-motion";

export function ViewfinderUI() {
    return (
        <div className="absolute inset-0 pointer-events-none z-30">
            {/* Corners */}
            <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-white/40 rounded-tl-lg" />
            <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-white/40 rounded-tr-lg" />
            <div className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-white/40 rounded-bl-lg" />
            <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-white/40 rounded-br-lg" />

            {/* Center Crosshair */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center">
                <div className="w-full h-[1px] bg-white/30" />
                <div className="absolute w-[1px] h-full bg-white/30" />
                <div className="absolute w-2 h-2 border border-white/50 rounded-full" />
            </div>

            {/* Camera Info */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 flex items-center gap-8 text-[10px] font-mono text-white/60 tracking-[0.2em]">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    REC
                </div>
                <div>ISO 400</div>
                <div>1/125</div>
                <div>F2.8</div>
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-12 text-[10px] font-mono text-white/60 tracking-[0.2em]">
                <div>4K 60FPS</div>
                <div className="w-32 h-[2px] bg-white/10 relative">
                    <motion.div 
                        animate={{ x: ["0%", "80%", "0%"] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 w-4 h-full bg-white/40" 
                    />
                </div>
                <div>01:24:32:15</div>
            </div>
        </div>
    );
}
