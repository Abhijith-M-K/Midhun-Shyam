"use client";

import { Photo, PhotoGrid } from "@/components/portfolio/PhotoGrid";
import { Button } from "@/components/common/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Placeholder data
const FEATURED_PHOTOS: Photo[] = [
    { id: "1", src: "/assets/IMG_5011.jpeg", alt: "Photo 1", category: "Fashion", title: "Fashion Editorial" },
    { id: "2", src: "/assets/SBMS1410.jpg", alt: "Photo 2", category: "Wedding", title: "Pre Wedding" },
    { id: "3", src: "/assets/IMG_5009.jpeg", alt: "Photo 3", category: "Portraits", title: "Portraits" },
    { id: "4", src: "/assets/IMG_5010.jpeg", alt: "Photo 4", category: "Portraits", title: "Family Portraits" },
    { id: "5", src: "/assets/IMG_5013.jpeg", alt: "Photo 5", category: "Wedding", title: "Wedding" },
    { id: "6", src: "/assets/IMG_5014.jpeg", alt: "Photo 6", category: "Wedding", title: "Wedding" },
];

export function FeaturedWork() {
    return (
        <section className="container mx-auto px-4 py-20">
            <div className="flex flex-col items-center mb-12 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold text-white text-center tracking-tight">
                    Featured Work
                </h2>
                <div className="w-20 h-1 bg-zinc-800 rounded-full" />
                <p className="text-zinc-400 text-center max-w-lg">
                    A selection of my recent photography projects, showcasing stories told through the lens.
                </p>
            </div>

            <PhotoGrid photos={FEATURED_PHOTOS} limit={6} />

            <div className="flex justify-center mt-12">
                <Link href="/portfolio">
                    <Button variant="outline" size="lg" className="group">
                        View All Works
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </Link>
            </div>
        </section>
    );
}
