"use client";

import { motion } from "framer-motion";

const shorts = [
  { id: "dZTsV-CXgEk", title: "LOOPED" },
  { id: "yz7SM9r6OQw", title: "Higher Math" },
  { id: "3WiAw2km7fA", title: "16 Degree" },
];

export default function ShortsGallery() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white">
          Reel <span className="text-zinc-500">Films</span>
        </h2>
        <p className="mt-4 text-zinc-400 max-w-md uppercase tracking-widest text-xs font-medium">
          Vertical cinematic explorations and short-form narratives.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {shorts.map((short, i) => (
          <motion.div
            key={short.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative"
          >
            <div className="aspect-[9/16] w-full rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-white/5 grayscale hover:grayscale-0 transition-all duration-700">
              <iframe
                src={`https://www.youtube.com/embed/${short.id}?autoplay=0&controls=1&rel=0&modestbranding=1`}
                title={short.title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold text-white uppercase tracking-tight opacity-50 group-hover:opacity-100 transition-opacity">
                {short.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
