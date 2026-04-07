import { Users, FileText, Camera, Eye, ArrowUp, ArrowDown, PenTool } from "lucide-react";

export default function AdminDashboard() {
  const customMetrics = [
    { name: "Total Site Views", value: "14,204", change: "+12.5%", trend: "up", icon: Eye },
    { name: "Published Blog Posts", value: "12", change: "+2", trend: "up", icon: FileText },
    { name: "POV Reviews", value: "24", change: "-1", trend: "down", icon: Camera },
    { name: "Academy Members", value: "108", change: "+15%", trend: "up", icon: Users },
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-14">
        <h1 className="text-4xl font-black uppercase tracking-tighter text-black leading-tight">
          DASHBOARD <span className="text-gray-200">OVERVIEW</span>
        </h1>
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.3em] text-gray-400 mt-3">
          Welcome back, Imam. Here's what's happening today.
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {customMetrics.map((stat, index) => (
          <div 
            key={index} 
            className="p-10 bg-white border border-gray-100 rounded-[2.5rem] relative overflow-hidden group hover:border-black/10 transition-all duration-500 hover:shadow-2xl hover:shadow-black/5"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <stat.icon size={56} className="text-black" />
            </div>
            
            <div className="relative z-10">
              <p className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-gray-400 mb-4">
                {stat.name}
              </p>
              <p className="text-4xl font-black text-black tracking-tighter">
                {stat.value}
              </p>
              
              <div className="flex items-center gap-3 mt-6 text-[0.65rem] font-black w-fit bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100 uppercase tracking-widest">
                {stat.trend === "up" ? (
                  <ArrowUp size={14} className="text-emerald-500" />
                ) : (
                  <ArrowDown size={14} className="text-red-500" />
                )}
                <span className={stat.trend === "up" ? "text-emerald-500" : "text-red-500"}>
                  {stat.change}
                </span>
                <span className="text-gray-300 font-bold ml-1 italic">/ MO</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity Mockup */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 bg-white border border-gray-100 rounded-[3rem] p-10 shadow-2xl shadow-black/[0.02]">
          <h2 className="text-[0.7rem] font-black text-black mb-10 uppercase tracking-[0.4em] border-b border-gray-50 pb-4">
            Content Status
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between p-6 bg-gray-50 rounded-[2rem] border border-gray-100 hover:bg-white transition-colors duration-500 shadow-inner">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-black shadow-sm border border-gray-100">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-black text-black uppercase tracking-tight">Lighting the Shadows: Cinematic Guide</h3>
                  <p className="text-[0.65rem] font-bold text-gray-400 uppercase tracking-widest">Blog • Published 2 days ago</p>
                </div>
              </div>
              <span className="px-4 py-1.5 bg-black text-white text-[0.6rem] font-black uppercase tracking-[0.2em] rounded-full shadow-lg">
                Live
              </span>
            </div>

            <div className="flex items-center justify-between p-6 bg-gray-50 rounded-[2rem] border border-gray-100 hover:bg-white transition-colors duration-500 shadow-inner">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-gray-400 shadow-sm border border-gray-100">
                  <Camera size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-black text-black uppercase tracking-tight">Dune: Part Two Cinematography</h3>
                  <p className="text-[0.65rem] font-bold text-gray-400 uppercase tracking-widest">POV • Drafted</p>
                </div>
              </div>
              <span className="px-4 py-1.5 bg-white text-gray-300 text-[0.6rem] font-black uppercase tracking-[0.2em] rounded-full border border-gray-100">
                Draft
              </span>
            </div>
          </div>
        </div>

        <div className="bg-black rounded-[3rem] p-12 relative overflow-hidden flex flex-col items-center justify-center text-center shadow-2xl shadow-black/20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1974')] opacity-10 mix-blend-overlay bg-cover bg-center" />
          
          <div className="relative z-10 w-20 h-20 rounded-full bg-white/10 flex items-center justify-center text-white mb-6 border border-white/20 backdrop-blur-md">
             <PenTool size={32} />
          </div>
          
          <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">
            READY TO <span className="text-gray-500">WRITE?</span>
          </h3>
          <p className="text-[0.65rem] text-gray-400 mb-8 max-w-[200px] leading-relaxed font-bold uppercase tracking-[0.1em]">
            Create a new blog post or POV review directly from the interface.
          </p>
          
          <button className="w-full py-5 bg-white hover:bg-gray-200 text-black text-[0.7rem] font-black uppercase tracking-[0.3em] rounded-2xl transition-all shadow-xl">
             Draft New Post
          </button>
        </div>
      </div>
    </div>
  );
}
