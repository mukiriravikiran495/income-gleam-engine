import { createFileRoute } from "@tanstack/react-router";
import { DataTable, PageHeader } from "@/components/earnings/ui";
import { inr, ledger } from "@/lib/mock-earnings";

export const Route = createFileRoute("/earnings/ledger")({ component: Ledger });

function Ledger() {
  let bal = 0;
  const rows = ledger.map((l) => {
    bal += l.credit - l.debit;
    return { ...l, balance: bal };
  });
  return (
    <div>
      <PageHeader
        title="Vendor Settlement Ledger"
        desc="Every transaction recorded — full audit trail to avoid disputes."
        action={
          <select className="text-sm rounded-md border bg-card px-3 py-1.5">
            <option>V1001 — ABC Movers</option>
            <option>V1042 — XYZ Logistics</option>
          </select>
        }
      />
      <DataTable
        rows={rows}
        columns={[
          { key: "date", label: "Date" },
          { key: "description", label: "Description" },
          { key: "credit", label: "Credit", align: "right", render: (r) => (r.credit as number) ? <span className="text-success">{inr(r.credit as number)}</span> : "—" },
          { key: "debit", label: "Debit", align: "right", render: (r) => (r.debit as number) ? <span className="text-destructive">{inr(r.debit as number)}</span> : "—" },
          { key: "balance", label: "Balance", align: "right", render: (r) => <span className="font-semibold">{inr(r.balance as number)}</span> },
        ]}
      />
    </div>
  );
}