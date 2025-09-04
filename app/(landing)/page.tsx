import AOSInitializer from "@/components/AOSInitializer";
import Features from "@/components/feature";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import Newsletter from "@/components/newsletter";
import Testimonials from "@/components/testimomials";

export const metadata = {
  title: "GoRide - Aplikasi Transportasi Online",
  description: "GoRide adalah aplikasi transportasi online yang memudahkan perjalanan Anda dengan layanan cepat dan aman.",
  openGraph: {
    title: "GoRide - Aplikasi Transportasi Online",
    description: "GoRide adalah aplikasi transportasi online yang memudahkan perjalanan Anda dengan layanan cepat dan aman.",
    url: "https://yourdomain.com",
    images: ["/images/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "GoRide - Aplikasi Transportasi Online",
    description: "GoRide adalah aplikasi transportasi online yang memudahkan perjalanan Anda dengan layanan cepat dan aman.",
    images: ["/images/og-image.png"],
  },
};

export default function LandingPage() {
    return(
        <>

            {/* <Script
                src="https://unpkg.com/aos@2.3.1/dist/aos.js"
                strategy="afterInteractive"
                onLoad={() => {
                // @ts-ignore
                AOS.init({ once: true })
                }}
            /> */}
            <link
                rel="stylesheet"
                href="https://unpkg.com/aos@2.3.1/dist/aos.css"
            />

            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow">
                    <AOSInitializer />
                    <Hero />
                    <Features />
                    <Testimonials />
                    <Newsletter />
                </main>
                <Footer />
            </div>
        </>
    )
}