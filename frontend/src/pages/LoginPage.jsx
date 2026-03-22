import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const navigate = useNavigate();

  function handleContinue(e) {
    e.preventDefault();
    navigate("/plans");
  }

  return (
    <div className="login">
      <div className="login-card">
        <h1>GigShield</h1>
        <p className="tagline">
          AI-native parametric income protection — zero-click claims, UPI payouts.
        </p>
        <form onSubmit={handleContinue}>
          <div className="field">
            <label htmlFor="phone">Mobile number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="numeric"
              placeholder="10-digit mobile"
              autoComplete="tel"
            />
          </div>
          <div className="field">
            <label htmlFor="otp">OTP (prototype)</label>
            <input id="otp" name="otp" type="text" placeholder="Enter any value" />
          </div>
          <button type="submit" className="btn btn-primary">
            Continue to dashboard
          </button>
        </form>
        <p className="hint">
          Prototype shell: no API. Continue skips OTP and opens plans.
        </p>
      </div>
    </div>
  );
}
