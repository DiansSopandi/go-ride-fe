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
    <div className="flex w-full h-screen overflow-hidden bg-gray-300">
      {/* <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}/> */}
      <Sidebar />
      <div className="flex flex-1  flex-col overflow-hidden">
        <DashboardNavbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}/>
        <main className="flex-1 overflow-y-auto mx-2 ">{children}</main>
      </div>
    </div>
  )
}
