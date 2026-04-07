import { Plus, Search, FileText, MoreVertical, Edit2, Trash2 } from "lucide-react";

export default function AdminBlogManagement() {
  const mockTableData = [
    { title: "Lighting the Shadows", status: "Published", date: "April 2, 2026", views: 1204 },
    { title: "Sony FX3 Workflows", status: "Published", date: "March 28, 2026", views: 985 },
    { title: "Pacing and Rhythm in Editing", status: "Draft", date: "March 15, 2026", views: 0 },
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase tracking-tighter text-black leading-tight">
            BLOG <span className="text-gray-200">POSTS</span>
          </h1>
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.3em] text-gray-400 mt-3">
            Manage your articles, drafts, and categories here.
          </p>
        </div>
        
        <button className="flex justify-center items-center gap-3 bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl text-[0.7rem] font-black uppercase tracking-[0.2em] transition-all shadow-xl shadow-black/10">
          <Plus size={18} /> New Post
        </button>
      </div>

      <div className="bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/[0.02]">
        <div className="p-6 border-b border-gray-50 flex gap-4 bg-gray-50/50">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search posts..." 
              className="w-full bg-white border border-gray-100 rounded-xl pl-12 pr-6 py-3 text-[0.7rem] font-bold uppercase tracking-widest text-black placeholder:text-gray-300 focus:outline-none focus:border-black transition-all"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/80 text-gray-400 text-[0.6rem] uppercase tracking-[0.3em] font-black border-b border-gray-50">
                <th className="px-8 py-6 rounded-tl-xl">Title</th>
                <th className="px-8 py-6">Status</th>
                <th className="px-8 py-6">Date</th>
                <th className="px-8 py-6">Views</th>
                <th className="px-8 py-6 text-right rounded-tr-xl">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {mockTableData.map((post, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-300 border border-gray-100 group-hover:bg-white transition-colors group-hover:text-black">
                        <FileText size={16} />
                      </div>
                      <span className="text-sm font-black text-black uppercase tracking-tight group-hover:text-gray-600 transition-colors">
                        {post.title}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-4 py-1.5 text-[0.6rem] uppercase tracking-[0.2em] font-black rounded-full border ${
                      post.status === "Published" 
                        ? "bg-black text-white border-black shadow-lg" 
                        : "bg-white text-gray-300 border-gray-100"
                    }`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-[0.65rem] text-gray-400 font-bold uppercase tracking-widest">
                    {post.date}
                  </td>
                  <td className="px-8 py-6 text-[0.65rem] text-gray-400 font-black tracking-widest">
                    {post.views}
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0 translate-x-2">
                      <button className="p-3 text-gray-400 hover:text-black hover:bg-white rounded-xl border border-transparent hover:border-gray-100 shadow-sm transition-all">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-3 text-gray-400 hover:text-red-500 hover:bg-white rounded-xl border border-transparent hover:border-gray-100 shadow-sm transition-all">
                        <Trash2 size={16} />
                      </button>
                      <button className="p-3 text-gray-400 hover:text-black hover:bg-white rounded-xl border border-transparent hover:border-gray-100 shadow-sm transition-all">
                        <MoreVertical size={16} />
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
