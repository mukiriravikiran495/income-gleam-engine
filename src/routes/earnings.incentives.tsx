import { createFileRoute } from "@tanstack/react-router";
import { DataTable, PageHeader, StatusBadge } from "@/components/earnings/ui";
import { incentiveRules, inr } from "@/lib/mock-earnings";

export const Route = createFileRoute("/earnings/incentives")({ component: Incentives });

function Incentives() {
  return (
    <div>
      <PageHeader title="Incentive Management" desc="Reward rules that boost vendor earnings." action={<button className="text-sm rounded-md bg-primary text-primary-foreground px-3 py-1.5">+ New Rule</button>} />
      <DataTable
        rows={incentiveRules}
        columns={[
          { key: "id", label: "Rule" },
          { key: "condition", label: "Condition" },
          { key: "reward", label: "Reward", align: "right", render: (r) => <span className="font-semibold text-success">{inr(r.reward as number)}</span> },
          { key: "active", label: "Status", render: (r) => <StatusBadge status={(r.active as boolean) ? "Active" : "Inactive"} /> },
          { key: "actions", label: "", align: "right", render: () => <button className="text-xs text-primary">Edit</button> },
        ]}
      />
    </div>
  );
}