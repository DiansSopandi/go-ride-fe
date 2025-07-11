import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility functions for ride-sharing app
export function formatPrice(amount: number, currency = 'IDR'): string {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
    }).format(amount)
  }
  
  export function formatDistance(meters: number): string {
    if (meters < 1000) {
      return `${Math.round(meters)} m`
    }
    return `${(meters / 1000).toFixed(1)} km`
  }
  
  export function formatDuration(seconds: number): string {
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    
    if (hours > 0) {
      return `${hours}j ${minutes % 60}m`
    }
    return `${minutes}m`
  }
  
  export function getStatusColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'online':
      case 'active':
      case 'available':
        return 'text-success-600'
      case 'offline':
      case 'inactive':
      case 'unavailable':
        return 'text-danger-600'
      case 'waiting':
      case 'pending':
      case 'busy':
        return 'text-warning-600'
      default:
        return 'text-muted-foreground'
    }
  }
  
  export function generateRideId(): string {
    return `RIDE-${Date.now()}-${Math.random().toString(36).substr(2, 5).toUpperCase()}`
  }
  
  export function calculateEstimatedFare(distance: number, duration: number, baseRate = 3000): number {
    const distanceRate = 2000 // per km
    const timeRate = 300 // per minute
    
    const distanceCost = (distance / 1000) * distanceRate
    const timeCost = (duration / 60) * timeRate
    
    return Math.round(baseRate + distanceCost + timeCost)
  }