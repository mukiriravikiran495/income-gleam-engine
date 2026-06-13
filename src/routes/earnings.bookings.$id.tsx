import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, PageHeader, StatusBadge } from "@/components/earnings/ui";
import { bookings, inr } from "@/lib/mock-earnings";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/earnings/bookings/$id")({
  component: BookingDetail,
  notFoundComponent: () => <div className="p-6">Booking not found.</div>,
});

function Row({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className={`flex justify-between py-2.5 ${strong ? "border-t font-semibold text-base" : "text-sm"}`}>
      <span className={strong ? "" : "text-muted-foreground"}>{label}</span>
      <span>{value}</span>
    </div>
  );
}

function BookingDetail() {
  const { id } = Route.useParams();
  const b = bookings.find((x) => x.id === id);
  if (!b) return <div>Not found</div>;
  return (
    <div>
      <Link to="/earnings/bookings" className="text-sm text-muted-foreground inline-flex items-center gap-1 mb-3 hover:text-foreground">
        <ArrowLeft className="h-3.5 w-3.5" /> Back to bookings
      </Link>
      <PageHeader
        title={`Booking ${b.id}`}
        desc={`${b.vehicleType} · ${b.city} · ${b.date}`}
        action={<StatusBadge status={b.status} />}
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2">
          <h3 className="text-sm font-semibold mb-3">Earnings Breakdown</h3>
          <Row label="Vendor Quote" value={inr(b.amount)} />
          <Row label={`Platform Fee (${Math.round((b.platformFee/b.amount)*100)}%)`} value={inr(b.platformFee)} />
          <Row label="GST (18% on fee)" value={inr(b.gst)} />
          <Row label="Discount" value={`- ${inr(b.discount)}`} />
          <Row label="Final Customer Payment" value={inr(b.customerPayment)} strong />
          <div className="h-3" />
          <Row label="Vendor Settlement" value={inr(b.vendorSettlement)} />
          <Row label="Shiftyng Earnings" value={inr(b.shiftyngEarnings)} strong />
        </Card>
        <Card>
          <h3 className="text-sm font-semibold mb-3">Parties</h3>
          <div className="text-sm space-y-3">
            <div>
              <div className="text-xs text-muted-foreground">Customer</div>
              <div className="font-medium">{b.customer}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Vendor</div>
              <div className="font-medium">{b.vendor}</div>
              <div className="text-xs text-muted-foreground">{b.vendorId}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Payment</div>
              <StatusBadge status={b.paymentStatus} />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}