"use client";

import { use } from "react";
import { PhotoGrid } from "@/components/portfolio/PhotoGrid";
import { motion } from "framer-motion";
import { PORTFOLIO_PHOTOS } from "../data";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface CategoryPageProps {
    params: Promise<{ category: string }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
    const { category } = use(params);
    const decodedCategory = decodeURIComponent(category);

    const filteredPhotos = PORTFOLIO_PHOTOS.filter(
        (photo) => photo.category.toLowerCase() === decodedCategory.toLowerCase()
    );

    return (
        <div className="container mx-auto px-4 py-8">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <Link
                    href="/portfolio"
                    className="inline-flex items-center text-zinc-400 hover:text-white transition-colors gap-2 group"
                >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    Back to Portfolio
                </Link>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-wider">
                    {decodedCategory}
                </h1>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                    A curated collection of {decodedCategory.toLowerCase()} photography, capturing moments with precision and passion.
                </p>
            </motion.div>

            <PhotoGrid photos={filteredPhotos} disableLink />

            {filteredPhotos.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-zinc-500 text-xl font-medium">No photos found in this category.</p>
                </div>
            )}
        </div>
    );
}
