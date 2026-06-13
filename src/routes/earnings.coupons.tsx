import { createFileRoute } from "@tanstack/react-router";
import { DataTable, PageHeader, StatCard } from "@/components/earnings/ui";
import { coupons, inr } from "@/lib/mock-earnings";

export const Route = createFileRoute("/earnings/coupons")({ component: Coupons });

function Coupons() {
  const totalCost = coupons.reduce((a, c) => a + c.cost, 0);
  const totalUsed = coupons.reduce((a, c) => a + c.used, 0);
  return (
    <div>
      <PageHeader title="Coupons & Discounts" desc="Marketing spend on promotional discounts." />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard label="Coupons Used" value={totalUsed} tone="primary" />
        <StatCard label="Marketing Spend" value={inr(totalCost)} tone="warning" />
        <StatCard label="Conversions" value={coupons.reduce((a, c) => a + c.conversions, 0)} tone="success" />
        <StatCard label="Active Codes" value={coupons.length} />
      </div>
      <DataTable
        rows={coupons}
        columns={[
          { key: "code", label: "Code", render: (r) => <span className="font-mono font-semibold">{r.code as string}</span> },
          { key: "used", label: "Used", align: "right" },
          { key: "discount", label: "Discount", align: "right", render: (r) => inr(r.discount as number) },
          { key: "cost", label: "Cost", align: "right", render: (r) => <span className="text-destructive">{inr(r.cost as number)}</span> },
          { key: "conversions", label: "Conversions", align: "right" },
        ]}
      />
    </div>
  );
}