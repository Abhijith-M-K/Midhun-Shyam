import type { Metadata } from "next";
import { Geist, Geist_Mono, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingBackground } from "@/components/common/FloatingBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Stories by Midhun Shyam | Professional Photography",
  description: "Capturing the moment through light, shadow, and emotion. Professional photography portfolio of Midhun Shyam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bodoni.variable} antialiased bg-black text-white`}
      >
        <FloatingBackground />
        <Navbar />
        <main className="min-h-screen pt-20 pb-10 relative z-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
