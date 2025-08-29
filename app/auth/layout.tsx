// app/(auth)/layout.tsx
'use client'

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { useCallback , useEffect, useRef, useState, type ReactNode } from "react";

const slides = [
  {
    type: "illustration",
    title: "Welcome to GoRide",
    description:
      "Your journey, your ride. Book, manage, and track your rides with ease in one secure platform.",
    image: "/images/ride_illustration.jpg",
  },
  {
    type: "testimonial",
    title: "Trusted by Millions",
    description:
      "“GoRide has made my daily commute so much easier. The drivers are reliable and the app is super easy to use.”",
    author: "Sarah, Jakarta",
    image: "/images/rlQN5ufL.jpg",
  },
  {
    type: "illustration",
    title: "Safe & Reliable",
    description:
      "Your safety is our top priority. All rides are tracked and drivers are verified.",
    image: "/images/z7ROmWXM.jpg",
  },
]

export default function AuthLayout({ children }: { readonly children: ReactNode }) {
    // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [selectedIndex, setSelectedIndex] = useState(0)
    const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false })) // 3 detik
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    // useEffect(() => {
    //     if (!emblaApi) return
    //     emblaApi.on("select", onSelect)
    // }, [emblaApi, onSelect])    


    useEffect(() => {
        if (!emblaApi) return
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
        emblaApi.on("select", onSelect)
        onSelect()
    }, [emblaApi])    

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


      {/* Right Section (Carousel) */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center text-white p-12 relative overflow-hidden">
        <div className="w-full max-w-lg" ref={emblaRef}>
          <div className="flex">
            {/* <Testimonials /> */}
            {slides.map((slide) => (
              <div
                key={slide.title}
                className="flex-[0_0_100%] flex flex-col items-center justify-center text-center px-6"
              >
                <h1 className="text-3xl font-bold">{slide.title}</h1>
                <p className="mt-4 text-lg text-gray-200">{slide.description}</p>
                {slide.image && (
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={300}
                    height={300}
                    className="mt-8 w-full max-w-sm mx-auto drop-shadow-lg rounded-lg"
                  />
                )}
                {slide.author && (
                  <p className="mt-4 italic text-sm text-gray-300">
                    — {slide.author}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex gap-2 mt-6 absolute bottom-6">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === selectedIndex ? "bg-white" : "bg-gray-400/50"
              }`}
              onClick={() => emblaApi?.scrollTo(i)}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
