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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredEntries.map((entry, idx) => (
              <motion.article 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={entry.title}
                className="group p-5 rounded-2xl bg-zinc-900 border border-white/5 hover:border-white/10 flex flex-col transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Poster/Cover Image - Cleanly bounded with inset top */}
                <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden shadow-lg mb-4 bg-black">
                   <img src={entry.image} alt={entry.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>

                <div className="flex flex-col flex-1">
                   {/* Title */}
                   <h2 className="text-base font-bold text-white mb-1 line-clamp-2 leading-tight">
                     {entry.title}
                   </h2>
                   
                   {/* Creator & Date */}
                   <p className="text-xs text-zinc-400 mb-2 font-medium line-clamp-1">
                     {entry.creator}, {entry.date.split(" ")[2]}
                   </p>

                   {/* Rating Line */}
                   <div className="flex items-center gap-1.5 mt-auto pt-2">
                     <span className="text-xs font-bold text-zinc-300">{entry.rating}/10</span>
                     <Star size={12} className="text-amber-500 fill-amber-500" />
                     <span className="text-[10px] text-zinc-500 font-medium ml-1">({entry.category})</span>
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
