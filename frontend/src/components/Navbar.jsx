import { NavLink } from "react-router-dom";

const links = [
  { to: "/plans", label: "Plans" },
  { to: "/buy", label: "Buy" },
  { to: "/alerts", label: "Alerts" },
  { to: "/payouts", label: "Payouts" },
];

export function Navbar() {
  return (
    <header className="nav">
      <NavLink to="/plans" className="nav-brand">
        <span className="nav-brand-mark" aria-hidden>
          ⚡
        </span>
        <span>GigShield</span>
      </NavLink>
      <nav className="nav-links" aria-label="Main">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            {label}
          </NavLink>
        ))}
        <NavLink to="/login">Sign out</NavLink>
      </nav>
    </header>
  );
}
