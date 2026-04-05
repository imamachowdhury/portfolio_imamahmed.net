"use client";

import { motion } from "framer-motion";
import { Building2, Film, Activity, UserCircle, Shield, Flag } from "lucide-react";
import Image from "next/image";

const affiliations = [
  {
    org: "StoryGhor Creation",
    role: "Creator",
    icon: Film,
    logo: "/images/logos/storyghor_logo.png",
    color: "text-blue-500",
  },
  {
    org: "Hotel Royal Palm",
    role: "Managing Director",
    icon: Building2,
    logo: "/images/logos/royal_palm_logo.png",
    color: "text-emerald-500",
  },
  {
    org: "Royal Diagnostic",
    role: "Director",
    icon: Activity,
    logo: "/images/logos/royal_diagnostic_logo.png",
    color: "text-rose-500",
  },
  {
    org: "Hiltown Hotel",
    role: "Former Operation Manager",
    icon: UserCircle,
    logo: "/images/logos/hiltown_logo.png",
    color: "text-amber-500",
  },
  {
    org: "Jatiya JuboShokti",
    role: "Politician",
    icon: Flag,
    logo: "/images/logos/jubosokti_logo.png",
    color: "text-orange-500",
  },
  {
    org: "National Citizen Party (NCP)",
    role: "Online Activist",
    icon: Shield,
    logo: "/images/logos/ncp_logo.png",
    color: "text-indigo-500",
  },
];

export default function Affiliations() {
  return (
    <section className="mt-32">
      <div className="mb-12">
        <span className="text-[10px] tracking-[0.5em] font-bold uppercase text-zinc-500 mb-4 block">Leadership & Legacy</span>
        <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white">
          Associations <span className="text-zinc-600">& Affiliations</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {affiliations.map((item, i) => (
          <motion.div
            key={item.org}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group p-8 rounded-3xl bg-zinc-950 border border-white/5 hover:border-white/10 transition-all hover:bg-zinc-900/50"
          >
            <div className={`mb-6 p-3 rounded-2xl bg-zinc-100 w-20 h-20 flex items-center justify-center group-hover:scale-110 shadow-md group-hover:shadow-white/10 transition-all ${item.color} overflow-hidden`}>
              {item.logo ? (
                <Image 
                  src={item.logo} 
                  alt={item.org} 
                  width={80} 
                  height={80} 
                  className="w-full h-full object-contain"
                />
              ) : (
                <item.icon size={32} />
              )}
            </div>
            <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-2 group-hover:text-blue-400 transition-colors">
              {item.org}
            </h3>
            <p className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] font-bold">
              {item.role}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
