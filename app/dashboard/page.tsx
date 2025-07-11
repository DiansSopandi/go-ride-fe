"use client"
import PieChart from "@/components/content/pie-chart"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-primary">Dashboard Overview</h1>
      <PieChart />
    </div>
  )
}