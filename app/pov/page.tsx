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
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&auto=format&fit=crop&q=60",
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
    <main className="relative min-h-screen w-full bg-white">
      <Navbar />
      
      <div className="pt-40 pb-32 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <span className="flex justify-center items-center gap-3 text-[10px] tracking-[0.5em] font-bold uppercase text-gray-400 mb-6">
            <PenTool size={14} /> The Written Word
          </span>
          <h1 className="text-6xl md:text-[8rem] font-black uppercase tracking-tight text-black mb-10 leading-[0.85]">
            POINT OF <span className="text-gray-200">VIEW</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg md:text-xl font-medium leading-relaxed">
            My personal reviews, cinematic breakdowns, and perspectives on art, history, and society.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-24"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-black text-white shadow-xl shadow-black/20" 
                  : "bg-gray-100 border border-gray-100 text-gray-400 hover:text-black hover:border-black/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredEntries.map((entry, idx) => (
              <motion.article 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={entry.title}
                className="group p-2 rounded-[2.5rem] bg-white border border-transparent hover:border-gray-100 flex flex-col transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/5"
              >
                {/* Poster/Cover Image - Cleanly bounded with inset top */}
                <div className="relative w-full aspect-[2/3] rounded-[2rem] overflow-hidden shadow-lg mb-6 bg-gray-100">
                   <img src={entry.image} alt={entry.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                   <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors opacity-40" />
                </div>

                <div className="flex flex-col flex-1 px-4 pb-6">
                   {/* Title */}
                   <h2 className="text-xl font-black uppercase tracking-tight text-black mb-2 line-clamp-2 leading-tight group-hover:text-gray-600 transition-colors">
                     {entry.title}
                   </h2>
                   
                   {/* Creator & Date */}
                   <p className="text-[0.65rem] text-gray-400 mb-4 font-bold uppercase tracking-widest line-clamp-1">
                     {entry.creator}, {entry.date.split(" ")[2]}
                   </p>

                   {/* Rating Line */}
                   <div className="flex items-center gap-2 mt-auto pt-4 border-t border-gray-50">
                     <span className="text-xs font-black text-black">{entry.rating}/10</span>
                     <Star size={12} className="text-amber-500 fill-amber-500" />
                     <span className="text-[0.65rem] text-gray-300 font-bold uppercase tracking-widest ml-auto">{entry.category}</span>
                   </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filteredEntries.length === 0 && (
          <div className="text-center py-20 text-gray-400 text-sm font-bold uppercase tracking-widest italic">
            More content coming soon.
          </div>
        )}

        {filteredEntries.length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
             <button className="px-10 py-5 bg-black text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-gray-800 transition-all shadow-xl">
                Load More Perspectives
             </button>
          </motion.div>
        )}
      </div>
    </main>
  );
}
