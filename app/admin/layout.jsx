import AdminHeader from "@/components/AdminHeader";

export default function adminlayout({ children }) {
  return (
    <section>
      <AdminHeader />
      {children}
    </section>
  );
}
