import { createFileRoute } from "@tanstack/react-router";
import { Card, DataTable, PageHeader, SectionTitle, StatusBadge } from "@/components/earnings/ui";
import { inr, settlements } from "@/lib/mock-earnings";

export const Route = createFileRoute("/earnings/settlements")({ component: Settlements });

function Settlements() {
  return (
    <div>
      <PageHeader
        title="Settlement Management"
        desc="Generate, approve, hold and release vendor settlements."
        action={<button className="text-sm rounded-md bg-primary text-primary-foreground px-3 py-1.5">Generate Settlement</button>}
      />
      <Card className="mb-4">
        <SectionTitle>Settlement Cycle</SectionTitle>
        <div className="flex flex-wrap gap-2">
          {["Daily", "Weekly", "Biweekly", "Monthly"].map((c) => (
            <button key={c} className={`px-3 py-1.5 text-sm rounded-md border ${c === "Weekly" ? "bg-primary text-primary-foreground border-primary" : "bg-card"}`}>{c}</button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-3">Currently weekly · Monday → Sunday earnings transferred every Tuesday.</p>
      </Card>
      <DataTable
        rows={settlements}
        columns={[
          { key: "id", label: "Settlement ID" },
          { key: "vendor", label: "Vendor" },
          { key: "period", label: "Period" },
          { key: "amount", label: "Amount", align: "right", render: (r) => <span className="font-semibold">{inr(r.amount as number)}</span> },
          { key: "status", label: "Status", render: (r) => <StatusBadge status={r.status as string} /> },
          { key: "actions", label: "", align: "right", render: () => (
            <div className="flex justify-end gap-2 text-xs">
              <button className="text-success font-medium">Approve</button>
              <button className="text-warning-foreground font-medium">Hold</button>
              <button className="text-primary font-medium">Release</button>
            </div>
          ) },
        ]}
      />
    </div>
  );
}