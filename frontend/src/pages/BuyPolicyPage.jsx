export function BuyPolicyPage() {
  return (
    <div>
      <h1 className="page-title">Activate coverage</h1>
      <p className="page-lead">
        Select a plan and pay weekly premium via UPI (Razorpay — not wired in this shell).
      </p>

      <div className="card">
        <p style={{ margin: "0 0 0.5rem", fontWeight: 600 }}>Standard Shield (selected)</p>
        <p className="muted" style={{ margin: "0 0 1rem" }}>
          ₹49/week · up to ₹1,500 max weekly payout · 70% coverage ratio
        </p>
        <button type="button" className="btn btn-primary" style={{ maxWidth: 280 }}>
          Pay with UPI (placeholder)
        </button>
      </div>

      <div className="card">
        <p style={{ margin: "0 0 0.35rem", fontSize: "0.9rem" }}>
          <strong>Payout preview (illustrative)</strong>
        </p>
        <p className="muted" style={{ margin: 0, fontSize: "0.88rem" }}>
          Hourly rate from DIB ÷ 10; payout = min(rate, plan cap) × coverage × disrupted hours.
        </p>
      </div>
    </div>
  );
}
