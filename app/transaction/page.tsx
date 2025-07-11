// ✅ Halaman Transaksi Terpisah GoRide App

// File: app/(transaction)/page.tsx
import Link from "next/link"
import Image from "next/image"

export default function TransactionPage() {
  return (
    <main className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="ride-card">
          <h2 className="text-2xl font-bold mb-2">Recent Transaction</h2>
          <p className="text-muted-foreground mb-4">Here are the details of your most recent trip with GoRide.</p>

          <div className="flex items-center gap-4">
            <Image
              src="/images/ride.png"
              alt="Driver"
              width={100}
              height={100}
              className="rounded-full shadow-md"
            />
            <div>
              <p className="font-semibold text-lg">Driver Name: Ahmad Yusuf</p>
              <p className="text-sm text-muted-foreground">License Plate: B 1234 XYZ</p>
              <p className="text-sm text-muted-foreground">Duration: 15 menit</p>
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <div className="flex justify-between">
              <span>Pickup:</span>
              <span className="font-medium">Jl. Sudirman</span>
            </div>
            <div className="flex justify-between">
              <span>Drop-off:</span>
              <span className="font-medium">Senayan City</span>
            </div>
            <div className="flex justify-between">
              <span>Total Fare:</span>
              <span className="font-bold text-primary">Rp 25.000</span>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link href="/report-summary">
              <div className="ride-button-secondary">View Trip Summary</div>
            </Link>
          </div>
        </div>

        <div className="ride-card text-center">
          <p className="text-muted-foreground">Thanks for riding with GoRide 🚀</p>
        </div>
      </div>
    </main>
  )
}
