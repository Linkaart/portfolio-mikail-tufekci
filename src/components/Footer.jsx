export default function Footer() {
  return (
    <footer style={{
      position: "relative", zIndex: 1,
      borderTop: "1px solid var(--border)",
      padding: "2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "1rem",
      color: "var(--muted)",
      fontSize: "0.7rem",
      maxWidth: "1100px",
      margin: "0 auto",
      letterSpacing: "0.04em",
    }}>
      <span>© 2025 Mikail Tufekci — MIT Licence</span>
      <span>
        Fait avec ❤️ —{' '}
        <a
          href="https://github.com/Linkaart"
          target="_blank"
          rel="noreferrer"
          style={{ color: "var(--accent)", transition: "opacity 0.2s" }}
          onMouseEnter={e => e.currentTarget.style.opacity = "0.7"}
          onMouseLeave={e => e.currentTarget.style.opacity = "1"}
        >
          github.com/Linkaart
        </a>
      </span>
    </footer>
  )
}
