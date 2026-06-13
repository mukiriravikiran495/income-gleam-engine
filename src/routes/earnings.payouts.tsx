import { createFileRoute } from "@tanstack/react-router";
import { DataTable, PageHeader, StatusBadge } from "@/components/earnings/ui";
import { inr, payoutRequests } from "@/lib/mock-earnings";

export const Route = createFileRoute("/earnings/payouts")({ component: Payouts });

function Payouts() {
  return (
    <div>
      <PageHeader title="Vendor Payout Requests" desc="Withdrawal requests from vendor wallets." />
      <DataTable
        rows={payoutRequests}
        columns={[
          { key: "id", label: "Request" },
          { key: "vendor", label: "Vendor" },
          { key: "amount", label: "Amount", align: "right", render: (r) => inr(r.amount as number) },
          { key: "requested", label: "Requested" },
          { key: "status", label: "Status", render: (r) => <StatusBadge status={r.status as string} /> },
          { key: "actions", label: "", align: "right", render: () => (
            <div className="flex justify-end gap-2 text-xs">
              <button className="text-success font-medium">Approve</button>
              <button className="text-destructive font-medium">Reject</button>
              <button className="text-warning-foreground font-medium">Hold</button>
            </div>
          ) },
        ]}
      />
    </div>
  );
}