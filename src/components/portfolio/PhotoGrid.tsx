"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useRef } from "react";
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

function TiltCard({ photo, index, disableLink }: { photo: Photo, index: number, disableLink?: boolean }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const Content = (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-zinc-900 cursor-pointer perspective-1000"
        >
            <div 
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-0"
            >
                <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            {/* Overlay */}
            <div 
                style={{
                    transform: "translateZ(75px)",
                }}
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center"
            >
                <h3 className="text-white text-2xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {photo.title}
                </h3>
                <span className="text-zinc-200 text-sm mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {photo.category}
                </span>
            </div>
        </motion.div>
    );

    if (disableLink) {
        return Content;
    }

    return (
        <Link href={`/portfolio/${encodeURIComponent(photo.category)}`}>
            {Content}
        </Link>
    );
}

export function PhotoGrid({ photos, className, limit, disableLink }: PhotoGridProps) {
    const displayedPhotos = limit ? photos.slice(0, limit) : photos;

    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", className)}>
            {displayedPhotos.map((photo, index) => (
                <TiltCard key={photo.id} photo={photo} index={index} disableLink={disableLink} />
            ))}
        </div>
    );
}
