"use client"
import DashboardContentWrapper from "@/components/content/dashboard-content-wrapper"
import PieChart from "@/components/content/pie-chart"

export default function DashboardPage() {
  return (
      <DashboardContentWrapper title="Dashboard Overview">
        <PieChart />
      </DashboardContentWrapper>
  )
}