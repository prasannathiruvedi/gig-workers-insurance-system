import { PolicyCard } from "../components/PolicyCard.jsx";

const PLANS = [
  {
    name: "Basic Shield",
    weeklyPremium: "₹29",
    maxWeeklyPayout: "₹800",
    bestFor: "Part-time / lower exposure routes",
  },
  {
    name: "Standard Shield",
    weeklyPremium: "₹49",
    maxWeeklyPayout: "₹1,500",
    bestFor: "Full-time delivery partners",
    featured: true,
  },
  {
    name: "Pro Shield",
    weeklyPremium: "₹89",
    maxWeeklyPayout: "₹3,000",
    bestFor: "High earners / high-risk zones",
  },
];

export function PlansPage() {
  return (
    <div>
      <h1 className="page-title">Weekly plans</h1>
      <p className="page-lead">
        Premiums adjust with a hyperlocal risk multiplier (prototype shows static copy from the product brief).
      </p>

      <div className="card" style={{ marginBottom: "1rem" }}>
        <p style={{ margin: "0 0 0.5rem", fontWeight: 600 }}>Zero-click claim flow</p>
        <ol className="workflow-steps">
          <li>Register + link platform</li>
          <li>Baseline income (DIB) from earnings history</li>
          <li>Smart weekly premium</li>
          <li>Monitoring → validation → fraud score → UPI payout</li>
        </ol>
      </div>

      <div className="plan-grid">
        {PLANS.map((p) => (
          <PolicyCard key={p.name} {...p} />
        ))}
      </div>

      <div className="card" style={{ marginTop: "1rem" }}>
        <p className="muted" style={{ margin: 0, fontSize: "0.88rem" }}>
          <strong>Example:</strong> Hyderabad, July — Standard Shield ≈ ₹49 × 1.35 ≈ ₹66/week (illustrative).
        </p>
      </div>
    </div>
  );
}
