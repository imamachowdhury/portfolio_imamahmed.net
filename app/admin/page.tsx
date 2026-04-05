import { Users, FileText, Camera, Eye, ArrowUp, ArrowDown, PenTool } from "lucide-react";

export default function AdminDashboard() {
  const customMetrics = [
    { name: "Total Site Views", value: "14,204", change: "+12.5%", trend: "up", icon: Eye },
    { name: "Published Blog Posts", value: "12", change: "+2", trend: "up", icon: FileText },
    { name: "POV Reviews", value: "24", change: "-1", trend: "down", icon: Camera },
    { name: "Academy Members", value: "108", change: "+15%", trend: "up", icon: Users },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-black italic uppercase tracking-tighter text-white">
          Dashboard <span className="text-blue-500">Overview</span>
        </h1>
        <p className="text-sm text-zinc-500 mt-1">
          Welcome back, Imam. Here's what's happening today.
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {customMetrics.map((stat, index) => (
          <div 
            key={index} 
            className="p-6 bg-zinc-900 border border-white/5 rounded-2xl relative overflow-hidden group hover:border-blue-500/30 transition-colors"
          >
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-10 transition-opacity">
              <stat.icon size={48} className="text-blue-500" />
            </div>
            
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                {stat.name}
              </p>
              <p className="text-3xl font-black text-white">
                {stat.value}
              </p>
              
              <div className="flex items-center gap-2 mt-4 text-xs font-bold w-fit bg-black/40 px-2 py-1 rounded-md border border-white/5">
                {stat.trend === "up" ? (
                  <ArrowUp size={14} className="text-emerald-500" />
                ) : (
                  <ArrowDown size={14} className="text-red-500" />
                )}
                <span className={stat.trend === "up" ? "text-emerald-500" : "text-red-500"}>
                  {stat.change}
                </span>
                <span className="text-zinc-500 font-medium ml-1">vs last month</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity Mockup */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-zinc-900 border border-white/5 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">
            Content Status
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-black/40 rounded-xl border border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Lighting the Shadows: Cinematic Guide</h3>
                  <p className="text-xs text-zinc-500">Blog • Published 2 days ago</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-bold uppercase tracking-widest rounded-full border border-emerald-500/20">
                Live
              </span>
            </div>

            <div className="flex items-center justify-between p-4 bg-black/40 rounded-xl border border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500">
                  <Camera size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Dune: Part Two Cinematography</h3>
                  <p className="text-xs text-zinc-500">POV • Drafted</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-amber-500/10 text-amber-500 text-[10px] font-bold uppercase tracking-widest rounded-full border border-amber-500/20">
                Draft
              </span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900/40 to-zinc-900 border border-blue-500/20 rounded-2xl p-6 relative overflow-hidden flex flex-col items-center justify-center text-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1974')] opacity-5 mix-blend-overlay bg-cover bg-center" />
          
          <div className="relative z-10 w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4 border border-blue-500/30">
             <PenTool size={28} />
          </div>
          
          <h3 className="text-lg font-black text-white italic uppercase tracking-tight mb-2">
            Ready to write?
          </h3>
          <p className="text-xs text-zinc-400 mb-6 max-w-[200px] leading-relaxed">
            Create a new blog post or POV review directly from the interface.
          </p>
          
          <button className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl transition-colors shadow-[0_0_15px_rgba(59,130,246,0.5)]">
             Draft New Post
          </button>
        </div>
      </div>
    </div>
  );
}
