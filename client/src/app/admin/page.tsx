"use client";
import Side from "@/components/admin/sidebar/sidebar";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/admin/dashboard");
  });
  return (
    <div
      style={{
        position: "relative",
        right: "100vh",
      }}
    >
      <Side />
    </div>
  );
};

export default Page;
