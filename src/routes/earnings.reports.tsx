import { createFileRoute } from "@tanstack/react-router";
import { Card, PageHeader } from "@/components/earnings/ui";
import { reports } from "@/lib/mock-earnings";
import { Download, FileSpreadsheet, FileText } from "lucide-react";

export const Route = createFileRoute("/earnings/reports")({ component: Reports });

function Reports() {
  return (
    <div>
      <PageHeader title="Finance Reports" desc="Download standard reports for accounting, audits and filings." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reports.map((r) => (
          <Card key={r.name} className="flex flex-col">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-md bg-primary/10 text-primary grid place-items-center">
                <FileText className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm">{r.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{r.desc}</div>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <button className="flex-1 text-xs rounded-md border bg-card px-3 py-2 inline-flex items-center justify-center gap-1.5 hover:bg-muted">
                <Download className="h-3.5 w-3.5" /> PDF
              </button>
              <button className="flex-1 text-xs rounded-md bg-primary text-primary-foreground px-3 py-2 inline-flex items-center justify-center gap-1.5">
                <FileSpreadsheet className="h-3.5 w-3.5" /> Excel
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}