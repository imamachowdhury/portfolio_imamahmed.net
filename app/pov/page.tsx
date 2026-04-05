"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { PenTool, ArrowRight, Eye, Camera, BookOpen, Star } from "lucide-react";
import Link from "next/link";

const categories = ["All", "Movie & Series", "Books"];

const povEntries = [
  {
    title: "Dune: Part Two",
    creator: "Directed by Denis Villeneuve",
    rating: 9.5,
    excerpt: "A masterclass in scale and shadow. Analyzing the breathtaking cinematography of Greig Fraser and how the interplay of harsh desert light creates visual poetry.",
    category: "Movie & Series",
    date: "Mar 10, 2026",
    image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1974&auto=format&fit=crop",
    icon: Camera,
    color: "amber",
  },
  {
    title: "The Politics of Storytelling",
    creator: "Written by Imam Ahmed",
    rating: 8.0,
    excerpt: "Why narratives matter in public discourse. A look at how structural storytelling shapes modern political campaigns and social movements.",
    category: "Perspective",
    date: "Feb 22, 2026",
    image: "https://placehold.co/800x1200/18181b/3b82f6?text=Perspective",
    icon: Eye,
    color: "blue",
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    creator: "Written by Yuval Noah Harari",
    rating: 9.0,
    excerpt: "In an era of endless scrolling, the tactile nature of this physical book isn't just nostalgia—it's a fundamentally different way of processing human behavioral history.",
    category: "Books",
    date: "Jan 15, 2026",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2112&auto=format&fit=crop",
    icon: BookOpen,
    color: "emerald",
  }
];

export default function PovPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredEntries = activeCategory === "All" 
    ? povEntries 
    : povEntries.filter(entry => entry.category === activeCategory);

  return (
    <main className="relative min-h-screen w-full bg-black">
      <Navbar />
      
      <div className="pt-32 pb-32 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
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

        {/* Category Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]" 
                  : "bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredEntries.map((entry, idx) => (
              <motion.article 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={entry.title}
                className="group relative p-4 rounded-[2rem] bg-zinc-900 border border-white/5 hover:border-blue-500/30 overflow-hidden flex flex-col transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.15)]"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative w-full aspect-[3/4] rounded-[1.5rem] overflow-hidden mb-6 z-10 border border-white/10 shadow-xl cursor-pointer">
                   <img src={entry.image} alt={entry.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                   
                   {/* Floating Tags over image */}
                   <div className="absolute top-4 left-4 flex flex-col gap-2">
                     <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 w-fit">
                       {entry.category}
                     </span>
                   </div>
                   <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-xl">
                      <Star size={12} className="text-amber-500 fill-amber-500" />
                      <span className="text-xs font-black text-white leading-none tracking-tighter">{entry.rating}</span>
                   </div>
                </div>

                <div className="flex flex-col flex-1 px-2 pb-2 z-10 cursor-pointer">
                   <h2 className="text-xl md:text-2xl font-black italic uppercase tracking-tighter text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                     {entry.title}
                   </h2>
                   <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-400 font-bold mb-4 drop-shadow-md">
                     {entry.creator} <span className="mx-2 opacity-30">•</span> {entry.date}
                   </p>
                   <p className="text-zinc-500 text-xs leading-relaxed line-clamp-4 mb-6 flex-1">
                     {entry.excerpt}
                   </p>
                   
                   <div className="flex items-center gap-2 mt-auto text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 group-hover:text-white transition-colors">
                     Read POV <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                   </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filteredEntries.length === 0 && (
          <div className="text-center py-20 text-zinc-500 text-sm font-medium uppercase tracking-widest">
            More content coming soon.
          </div>
        )}

        {filteredEntries.length > 0 && (
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
        )}
      </div>
    </main>
  );
}
