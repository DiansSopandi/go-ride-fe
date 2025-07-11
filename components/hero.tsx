'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

export const Hero = () => {
    return(
        <section className="min-h-[80vh] flex item-center justify-center text-center px-4 py-5 dark:bg-muted">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                {...{ className: "space-y-6 max-w-xl" }}
            >
                {/* Left Content */}
                <div data-aos="fade-up" className="text-center lg:text-left space-y-6 flex-1">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                        Fast & Comfortable Rides
                    </h2>
                    <p className="text-primary text-base md:text-lg max-w-md mx-auto lg:mx-0">
                        Enjoy affordable rides with GoRide. Book a motorcycle driver with just one click!
                    </p>

                    <div className="flex justify-center lg:justify-start gap-4">
                        <a href="/login" className="ride-button-primary">Book Now</a>
                        <a href="/register" className="ride-button-secondary">Join Driver</a>
                    </div>
                    <div>
                    <Link href="/transaction"><div className="ride-button-primary">Lihat Transaksi Saya</div></Link>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 w-full max-w-sm mx-auto">
                    <Image
                        src="/images/ride.png"
                        alt="Ride Illustration"
                        width={500}
                        height={400}
                        priority
                        style={{ height: "auto" }}
                        className="rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
                    />
                </div>
            </motion.div>
        </section>
    )
}