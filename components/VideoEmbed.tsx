"use client";

import { motion } from "framer-motion";

interface VideoEmbedProps {
  videoId: string;
  title?: string;
}

export default function VideoEmbed({ videoId, title = "Video" }: VideoEmbedProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden bg-gray-100 border border-gray-100 shadow-2xl shadow-black/10 group"
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&rel=0&modestbranding=1`}
        title={title}
        className="absolute inset-0 w-full h-full transition-all duration-700"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      
      {/* Subtle overlay (appears on hover) */}
      <div className="absolute inset-0 pointer-events-none bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}
