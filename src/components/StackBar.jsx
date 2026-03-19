const stack = ["Python", "ReactJS", "Java", "PHP", "SQL", "Flutter", "Linux", "Symfony", "Keras", "Git", "Dart", "Node.js", "Docker", "Scrum"]

export default function StackBar() {
  const doubled = [...stack, ...stack]
  return (
    <div style={{
      position: "relative", zIndex: 1,
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
      background: "var(--surface)",
      padding: "1rem 0", overflow: "hidden",
    }}>
      <div style={{
        display: 'flex', gap: '3rem',
        width: 'max-content',
        animation: 'marquee 24s linear infinite',
      }}>
        {doubled.map((s, i) => (
          <span key={i} style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            color: 'var(--muted)', fontSize: '0.68rem',
            letterSpacing: '0.12em', textTransform: 'uppercase', whiteSpace: 'nowrap',
          }}>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}
