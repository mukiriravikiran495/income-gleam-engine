import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { DataTable, PageHeader, StatusBadge } from "@/components/earnings/ui";
import { bookings, inr } from "@/lib/mock-earnings";

export const Route = createFileRoute("/earnings/bookings")({ component: BookingsLayout });

function BookingsLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname !== "/earnings/bookings") return <Outlet />;
  return (
    <div>
      <PageHeader title="Booking Earnings" desc="Per-booking breakdown of customer payment, platform fee, GST and vendor settlement." />
      <DataTable
        rows={bookings}
        columns={[
          { key: "id", label: "Booking", render: (r) => <Link to="/earnings/bookings/$id" params={{ id: r.id as string }} className="font-medium text-primary">{r.id as string}</Link> },
          { key: "customer", label: "Customer" },
          { key: "vendor", label: "Vendor" },
          { key: "vehicleType", label: "Vehicle" },
          { key: "customerPayment", label: "Paid", align: "right", render: (r) => inr(r.customerPayment as number) },
          { key: "shiftyngEarnings", label: "Commission", align: "right", render: (r) => inr(r.shiftyngEarnings as number) },
          { key: "vendorSettlement", label: "Vendor", align: "right", render: (r) => inr(r.vendorSettlement as number) },
          { key: "status", label: "Status", render: (r) => <StatusBadge status={r.status as string} /> },
        ]}
      />
    </div>
  );
}