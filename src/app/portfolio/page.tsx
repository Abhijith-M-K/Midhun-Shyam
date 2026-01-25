"use client";

import { PhotoGrid } from "@/components/portfolio/PhotoGrid";
import { motion } from "framer-motion";
import { PORTFOLIO_PHOTOS } from "./data";

export default function PortfolioPage() {
    // Get one unique photo per category for the main listing
    const categoryHighlights = PORTFOLIO_PHOTOS.reduce((acc, current) => {
        const x = acc.find(item => item.category === current.category);
        if (!x) {
            return acc.concat([current]);
        } else {
            return acc;
        }
    }, [] as typeof PORTFOLIO_PHOTOS);

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
                    Explore our diverse collection of work. Click on a category to view the full story.
                </p>
            </motion.div>

            <PhotoGrid photos={categoryHighlights} />
        </div>
    );
}
