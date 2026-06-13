import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function PageHeader({ title, desc, action }: { title: string; desc?: string; action?: ReactNode }) {
  return (
    <div className="flex items-start justify-between mb-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        {desc && <p className="text-sm text-muted-foreground mt-1">{desc}</p>}
      </div>
      {action}
    </div>
  );
}

export function StatCard({
  label,
  value,
  sub,
  trend,
  tone = "default",
}: {
  label: string;
  value: string | number;
  sub?: string;
  trend?: string;
  tone?: "default" | "success" | "warning" | "destructive" | "primary";
}) {
  const toneRing: Record<string, string> = {
    default: "",
    success: "border-l-4 border-l-success",
    warning: "border-l-4 border-l-warning",
    destructive: "border-l-4 border-l-destructive",
    primary: "border-l-4 border-l-primary",
  };
  return (
    <div className={cn("rounded-lg border bg-card p-4", toneRing[tone])}>
      <div className="text-xs uppercase tracking-wide text-muted-foreground">{label}</div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
      {(sub || trend) && (
        <div className="mt-1 text-xs text-muted-foreground flex items-center gap-2">
          {trend && <span className="text-success font-medium">{trend}</span>}
          {sub}
        </div>
      )}
    </div>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("rounded-lg border bg-card p-5", className)}>{children}</div>;
}

export function SectionTitle({ children, action }: { children: ReactNode; action?: ReactNode }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-sm font-semibold text-foreground">{children}</h2>
      {action}
    </div>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    Completed: "bg-success/10 text-success",
    Success: "bg-success/10 text-success",
    Approved: "bg-success/10 text-success",
    Released: "bg-success/10 text-success",
    Processed: "bg-success/10 text-success",
    Active: "bg-success/10 text-success",
    Pending: "bg-warning/15 text-warning-foreground",
    Hold: "bg-warning/15 text-warning-foreground",
    Cancelled: "bg-destructive/10 text-destructive",
    Failed: "bg-destructive/10 text-destructive",
    Rejected: "bg-destructive/10 text-destructive",
    Refunded: "bg-muted text-muted-foreground",
    Inactive: "bg-muted text-muted-foreground",
  };
  return (
    <span className={cn("inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium", map[status] ?? "bg-muted text-muted-foreground")}>
      {status}
    </span>
  );
}

export function DataTable<T extends Record<string, unknown>>({
  columns,
  rows,
  empty = "No data",
}: {
  columns: { key: keyof T | string; label: string; render?: (row: T) => ReactNode; align?: "left" | "right" }[];
  rows: T[];
  empty?: string;
}) {
  return (
    <div className="overflow-x-auto rounded-lg border bg-card">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-muted/50 border-b">
            {columns.map((c) => (
              <th
                key={String(c.key)}
                className={cn(
                  "px-4 py-3 text-xs font-medium uppercase tracking-wide text-muted-foreground",
                  c.align === "right" ? "text-right" : "text-left",
                )}
              >
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="px-4 py-8 text-center text-muted-foreground">
                {empty}
              </td>
            </tr>
          )}
          {rows.map((row, i) => (
            <tr key={i} className="border-b last:border-0 hover:bg-muted/30">
              {columns.map((c) => (
                <td
                  key={String(c.key)}
                  className={cn("px-4 py-3", c.align === "right" ? "text-right" : "text-left")}
                >
                  {c.render ? c.render(row) : (row[c.key as keyof T] as ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}