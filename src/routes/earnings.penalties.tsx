import { createFileRoute } from "@tanstack/react-router";
import { DataTable, PageHeader } from "@/components/earnings/ui";
import { inr, penalties } from "@/lib/mock-earnings";

export const Route = createFileRoute("/earnings/penalties")({ component: Penalties });

function Penalties() {
  return (
    <div>
      <PageHeader title="Penalty Management" desc="Auto-deducted from vendor wallet for breaches." />
      <DataTable
        rows={penalties}
        columns={[
          { key: "id", label: "Penalty" },
          { key: "vendor", label: "Vendor" },
          { key: "reason", label: "Reason" },
          { key: "amount", label: "Deducted", align: "right", render: (r) => <span className="text-destructive font-semibold">- {inr(r.amount as number)}</span> },
          { key: "date", label: "Date" },
        ]}
      />
    </div>
  );
}