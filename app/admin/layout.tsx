import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-black overflow-hidden selection:bg-blue-500/30">
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto bg-zinc-950/50">
        <div className="max-w-7xl mx-auto p-6 md:p-10 w-full">
          {children}
        </div>
      </main>
    </div>
  );
}
