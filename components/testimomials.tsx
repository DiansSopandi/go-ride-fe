'use client'

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const testimonials = [
    {
      name: "Budi",
      quote: "GoRide makes life easier—finding a driver is super fast!",
      img: "/images/testimonial2.png"
    },
    {
      name: "Sari",
      quote: "The app is lightweight and simple, perfect for all ages.",
      img: "/images/testimonial1.png"
    },
    {
      name: "Andi",
      quote: "GoRide drivers are friendly and professional.",
      img: "/images/testimonial6.png"
    },
    {
      name: "Dewi",
      quote: "GoRide's promotional features are really helpful, especially for students.",
      img: "/images/testimonial3.png"
    },
    {
      name: "Rama",
      quote: "I feel safe every time I ride with GoRide—the drivers are courteous.",
      img: "/images/testimonial5.png"
    },
    {
      name: "Lina",
      quote: "Customer service response is quick—the best!",
      img: "/images/testimonial4.png"
    },
  ]
  
export default function Testimonials() {
    const [index, setIndex] = useState(0)
    const len = testimonials.length
  
    const next = () => setIndex((prev) => (prev + 1) % len)
    const prev = () => setIndex((prev) => (prev - 1 + len) % len)

    useEffect(() => {
        const interval = setInterval(next, 5000)
        return () => clearInterval(interval)
      }, [])

      const { name, quote, img } = testimonials[index]  

    return (
        <section id="testimonials" className="py-16 px-4 bg-white dark:bg-muted" data-aos="fade-up">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h3 className="text-3xl font-bold text-green-700">What Users Say</h3>
        <div className="relative bg-background p-6 rounded-lg shadow flex flex-col items-center space-y-4">
          <Image
            src={img}
            alt={`Foto ${name}`}
            width={80}
            height={80}
            className="rounded-full border border-border shadow-sm"
          />
          <p className="italic text-lg max-w-lg text-primary-500">“{quote}”</p>
          <p className="mt-2 font-semibold text-primary-500">– {name}</p>

          <div className="flex justify-between items-center mt-4 w-full px-10">
            <button onClick={prev} className="p-2 hover:bg-muted rounded">
              <ChevronLeft className="h-5 w-5 text-green-600" />
            </button>
            <button onClick={next} className="p-2 hover:bg-muted rounded">
              <ChevronRight className="h-5 w-5 text-green-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
    )
  }