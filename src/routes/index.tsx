import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shiftyng Admin" },
      { name: "description", content: "Shiftyng admin panel — earnings, settlements and vendor management." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-semibold tracking-tight">Shiftyng Admin</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Earnings module is ready. Open the admin dashboard to explore revenue, settlements, payouts, GST and more.
        </p>
        <Link
          to="/earnings"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Open Earnings Admin →
        </Link>
      </div>
    </div>
  );
}
