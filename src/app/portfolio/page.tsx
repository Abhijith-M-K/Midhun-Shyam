"use client";

import { PhotoGrid, Photo } from "@/components/portfolio/PhotoGrid";
import { motion } from "framer-motion";

// This would typically come from a CMS or API
const PORTFOLIO_PHOTOS: Photo[] = [
    { id: "1", src: "/assets/IMG_5011.jpeg", alt: "Photo 1", category: "Fashion", title: "Fashion Editorial" },
    { id: "2", src: "/assets/IMG_5008.jpeg", alt: "Photo 2", category: "Wedding", title: "Pre Wedding" },
    { id: "3", src: "/assets/IMG_5009.jpeg", alt: "Photo 3", category: "Portraits", title: "Portraits" },
    { id: "4", src: "/assets/IMG_5010.jpeg", alt: "Photo 4", category: "Portraits", title: "Family Portraits" },
    { id: "5", src: "/assets/IMG_5013.jpeg", alt: "Photo 5", category: "Wedding", title: "Wedding" },
    { id: "6", src: "/assets/IMG_5014.jpeg", alt: "Photo 6", category: "Wedding", title: "Wedding" },
    { id: "7", src: "/assets/IMG_0604.jpeg", alt: "Photo 7", category: "Urban Architecture", title: "Urban Architecture" },
];

export default function PortfolioPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Portfolio</h1>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                    Explore a collection of my best work across various genres. Each image represents a moment frozen in time.
                </p>
            </motion.div>

            <PhotoGrid photos={PORTFOLIO_PHOTOS} />
        </div>
    );
}
