import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, PageHeader, SectionTitle, StatCard } from "@/components/earnings/ui";
import {
  inr,
  monthlyTrend,
  todayKPIs,
  topCities,
  topVendors,
  weeklyRevenue,
} from "@/lib/mock-earnings";

export const Route = createFileRoute("/earnings/")({ component: Dashboard });

function Dashboard() {
  return (
    <div>
      <PageHeader
        title="Revenue Dashboard"
        desc="Live view of bookings, earnings and payouts across the platform."
        action={
          <div className="flex gap-2">
            <select className="text-sm rounded-md border bg-card px-3 py-1.5">
              <option>Today</option>
              <option>This Week</option>
              <option>This Month</option>
            </select>
            <button className="text-sm rounded-md bg-primary text-primary-foreground px-3 py-1.5">
              Export
            </button>
          </div>
        }
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <StatCard label="Total Bookings" value={todayKPIs.totalBookings} sub="Today" trend="+12.4%" tone="primary" />
        <StatCard label="Completed" value={todayKPIs.completedBookings} sub={`${Math.round((todayKPIs.completedBookings/todayKPIs.totalBookings)*100)}% conversion`} tone="success" />
        <StatCard label="Cancelled" value={todayKPIs.cancelledBookings} sub="Today" tone="destructive" />
        <StatCard label="Gross Revenue" value={inr(todayKPIs.grossRevenue)} trend="+8.1%" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard label="Platform Earnings" value={inr(todayKPIs.platformEarnings)} tone="primary" />
        <StatCard label="Vendor Earnings" value={inr(todayKPIs.vendorEarnings)} />
        <StatCard label="Pending Payouts" value={inr(todayKPIs.pendingPayouts)} tone="warning" />
        <StatCard label="GST Collected" value={inr(todayKPIs.gstCollected)} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <Card className="lg:col-span-2">
          <SectionTitle>Weekly Revenue Trend</SectionTitle>
          <div className="h-64">
            <ResponsiveContainer>
              <LineChart data={weeklyRevenue}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="day" fontSize={12} />
                <YAxis fontSize={12} tickFormatter={(v) => `₹${v/1000}k`} />
                <Tooltip formatter={(v: number) => inr(v)} />
                <Line type="monotone" dataKey="revenue" stroke="#4f46e5" strokeWidth={2.5} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card>
          <SectionTitle>Booking Trend</SectionTitle>
          <div className="h-64">
            <ResponsiveContainer>
              <BarChart data={weeklyRevenue}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="day" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Bar dataKey="bookings" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <Card>
          <SectionTitle>Top Cities</SectionTitle>
          <ul className="divide-y">
            {topCities.map((c, i) => (
              <li key={c.city} className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <span className="h-7 w-7 grid place-items-center rounded-md bg-muted text-xs font-semibold">{i + 1}</span>
                  <div>
                    <div className="font-medium text-sm">{c.city}</div>
                    <div className="text-xs text-muted-foreground">{c.bookings} bookings</div>
                  </div>
                </div>
                <div className="text-sm font-semibold">{inr(c.revenue)}</div>
              </li>
            ))}
          </ul>
        </Card>
        <Card>
          <SectionTitle action={<Link to="/earnings/wallets" className="text-xs text-primary">View all</Link>}>Top Vendors</SectionTitle>
          <ul className="divide-y">
            {topVendors.map((v) => (
              <li key={v.id} className="flex items-center justify-between py-3">
                <div>
                  <div className="font-medium text-sm">{v.name}</div>
                  <div className="text-xs text-muted-foreground">{v.id} · ★ {v.rating} · {v.bookings} bookings</div>
                </div>
                <div className="text-sm font-semibold">{inr(v.earnings)}</div>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card>
        <SectionTitle>Monthly Overview</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <StatCard label="GBV (Jun)" value={inr(monthlyTrend.at(-1)!.gbv)} tone="primary" />
          <StatCard label="Net Revenue" value={inr(monthlyTrend.at(-1)!.net)} tone="success" />
          <StatCard label="Vendor Settlements" value={inr(10750000)} />
          <StatCard label="Refunds" value={inr(monthlyTrend.at(-1)!.refunds)} tone="destructive" />
        </div>
        <div className="h-72">
          <ResponsiveContainer>
            <BarChart data={monthlyTrend}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <XAxis dataKey="month" fontSize={12} />
              <YAxis fontSize={12} tickFormatter={(v) => `₹${v/100000}L`} />
              <Tooltip formatter={(v: number) => inr(v)} />
              <Bar dataKey="gbv" fill="#4f46e5" radius={[4,4,0,0]} />
              <Bar dataKey="net" fill="#10b981" radius={[4,4,0,0]} />
              <Bar dataKey="refunds" fill="#f59e0b" radius={[4,4,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}