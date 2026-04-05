"use client";

import { motion } from "framer-motion";

export default function Marquee({ text }: { text: string }) {
  // Duplicate text to create seamless loop
  const repeatedText = new Array(4).fill(text).join(" • ");

  return (
    <div className="relative w-full overflow-hidden flex flex-col py-8 border-y border-white/5 bg-zinc-950/20">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          className="flex whitespace-nowrap text-4xl md:text-6xl font-black italic uppercase tracking-widest text-transparent stroke-text opacity-30 hover:opacity-100 transition-opacity duration-700"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
        >
          <span className="mr-8">{repeatedText}</span>
          <span className="mr-8">{repeatedText}</span>
        </motion.div>
      </div>
    </div>
  );
}
