import { Instagram } from "lucide-react";
import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-12 px-4 border-t border-zinc-900 bg-black/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center md:items-start space-y-2">
                    <span className="text-lg font-bold text-white tracking-widest">
                        STORIES BY MIDHUN SYAM
                    </span>
                    <p className="text-xs text-zinc-500">
                        Professional Photography Portfolio
                    </p>
                </div>

                <div className="flex items-center space-x-6">
                    <Link
                        href="https://www.instagram.com/stories_by_midhun_shyam/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-white transition-colors p-2"
                        aria-label="Instagram"
                    >
                        <Instagram className="w-5 h-5" />
                    </Link>
                </div>

                <p className="text-xs text-zinc-600">
                    © {currentYear} Midhun Syam. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
