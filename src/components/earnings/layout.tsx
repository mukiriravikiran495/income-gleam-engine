import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Receipt,
  Percent,
  Wallet,
  ArrowRightLeft,
  HandCoins,
  CreditCard,
  RotateCcw,
  Gift,
  AlertTriangle,
  TicketPercent,
  FileText,
  LineChart,
  BookOpen,
  FolderDown,
  Search,
  Bell,
} from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/earnings", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/earnings/bookings", label: "Booking Earnings", icon: Receipt },
  { to: "/earnings/commissions", label: "Commissions", icon: Percent },
  { to: "/earnings/wallets", label: "Vendor Wallets", icon: Wallet },
  { to: "/earnings/settlements", label: "Settlements", icon: ArrowRightLeft },
  { to: "/earnings/payouts", label: "Payout Requests", icon: HandCoins },
  { to: "/earnings/payments", label: "Payments", icon: CreditCard },
  { to: "/earnings/refunds", label: "Refunds", icon: RotateCcw },
  { to: "/earnings/incentives", label: "Incentives", icon: Gift },
  { to: "/earnings/penalties", label: "Penalties", icon: AlertTriangle },
  { to: "/earnings/coupons", label: "Coupons", icon: TicketPercent },
  { to: "/earnings/gst", label: "GST & Tax", icon: FileText },
  { to: "/earnings/analytics", label: "Analytics", icon: LineChart },
  { to: "/earnings/ledger", label: "Ledger", icon: BookOpen },
  { to: "/earnings/reports", label: "Reports", icon: FolderDown },
];

export function EarningsLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="flex min-h-screen w-full bg-background text-foreground">
      <aside className="w-64 shrink-0 bg-sidebar text-sidebar-foreground flex flex-col">
        <div className="px-5 py-5 border-b border-sidebar-border">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-sidebar-primary grid place-items-center text-sidebar-primary-foreground font-bold">
              S
            </div>
            <div>
              <div className="font-semibold text-sm">Shiftyng</div>
              <div className="text-xs text-sidebar-foreground/60">Earnings Admin</div>
            </div>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-0.5">
          {nav.map((n) => {
            const active = n.exact ? pathname === n.to : pathname.startsWith(n.to);
            const Icon = n.icon;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                  active
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                )}
              >
                <Icon className="h-4 w-4" />
                {n.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-sidebar-border px-4 py-3 text-xs text-sidebar-foreground/60">
          v1.0 · Demo data
        </div>
      </aside>
      <div className="flex-1 min-w-0 flex flex-col">
        <header className="h-14 border-b bg-card flex items-center px-6 gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              placeholder="Search bookings, vendors, payouts…"
              className="w-full pl-9 pr-3 py-2 text-sm rounded-md bg-muted border border-transparent focus:border-ring focus:bg-background outline-none"
            />
          </div>
          <button className="relative p-2 rounded-md hover:bg-muted">
            <Bell className="h-4 w-4" />
            <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-destructive" />
          </button>
          <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground grid place-items-center text-xs font-semibold">
            AS
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}