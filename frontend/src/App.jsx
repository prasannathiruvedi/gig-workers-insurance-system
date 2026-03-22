import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { PlansPage } from "./pages/PlansPage.jsx";
import { BuyPolicyPage } from "./pages/BuyPolicyPage.jsx";
import { AlertsPage } from "./pages/AlertsPage.jsx";
import { PayoutHistoryPage } from "./pages/PayoutHistoryPage.jsx";

function ShellLayout({ children }) {
  return (
    <div className="shell">
      <Navbar />
      <main className="shell-main">{children}</main>
      <footer className="shell-footer">
        <p>GigShield prototype — zero-click parametric payouts (UI shell only)</p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/plans"
        element={
          <ShellLayout>
            <PlansPage />
          </ShellLayout>
        }
      />
      <Route
        path="/buy"
        element={
          <ShellLayout>
            <BuyPolicyPage />
          </ShellLayout>
        }
      />
      <Route
        path="/alerts"
        element={
          <ShellLayout>
            <AlertsPage />
          </ShellLayout>
        }
      />
      <Route
        path="/payouts"
        element={
          <ShellLayout>
            <PayoutHistoryPage />
          </ShellLayout>
        }
      />
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
