"use client";

import { motion } from "framer-motion";
import { Camera, Heart, Award } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-12 text-center">About Me</h1>

                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* Image Container */}
                    <div className="w-full md:w-1/3 aspect-[3/4] bg-zinc-800 rounded-lg overflow-hidden relative">
                        <Image
                            src="/assets/IMG_7889.jpg"
                            alt="Midhun Shyam"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                            <span className="text-white font-semibold">Midhun Shyam</span>
                        </div>
                    </div>

                    <div className="w-full md:w-2/3 space-y-6">
                        <h2 className="text-2xl font-bold text-white">Visual Storyteller & Photographer</h2>
                        <p className="text-zinc-400 leading-relaxed">
                            With over 10 years of experience in photography, I specialize in capturing life's most precious moments. My passion lies in creating timeless images that tell compelling stories and evoke genuine emotions.
                        </p>
                        <p className="text-zinc-400 leading-relaxed">
                            Whether it's a wedding, portrait session, or commercial project, I bring creativity, professionalism, and attention to detail to every shoot.                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                            <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
                                <Camera className="w-8 h-8 text-white mb-4" />
                                <h3 className="text-white font-semibold mb-2">Photography</h3>
                                <p className="text-sm text-zinc-500">Portrait, Landscape, Event</p>
                            </div>
                            <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
                                <Heart className="w-8 h-8 text-white mb-4" />
                                <h3 className="text-white font-semibold mb-2">Passion</h3>
                                <p className="text-sm text-zinc-500">Driven by love for the craft</p>
                            </div>
                            <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
                                <Award className="w-8 h-8 text-white mb-4" />
                                <h3 className="text-white font-semibold mb-2">Quality</h3>
                                <p className="text-sm text-zinc-500">High-end retouching</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
