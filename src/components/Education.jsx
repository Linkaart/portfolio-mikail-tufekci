const edu = [
  {
    school: 'Lycée Robert Schuman — Metz',
    degree: 'BTS SIO — option SLAM',
    date: '2023 – 2025',
    desc: 'Java · PHP · Dart · Flutter · Symfony · Méthodes Agile Scrum — spécialisation développement d\'applications mobiles et web.',
  },
  {
    school: 'Lycée Blaise Pascal — Forbach',
    degree: 'Baccalauréat Pro AGORA',
    date: '2020 – 2023',
    desc: 'Fondamentaux de la communication digitale et des systèmes d\'information.',
  },
]

const certs = [
  { icon: '📱', name: 'Flutter — Certification', date: '02 / 05 / 2025' },
  { icon: '🔐', name: 'MOOC ANSSI — Cybersécurité', date: '01 / 12 / 2024' },
]

export default function Education() {
  return (
    <section id="education" style={{
      position: 'relative', zIndex: 1,
      padding: '7rem 2rem',
      maxWidth: '1100px', margin: '0 auto',
    }}>
      <div className="reveal">
        <div style={{ fontSize: '0.63rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.7rem', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
          04 — Formation
          <span style={{ display: 'block', width: 50, height: 1, background: 'var(--accent)', opacity: 0.4 }} />
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--white)', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '3rem' }}>
          Parcours académique
        </h2>
      </div>

      {/* Edu cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.4rem', marginBottom: '3rem' }}>
        {edu.map(({ school, degree, date, desc }, i) => (
          <div key={school} className={`reveal reveal-delay-${i + 1}`} style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            padding: '1.75rem',
            borderRadius: '6px',
            transition: 'border-color 0.2s, transform 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent3)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.4rem' }}>{school}</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--accent3)', marginBottom: '0.4rem' }}>{degree}</div>
            <div style={{ fontSize: '0.68rem', color: 'var(--muted)', marginBottom: '0.8rem' }}>{date}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--muted)', lineHeight: 1.6 }}>{desc}</div>
          </div>
        ))}
      </div>

      {/* Certs */}
      <div className="reveal" style={{ fontSize: '0.63rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.4rem' }}>
        Certifications
      </div>
      <div style={{ display: 'flex', gap: '1.4rem', flexWrap: 'wrap' }}>
        {certs.map(({ icon, name, date }) => (
          <div key={name} className="reveal" style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            padding: '1.1rem 1.6rem',
            borderRadius: '6px',
            display: 'flex', alignItems: 'center', gap: '1rem',
            transition: 'border-color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent2)'}
          onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            <div style={{
              width: 40, height: 40,
              background: 'rgba(124,58,237,0.1)',
              border: '1px solid rgba(124,58,237,0.3)',
              borderRadius: '4px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1rem',
            }}>{icon}</div>
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--white)' }}>{name}</div>
              <div style={{ fontSize: '0.68rem', color: 'var(--muted)' }}>{date}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
