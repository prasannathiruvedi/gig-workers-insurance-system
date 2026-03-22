const ROWS = [
  { date: "12 Mar 2026", trigger: "Heavy rain", amount: "₹126", status: "Credited" },
  { date: "03 Mar 2026", trigger: "AQI severe", amount: "—", status: "No payout" },
];

export function PayoutHistoryPage() {
  return (
    <div>
      <h1 className="page-title">Payout history</h1>
      <p className="page-lead">Recent automatic credits after validation (mock).</p>

      <div className="card">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Trigger</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.date + r.trigger}>
                  <td>{r.date}</td>
                  <td>{r.trigger}</td>
                  <td className="amount">{r.amount}</td>
                  <td>
                    <span className="badge">{r.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
