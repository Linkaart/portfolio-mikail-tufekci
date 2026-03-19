const stats = [
  { n: '2+', label: 'Stages en entreprise' },
  { n: '7+', label: 'Technologies maîtrisées' },
  { n: '2',  label: 'Certifications' },
  { n: 'C2', label: 'Français — B2 Anglais' },
]

export default function About() {
  return (
    <section id="about" style={{
      position: 'relative', zIndex: 1,
      padding: '7rem 2rem',
      maxWidth: '1100px', margin: '0 auto',
    }}>
      <div className="reveal">
        <div style={{ fontSize: '0.63rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.7rem', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
          01 — À propos
          <span style={{ display: 'block', width: 50, height: 1, background: 'var(--accent)', opacity: 0.4 }} />
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--white)', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '3rem' }}>
          Qui suis-je ?
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
        {/* Text */}
        <div className="reveal reveal-delay-1">
          <p style={{ marginBottom: '1rem', fontSize: '0.85rem', color: 'var(--text)' }}>
            Je suis <strong style={{ color: 'var(--white)' }}>Mikail Tufekci</strong>, développeur polyvalent de 20 ans basé en France, en BTS SIO option SLAM au Lycée Robert Schuman de Metz.
          </p>
          <p style={{ marginBottom: '1rem', fontSize: '0.85rem', color: 'var(--text)' }}>
            Mon moteur : résoudre de vrais problèmes avec du code propre. En stage j'ai travaillé sur des sujets allant de la <strong style={{ color: 'var(--white)' }}>gestion de tickets</strong> à la <strong style={{ color: 'var(--white)' }}>modélisation IA avec Keras</strong>.
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text)' }}>
            Certifié Flutter et MOOC ANSSI — la sécurité et la qualité logicielle font partie de mon ADN.
          </p>

          {/* Terminal block */}
          <div style={{
            marginTop: '1.8rem',
            background: '#05070d',
            border: '1px solid var(--border)',
            borderRadius: '6px',
            padding: '1.4rem 1.4rem 1.4rem',
            position: 'relative',
          }}>
            <div style={{ position: 'absolute', top: '0.7rem', left: '1rem', fontSize: '0.45rem', letterSpacing: '0.4em', color: 'var(--muted)' }}>● ● ●</div>
            <pre style={{ marginTop: '0.8rem', fontSize: '0.78rem', color: 'var(--text)', lineHeight: 1.9, fontFamily: 'var(--font-mono)' }}>
{`const mikail = {
  `}<span style={{color:'#10b981'}}>age</span>{`: `}<span style={{color:'#fb923c'}}>20</span>{`,
  `}<span style={{color:'#10b981'}}>location</span>{`: `}<span style={{color:'#a78bfa'}}>'Metz, France'</span>{`,
  `}<span style={{color:'#10b981'}}>formation</span>{`: `}<span style={{color:'#a78bfa'}}>'BTS SIO → CDA'</span>{`,
  `}<span style={{color:'#10b981'}}>passions</span>{`: [`}<span style={{color:'#a78bfa'}}>'Python'</span>{`, `}<span style={{color:'#a78bfa'}}>'IA'</span>{`, `}<span style={{color:'#a78bfa'}}>'React'</span>{`],
  `}<span style={{color:'#10b981'}}>openToWork</span>{`: `}<span style={{color:'#00e5ff'}}>true</span>{`
};`}
            </pre>
          </div>
        </div>

        {/* Stats */}
        <div className="reveal reveal-delay-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
          {stats.map(({ n, label }) => (
            <div key={n} style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              padding: '1.4rem',
              borderRadius: '4px',
              transition: 'border-color 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', fontWeight: 800, color: 'var(--accent)', lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: '0.68rem', color: 'var(--muted)', marginTop: '0.4rem', letterSpacing: '0.04em' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
