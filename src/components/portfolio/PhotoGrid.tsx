"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Placeholder type for photo
export interface Photo {
    id: string;
    src: string;
    alt: string;
    category: string;
    title: string;
}

interface PhotoGridProps {
    photos: Photo[];
    className?: string;
    limit?: number;
    disableLink?: boolean;
}

export function PhotoGrid({ photos, className, limit, disableLink }: PhotoGridProps) {
    const displayedPhotos = limit ? photos.slice(0, limit) : photos;
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
            {displayedPhotos.map((photo, index) => {
                const Content = (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative aspect-[4/5] overflow-hidden rounded-md bg-zinc-900 cursor-pointer"
                        onMouseEnter={() => setHoveredId(photo.id)}
                        onMouseLeave={() => setHoveredId(null)}
                    >
                        <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                            <h3 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                {photo.title}
                            </h3>
                            <span className="text-zinc-300 text-sm mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                {photo.category}
                            </span>
                        </div>
                    </motion.div>
                );

                if (disableLink) {
                    return <div key={photo.id}>{Content}</div>;
                }

                return (
                    <Link key={photo.id} href={`/portfolio/${encodeURIComponent(photo.category)}`}>
                        {Content}
                    </Link>
                );
            })}
        </div>
    );
}
