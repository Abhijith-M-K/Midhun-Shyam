"use client";

import { Button } from "@/components/common/Button";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-12 text-center">Get in Touch</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-zinc-900/50 p-8 rounded-lg border border-zinc-800 space-y-6">
                            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>

                            <div className="flex items-start space-x-4">
                                <Mail className="w-6 h-6 text-zinc-400 mt-1" />
                                <div>
                                    <h3 className="text-white font-medium">Email</h3>
                                    <p className="text-zinc-500">sbmidhunshyam@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <Phone className="w-6 h-6 text-zinc-400 mt-1" />
                                <div>
                                    <h3 className="text-white font-medium">Phone</h3>
                                    <p className="text-zinc-500">+91 9895926874</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <MapPin className="w-6 h-6 text-zinc-400 mt-1" />
                                <div>
                                    <h3 className="text-white font-medium">Location</h3>
                                    <p className="text-zinc-500">Kozhikode, Kerala, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-zinc-900/50 p-8 rounded-lg border border-zinc-800">
                        <h2 className="text-2xl font-bold text-white mb-6">Send Message</h2>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <Button type="submit" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
