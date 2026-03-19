const exps = [
  {
    company: "DEL MAT",
    role: "Stage Développeur Full-Stack",
    date: "Jan 2025 – Fév 2025",
    desc: "Conception et développement d'une application web pour optimiser la gestion interne des projets.",
    bullets: [
      "Dashboard interactif ReactJS — visualisation de données en temps réel",
      "Application de traitement de tickets en Python (gestion clients)",
      "Système de pointage automatisé en Python",
      "Modélisation et création de bases de données sécurisées",
    ],
    accent: "var(--accent)",
  },
  {
    company: "TEKSIAL — Paris",
    role: "Stage Développeur & Support IT",
    date: "Mai 2024 – Juil 2024",
    desc: "Développement de scripts Python et intervention sur l'infrastructure IT.",
    bullets: [
      "Scripts et outils Python pour l'automatisation de tâches techniques",
      "Maintenance hardware : dépannage et optimisation des équipements",
      "Configuration de serveurs et infrastructure IT",
      "Modèle IA avec Keras pour prédire des tendances (analyse de données)",
    ],
    accent: "var(--accent2)",
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{
      position: "relative", zIndex: 1,
      padding: "7rem 2rem",
      maxWidth: "1100px", margin: "0 auto",
    }}>
      <div className="reveal">
        <div style={{ fontSize: "0.63rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.7rem", display: "flex", alignItems: "center", gap: "0.7rem" }}>
          03 — Expériences
          <span style={{ display: "block", width: 50, height: 1, background: "var(--accent)", opacity: 0.4 }} />
        </div>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "var(--white)", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "3rem" }}>
          Parcours professionnel
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {exps.map(({ company, role, date, desc, bullets, accent }, i) => (
          <div key={company} className={`reveal reveal-delay-${i + 1}`} style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderLeft: `3px solid ${accent}`,
            padding: "2rem",
            borderRadius: "0 6px 6px 0",
            transition: "transform 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.transform = "translateX(5px)"}
          onMouseLeave={e => e.currentTarget.style.transform = "translateX(0)"}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 700, color: "var(--white)" }}>{company}</div>
                <div style={{ fontSize: "0.72rem", color: accent, marginTop: "0.2rem" }}>{role}</div>
              </div>
              <div style={{
                fontSize: "0.68rem", color: "var(--muted)",
                background: "var(--bg)", border: "1px solid var(--border)",
                padding: "0.28rem 0.7rem", borderRadius: "2px",
              }}>{date}</div>
            </div>
            <p style={{ fontSize: "0.8rem", color: "var(--text)", marginBottom: "1rem" }}>{desc}</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.45rem" }}>
              {bullets.map(b => (
                <li key={b} style={{ fontSize: "0.78rem", color: "var(--muted)", paddingLeft: "1rem", position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: accent }}>▸</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
