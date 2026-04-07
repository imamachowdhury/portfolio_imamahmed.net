"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Newspaper, 
  PenTool, 
  BookOpen, 
  Settings, 
  LogOut,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

const sidebarLinks = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Blog Posts", href: "/admin/blog", icon: Newspaper },
  { name: "POV Reviews", href: "/admin/pov", icon: PenTool },
  { name: "Academy", href: "/admin/academy", icon: BookOpen },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="md:hidden fixed top-6 right-6 z-50 p-3 bg-white border border-gray-100 rounded-2xl text-black shadow-xl"
      >
        {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar Container */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-72 bg-white border-r border-gray-100 transform transition-transform duration-500 ease-in-out flex flex-col
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:static md:h-screen shrink-0
      `}>
        {/* Brand Header */}
        <div className="h-28 flex items-center px-8 border-b border-gray-50">
          <Link href="/admin" className="text-2xl font-black italic tracking-tighter text-black uppercase">
            IMAM<span className="text-gray-300">ADMIN</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto py-10 px-6 space-y-2">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className={`
                  flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 text-[0.7rem] font-black uppercase tracking-[0.2em]
                  ${isActive 
                    ? "bg-black text-white shadow-2xl shadow-black/20" 
                    : "text-gray-400 hover:text-black hover:bg-gray-50"
                  }
                `}
              >
                <link.icon size={18} className={isActive ? "text-white" : "text-gray-300 group-hover:text-black transition-colors"} />
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Footer Actions */}
        <div className="p-8 border-t border-gray-50">
          <Link 
            href="/"
            className="flex items-center gap-4 px-5 py-4 text-[0.7rem] font-black uppercase tracking-[0.2em] text-gray-400 rounded-2xl hover:text-black hover:bg-gray-50 transition-all"
          >
            <LogOut size={18} />
            Back to Site
          </Link>
        </div>
      </aside>

      {/* Mobile Backdrop Overlay */}
      {isMobileOpen && (
        <div 
          onClick={() => setIsMobileOpen(false)}
          className="md:hidden fixed inset-0 z-30 bg-black/5 backdrop-blur-sm"
        />
      )}
    </>
  );
}
