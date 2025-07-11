'use client'

import Sidebar from "@/components/content/sidebar"
import DashboardNavbar from "@/components/content/navbar"
import { useState } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  return (
    <div className="flex w-full min-h-screen bg-muted">
      {/* <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}/> */}
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <DashboardNavbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}/>
        <div className="p-4">{children}</div>
      </main>
    </div>
  )
}
