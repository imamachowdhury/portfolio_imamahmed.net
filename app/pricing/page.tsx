"use client";

import Navbar from "@/components/layout/Navbar";
import { Check, Zap, Camera, BookOpen, Star } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Freelance Editor",
    price: "৳35,000",
    description: "Perfect for single project editing and color grading services.",
    features: [
      "2-4 day delivery time",
      "Color grading included",
      "Up to 10 mins of raw footage",
      "2 rounds of revisions",
      "Licensed music track",
    ],
    button: "Book Edit",
    icon: Zap,
    color: "zinc-500",
  },
  {
    name: "All-Access Pass",
    price: "৳60,000",
    description: "The complete cinematic education and community access.",
    features: [
      "Access to ALL current courses",
      "Monthly workshop calls",
      "Direct feedback on your reels",
      "Raw project files included",
      "Lifetime updates",
    ],
    button: "Join Academy",
    highlight: true,
    icon: Star,
    color: "blue-500",
  },
  {
    name: "Direct Booking",
    price: "Custom",
    description: "Full cinematography service for your next commercial project.",
    features: [
      "On-set cinematography",
      "Sony a6700 setup included",
      "Half-day or Full-day rates",
      "Travel available (Global)",
      "Bespoke lighting design",
    ],
    button: "Contact Me",
    icon: Camera,
    color: "emerald-500",
  }
];

export default function PricingPage() {
  return (
    <main className="relative min-h-screen w-full bg-black">
      <Navbar />
      
      <div className="pt-32 pb-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-24">
           <span className="text-[10px] tracking-[0.5em] font-bold uppercase text-blue-500 mb-4 block underline decoration-blue-500/30 underline-offset-8">Invest in your Vision</span>
           <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tight text-white mb-6">
             Pricing & <span className="text-zinc-700">Services</span>
           </h1>
           <p className="max-w-xl mx-auto text-zinc-500 text-sm md:text-base leading-relaxed tracking-wide">
             Transparent pricing for cinematic services and educational content. Choose the path that fits your creative goal.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {plans.map((plan, idx) => (
             <motion.div
               key={plan.name}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: idx * 0.1 }}
               viewport={{ once: true }}
               className={`relative p-10 rounded-[2.5rem] bg-zinc-950 border transition-all hover:-translate-y-2 duration-500 ${
                 plan.highlight ? 'border-blue-500/30 ring-1 ring-blue-500/20' : 'border-white/5'
               }`}
             >
               {plan.highlight && (
                 <div className="absolute top-0 right-10 -translate-y-1/2 px-4 py-1 rounded-full bg-blue-500 text-white text-[9px] font-black uppercase tracking-[0.2em] shadow-lg shadow-blue-500/20">
                    Most Popular
                 </div>
               )}

               <div className={`p-4 rounded-2xl bg-${plan.color}/10 w-fit mb-8`}>
                  <plan.icon className={`text-${plan.color}`} size={24} />
               </div>

               <h2 className="text-2xl font-black italic uppercase tracking-tighter text-white mb-2">
                 {plan.name}
               </h2>
               <p className="text-zinc-500 text-xs mb-8 font-medium leading-relaxed uppercase tracking-widest">{plan.description}</p>
               
               <div className="flex items-baseline gap-2 mb-10 pb-10 border-b border-white/5">
                 <span className="text-4xl font-black text-white italic tracking-tighter">
                   {plan.price}
                   {plan.price !== "Custom" && <span className="text-2xl text-blue-500 ml-1">BDT</span>}
                 </span>
                 {plan.price !== "Custom" && <span className="text-zinc-700 text-xs font-bold uppercase tracking-widest">/ Project</span>}
               </div>

               <ul className="space-y-4 mb-10">
                 {plan.features.map((feature) => (
                   <li key={feature} className="flex items-center gap-3 text-xs font-medium text-zinc-400 uppercase tracking-widest group">
                     <Check size={14} className="text-blue-500/50 group-hover:text-blue-500 transition-colors" />
                     {feature}
                   </li>
                 ))}
               </ul>

               <button className={`w-full py-4 rounded-full text-[10px] font-black uppercase tracking-[0.3em] transition-all ${
                 plan.highlight 
                 ? 'bg-blue-500 text-white hover:bg-blue-600 shadow-xl shadow-blue-500/10' 
                 : 'bg-white text-black hover:bg-zinc-200'
               }`}>
                 {plan.button}
               </button>
             </motion.div>
           ))}
        </div>

        <div className="mt-24 p-12 rounded-[2rem] bg-zinc-950/50 border border-white/5 text-center flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="text-left">
             <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-2">Need a custom quote?</h3>
             <p className="text-zinc-500 text-xs uppercase tracking-widest font-medium">For larger agencies or long-term cinematography contracts.</p>
           </div>
           <button className="px-10 py-4 border border-white/10 rounded-full text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white/5 transition-colors">
              Schedule a Call
           </button>
        </div>
      </div>
    </main>
  );
}
