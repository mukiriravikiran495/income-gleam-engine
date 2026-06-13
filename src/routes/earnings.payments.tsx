import { createFileRoute } from "@tanstack/react-router";
import { DataTable, PageHeader, StatCard, StatusBadge } from "@/components/earnings/ui";
import { bookings, inr } from "@/lib/mock-earnings";

export const Route = createFileRoute("/earnings/payments")({ component: Payments });

function Payments() {
  const counts = bookings.reduce<Record<string, number>>((a, b) => ((a[b.paymentStatus] = (a[b.paymentStatus] || 0) + 1), a), {});
  return (
    <div>
      <PageHeader title="Payment Tracking" desc="All customer transactions with payment status." />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard label="Success" value={counts.Success || 0} tone="success" />
        <StatCard label="Pending" value={counts.Pending || 0} tone="warning" />
        <StatCard label="Failed" value={counts.Failed || 0} tone="destructive" />
        <StatCard label="Refunded" value={counts.Refunded || 0} />
      </div>
      <DataTable
        rows={bookings}
        columns={[
          { key: "id", label: "Booking" },
          { key: "customer", label: "Customer" },
          { key: "customerPayment", label: "Amount", align: "right", render: (r) => inr(r.customerPayment as number) },
          { key: "date", label: "Date" },
          { key: "paymentStatus", label: "Status", render: (r) => <StatusBadge status={r.paymentStatus as string} /> },
        ]}
      />
    </div>
  );
}