"use client";

import Navbar from "@/components/layout/Navbar";
import Affiliations from "@/components/Affiliations";
import { motion } from "framer-motion";
import Image from "next/image";
import { Camera, Layers, Zap, Heart, Monitor, Brain } from "lucide-react";

const gear = [
  {
    name: "Sony a6700",
    description: "The heart of my visual storytelling. 4K120, AI-driven autofocus, and incredible dynamic range.",
    image: "/images/gear/sony_a6700.png",
    icon: Camera,
  },
  {
    name: "Sigma 18-50mm f2.8",
    description: "My go-to glass. Constant aperture, pin-sharp across the range, and a beautiful bokeh transition.",
    image: "/images/gear/sigma_18_50.png",
    icon: Layers,
  },
  {
    name: "DJI RS 3 Mini",
    description: "Compact yet powerful gimbal, ensuring cinematic stability for every handheld shot.",
    image: "/images/gear/dji_rs3_mini.png",
    icon: Zap,
  },
  {
    name: "RODE VideoMic Pro",
    description: "Broadcast-quality broadcast-grade audio capture, essential for professional productions.",
    image: "/images/gear/rode_videomic.png",
    icon: Heart,
  },
  {
    name: "Editing Workstation",
    description: "Ryzen 7 7700, RTX 4060 Ti, 32GB (16GBx2) Corsair RAM, TUF Gaming A620M Motherboard, 1200W PSU.",
    image: "/images/gear/editing_pc.png",
    icon: Monitor,
  },
  {
    name: "Creative Brain",
    description: "The ultimate tool. Always processing, visualizing, and directing the narrative behind every frame.",
    image: "/images/gear/creative_brain.png",
    icon: Brain,
  },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full bg-black">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] tracking-[0.5em] font-bold uppercase text-blue-500 mb-4 block">The Genesis</span>
          <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-white mb-16 relative">
            Capturing <span className="text-zinc-600 underline decoration-blue-500/50 decoration-4 underline-offset-8">Light</span> & Shadow
            <span className="absolute -top-10 left-0 text-[10rem] font-black italic uppercase tracking-tighter text-white/[0.02] pointer-events-none -z-10 select-none">
               STORY
            </span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-7 space-y-8 text-zinc-400 text-lg leading-relaxed">
              <p className="text-2xl text-white font-medium italic">
                "Every frame is a sentence, every sequence a paragraph, and every film a story waiting to be told."
              </p>
              <div className="h-px w-24 bg-blue-500/30" />
              <p>
                I am <span className="text-white font-bold">Imam Ahmed</span>, a multi-faceted creator and the founder of <span className="text-blue-500 font-bold">StoryGhor Creation</span>. My work spans cinematography, political engagement, and a deep-seated passion for history and literature.
              </p>
              <p>
                As a cinematographer, I manipulate light and shadow to craft emotive visual narratives. As a politician and avid reader, I seek to understand the structural narratives that shape our society. As a learner and tutor, I am dedicated to the continuous cycle of growth—empowering others through the same craft that drives me.
              </p>
            </div>
            
            <div className="md:col-span-5 relative group">
               {/* Decorative background glow */}
               <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full group-hover:bg-blue-500/30 transition-colors duration-1000" />
               
               {/* My Profile Image (Portrait Ratio) */}
               <div className="relative aspect-[3/4] rounded-3xl bg-zinc-900 border border-white/10 overflow-hidden shadow-2xl">
                 <div className="w-full h-full bg-[url('/images/profile.jpg')] bg-cover bg-center grayscale hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-1000" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                 <div className="absolute bottom-6 left-6">
                    <p className="text-white font-black italic tracking-tighter text-2xl uppercase">IMAM AHMED</p>
                    <p className="text-blue-400 text-[10px] tracking-[0.2em] font-bold uppercase">Cinematographer</p>
                 </div>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Affiliations Section */}
        <Affiliations />

        {/* Gear Section */}
        <section className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Backglow for the whole section */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <span className="text-[10px] tracking-[0.5em] font-bold uppercase text-zinc-500 mb-4 block">The Arsenal</span>
                <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-white flex items-center gap-4">
                  <Zap className="text-blue-500" size={40} /> Current Setup
                </h2>
              </div>
              <p className="max-w-xs text-zinc-400 text-[10px] uppercase tracking-[0.2em] font-bold leading-relaxed">
                Precision tools built for uncompromised visual storytelling.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gear.map((item, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={item.name} 
                  className="group relative rounded-[2rem] bg-zinc-900/50 backdrop-blur-xl border border-white/5 hover:bg-zinc-900 hover:border-blue-500/30 transition-all duration-700 flex flex-col h-full overflow-hidden"
                >
                  {/* Glowing Sweep Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  {/* Gear Image Display */}
                  <div className="relative w-full aspect-[4/3] bg-black/80 flex items-center justify-center p-8 group-hover:bg-black transition-colors duration-700 z-10 border-b border-white/5">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    {item.image ? (
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        fill 
                        className="object-contain p-8 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:scale-[1.15] group-hover:-translate-y-2 group-hover:-rotate-2 transition-transform duration-[800ms] ease-out relative z-10"
                      />
                    ) : (
                      <item.icon className="text-zinc-700 group-hover:text-blue-500 transition-colors duration-500 relative z-10" size={64} />
                    )}
                  </div>
                  
                  {/* Gear Info */}
                  <div className="p-8 flex flex-col flex-grow z-10 relative">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 rounded-sm bg-blue-500/10 border-l-2 border-blue-500 text-[9px] tracking-[0.2em] font-bold uppercase text-blue-400">
                        {item.name.split(' ')[0]}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black italic text-white mb-3 uppercase tracking-tight group-hover:text-blue-400 transition-colors">{item.name}</h3>
                    <p className="text-zinc-500 text-xs leading-relaxed font-medium mt-auto group-hover:text-zinc-400 transition-colors">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Premium CTA Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-16 p-8 rounded-[2rem] bg-gradient-to-r from-blue-900/20 to-zinc-900 border border-blue-500/20 flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden"
            >
               <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500/10 blur-[60px] rounded-full pointer-events-none" />
               <div className="flex items-center gap-4 relative z-10">
                 <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                 </div>
                 <div>
                    <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-zinc-300 block mb-1">Status</span>
                    <span className="text-xs tracking-[0.2em] font-black uppercase text-white">Available for Bookings 2026</span>
                 </div>
               </div>
               <button className="px-8 py-4 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] hover:bg-blue-500 hover:text-white transition-all duration-300 relative z-10 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                  Collaborate Now
               </button>
            </motion.div>
          </motion.div>
        </section>
      </div>

    </main>
  );
}
