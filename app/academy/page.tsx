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
    <main className="relative min-h-screen w-full bg-white">
      <Navbar />
      
      <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
          <div className="max-w-2xl">
            <span className="text-[10px] tracking-[0.5em] font-bold uppercase text-gray-400 mb-6 block">The Academy</span>
            <h1 className="text-6xl md:text-[8rem] font-black uppercase tracking-tight text-black leading-[0.85]">
              LEARN THE <span className="text-gray-200">ART</span> OF FILM
            </h1>
          </div>
          <p className="max-w-xs text-gray-500 text-[0.7rem] uppercase tracking-[0.3em] font-bold leading-relaxed mb-4 hidden md:block">
            Professional video production courses designed for aspiring creators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
           {courses.map((course) => (
             <Link
               key={course.slug}
               href={`/academy/${course.slug}`}
               className="group relative rounded-[2.5rem] bg-gray-50 border border-gray-100 transition-all duration-500 overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/5"
             >
               <div className="aspect-[16/10] overflow-hidden relative shadow-inner">
                 <div
                   className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                   style={{ backgroundImage: `url(${course.image})` }}
                 />
                 <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors opacity-40" />
                 <div className="absolute top-6 right-6 bg-black px-4 py-1.5 rounded-full shadow-xl">
                    <span className="text-[0.65rem] font-black text-white uppercase tracking-widest">{course.price}</span>
                 </div>
               </div>

               <div className="p-10 flex flex-col flex-1">
                 <div className="flex items-center gap-6 mb-6">
                   <div className="flex items-center gap-2 text-gray-400 group-hover:text-black transition-colors">
                     <BookOpen size={14} />
                     <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em]">{course.modules} Modules</span>
                   </div>
                   <div className="flex items-center gap-2 text-gray-400">
                     <Clock size={14} />
                     <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em]">{course.duration}</span>
                   </div>
                 </div>
                 
                 <h2 className="text-3xl font-black text-black uppercase tracking-tighter group-hover:text-gray-600 transition-colors mb-8">
                   {course.title}
                 </h2>

                 <div className="mt-auto flex justify-between items-center pt-8 border-t border-gray-100">
                    <span className="text-[0.7rem] font-black uppercase tracking-[0.3em] text-gray-400 group-hover:text-black transition-colors">Begin Learning</span>
                    <ChevronRight className="text-gray-300 group-hover:text-black transition-all transform group-hover:translate-x-2" size={20} />
                 </div>
               </div>
             </Link>
           ))}
        </div>
      </div>
      
    </main>
  );
}
