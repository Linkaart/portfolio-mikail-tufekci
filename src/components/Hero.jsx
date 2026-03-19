import { useEffect, useRef } from 'react'

export default function Hero() {
  const titleRef = useRef(null)

  useEffect(() => {
    // Typewriter effect on subtitle
    const words = ['Python', 'React', 'Java', 'Flutter', 'SQL']
    let wi = 0, ci = 0, deleting = false
    const el = document.getElementById('typewriter')
    if (!el) return
    const tick = () => {
      const word = words[wi]
      if (!deleting) {
        el.textContent = word.slice(0, ++ci)
        if (ci === word.length) { deleting = true; setTimeout(tick, 1400); return }
      } else {
        el.textContent = word.slice(0, --ci)
        if (ci === 0) { deleting = false; wi = (wi + 1) % words.length }
      }
      setTimeout(tick, deleting ? 60 : 100)
    }
    const t = setTimeout(tick, 1200)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="hero" style={{
      position: 'relative', zIndex: 1,
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '8rem 2rem 4rem',
      maxWidth: '1100px', margin: '0 auto',
    }}>
      {/* Tag */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
        fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase',
        color: 'var(--accent)',
        border: '1px solid rgba(0,229,255,0.2)',
        padding: '0.35rem 0.8rem', borderRadius: '2px',
        width: 'fit-content', marginBottom: '2rem',
        animation: 'fadeUp 0.6s ease both',
      }}>
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)', animation: 'pulse 2s infinite', flexShrink: 0 }} />
        Disponible · BTS SIO SLAM · Metz, France
      </div>

      {/* Name */}
      <h1 ref={titleRef} style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(3.2rem, 8vw, 7rem)',
        fontWeight: 800, lineHeight: 0.92,
        letterSpacing: '-0.03em',
        color: 'var(--white)',
        animation: 'fadeUp 0.6s 0.1s ease both',
        opacity: 0, animationFillMode: 'forwards',
      }}>
        Mikail
        <span style={{ display: 'block', color: 'transparent', WebkitTextStroke: '1px rgba(200,208,220,0.25)' }}>
          Tufekci
        </span>
      </h1>

      {/* Subtitle */}
      <p style={{
        marginTop: '1.6rem', fontSize: '0.88rem',
        color: 'var(--muted)', maxWidth: '540px',
        animation: 'fadeUp 0.6s 0.2s ease both', opacity: 0, animationFillMode: 'forwards',
      }}>
        Développeur full-stack spécialisé{' '}
        <span style={{ color: 'var(--accent3)', fontWeight: 600 }}>
          <span id="typewriter">Python</span>
          <span style={{ color: 'var(--accent)', animation: 'pulse 1s infinite' }}>|</span>
        </span>
        {' '}— passionné par les architectures propres et l'IA. 🇫🇷
      </p>

      {/* CTAs */}
      <div style={{
        marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap',
        animation: 'fadeUp 0.6s 0.3s ease both', opacity: 0, animationFillMode: 'forwards',
      }}>
        <a href="#contact" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
          padding: '0.8rem 1.6rem',
          background: 'var(--accent)', color: 'var(--bg)',
          fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700,
          borderRadius: '3px', transition: 'all 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = '#33ecff'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,229,255,0.3)' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
        >
          Me contacter ↗
        </a>
        <a href="https://github.com/Linkaart" target="_blank" rel="noreferrer" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
          padding: '0.8rem 1.6rem',
          background: 'transparent', color: 'var(--text)',
          fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
          border: '1px solid var(--border)', borderRadius: '3px', transition: 'all 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)' }}
        >
          ⌥ GitHub
        </a>
      </div>

      {/* Scroll indicator */}
      <div style={{
        marginTop: '5rem', display: 'flex', alignItems: 'center', gap: '1rem',
        color: 'var(--muted)', fontSize: '0.68rem', letterSpacing: '0.1em',
        animation: 'fadeUp 0.6s 0.5s ease both', opacity: 0, animationFillMode: 'forwards',
      }}>
        <div style={{ width: 1, height: 44, background: 'linear-gradient(to bottom, transparent, var(--muted))' }} />
        Scroll pour explorer
      </div>
    </section>
  )
}
