import AOSInitializer from "@/components/AOSInitializer";
import { Card } from "@/components/card";
import Features from "@/components/feature";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import Newsletter from "@/components/newsletter";
import Testimonials from "@/components/testimomials";
import Head from "next/head";
import Script from "next/script";

export default function LandingPage() {
    return(
        <>
            <Head>
                <title>GoRide - Aplikasi Transportasi Online</title>
                <meta name="description" content="GoRide adalah aplikasi transportasi online yang memudahkan perjalanan Anda dengan layanan cepat dan aman." />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#4CAF50" />
                <meta property="og:title" content="GoRide - Aplikasi Transportasi Online" />
                <meta property="og:description" content="GoRide adalah aplikasi transportasi online yang memudahkan perjalanan Anda dengan layanan cepat dan aman." />
                <meta property="og:image" content="/images/og-image.png" />
                <meta property="og:url" content="https://yourdomain.com" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="GoRide - Aplikasi Transportasi Online" />
                <meta name="twitter:description" content="GoRide adalah aplikasi transportasi online yang memudahkan perjalanan Anda dengan layanan cepat dan aman." />
                <meta name="twitter:image" content="/images/og-image.png" />
            </Head>

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