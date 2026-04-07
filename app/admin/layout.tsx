import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-white overflow-hidden selection:bg-black selection:text-white">
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto bg-gray-50">
        <div className="max-w-7xl mx-auto p-6 md:p-14 w-full">
          {children}
        </div>
      </main>
    </div>
  );
}
