"use client";

import { Photo, PhotoGrid } from "@/components/portfolio/PhotoGrid";
import { Button } from "@/components/common/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Placeholder data
const FEATURED_PHOTOS: Photo[] = [
    { id: "1", src: "/assets/Fashion 1.jpg", alt: "Photo 1", category: "Fashion", title: "Fashion" },
    { id: "2", src: "/assets/SBMS1410.jpg", alt: "Photo 2", category: "Pre Wedding", title: "Pre Wedding" },
    { id: "3", src: "/assets/Arch 1.jpg", alt: "Photo 3", category: "Architecture", title: "Architecture" },
    { id: "4", src: "/assets/Food 1.jpg", alt: "Photo 4", category: "Food", title: "Food" },
    { id: "5", src: "/assets/Child 1.jpg", alt: "Photo 5", category: "Child", title: "Child" },
    { id: "w1", src: "/assets/SBMS1064.jpg", alt: "Wedding 1", category: "Wedding", title: "Graceful Moments" },
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

            <PhotoGrid photos={FEATURED_PHOTOS} limit={6} referrer="home" />

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
