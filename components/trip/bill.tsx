import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Car, Clock } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-md mx-auto space-y-6">
        
        {/* Header */}
        <div className="text-center py-6">
          <h1 className="text-3xl font-bold text-primary">GoRide UI</h1>
          <p className="text-muted-foreground mt-2">Setup Tailwind v3 + shadcn/ui ✅</p>
        </div>

        {/* Status Card */}
        <Card className="ride-card animate-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Car className="h-5 w-5 text-primary" />
              Driver Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span>Ahmad Driver</span>
              <Badge className="status-online bg-success text-white">Online</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Ride Info */}
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="text-lg">Current Ride</CardTitle>
            <CardDescription>Your ride details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-primary" />
              <div>
                <p className="font-medium">Pickup: Mall Taman Anggrek</p>
                <p className="text-sm text-muted-foreground">Destination: Senayan City</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Clock className="h-4 w-4 text-warning-500" />
              <div>
                <p className="font-medium">Estimated: 15 minutes</p>
                <p className="text-sm text-muted-foreground">Distance: 8.5 km</p>
              </div>
            </div>

            <div className="pt-4 border-t">
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium">Fare Estimate</span>
                <span className="text-xl font-bold text-primary">Rp 25.000</span>
              </div>
              
              <Button className="ride-button-primary w-full">
                Book This Ride
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Test Custom Utilities */}
        <div className="space-y-3">
          <Button variant="secondary" className="w-full">
            Secondary Button
          </Button>
          
          <div className="glass-effect p-4 rounded-lg">
            <p className="text-sm">Glass effect background</p>
          </div>

          <div className="flex gap-2">
            <Badge className="status-online">Online</Badge>
            <Badge className="status-waiting">Waiting</Badge>
            <Badge className="status-offline">Offline</Badge>
          </div>
        </div>

      </div>
    </main>
  )
}