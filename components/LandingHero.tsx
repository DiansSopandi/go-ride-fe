import Image from "next/image";
import Link from "next/link";
import "@/styles/landing.css";
import { Button } from "./ui/button";

export function LandingHero() {
    return (
        <section className="text-center px-6 max-w-lg w-full">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">GoRide</h1>
            <p className="text-lg mb-6">Your ride, anytime, anywhere. Fast. Reliable. Safe.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/login">
                <Button variant="outline" className="bg-white text-emerald-700 hover:bg-gray-100 w-full sm:w-auto">
                    Login
                </Button>
                </Link>
                <Link href="/register">
                <Button className="bg-emerald-800 hover:bg-emerald-900 w-full sm:w-auto">
                    Sign Up
                </Button>
                </Link>
            </div>

            <div className="mt-10">
                <Image
                src="/images/ride.png"
                alt="Ride Illustration"
                width={400}
                height={300}
                className="mx-auto rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
                />
            </div>
        </section>
    )
}