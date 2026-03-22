export function PolicyCard({
  name,
  weeklyPremium,
  maxWeeklyPayout,
  bestFor,
  featured,
}) {
  return (
    <article className="policy-card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3>{name}</h3>
        {featured ? <span className="badge badge-hot">Popular</span> : null}
      </div>
      <div className="price">{weeklyPremium}/week</div>
      <p className="muted" style={{ margin: 0 }}>
        Up to {maxWeeklyPayout} payout / week
      </p>
      <ul>
        <li>{bestFor}</li>
      </ul>
    </article>
  );
}
