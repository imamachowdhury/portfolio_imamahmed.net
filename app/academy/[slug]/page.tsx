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
    <main className="relative min-h-screen w-full bg-[#050505] flex flex-col">
      <Navbar />
      
      {/* Course Header / Back Button */}
      <div className="pt-28 pb-6 px-6 border-b border-white/5 flex items-center justify-between">
        <Link href="/academy" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">
           <ChevronLeft size={16} />
           Back to Dashboard
        </Link>
        <div className="flex items-center gap-4">
           <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Module 2 of 12</span>
           <div className="w-32 h-1.5 bg-zinc-900 rounded-full overflow-hidden">
              <div className="w-1/6 h-full bg-blue-500" />
           </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-80 border-r border-white/5 hidden lg:flex flex-col bg-black overflow-y-auto">
          <div className="p-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Course Content</h3>
            <div className="space-y-2">
              {courseContent.modules.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setActiveModule(m)}
                  className={`w-full text-left p-4 rounded-xl transition-all flex items-center gap-4 group ${
                     activeModule.id === m.id ? 'bg-blue-500/10 border border-blue-500/20' : 'hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${activeModule.id === m.id ? 'bg-blue-500 text-white' : 'bg-zinc-900 text-zinc-600 group-hover:text-zinc-400'}`}>
                    {m.status === 'completed' ? <CheckCircle size={14} /> : <Video size={14} />}
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <h4 className={`text-[10px] font-bold uppercase tracking-wide truncate ${activeModule.id === m.id ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}>
                      {m.title}
                    </h4>
                    <span className="text-[9px] text-zinc-600 uppercase tracking-widest">{m.duration}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Player Area */}
        <div className="flex-1 overflow-y-auto bg-black lg:bg-transparent">
          <div className="max-w-4xl mx-auto p-6 md:p-12">
            
            {/* Video Player Placeholder */}
            <div className="aspect-video w-full rounded-3xl bg-zinc-900 border border-white/5 overflow-hidden relative group">
               <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <Play className="text-white ml-1" size={32} />
                  </div>
               </div>
               {/* Dummy Video Preview */}
               <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center grayscale-50" />
            </div>

            {/* Content Metadata */}
            <div className="mt-10">
               <h1 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-4">
                 {activeModule.title}
               </h1>
               <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-8 pb-8 border-b border-white/5">
                  <span className="text-blue-500 underline underline-offset-4">Lecture Video</span>
                  <span>Resource Pack Included</span>
                  <span>14m remaining</span>
               </div>

               {/* Notes Section */}
               <div className="prose prose-invert max-w-none text-zinc-400 space-y-6">
                  <h3 className="text-white uppercase tracking-widest text-sm font-bold flex items-center gap-2">
                    <FileText size={16} /> Module Notes
                  </h3>
                  <p>In this lesson, we explore the fundamental principles of lighting and how to control texture in a cinematic frame. We will focus on the interaction between key light and shadow ratio.</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Understanding the Inverse Square Law in practice.</li>
                    <li>How to create depth using motivated lighting sources.</li>
                    <li>Contrast ratios: High Key vs. Low Key lighting.</li>
                  </ul>
               </div>

               {/* Next Button */}
               <div className="mt-16 flex justify-end">
                  <button className="flex items-center gap-4 group bg-white text-black px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-blue-500 hover:text-white transition-all">
                     Next Module
                     <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
