export function AlertBanner({ title, children }) {
  return (
    <div className="alert-banner" role="status">
      <span aria-hidden>🌧</span>
      <div>
        <strong>{title}</strong>
        <p>{children}</p>
      </div>
    </div>
  );
}
