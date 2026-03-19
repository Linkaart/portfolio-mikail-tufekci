export default function GridBg() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundImage: `
        linear-gradient(rgba(0,229,255,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,229,255,0.025) 1px, transparent 1px)
      `,
      backgroundSize: '44px 44px',
      pointerEvents: 'none',
      zIndex: 0,
    }} />
  )
}
