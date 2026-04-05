import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/Hero";
import VideoEmbed from "@/components/VideoEmbed";
import ShortsGallery from "@/components/ShortsGallery";
import Marquee from "@/components/ui/Marquee";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      
      <Marquee text="CINEMATOGRAPHY • PHILOSOPHY • STORYTELLING • CREATION" />

      {/* Featured Projects Section */}
      <section id="reels" className="relative z-10 py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white">
              Selected <span className="text-zinc-500">Works</span>
            </h2>
            <p className="mt-4 text-zinc-400 max-w-md uppercase tracking-widest text-xs font-medium">
              A collection of cinematic narratives and visual explorations.
            </p>
          </div>
          <div className="h-px flex-1 bg-zinc-800 mx-8 hidden md:block mb-4" />
          <button className="text-xs uppercase tracking-[0.3em] font-bold text-white hover:text-blue-500 transition-colors">
            View All Projects
          </button>
        </div>

        {/* Featured Showreel */}
        <div className="mb-32">
          <span className="text-[10px] tracking-[0.5em] font-bold uppercase text-blue-500 mb-6 block">Featured Showreel</span>
          <VideoEmbed videoId="Iw75E9Lbm6w" title="StoryGhor Creation Showreel" />
          <div className="mt-8 flex items-center justify-between">
            <h3 className="text-3xl font-black italic uppercase tracking-tighter text-white">StoryGhor Creation</h3>
            <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">Directed & Captured by Imam Ahmed</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Project Card 1 */}
          <div className="group cursor-pointer">
            <div className="aspect-[16/10] bg-zinc-900 rounded-3xl overflow-hidden border border-white/5 relative grayscale hover:grayscale-0 transition-all duration-700">
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
               {/* Placeholder Image/Video */}
               <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center group-hover:scale-105 transition-transform duration-1000" />
               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                  </div>
               </div>
            </div>
            <div className="mt-6 flex justify-between items-start">
              <div>
                <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-blue-500/80 mb-2 block">Short Film / 2024</span>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight">The Midnight Solitude</h3>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="group cursor-pointer">
            <div className="aspect-[16/10] bg-zinc-900 rounded-3xl overflow-hidden border border-white/5 relative grayscale hover:grayscale-0 transition-all duration-700">
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
               <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center group-hover:scale-105 transition-transform duration-1000" />
               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                  </div>
               </div>
            </div>
            <div className="mt-6 flex justify-between items-start">
              <div>
                <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-emerald-500/80 mb-2 block">Cinematic / 2023</span>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Ethereal Mountains</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reel Films / Vertical Shorts Section */}
      <ShortsGallery />

      {/* Gear Highlight (Mini) */}
      <section className="py-32 bg-zinc-950/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <span className="text-[10px] tracking-[0.5em] font-bold uppercase text-zinc-500 mb-8 block">Crafted With Precision</span>
           <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter mb-12">
             Sony a6700 <span className="text-zinc-700">+</span> Sigma 18-50mm
           </h2>
           <div className="flex justify-center">
             <Link href="/about" className="px-8 py-4 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-zinc-200 transition-colors">
               Explore My Gear
             </Link>
           </div>
        </div>
      </section>

    </main>
  );
}
