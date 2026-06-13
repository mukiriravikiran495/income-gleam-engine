import { createFileRoute } from "@tanstack/react-router";
import { DataTable, PageHeader, StatusBadge } from "@/components/earnings/ui";
import { inr, refunds } from "@/lib/mock-earnings";

export const Route = createFileRoute("/earnings/refunds")({ component: Refunds });

function Refunds() {
  return (
    <div>
      <PageHeader title="Refund Management" desc="Refunds initiated for cancellations and disputes." action={<button className="text-sm rounded-md bg-primary text-primary-foreground px-3 py-1.5">+ Initiate Refund</button>} />
      <DataTable
        rows={refunds}
        columns={[
          { key: "id", label: "Refund" },
          { key: "bookingId", label: "Booking" },
          { key: "customer", label: "Customer" },
          { key: "paid", label: "Paid", align: "right", render: (r) => inr(r.paid as number) },
          { key: "refund", label: "Refund", align: "right", render: (r) => <span className="text-success font-semibold">{inr(r.refund as number)}</span> },
          { key: "cancelCharge", label: "Charge", align: "right", render: (r) => inr(r.cancelCharge as number) },
          { key: "reason", label: "Reason" },
          { key: "status", label: "Status", render: (r) => <StatusBadge status={r.status as string} /> },
        ]}
      />
    </div>
  );
}