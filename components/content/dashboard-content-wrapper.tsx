"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface DashboardContentWrapperProps {
  title?: string;
  children: React.ReactNode;
}

export default function DashboardContentWrapper({
  title,
  children,
}: DashboardContentWrapperProps) {
    const pathname = usePathname();

    const segments = pathname
    .split("/")
    .filter((segment) => segment.length > 0);

  return (
    <main className="min-h-screen bg-background text-foreground p-6 mx-2 rounded-md">
         {/* Breadcrumbs */}
      <nav className="text-sm text-muted-foreground mb-4">
        <ol className="flex items-center space-x-2">
          {segments.map((segment, index) => {
            const href = "/" + segments.slice(0, index + 1).join("/");
            const isLast = index === segments.length - 1;

            return (
              <li key={index} className="flex items-center">
                {!isLast ? (
                  <Link href={href} className="hover:text-primary">
                    {capitalize(segment)}
                  </Link>
                ) : (
                  <span className="text-foreground font-medium">
                    {capitalize(segment)}
                  </span>
                )}
                {!isLast && <span className="mx-2">/</span>}
              </li>
            );
          })}
        </ol>
      </nav>

      {title && <h1 className="text-xl font-bold text-primary mb-6">{title}</h1>}
      <div className="max-w-6xl mx-auto space-y-6">{children}</div>
    </main>
  );
}

function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}