"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full flex flex-col items-center justify-center pt-32 pb-20 px-6 bg-white overflow-hidden">
      {/* Background Decorative Elements (Subtle) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-[0.03] z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 mb-8 text-[0.7rem] font-bold tracking-[0.2em] uppercase bg-gray-100 text-black rounded-full">
            Cinematography & Storytelling
          </span>
          
          <h1 className="text-6xl md:text-[7.5rem] font-black tracking-tight leading-[0.9] text-black mb-10">
            VISUALS THAT <br />
            <span className="text-gray-300">ACTUALLY</span> WORK.
          </h1>

          <p className="text-lg md:text-xl font-medium text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            I help brands and individuals tell cinematic stories that convert, 
            inspire, and leave a lasting mark on their audience.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => document.getElementById('reels')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-black text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-gray-800 transition-all hover:scale-105 active:scale-95"
            >
              View My Work
            </button>
            <Link 
              href="/pricing"
              className="px-10 py-5 bg-transparent text-black text-sm font-bold uppercase tracking-widest rounded-full border border-gray-200 hover:border-black transition-all"
            >
              Scale Your Project
            </Link>
          </div>
        </motion.div>

        {/* Featured logos / Social Proof area placeholder */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.5, duration: 1 }}
           className="mt-24 pt-10 border-t border-gray-100"
        >
           <p className="text-[0.7rem] font-bold tracking-[0.3em] uppercase text-gray-300 mb-8">Featured Projects & Collaborations</p>
           <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-30 grayscale contrast-125">
              <span className="text-2xl font-black italic tracking-tighter">APPLE</span>
              <span className="text-2xl font-black tracking-tighter">NETFLIX</span>
              <span className="text-2xl font-black italic tracking-tighter">SONY</span>
              <span className="text-2xl font-black tracking-tighter">ADOBE</span>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
