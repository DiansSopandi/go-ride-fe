"use client"
import { PieChart as RePieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Completed", value: 60 },
  { name: "Cancelled", value: 15 },
  { name: "Ongoing", value: 25 },
]

const COLORS = ["#22c55e", "#f97316", "#3b82f6"]

export default function PieChart() {
  return (
    <div className="w-full h-72">
      <ResponsiveContainer>
        <RePieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8">
            {data.map((_, index) => (
              <Cell key={`cell-${data[index].name}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </RePieChart>
      </ResponsiveContainer>
    </div>
  )
}