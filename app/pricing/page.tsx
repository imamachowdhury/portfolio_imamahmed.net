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
    color: "gray-400",
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
    color: "black",
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
    color: "gray-400",
  }
];

export default function PricingPage() {
  return (
    <main className="relative min-h-screen w-full bg-white">
      <Navbar />
      
      <div className="pt-40 pb-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-32">
           <span className="text-[10px] tracking-[0.5em] font-bold uppercase text-gray-400 mb-6 block">Invest in your Vision</span>
           <h1 className="text-6xl md:text-[8rem] font-black uppercase tracking-tight text-black mb-10 leading-[0.85]">
             PRICING & <span className="text-gray-200">SERVICES</span>
           </h1>
           <p className="max-w-2xl mx-auto text-gray-500 text-lg md:text-xl font-medium leading-relaxed">
             Transparent pricing for cinematic services and educational content. Choose the path that fits your creative goal.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           {plans.map((plan, idx) => (
             <motion.div
               key={plan.name}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: idx * 0.1 }}
               viewport={{ once: true }}
               className={`relative p-12 rounded-[2.5rem] transition-all hover:-translate-y-2 duration-500 flex flex-col ${
                 plan.highlight 
                  ? 'bg-black text-white shadow-2xl shadow-black/20 z-10 scale-105' 
                  : 'bg-gray-50 border border-gray-100 text-black hover:bg-white hover:shadow-2xl hover:shadow-black/5'
               }`}
             >
               {plan.highlight && (
                 <div className="absolute top-0 right-12 -translate-y-1/2 px-5 py-2 rounded-full bg-white text-black text-[0.6rem] font-black uppercase tracking-[0.2em] shadow-xl">
                    Most Popular
                 </div>
               )}

               <div className={`p-4 rounded-2xl ${plan.highlight ? 'bg-white/10' : 'bg-gray-200/50'} w-fit mb-10 shadow-inner`}>
                  <plan.icon className={plan.highlight ? 'text-white' : 'text-black'} size={24} />
               </div>

               <h2 className="text-3xl font-black uppercase tracking-tighter mb-3">
                 {plan.name}
               </h2>
               <p className={`text-[0.65rem] mb-10 font-bold uppercase tracking-[0.3em] leading-relaxed ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                 {plan.description}
               </p>
               
               <div className={`flex items-baseline gap-2 mb-10 pb-10 border-b ${plan.highlight ? 'border-white/10' : 'border-gray-200'}`}>
                 <span className="text-5xl font-black italic tracking-tighter">
                   {plan.price}
                 </span>
                 {plan.price !== "Custom" && <span className="text-[0.6rem] font-black uppercase tracking-widest opacity-40 ml-1">/ Project</span>}
               </div>

               <ul className="space-y-6 mb-12 flex-1">
                 {plan.features.map((feature) => (
                   <li key={feature} className={`flex items-center gap-4 text-[0.7rem] font-bold uppercase tracking-widest ${plan.highlight ? 'text-gray-300' : 'text-gray-500'}`}>
                     <Check size={16} className={plan.highlight ? 'text-white/50' : 'text-black/20'} />
                     {feature}
                   </li>
                 ))}
               </ul>

               <button className={`w-full py-5 rounded-full text-[0.7rem] font-black uppercase tracking-[0.3em] transition-all shadow-xl ${
                 plan.highlight 
                  ? 'bg-white text-black hover:bg-gray-200' 
                  : 'bg-black text-white hover:bg-gray-800'
               }`}>
                 {plan.button}
               </button>
             </motion.div>
           ))}
        </div>

        <div className="mt-32 p-16 rounded-[3rem] bg-gray-50 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-10">
           <div className="text-left">
             <h3 className="text-3xl font-black text-black uppercase tracking-tighter mb-3">Need a custom quote?</h3>
             <p className="text-gray-500 text-[0.7rem] uppercase tracking-[0.3em] font-bold">For larger agencies or long-term cinematography contracts.</p>
           </div>
           <button className="px-10 py-5 bg-white border border-gray-200 rounded-full text-black text-[0.7rem] font-black uppercase tracking-[0.3em] hover:border-black transition-all shadow-xl">
              Schedule a Call
           </button>
        </div>
      </div>
    </main>
  );
}
