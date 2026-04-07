"use client";

import { motion } from "framer-motion";

const shorts = [
  { id: "dZTsV-CXgEk", title: "LOOPED" },
  { id: "yz7SM9r6OQw", title: "Higher Math" },
  { id: "3WiAw2km7fA", title: "16 Degree" },
];

export default function ShortsGallery() {
  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-gray-100">
      <div className="mb-20">
        <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-black leading-[0.85]">
          Reel <span className="text-gray-300">Films</span>
        </h2>
        <p className="mt-6 text-gray-500 max-w-md uppercase tracking-[0.2em] text-[0.7rem] font-bold">
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
            <div className="aspect-[9/16] w-full rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-gray-100 border border-gray-100 transition-all duration-700 shadow-xl shadow-black/5">
              <iframe
                src={`https://www.youtube.com/embed/${short.id}?autoplay=0&controls=1&rel=0&modestbranding=1`}
                title={short.title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-black text-black uppercase tracking-tight opacity-30 group-hover:opacity-100 transition-opacity">
                {short.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
