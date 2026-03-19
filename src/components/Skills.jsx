const cats = [
  { icon: "⚡", title: "Front-End", tags: ["ReactJS", "HTML5", "CSS3", "Flutter", "Dart"], color: "rgba(0,229,255,0.08)", border: "rgba(0,229,255,0.18)" },
  { icon: "🔧", title: "Back-End", tags: ["Python", "Java", "PHP", "Symfony", "Node.js"], color: "rgba(124,58,237,0.08)", border: "rgba(124,58,237,0.2)" },
  { icon: "🗄️", title: "Données & IA", tags: ["SQL", "PostgreSQL", "MySQL", "Pandas", "Keras"], color: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.2)" },
  { icon: "🛠️", title: "Outils & DevOps", tags: ["Linux", "Git", "Docker", "Scrum", "HelpDesk"], color: "rgba(251,146,60,0.08)", border: "rgba(251,146,60,0.2)" },
]

export default function Skills() {
  return (
    <section id="skills" style={{
      position: "relative", zIndex: 1,
      padding: "7rem 2rem",
      maxWidth: "1100px", margin: "0 auto",
    }}>
      <div className="reveal">
        <div style={{ fontSize: "0.63rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.7rem", display: "flex", alignItems: "center", gap: "0.7rem" }}>
          02 — Compétences
          <span style={{ display: "block", width: 50, height: 1, background: "var(--accent)", opacity: 0.4 }} />
        </div>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "var(--white)", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "3rem" }}>
          Ma stack technique
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.4rem" }}>
        {cats.map(({ icon, title, tags, color, border }, i) => (
          <div key={title} className={`reveal reveal-delay-${i + 1}`} style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            padding: "1.6rem",
            borderRadius: "6px",
            transition: "all 0.3s",
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.3)" }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none" }}
          >
            <div style={{ fontSize: '0.63rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1rem' }}>
              {icon} {title}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {tags.map(t => (
                <span key={t} style={{
                  background: color,
                  border: `1px solid ${border}`,
                  color: 'var(--text)',
                  padding: '0.28rem 0.65rem',
                  borderRadius: '2px',
                  fontSize: '0.75rem',
                }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
