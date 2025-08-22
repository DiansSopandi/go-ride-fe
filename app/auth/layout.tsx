// app/(auth)/layout.tsx
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export default function AuthLayout({ children }: { readonly children: ReactNode }) {
  return (
    // <div className="flex min-h-screen w-full bg-gradient-to-br from-emerald-500 to-emerald-500">
    <div className="flex min-h-screen w-full bg-emerald-700">
      {/* Left Section (Branding / Illustration) */}
      <div className="flex w-full lg:w-1/2 items-center justify-center px-6 sm:px-12 relative">
        {/* Back to Home */}
        <Link
          href="/"
          className="fixed top-3 left-6 z-50
            inline-flex items-center gap-2
            px-2 py-1 rounded-xl text-sm font-medium
            bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-md
            hover:scale-105 hover:shadow-lg transition
            sm:px-5 sm:py-3 sm:text-base"
        >
          <span className="text-lg sm:text-xl">🏠</span>
          <span className="hidden sm:inline">Back to Home</span>
        </Link>

        <div className="w-full max-w-xl space-y-6">
          <div className="bg-white rounded-xl shadow-xl p-8">{children}</div>
          <p className="text-xs text-gray-400 text-center">
            © {new Date().getFullYear()} GoRide. All rights reserved.
          </p>
        </div>
      </div>      

      {/* Right Section (Form) */}
      <div className="hidden lg:flex lg:w-1/2 flex-col items-center justify-center text-white p-12 relative">
        {/* <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" /> */}
        <div className="absolute inset-0 " />
        <div className="relative z-10 max-w-md text-center">
          {/* <Image
            src="/images/ride.png"
            alt="GoRide Logo"
            className="mx-auto mb-6 rounded-full"
            width={100}
            height={100}
          /> */}
          <h1 className="text-3xl font-bold">Welcome to GoRide</h1>
          <p className="mt-4 text-lg text-gray-200">
            Your journey, your ride. Book, manage, and track your rides with ease
            in one secure platform.
          </p>
          <Image
            src="/images/ride_illustration.jpg"
            alt="GoRide Illustration"
            className="mt-8 w-full max-w-sm mx-auto drop-shadow-lg rounded-lg"
            width={300}
            height={400}
          />
        </div>
      </div>

    </div>
  );
}
