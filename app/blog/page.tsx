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
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&auto=format&fit=crop&q=60",
  }
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

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
            <Newspaper size={14} /> The Field Notes
          </span>
          <h1 className="text-6xl md:text-[8rem] font-black uppercase tracking-tight text-black mb-10 leading-[0.85]">
            <span className="text-gray-200">THE</span> BLOG
          </h1>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg md:text-xl font-medium leading-relaxed">
            Insights, tutorials, and deep dives into the world of cinematography and creative storytelling.
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

        <div className="grid grid-cols-1 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, idx) => (
              <motion.article 
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                key={post.title}
                className="group relative rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:border-black/5 overflow-hidden flex flex-col md:flex-row transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-black/5"
              >
                {/* Image Section */}
                <div className="w-full md:w-2/5 aspect-video md:aspect-auto h-auto md:h-72 relative overflow-hidden bg-gray-100">
                   <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                   <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors opacity-40" />
                </div>

                <div className="flex flex-col flex-1 p-8 md:p-12">
                   <div className="flex flex-wrap items-center gap-6 mb-6">
                      <span className="flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-black italic">
                        <Tag size={12} /> {post.category}
                      </span>
                      <span className="flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gray-400">
                        <Clock size={12} /> {post.readTime}
                      </span>
                      <span className="md:ml-auto text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gray-300">
                        {post.date}
                      </span>
                   </div>
                   
                   <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-black mb-4 group-hover:text-gray-600 transition-colors">
                     {post.title}
                   </h2>
                   
                   <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 flex-1 line-clamp-2">
                     {post.excerpt}
                   </p>
                   
                   <div className="flex items-center gap-3 mt-auto text-[11px] font-black uppercase tracking-[0.3em] text-black group-hover:text-gray-400 transition-colors">
                     Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                   </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20 text-gray-400 text-sm font-bold uppercase tracking-widest italic">
            More content coming soon.
          </div>
        )}

        {filteredPosts.length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
             <button className="px-10 py-5 bg-black text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-gray-800 transition-all shadow-xl">
                Load More Articles
             </button>
          </motion.div>
        )}
      </div>
    </main>
  );
}
