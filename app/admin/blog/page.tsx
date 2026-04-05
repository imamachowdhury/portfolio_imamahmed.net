import { Plus, Search, FileText, MoreVertical, Edit2, Trash2 } from "lucide-react";

export default function AdminBlogManagement() {
  const mockTableData = [
    { title: "Lighting the Shadows", status: "Published", date: "April 2, 2026", views: 1204 },
    { title: "Sony FX3 Workflows", status: "Published", date: "March 28, 2026", views: 985 },
    { title: "Pacing and Rhythm in Editing", status: "Draft", date: "March 15, 2026", views: 0 },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black italic uppercase tracking-tighter text-white">
            Blog <span className="text-blue-500">Posts</span>
          </h1>
          <p className="text-sm text-zinc-500 mt-1">
            Manage your articles, drafts, and categories here.
          </p>
        </div>
        
        <button className="flex justify-center items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)]">
          <Plus size={16} /> New Post
        </button>
      </div>

      <div className="bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-white/5 flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
            <input 
              type="text" 
              placeholder="Search posts..." 
              className="w-full bg-black/40 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-black/20 text-zinc-500 text-[10px] uppercase tracking-widest font-bold">
                <th className="p-4 rounded-tl-xl">Title</th>
                <th className="p-4">Status</th>
                <th className="p-4">Date</th>
                <th className="p-4">Views</th>
                <th className="p-4 text-right rounded-tr-xl">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {mockTableData.map((post, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-500 border border-white/5">
                        <FileText size={14} />
                      </div>
                      <span className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 text-[10px] uppercase tracking-widest font-bold rounded-md border ${
                      post.status === "Published" 
                        ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" 
                        : "bg-zinc-800 text-zinc-400 border-white/10"
                    }`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-zinc-400 font-medium">
                    {post.date}
                  </td>
                  <td className="p-4 text-sm text-zinc-400 font-medium tracking-wide">
                    {post.views}
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
                        <Edit2 size={14} />
                      </button>
                      <button className="p-2 text-zinc-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors">
                        <Trash2 size={14} />
                      </button>
                      <button className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
                        <MoreVertical size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
