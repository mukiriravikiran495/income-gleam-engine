import { createFileRoute } from "@tanstack/react-router";
import { EarningsLayout } from "@/components/earnings/layout";

export const Route = createFileRoute("/earnings")({
  head: () => ({
    meta: [
      { title: "Earnings Admin · Shiftyng" },
      { name: "description", content: "Revenue, settlements, commissions, payouts and reports." },
    ],
  }),
  component: EarningsLayout,
});