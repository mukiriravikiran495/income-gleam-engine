import { createFileRoute } from "@tanstack/react-router";
import { DataTable, PageHeader, StatCard } from "@/components/earnings/ui";
import { inr, vendorWallets } from "@/lib/mock-earnings";

export const Route = createFileRoute("/earnings/wallets")({ component: Wallets });

function Wallets() {
  const totals = vendorWallets.reduce(
    (a, w) => ({ completed: a.completed + w.completed, pending: a.pending + w.pending, available: a.available + w.available, withdrawn: a.withdrawn + w.withdrawn }),
    { completed: 0, pending: 0, available: 0, withdrawn: 0 },
  );
  return (
    <div>
      <PageHeader title="Vendor Wallets" desc="Earnings, pending settlements and withdrawable balance for each vendor." />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard label="Total Completed" value={inr(totals.completed)} tone="success" />
        <StatCard label="Pending Settlement" value={inr(totals.pending)} tone="warning" />
        <StatCard label="Withdrawn" value={inr(totals.withdrawn)} />
        <StatCard label="Available Balance" value={inr(totals.available)} tone="primary" />
      </div>
      <DataTable
        rows={vendorWallets}
        columns={[
          { key: "id", label: "Vendor ID" },
          { key: "name", label: "Vendor" },
          { key: "completed", label: "Completed", align: "right", render: (r) => inr(r.completed as number) },
          { key: "pending", label: "Pending", align: "right", render: (r) => <span className="text-warning-foreground">{inr(r.pending as number)}</span> },
          { key: "withdrawn", label: "Withdrawn", align: "right", render: (r) => inr(r.withdrawn as number) },
          { key: "available", label: "Available", align: "right", render: (r) => <span className="font-semibold text-success">{inr(r.available as number)}</span> },
        ]}
      />
    </div>
  );
}