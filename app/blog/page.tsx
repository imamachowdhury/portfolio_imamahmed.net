"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { Newspaper, ArrowRight, Clock, Tag } from "lucide-react";

const categories = ["All", "Cinematography", "Storytelling", "Gear"];

const blogPosts = [
  {
    title: "Lighting the Shadows: A Cinematic Guide",
    excerpt: "How to use negative fill and practical lighting to create deep, moody atmospheres in your narrative short films.",
    category: "Cinematography",
    date: "April 2, 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "The Ultimate Guide to Sony FX3 Workflows",
    excerpt: "Maximizing dynamic range, using S-Cinetone vs S-Log3, and grading techniques for the FX3 in DaVinci Resolve.",
    category: "Gear",
    date: "March 28, 2026",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Pacing and Rhythm in Editing",
    excerpt: "Why the spaces between words matter more than the lines themselves. An analysis of edit pacing.",
    category: "Storytelling",
    date: "March 15, 2026",
    readTime: "4 min",
    image: "https://placehold.co/800x450/18181b/3b82f6?text=Editing",
  }
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

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
            <Newspaper size={14} /> The Field Notes
          </span>
          <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tight text-white mb-6">
            <span className="text-zinc-700">The</span> Blog
          </h1>
          <p className="max-w-xl mx-auto text-zinc-500 text-sm md:text-base leading-relaxed tracking-wide">
            Insights, tutorials, and deep dives into the world of cinematography and creative storytelling.
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

        <div className="grid grid-cols-1 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, idx) => (
              <motion.article 
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                key={post.title}
                className="group relative rounded-3xl bg-zinc-900 border border-white/5 hover:border-white/10 overflow-hidden flex flex-col md:flex-row transition-all duration-300 cursor-pointer hover:shadow-2xl"
              >
                {/* Image Section */}
                <div className="w-full md:w-2/5 aspect-video md:aspect-auto h-auto md:h-64 relative overflow-hidden bg-black">
                   <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                   <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900/50 hidden md:block" />
                </div>

                <div className="flex flex-col flex-1 p-6 md:p-8">
                   <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">
                        <Tag size={12} /> {post.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                        <Clock size={12} /> {post.readTime}
                      </span>
                      <span className="md:ml-auto text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
                        {post.date}
                      </span>
                   </div>
                   
                   <h2 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-white mb-3 group-hover:text-blue-400 transition-colors">
                     {post.title}
                   </h2>
                   
                   <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6 flex-1 line-clamp-2">
                     {post.excerpt}
                   </p>
                   
                   <div className="flex items-center gap-2 mt-auto text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500 group-hover:text-white transition-colors">
                     Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                   </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20 text-zinc-500 text-sm font-medium uppercase tracking-widest">
            More content coming soon.
          </div>
        )}

        {filteredPosts.length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
             <button className="px-8 py-4 border border-white/10 rounded-full text-zinc-400 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">
                Load More Articles
             </button>
          </motion.div>
        )}
      </div>
    </main>
  );
}
