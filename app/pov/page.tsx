"use client";

import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { PenTool, ArrowRight, Eye, Camera, BookOpen } from "lucide-react";
import Link from "next/link";

const povEntries = [
  {
    title: "Dune: Part Two — A Masterclass in Scale & Shadow",
    excerpt: "Analyzing the breathtaking cinematography of Greig Fraser. How the interplay of harsh desert light and deep imperial shadows creates visual poetry.",
    category: "Film Review",
    date: "Mar 10, 2026",
    icon: Camera,
    color: "amber",
  },
  {
    title: "The Politics of Storytelling",
    excerpt: "Why narratives matter in public discourse. A look at how structural storytelling shapes modern political campaigns and social movements.",
    category: "Perspective",
    date: "Feb 22, 2026",
    icon: Eye,
    color: "blue",
  },
  {
    title: "Why We Need Physical Books More Than Ever",
    excerpt: "In an era of endless scrolling, the tactile nature of a physical book isn't just nostalgia—it's a fundamentally different way of processing information.",
    category: "Literature",
    date: "Jan 15, 2026",
    icon: BookOpen,
    color: "emerald",
  }
];

export default function PovPage() {
  return (
    <main className="relative min-h-screen w-full bg-black">
      <Navbar />
      
      <div className="pt-32 pb-32 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="flex justify-center items-center gap-3 text-[10px] tracking-[0.5em] font-bold uppercase text-blue-500 mb-4">
            <PenTool size={14} /> The Written Word
          </span>
          <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tight text-white mb-6">
            Point of <span className="text-zinc-700">View</span>
          </h1>
          <p className="max-w-xl mx-auto text-zinc-500 text-sm md:text-base leading-relaxed tracking-wide">
            My personal reviews, cinematic breakdowns, and perspectives on art, history, and society.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {povEntries.map((entry, idx) => (
            <Link href="#" key={entry.title}>
              <motion.article 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative p-8 md:p-10 rounded-[2rem] bg-zinc-900 border border-white/5 hover:border-blue-500/30 overflow-hidden flex flex-col md:flex-row gap-8 justify-between items-start md:items-center transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.15)]"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="flex-1 relative z-10">
                   <div className="flex items-center gap-4 mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white bg-white/10 px-3 py-1 rounded-sm border-l-2 border-blue-500">
                        {entry.category}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                        {entry.date}
                      </span>
                   </div>
                   <h2 className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter text-white mb-4 group-hover:text-blue-400 transition-colors">
                     {entry.title}
                   </h2>
                   <p className="text-zinc-400 text-sm leading-relaxed max-w-3xl">
                     {entry.excerpt}
                   </p>
                </div>

                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-zinc-950 border border-white/10 group-hover:bg-blue-500 group-hover:border-blue-500 transition-colors flex-shrink-0">
                   <ArrowRight className="text-zinc-500 group-hover:text-white transition-colors" size={24} />
                </div>
              </motion.article>
            </Link>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
           <button className="px-8 py-4 border border-white/10 rounded-full text-zinc-400 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">
              Load More Perspectives
           </button>
        </motion.div>
      </div>
    </main>
  );
}
