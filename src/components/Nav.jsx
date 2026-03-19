import { useState, useEffect } from 'react'

const links = ["À propos", "Skills", "Expériences", "Formation", "Contact"]
const ids    = ["about",   "skills", "experience",  "education", "contact"]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "1.1rem 2rem",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      background: scrolled ? "rgba(8,11,16,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(14px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      transition: "all 0.3s",
    }}>
      <div style={{
        fontFamily: "var(--font-display)",
        fontWeight: 800, fontSize: "1.05rem",
        color: "var(--white)", letterSpacing: "-0.02em",
      }}>
        MT<span style={{ color: 'var(--accent)' }}>.</span>
      </div>

      {/* Desktop links */}
      <ul style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0 }}
          className="nav-desktop">
        {links.map((l, i) => (
          <li key={l}>
            <a href={`#${ids[i]}`} style={{
              color: "var(--muted)", fontSize: "0.72rem",
              letterSpacing: "0.1em", textTransform: "uppercase",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => e.target.style.color = 'var(--accent)'}
            onMouseLeave={e => e.target.style.color = "var(--muted)"}
            >{l}</a>
          </li>
        ))}
      </ul>

      <a href="/cv-mikail-tufekci.pdf" download style={{
        display: "inline-flex", alignItems: "center", gap: "0.4rem",
        padding: "0.6rem 1.2rem",
        background: "var(--accent)", color: "var(--bg)",
        fontFamily: "var(--font-mono)", fontSize: "0.72rem",
        fontWeight: 700, borderRadius: "3px",
        transition: "all 0.2s",
      }}
      onMouseEnter={e => { e.currentTarget.style.background = "#33ecff"; e.currentTarget.style.transform = "translateY(-2px)" }}
      onMouseLeave={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.transform = "translateY(0)" }}
      >
        ↓ CV
      </a>

      <style>{`
        @media (max-width: 768px) { .nav-desktop { display: none !important; } }
      `}</style>
    </nav>
  )
}
