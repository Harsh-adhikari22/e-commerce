import Side from "@/components/admin/sidebar/sidebar";
import { usePathname } from "next/navigation";
import React from "react";

const Adminlayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return !pathname.includes("admin/login") ? (
    <div className="flex min-h-[100vh]">
      <Side />
      <main className="flex-1 min-h-[100vh]">{children}</main>
    </div>
  ) : (
    children
  );
};

export default Adminlayout;
