import { createFileRoute } from "@tanstack/react-router";
import { Card, DataTable, PageHeader, SectionTitle, StatCard } from "@/components/earnings/ui";
import { inr, monthlyTrend } from "@/lib/mock-earnings";
import { Download } from "lucide-react";

export const Route = createFileRoute("/earnings/gst")({ component: GST });

function GST() {
  const rows = monthlyTrend.map((m) => ({
    month: m.month,
    gstCollected: Math.round(m.net * 0.18),
    gstPaid: Math.round(m.net * 0.04),
    vendorGst: Math.round(m.gbv * 0.05),
  }));
  return (
    <div>
      <PageHeader
        title="GST & Tax Reports"
        desc="Quarterly tax reports for filings."
        action={
          <div className="flex gap-2">
            <button className="text-sm rounded-md border bg-card px-3 py-1.5 inline-flex items-center gap-1.5"><Download className="h-3.5 w-3.5" /> PDF</button>
            <button className="text-sm rounded-md bg-primary text-primary-foreground px-3 py-1.5 inline-flex items-center gap-1.5"><Download className="h-3.5 w-3.5" /> Excel</button>
          </div>
        }
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard label="GST Collected (YTD)" value={inr(rows.reduce((a, r) => a + r.gstCollected, 0))} tone="primary" />
        <StatCard label="GST Paid" value={inr(rows.reduce((a, r) => a + r.gstPaid, 0))} />
        <StatCard label="Vendor GST" value={inr(rows.reduce((a, r) => a + r.vendorGst, 0))} />
        <StatCard label="Invoices Issued" value="1,483" tone="success" />
      </div>
      <Card>
        <SectionTitle>Monthly Breakdown</SectionTitle>
        <DataTable
          rows={rows}
          columns={[
            { key: "month", label: "Month" },
            { key: "gstCollected", label: "GST Collected", align: "right", render: (r) => inr(r.gstCollected as number) },
            { key: "gstPaid", label: "GST Paid", align: "right", render: (r) => inr(r.gstPaid as number) },
            { key: "vendorGst", label: "Vendor GST", align: "right", render: (r) => inr(r.vendorGst as number) },
          ]}
        />
      </Card>
    </div>
  );
}