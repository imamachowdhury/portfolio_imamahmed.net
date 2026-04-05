"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const roles = [
  "Philosophy",
  "Politics",
  "Filmmaking",
  "History",
  "Books",
  "Astronomy",
  "Learning",
  "Teaching",
  "Creative Marketing",
  "Technology",
  "Photography",
  "Sarcasm"
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Interactive Background Glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
        }}
      />

      {/* Static Film Grain Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')] mix-blend-overlay" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />

      {/* Background Image */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[url('/images/profile.jpg')] bg-cover bg-center opacity-30 grayscale contrast-125 hover:scale-105 transition-transform duration-[10000ms] ease-out" />
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none text-white/90"
        >
          Imam Ahmed
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-4 flex items-center justify-center gap-4"
        >
          <div className="h-px w-8 bg-blue-500/50" />
          <span className="text-[10px] tracking-[0.5em] font-bold uppercase text-blue-500/80">Creator</span>
          <div className="h-px w-8 bg-blue-500/50" />
        </motion.div>

        <div className="mt-8 h-8 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={roles[index]}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-lg md:text-xl font-medium tracking-[0.5em] uppercase text-zinc-400"
            >
              {roles[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="mt-16 flex flex-col items-center gap-12"
        >
          <button
            onClick={() => document.getElementById('reels')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex flex-col items-center gap-4 transition-all hover:scale-110"
          >
            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all">
              <Play size={20} fill="currentColor" />
            </div>
            <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-white/50 group-hover:text-white transition-colors">Watch Showreel</span>
          </button>

          <div className="flex flex-col items-center gap-4">
            <div className="w-px h-16 bg-gradient-to-b from-blue-500/50 to-transparent" />
            <span className="text-[10px] tracking-[0.2em] font-medium uppercase text-zinc-500">Scroll to Explore</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { Play } from "lucide-react";
