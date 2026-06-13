import { createFileRoute } from "@tanstack/react-router";
import { Card, PageHeader, SectionTitle } from "@/components/earnings/ui";
import { inr, monthlyTrend, topCities, topVendors } from "@/lib/mock-earnings";
import { Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export const Route = createFileRoute("/earnings/analytics")({ component: Analytics });

const vehicleRevenue = [
  { name: "Bike", value: 280000 },
  { name: "Three Wheeler", value: 410000 },
  { name: "Tata Ace", value: 620000 },
  { name: "Packers & Movers", value: 540000 },
];
const COLORS = ["#4f46e5", "#10b981", "#f59e0b", "#ef4444"];

function Analytics() {
  return (
    <div>
      <PageHeader title="Earnings Analytics" desc="Trends across revenue, vendors, cities and vehicle mix." />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <Card>
          <SectionTitle>Revenue Trend</SectionTitle>
          <div className="h-64">
            <ResponsiveContainer>
              <BarChart data={monthlyTrend}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="month" fontSize={12} />
                <YAxis fontSize={12} tickFormatter={(v) => `₹${v/100000}L`} />
                <Tooltip formatter={(v: number) => inr(v)} />
                <Bar dataKey="gbv" fill="#4f46e5" radius={[4,4,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card>
          <SectionTitle>Revenue by Vehicle Type</SectionTitle>
          <div className="h-64">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={vehicleRevenue} dataKey="value" nameKey="name" outerRadius={90} label={(e) => e.name}>
                  {vehicleRevenue.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip formatter={(v: number) => inr(v)} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <SectionTitle>Top Vendors</SectionTitle>
          <ul className="divide-y">{topVendors.map((v) => (
            <li key={v.id} className="flex justify-between py-2.5 text-sm"><span>{v.name}</span><span className="font-semibold">{inr(v.earnings)}</span></li>
          ))}</ul>
        </Card>
        <Card>
          <SectionTitle>Top Cities</SectionTitle>
          <ul className="divide-y">{topCities.map((c) => (
            <li key={c.city} className="flex justify-between py-2.5 text-sm"><span>{c.city}</span><span className="font-semibold">{inr(c.revenue)}</span></li>
          ))}</ul>
        </Card>
      </div>
    </div>
  );
}