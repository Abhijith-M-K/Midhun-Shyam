"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/common/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background with abstract gradient or image placeholder */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black z-10" />
                {/* Placeholder for Hero Image - In production this would be <Image /> */}
                <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-950 to-black animate-pulse-slow" />
            </div>

            <div className="relative z-20 max-w-5xl mx-auto px-4 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-white mb-6"
                >
                    CAPTURING
                    <br />
                    <span className="text-zinc-500">THE MOMENT</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-2xl mx-auto"
                >
                    Professional photography that tells your unique story through light, shadow, and emotion.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link href="/portfolio">
                        <Button size="lg" className="group">
                            View Portfolio
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="outline" size="lg">
                            Contact Me
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
