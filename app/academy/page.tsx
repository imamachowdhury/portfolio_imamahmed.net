"use client";

import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import { Play, Clock, BookOpen, ChevronRight } from "lucide-react";

const courses = [
  {
    title: "Video Editing Basics",
    slug: "video-editing-basics",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=2070",
    modules: 12,
    duration: "4h 30m",
    price: "Free Access",
  },
  {
    title: "Cinematography Fundamentals",
    slug: "cinematography-fundamentals",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2070",
    modules: 24,
    duration: "8h 15m",
    price: "$299.00",
  },
  {
    title: "Advanced Lighting Techniques",
    slug: "advanced-lighting",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=2070",
    modules: 18,
    duration: "6h 45m",
    price: "$399.00",
  }
];

export default function AcademyPage() {
  return (
    <main className="relative min-h-screen w-full bg-black">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-[10px] tracking-[0.5em] font-bold uppercase text-blue-500 mb-4 block">The Academy</span>
            <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white">
              Learn the <span className="text-zinc-600 underline decoration-blue-500/50 decoration-4 underline-offset-8">Art</span> of Film
            </h1>
          </div>
          <p className="max-w-xs text-zinc-500 text-[10px] uppercase tracking-[0.2em] font-bold leading-relaxed hidden md:block">
            Professional video production courses designed for aspiring creators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {courses.map((course) => (
             <Link
               key={course.slug}
               href={`/academy/${course.slug}`}
               className="group relative rounded-3xl bg-zinc-950 border border-white/5 hover:border-white/10 transition-all overflow-hidden flex flex-col grayscale hover:grayscale-0"
             >
               <div className="aspect-[16/10] overflow-hidden">
                 <div
                   className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                   style={{ backgroundImage: `url(${course.image})` }}
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                 <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">{course.price}</span>
                 </div>
               </div>

               <div className="p-8 flex flex-col flex-1">
                 <div className="flex items-center gap-4 mb-4">
                   <div className="flex items-center gap-1.5 text-zinc-500 group-hover:text-blue-500 transition-colors">
                     <BookOpen size={14} />
                     <span className="text-[10px] font-bold uppercase tracking-widest">{course.modules} Modules</span>
                   </div>
                   <div className="flex items-center gap-1.5 text-zinc-500 group-hover:text-emerald-500 transition-colors">
                     <Clock size={14} />
                     <span className="text-[10px] font-bold uppercase tracking-widest">{course.duration}</span>
                   </div>
                 </div>
                 
                 <h2 className="text-2xl font-bold text-white uppercase tracking-tight group-hover:text-blue-500 transition-colors mb-6">
                   {course.title}
                 </h2>

                 <div className="mt-auto flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-500 group-hover:text-white transition-colors">Begin Learning</span>
                    <ChevronRight className="text-zinc-500 group-hover:text-white transition-all transform group-hover:translate-x-2" size={18} />
                 </div>
               </div>
             </Link>
           ))}
        </div>
      </div>
      
    </main>
  );
}
