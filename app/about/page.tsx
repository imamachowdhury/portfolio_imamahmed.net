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
    <main className="relative min-h-screen w-full bg-white">
      <Navbar />
      
      <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] tracking-[0.5em] font-bold uppercase text-gray-400 mb-6 block">The Genesis</span>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start mb-40">
            <div className="lg:col-span-12">
               <h1 className="text-6xl md:text-[8rem] font-black uppercase tracking-tight text-black leading-[0.85] mb-20">
                  CAPTURING <br />
                  <span className="text-gray-200">LIGHT</span> & SHADOW
               </h1>
            </div>

            <div className="lg:col-span-7 space-y-10 text-gray-500 text-xl leading-relaxed">
              <p className="text-3xl text-black font-bold tracking-tight">
                "Every frame is a sentence, every sequence a paragraph, and every film a story waiting to be told."
              </p>
              <div className="h-1 w-24 bg-black" />
              <p>
                I am <span className="text-black font-bold">Imam Ahmed</span>, a multi-faceted creator and the founder of <span className="text-zinc-600 font-bold">StoryGhor Creation</span>. My work spans cinematography, political engagement, and a deep-seated passion for history and literature.
              </p>
              <p>
                As a cinematographer, I manipulate light and shadow to craft emotive visual narratives. As a politician and avid reader, I seek to understand the structural narratives that shape our society. As a learner and tutor, I am dedicated to the continuous cycle of growth—empowering others through the same craft that drives me.
              </p>
            </div>
            
            <div className="lg:col-span-5 relative group">
               {/* My Profile Image with massive rounded corners */}
               <div className="relative aspect-[3/4] rounded-[3rem] bg-gray-50 overflow-hidden shadow-2xl shadow-black/5">
                  <div className="w-full h-full bg-[url('/images/profile.jpg')] bg-cover bg-center transition-all duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-10 left-10">
                     <p className="text-white font-black tracking-tighter text-3xl uppercase">IMAM AHMED</p>
                     <p className="text-gray-300 text-[10px] tracking-[0.3em] font-bold uppercase">Founder & Cinematographer</p>
                  </div>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Affiliations Section with clean spacing */}
        <div className="py-20 border-y border-gray-100 mb-40 bg-gray-50/50 rounded-[3rem]">
           <Affiliations />
        </div>

        {/* Gear Section */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
              <div className="max-w-xl">
                <span className="text-[10px] tracking-[0.5em] font-bold uppercase text-gray-400 mb-6 block">The Arsenal</span>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black leading-[0.85]">
                  CURRENT <span className="text-gray-300">SETUP</span>
                </h2>
              </div>
              <p className="max-w-xs text-gray-500 text-[0.7rem] uppercase tracking-[0.3em] font-bold leading-relaxed mb-4">
                Precision tools built for uncompromised visual storytelling.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {gear.map((item, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={item.name} 
                  className="group relative rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:border-black/10 transition-all duration-700 flex flex-col h-full overflow-hidden hover:shadow-2xl hover:shadow-black/5"
                >
                  {/* Gear Image Display */}
                  <div className="relative w-full aspect-[4/3] bg-gray-100 flex items-center justify-center p-8 group-hover:bg-white transition-colors duration-700 z-10 border-b border-gray-100 shadow-inner">
                    {item.image ? (
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        fill 
                        className="object-contain p-8 drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] group-hover:scale-[1.1] transition-transform duration-[800ms] ease-out relative z-10"
                      />
                    ) : (
                      <item.icon className="text-gray-300 group-hover:text-black transition-colors duration-500 relative z-10" size={64} />
                    )}
                  </div>
                  
                  {/* Gear Info */}
                  <div className="p-10 flex flex-col flex-grow z-10 relative">
                    <div className="mb-6">
                      <span className="inline-block px-3 py-1 rounded-full bg-black text-[0.6rem] tracking-[0.2em] font-bold uppercase text-white">
                        {item.name.split(' ')[0]}
                      </span>
                    </div>
                    <h3 className="text-3xl font-black text-black mb-4 uppercase tracking-tighter group-hover:text-gray-600 transition-colors">{item.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-medium mt-auto transition-colors">{item.description}</p>
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
              className="mt-20 p-12 rounded-[3rem] bg-black text-white flex flex-col md:flex-row justify-between items-center gap-10 relative overflow-hidden"
            >
               <div className="flex items-center gap-6 relative z-10">
                 <div className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
                 </div>
                 <div>
                    <span className="text-[0.7rem] tracking-[0.5em] font-bold uppercase text-zinc-500 block mb-1">Status</span>
                    <span className="text-xl tracking-tight font-black uppercase">Available for Bookings 2026</span>
                 </div>
               </div>
               <button className="px-10 py-5 bg-white text-black text-[0.7rem] font-black uppercase tracking-[0.3em] hover:bg-gray-200 transition-all rounded-full shadow-xl">
                  Collaborate Now
               </button>
            </motion.div>
          </motion.div>
        </section>
      </div>

    </main>
  );
}
