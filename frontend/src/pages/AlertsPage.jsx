import { AlertBanner } from "../components/AlertBanner.jsx";

const MOCK_ALERTS = [
  {
    title: "Heavy rain in your zone",
    body: "Dual-source validation passed. If you are active in-zone, a payout may credit automatically — no claim to file.",
  },
  {
    title: "AQI spike nearby",
    body: "Severe AQI ≥ 300 sustained 2+ hrs (demo copy). Monitoring continues.",
  },
];

export function AlertsPage() {
  return (
    <div>
      <h1 className="page-title">Disruption signals</h1>
      <p className="page-lead">
        Triggers from weather, AQI, civic advisories, and platform signals (static mock data).
      </p>

      <AlertBanner title="Rain detected in your area">
        Example copy from the brief: ₹126 could be credited to your UPI after validation.
      </AlertBanner>

      {MOCK_ALERTS.map((a) => (
        <div key={a.title} className="card" style={{ marginBottom: "0.75rem" }}>
          <strong style={{ fontSize: "0.95rem" }}>{a.title}</strong>
          <p className="muted" style={{ margin: "0.35rem 0 0", fontSize: "0.88rem" }}>
            {a.body}
          </p>
        </div>
      ))}
    </div>
  );
}
