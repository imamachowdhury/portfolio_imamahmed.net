"use client";

import Navbar from "@/components/layout/Navbar";
import { useState } from "react";
import { Play, FileText, CheckCircle, ChevronLeft, ArrowRight, Video } from "lucide-react";
import Link from "next/link";

const courseContent = {
  title: "Cinematography Fundamentals",
  modules: [
    {
      id: 1,
      title: "Introduction to Composition",
      duration: "15:00",
      status: "completed",
    },
    {
      id: 2,
      title: "The Power of Light & Shadow",
      duration: "24:30",
      status: "current",
    },
    {
      id: 3,
      title: "Lens Selection & Perspective",
      duration: "18:45",
      status: "locked",
    },
    {
      id: 4,
      title: "Movement: Handheld vs Stabilized",
      duration: "22:10",
      status: "locked",
    },
  ]
};

export default function CourseDetail({ params }: { params: { slug: string } }) {
  const [activeModule, setActiveModule] = useState(courseContent.modules[1]);

  return (
    <main className="relative min-h-screen w-full bg-white flex flex-col">
      <Navbar />
      
      {/* Course Header / Back Button */}
      <div className="pt-32 pb-6 px-10 border-b border-gray-100 flex items-center justify-between">
        <Link href="/academy" className="flex items-center gap-3 text-gray-400 hover:text-black transition-colors text-[0.65rem] font-black uppercase tracking-[0.2em]">
           <ChevronLeft size={16} />
           Back to Dashboard
        </Link>
        <div className="flex items-center gap-6">
           <span className="text-[0.65rem] font-black text-black uppercase tracking-[0.2em]">Module 2 of 12</span>
           <div className="w-40 h-2 bg-gray-100 rounded-full overflow-hidden shadow-inner">
              <div className="w-1/6 h-full bg-black" />
           </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-80 border-r border-gray-100 hidden lg:flex flex-col bg-gray-50/50 overflow-y-auto shadow-inner">
          <div className="p-8">
            <h3 className="text-[0.65rem] font-black text-black uppercase tracking-[0.3em] mb-8 pb-4 border-b border-gray-100">Course Content</h3>
            <div className="space-y-4">
              {courseContent.modules.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setActiveModule(m)}
                  className={`w-full text-left p-5 rounded-[1.5rem] transition-all flex items-center gap-4 group ${
                     activeModule.id === m.id ? 'bg-white border-black/10 shadow-xl shadow-black/5 ring-1 ring-black/5' : 'hover:bg-white border-transparent'
                  } border`}
                >
                  <div className={`p-3 rounded-2xl ${activeModule.id === m.id ? 'bg-black text-white' : 'bg-gray-200/50 text-gray-400 group-hover:text-black transition-colors'}`}>
                    {m.status === 'completed' ? <CheckCircle size={14} /> : <Video size={14} />}
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <h4 className={`text-[0.65rem] font-black uppercase tracking-widest truncate ${activeModule.id === m.id ? 'text-black' : 'text-gray-400 group-hover:text-black transition-colors'}`}>
                      {m.title}
                    </h4>
                    <span className="text-[0.6rem] text-gray-400 font-bold uppercase tracking-widest">{m.duration}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Player Area */}
        <div className="flex-1 overflow-y-auto bg-white">
          <div className="max-w-4xl mx-auto p-10 md:p-14">
            
            {/* Video Player Placeholder */}
            <div className="aspect-video w-full rounded-[2.5rem] bg-gray-100 border border-gray-100 overflow-hidden relative group shadow-2xl shadow-black/5">
               <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-2xl">
                    <Play className="text-white ml-2 shadow-sm" size={40} />
                  </div>
               </div>
               {/* Dummy Video Preview */}
               <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" />
            </div>

            {/* Content Metadata */}
            <div className="mt-12">
               <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-black text-white text-[0.6rem] font-black uppercase tracking-[0.2em] rounded-full">Active</span>
                  <span className="text-[0.65rem] font-black text-gray-300 uppercase tracking-[0.3em]">Module {activeModule.id}</span>
               </div>
               <h1 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tighter mb-6 leading-tight">
                 {activeModule.title}
               </h1>
               <div className="flex flex-wrap gap-8 text-[0.65rem] font-black uppercase tracking-[0.3em] text-gray-400 mb-10 pb-10 border-b border-gray-100">
                  <span className="text-black border-b-2 border-black pb-1">Lecture Video</span>
                  <span>Resource Pack</span>
                  <span>14m remaining</span>
               </div>

               {/* Notes Section */}
               <div className="max-w-none text-gray-500 space-y-8">
                  <h3 className="text-black uppercase tracking-[0.3em] text-[0.7rem] font-black flex items-center gap-3">
                    <FileText size={18} /> Module Notes
                  </h3>
                  <div className="text-lg leading-relaxed font-medium space-y-6">
                    <p>In this lesson, we explore the fundamental principles of lighting and how to control texture in a cinematic frame. We will focus on the interaction between key light and shadow ratio.</p>
                    <ul className="space-y-4">
                      <li className="flex gap-4">
                        <span className="text-black font-black">01.</span>
                        <span>Understanding the Inverse Square Law in practice.</span>
                      </li>
                      <li className="flex gap-4">
                        <span className="text-black font-black">02.</span>
                        <span>How to create depth using motivated lighting sources.</span>
                      </li>
                      <li className="flex gap-4">
                        <span className="text-black font-black">03.</span>
                        <span>Contrast ratios: High Key vs. Low Key lighting.</span>
                      </li>
                    </ul>
                  </div>
               </div>

               {/* Next Button */}
               <div className="mt-20 pt-10 border-t border-gray-50 flex justify-end">
                  <button className="flex items-center gap-6 group bg-black text-white px-10 py-5 rounded-full text-[0.7rem] font-black uppercase tracking-[0.3em] hover:bg-gray-800 transition-all shadow-xl">
                     Next Module
                     <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
