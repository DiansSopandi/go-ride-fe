"use client"

import { useEffect } from "react"
import "aos/dist/aos.css"
import AOS from "aos"

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: "ease-in-out",
    })
  }, [])

  return null
}
