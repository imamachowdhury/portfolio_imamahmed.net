import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/Hero";
import VideoEmbed from "@/components/VideoEmbed";
import ShortsGallery from "@/components/ShortsGallery";
import Marquee from "@/components/ui/Marquee";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      
      <div className="py-10 bg-gray-50 border-y border-gray-100">
        <Marquee text="CINEMATOGRAPHY • PHILOSOPHY • STORYTELLING • CREATION" />
      </div>

      {/* Featured Projects Section */}
      <section id="reels" className="relative z-10 py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-black uppercase leading-[0.85] mb-6">
              SELECTED <span className="text-gray-300">WORKS</span>
            </h2>
            <p className="text-gray-500 font-semibold uppercase tracking-[0.2em] text-[0.7rem]">
              A collection of cinematic narratives and visual explorations that define my creative philosophy.
            </p>
          </div>
          <Link href="/portfolio" className="text-[0.7rem] uppercase tracking-[0.3em] font-bold text-black border-b-2 border-black pb-1 hover:text-gray-400 hover:border-gray-400 transition-all">
            Explore All
          </Link>
        </div>

        {/* Featured Showreel */}
        <div className="mb-32">
          <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/10">
            <VideoEmbed videoId="Iw75E9Lbm6w" title="StoryGhor Creation Showreel" />
          </div>
          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <h3 className="text-4xl font-black uppercase tracking-tighter text-black italic">StoryGhor Creation</h3>
            <p className="text-gray-400 text-[0.7rem] uppercase tracking-[0.3em] font-bold text-center md:text-right">
              Directed & Captured by Imam Ahmed <br />
              <span className="text-gray-200">Cinematography Reel 2024</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Project Card 1 */}
          <div className="group cursor-pointer">
            <div className="aspect-[16/10] bg-gray-100 rounded-[2.5rem] overflow-hidden relative shadow-lg shadow-black/5 transition-transform duration-500 hover:-translate-y-2">
               <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" />
               <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors opacity-40" />
            </div>
            <div className="mt-8">
              <span className="text-[0.65rem] tracking-[0.3em] font-bold uppercase text-gray-400 mb-3 block italic">Short Film / 2024</span>
              <h3 className="text-3xl font-black text-black uppercase tracking-tight group-hover:text-gray-600 transition-colors">The Midnight Solitude</h3>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="group cursor-pointer">
            <div className="aspect-[16/10] bg-gray-100 rounded-[2.5rem] overflow-hidden relative shadow-lg shadow-black/5 transition-transform duration-500 hover:-translate-y-2">
               <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" />
               <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors opacity-40" />
            </div>
            <div className="mt-8">
              <span className="text-[0.65rem] tracking-[0.3em] font-bold uppercase text-gray-400 mb-3 block italic">Cinematic / 2023</span>
              <h3 className="text-3xl font-black text-black uppercase tracking-tight group-hover:text-gray-600 transition-colors">Ethereal Mountains</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Reel Films / Vertical Shorts Section */}
      <div className="bg-gray-50 py-32 border-t border-gray-100">
        <ShortsGallery />
      </div>

    </main>
  );
}
