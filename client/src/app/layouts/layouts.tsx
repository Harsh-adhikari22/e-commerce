"use client";
import React from "react";
import Adminlayout from "./admin-layout";
import { usePathname } from "next/navigation";
import ClientStoreLayout from "./client store layout";

const Layouts = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return pathname.includes("/admin") ? (
    <Adminlayout>{children}</Adminlayout>
  ) : (
    <ClientStoreLayout>{children}</ClientStoreLayout>
  );
};

export default Layouts;
