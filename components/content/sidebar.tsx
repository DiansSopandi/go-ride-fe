'use client'

import Link from "next/link"
import { Home, PieChart, Users, LogOut, FileText, Menu, DollarSign, X   } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"
import clsx from "clsx"

const navItems = [
    { name: "Home", href: "/dashboard", icon: Home },
    { name: "Users", href: "/dashboard/users", icon: Users },
    { name: "Transactions", href: "/dashboard/transactions", icon: DollarSign },
    { name: "Reports", href: "/dashboard/reports", icon: FileText },
  ]

// export default function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
export default function Sidebar() {
    const [open, setOpen] = useState(false);

  const hideSideBar = () => {
      setOpen(false);
  };

  return (
    <>
        <div className="lg:hidden md:hidden p-4">
            <button
                className="text-primary focus:outline-none"
                onClick={() => setOpen(!open)}
            >
                {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
        </div>   
        {/* <button
            onClick={onClose}
            className={clsx(
            "fixed inset-0 bg-black/50 z-40 transition-opacity md:hidden",
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
            aria-label="Close sidebar"
        /> */}

        <aside className={cn(
        "bg-card text-card-foreground w-64 p-4 space-y-4 fixed inset-y-0 left-0 z-50 transform transition-transform lg:translate-x-0 lg:relative lg:shadow-none shadow-lg bg-white dark:bg-muted",
        open ? "translate-x-0" : "-translate-x-full"
        )}>
        {/* <aside
            className={clsx(
            // "fixed  left-0 top-0 h-full w-64 bg-white dark:bg-muted shadow-lg z-50 transform transition-transform duration-300 md:translate-x-0 md:static md:shadow-none",
            "fixed md:static top-0 left-0 h-full w-64 bg-white dark:bg-muted shadow-lg z-50 transform transition-transform duration-300",
            // isOpen ? "translate-x-0" : "-translate-x-full"
            {
                "translate-x-0": isOpen,
                "-translate-x-full md:translate-x-0": !isOpen, // ← ini penting
              }
            )}
        > */}
            {/* <div className="flex flex-col justify-between h-full px-4 py-3 border-b border-border md:hidden"> */}
            <div
                className="flex flex-col focus:outline-none"
                onClick={() => hideSideBar()}
                aria-label="Hide Sidebar"
            >
                <Link href="/dashboard" className="flex flex-col items-center hover:text-primary">
                    <Image src="/images/ride.png" alt="Logo" width={50} height={50} priority className="rounded-full" />
                    <h2 className="text-xl font-bold text-primary mb-6">GoRide</h2>
                </Link>
                <button onClick={()=>hideSideBar()} className="lg:hidden ml-auto text-muted-foreground hover:text-muted-foreground">
                    <X className="w-5 h-5" />
                </button>
            </div>
            <nav className="space-y-3 p-4">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center space-x-2 px-3 py-2 rounded hover:bg-muted transition"
                    >
                        <button className="flex items-center space-x-2" onClick={() => hideSideBar()} aria-label="Hide Sidebar">
                            <item.icon className="w-5 h-5" />
                        <span>{item.name}</span>
                        </button>
                    </Link>
                ))}
            </nav>
        </aside>
    </>
  )
}