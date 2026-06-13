import { createFileRoute } from "@tanstack/react-router";
import { Card, DataTable, PageHeader, SectionTitle } from "@/components/earnings/ui";
import { commissionConfig, inr } from "@/lib/mock-earnings";

export const Route = createFileRoute("/earnings/commissions")({ component: Commissions });

function Commissions() {
  return (
    <div>
      <PageHeader title="Commission Management" desc="Configure platform commission per vendor / vehicle type." action={<button className="text-sm rounded-md bg-primary text-primary-foreground px-3 py-1.5">+ Add Rule</button>} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <DataTable
            rows={commissionConfig}
            columns={[
              { key: "vehicleType", label: "Vehicle Type" },
              { key: "commission", label: "Commission %", align: "right", render: (r) => <span className="font-semibold">{r.commission as number}%</span> },
              { key: "baseFare", label: "Min Base Fare", align: "right", render: (r) => inr(r.baseFare as number) },
              { key: "actions", label: "", align: "right", render: () => <button className="text-xs text-primary">Edit</button> },
            ]}
          />
        </div>
        <Card>
          <SectionTitle>Live Preview</SectionTitle>
          <div className="text-xs text-muted-foreground mb-3">Sample: ₹1,000 booking at 15% commission</div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span>Booking Amount</span><span>{inr(1000)}</span></div>
            <div className="flex justify-between"><span>Commission (15%)</span><span className="text-destructive">- {inr(150)}</span></div>
            <div className="flex justify-between font-semibold border-t pt-2"><span>Vendor Receives</span><span className="text-success">{inr(850)}</span></div>
            <div className="flex justify-between text-primary font-medium"><span>Shiftyng Earns</span><span>{inr(150)}</span></div>
          </div>
        </Card>
      </div>
    </div>
  );
}