export const inr = (n: number) =>
  "₹" + new Intl.NumberFormat("en-IN").format(Math.round(n));

export const todayKPIs = {
  totalBookings: 1483,
  completedBookings: 1287,
  cancelledBookings: 96,
  grossRevenue: 1250000,
  platformEarnings: 150000,
  vendorEarnings: 1075000,
  pendingPayouts: 285000,
  gstCollected: 25000,
};

export const weeklyRevenue = [
  { day: "Mon", revenue: 145000, bookings: 182 },
  { day: "Tue", revenue: 168000, bookings: 201 },
  { day: "Wed", revenue: 152000, bookings: 188 },
  { day: "Thu", revenue: 189000, bookings: 224 },
  { day: "Fri", revenue: 210000, bookings: 258 },
  { day: "Sat", revenue: 245000, bookings: 290 },
  { day: "Sun", revenue: 198000, bookings: 235 },
];

export const monthlyTrend = [
  { month: "Jan", gbv: 2400000, net: 320000, refunds: 45000 },
  { month: "Feb", gbv: 3100000, net: 410000, refunds: 52000 },
  { month: "Mar", gbv: 5200000, net: 680000, refunds: 88000 },
  { month: "Apr", gbv: 8100000, net: 1020000, refunds: 110000 },
  { month: "May", gbv: 9400000, net: 1180000, refunds: 124000 },
  { month: "Jun", gbv: 12500000, net: 1500000, refunds: 158000 },
];

export const topCities = [
  { city: "Bengaluru", bookings: 412, revenue: 485000 },
  { city: "Hyderabad", bookings: 298, revenue: 352000 },
  { city: "Chennai", bookings: 245, revenue: 298000 },
  { city: "Mumbai", bookings: 198, revenue: 268000 },
  { city: "Pune", bookings: 156, revenue: 195000 },
];

export const topVendors = [
  { id: "V1001", name: "ABC Movers", bookings: 142, earnings: 285000, rating: 4.8 },
  { id: "V1042", name: "XYZ Logistics", bookings: 128, earnings: 264000, rating: 4.7 },
  { id: "V1078", name: "Speedy Transport", bookings: 98, earnings: 198000, rating: 4.6 },
  { id: "V1112", name: "RapidShift Co", bookings: 87, earnings: 175000, rating: 4.5 },
  { id: "V1156", name: "MoveIt India", bookings: 76, earnings: 162000, rating: 4.4 },
];

export const bookings = Array.from({ length: 24 }).map((_, i) => {
  const amount = 1500 + Math.floor(Math.random() * 8000);
  const commissionPct = [10, 12, 15, 18][i % 4];
  const platformFee = Math.round((amount * commissionPct) / 100);
  const gst = Math.round(platformFee * 0.18);
  const discount = i % 5 === 0 ? 200 : 0;
  return {
    id: `SHF${12000 + i}`,
    customer: ["Ravi", "Kumar", "Anjali", "Vikram", "Priya", "Suresh"][i % 6],
    vendor: ["ABC Movers", "XYZ Logistics", "Speedy Transport", "RapidShift Co"][i % 4],
    vendorId: ["V1001", "V1042", "V1078", "V1112"][i % 4],
    vehicleType: ["Bike", "Three Wheeler", "Tata Ace", "Packers & Movers"][i % 4],
    city: ["Bengaluru", "Hyderabad", "Chennai", "Mumbai"][i % 4],
    amount,
    platformFee,
    gst,
    discount,
    customerPayment: amount + gst - discount,
    vendorSettlement: amount - platformFee,
    shiftyngEarnings: platformFee,
    status: ["Completed", "Completed", "Completed", "Cancelled", "Pending"][i % 5],
    paymentStatus: ["Success", "Success", "Failed", "Refunded", "Pending"][i % 5],
    date: `2025-06-${String((i % 13) + 1).padStart(2, "0")}`,
  };
});

export const commissionConfig = [
  { vehicleType: "Bike", commission: 10, baseFare: 50 },
  { vehicleType: "Three Wheeler", commission: 12, baseFare: 80 },
  { vehicleType: "Tata Ace", commission: 15, baseFare: 200 },
  { vehicleType: "Packers & Movers", commission: 18, baseFare: 500 },
];

export const vendorWallets = [
  { id: "V1001", name: "ABC Movers", completed: 285000, pending: 18000, withdrawn: 240000, available: 27000 },
  { id: "V1042", name: "XYZ Logistics", completed: 264000, pending: 22000, withdrawn: 210000, available: 32000 },
  { id: "V1078", name: "Speedy Transport", completed: 198000, pending: 15000, withdrawn: 165000, available: 18000 },
  { id: "V1112", name: "RapidShift Co", completed: 175000, pending: 12000, withdrawn: 140000, available: 23000 },
  { id: "V1156", name: "MoveIt India", completed: 162000, pending: 9000, withdrawn: 138000, available: 15000 },
];

export const settlements = [
  { id: "STL2401", vendor: "ABC Movers", vendorId: "V1001", amount: 25000, period: "Jun 02 - Jun 08", status: "Pending" },
  { id: "STL2402", vendor: "XYZ Logistics", vendorId: "V1042", amount: 40000, period: "Jun 02 - Jun 08", status: "Pending" },
  { id: "STL2403", vendor: "Speedy Transport", vendorId: "V1078", amount: 18500, period: "Jun 02 - Jun 08", status: "Approved" },
  { id: "STL2404", vendor: "RapidShift Co", vendorId: "V1112", amount: 22000, period: "Jun 02 - Jun 08", status: "Hold" },
  { id: "STL2405", vendor: "MoveIt India", vendorId: "V1156", amount: 15800, period: "Jun 02 - Jun 08", status: "Released" },
];

export const payoutRequests = [
  { id: "W1001", vendor: "ABC Movers", amount: 5000, requested: "2025-06-12", status: "Pending" },
  { id: "W1002", vendor: "XYZ Logistics", amount: 12000, requested: "2025-06-12", status: "Pending" },
  { id: "W1003", vendor: "Speedy Transport", amount: 8500, requested: "2025-06-11", status: "Approved" },
  { id: "W1004", vendor: "RapidShift Co", amount: 4200, requested: "2025-06-11", status: "Rejected" },
  { id: "W1005", vendor: "MoveIt India", amount: 6800, requested: "2025-06-10", status: "Hold" },
];

export const refunds = [
  { id: "REF901", bookingId: "SHF12003", customer: "Anjali", paid: 5000, refund: 4500, cancelCharge: 500, reason: "Vendor late", status: "Processed" },
  { id: "REF902", bookingId: "SHF12007", customer: "Vikram", paid: 3500, refund: 3500, cancelCharge: 0, reason: "Vendor cancelled", status: "Pending" },
  { id: "REF903", bookingId: "SHF12011", customer: "Priya", paid: 8200, refund: 7700, cancelCharge: 500, reason: "Customer cancelled", status: "Processed" },
  { id: "REF904", bookingId: "SHF12018", customer: "Suresh", paid: 4500, refund: 4000, cancelCharge: 500, reason: "Wrong address", status: "Failed" },
];

export const incentiveRules = [
  { id: "INC01", condition: "10 rides/day", reward: 300, active: true },
  { id: "INC02", condition: "50 bookings/week", reward: 1500, active: true },
  { id: "INC03", condition: "Rating > 4.5", reward: 500, active: true },
  { id: "INC04", condition: "100 bookings/month", reward: 3500, active: false },
];

export const penalties = [
  { id: "PEN101", vendor: "ABC Movers", reason: "Late arrival", amount: 200, date: "2025-06-11" },
  { id: "PEN102", vendor: "XYZ Logistics", reason: "Booking cancellation", amount: 500, date: "2025-06-10" },
  { id: "PEN103", vendor: "Speedy Transport", reason: "Customer complaint", amount: 350, date: "2025-06-09" },
  { id: "PEN104", vendor: "RapidShift Co", reason: "Late delivery", amount: 500, date: "2025-06-08" },
];

export const coupons = [
  { code: "NEW100", used: 500, discount: 100, cost: 50000, conversions: 412 },
  { code: "SAVE200", used: 300, discount: 200, cost: 60000, conversions: 248 },
  { code: "WELCOME50", used: 820, discount: 50, cost: 41000, conversions: 698 },
  { code: "MONSOON15", used: 180, discount: 150, cost: 27000, conversions: 142 },
];

export const ledger = [
  { date: "2025-06-01", description: "Booking SHF12001", credit: 5000, debit: 0 },
  { date: "2025-06-01", description: "Commission (15%)", credit: 0, debit: 750 },
  { date: "2025-06-02", description: "Booking SHF12005", credit: 3500, debit: 0 },
  { date: "2025-06-02", description: "Commission (15%)", credit: 0, debit: 525 },
  { date: "2025-06-03", description: "Weekly Settlement", credit: 0, debit: 7225 },
  { date: "2025-06-04", description: "Booking SHF12011", credit: 8200, debit: 0 },
  { date: "2025-06-04", description: "Commission (15%)", credit: 0, debit: 1230 },
  { date: "2025-06-05", description: "Incentive (50 rides)", credit: 1500, debit: 0 },
  { date: "2025-06-06", description: "Penalty - Late arrival", credit: 0, debit: 200 },
];

export const reports = [
  { name: "Daily Revenue Report", desc: "Day-wise revenue, bookings, GST", icon: "calendar" },
  { name: "Vendor Settlement Report", desc: "All vendor payouts & settlements", icon: "wallet" },
  { name: "Customer Payment Report", desc: "All customer transactions", icon: "credit-card" },
  { name: "Refund Report", desc: "Refunds issued & pending", icon: "rotate-ccw" },
  { name: "Incentive Report", desc: "Vendor incentive payouts", icon: "gift" },
  { name: "Commission Report", desc: "Platform commission earned", icon: "percent" },
  { name: "GST Report", desc: "Tax collected & filed", icon: "receipt" },
];