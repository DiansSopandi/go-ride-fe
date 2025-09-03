"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Home,
  Users,
  DollarSign,
  FileText,
  LogOut,
  Menu,
  X,
} from "lucide-react";

interface NavItem {
  name: string;
  href?: string;
  icon: React.ElementType;
  action?: () => void; // untuk logout atau action lain
  variant?: "default" | "danger";
}

const navItems: NavItem[] = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "Users", href: "/dashboard/users", icon: Users },
  { name: "Transactions", href: "/dashboard/transactions", icon: DollarSign },
  { name: "Reports", href: "/dashboard/reports", icon: FileText },
  {
    name: "Logout",
    icon: LogOut,
    action: () => console.log("Logout clicked"), // TODO: replace dengan real logout
    variant: "danger",
  },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => setOpen((prev) => !prev);
  const closeSidebar = () => setOpen(false);

  return (
    <>
      {/* Mobile toggle button */}
      <div className="p-4 lg:hidden">
        <button
          className="text-primary focus:outline-none"
          onClick={toggleSidebar}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 transform bg-card text-card-foreground shadow-lg transition-transform lg:relative lg:translate-x-0 lg:shadow-none flex flex-col",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <Link href="/dashboard" className="flex items-center gap-2">
            <Image
              src="/images/ride.png"
              alt="Logo"
              width={40}
              height={40}
              priority
              className="rounded-full"
            />
            <h2 className="text-lg font-bold text-primary">GoRide</h2>
          </Link>
          <button
            onClick={closeSidebar}
            className="lg:hidden text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 flex flex-col p-4 space-y-1">
          {navItems.map((item, idx) => {
            const isLogout = item.variant === "danger";
            const commonClasses =
              "flex items-center gap-2 px-3 py-2 rounded-md transition";

            if (item.href) {
              return (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={closeSidebar}
                  className={cn(
                    commonClasses,
                    "hover:bg-primary hover:text-primary-foreground"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              );
            }

            return (
              <button
                key={idx}
                onClick={() => {
                  item.action?.();
                  closeSidebar();
                }}
                className={cn(
                  commonClasses,
                  isLogout
                    ? "mt-auto text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
                    : "hover:bg-primary hover:text-primary-foreground"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
