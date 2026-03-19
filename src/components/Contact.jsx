import { useState } from "react"

const infos = [
  { icon: "📞", label: "Téléphone", value: "+33 7 66 49 42 03", href: "tel:+33766494203" },
  { icon: "✉️", label: "Email", value: "mikail.tufekci2@gmail.com", href: "mailto:mikail.tufekci2@gmail.com" },
  { icon: "⌥",  label: "GitHub", value: "github.com/Linkaart", href: "https://github.com/Linkaart" },
  { icon: "📍", label: "Localisation", value: "Metz, Grand Est, France", href: null },
]

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" })
  const [sent, setSent] = useState(false)

  const submit = () => {
    if (!form.name || !form.email || !form.msg) return
    setSent(true)
    setForm({ name: "", email: "", msg: "" })
    setTimeout(() => setSent(false), 3000)
  }

  const inputStyle = {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    color: "var(--text)",
    padding: "0.75rem 1rem",
    fontFamily: "var(--font-mono)",
    fontSize: "0.8rem",
    borderRadius: "3px",
    outline: "none",
    width: "100%",
    transition: "border-color 0.2s",
  }

  return (
    <section id="contact" style={{
      position: "relative", zIndex: 1,
      padding: "7rem 2rem",
      maxWidth: "1100px", margin: "0 auto",
    }}>
      <div className="reveal">
        <div style={{ fontSize: "0.63rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.7rem", display: "flex", alignItems: "center", gap: "0.7rem" }}>
          05 — Contact
          <span style={{ display: "block", width: 50, height: 1, background: "var(--accent)", opacity: 0.4 }} />
        </div>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "var(--white)", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "3rem" }}>
          Travaillons ensemble
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem", alignItems: "start" }}>
        {/* Info links */}
        <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {infos.map(({ icon, label, value, href }) => {
            const inner = (
              <>
                <span style={{ fontSize: "1rem", width: 36, textAlign: "center" }}>{icon}</span>
                <div>
                  <div style={{ fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>{label}</div>
                  <div style={{ fontSize: "0.82rem" }}>{value}</div>
                </div>
              </>
            )
            const shared = {
              display: "flex", alignItems: "center", gap: "1rem",
              padding: "1rem",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "4px",
              color: "var(--text)",
              transition: "border-color 0.2s, color 0.2s",
            }
            return href
              ? <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                  style={shared}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)" }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text)" }}
                >{inner}</a>
              : <div key={label} style={shared}>{inner}</div>
          })}
        </div>

        {/* Form */}
        <div className="reveal reveal-delay-1" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            { id: "name",  label: "Nom",     ph: "Jean Dupont",       type: "text" },
            { id: "email", label: "Email",   ph: "jean@company.fr",   type: "email" },
          ].map(({ id, label, ph, type }) => (
            <div key={id} style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <label style={{ fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>{label}</label>
              <input
                type={type} placeholder={ph} value={form[id]}
                onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = "var(--accent)"}
                onBlur={e => e.target.style.borderColor = "var(--border)"}
              />
            </div>
          ))}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <label style={{ fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>Message</label>
            <textarea
              placeholder="Votre message..." value={form.msg} rows={5}
              onChange={e => setForm(f => ({ ...f, msg: e.target.value }))}
              style={{ ...inputStyle, resize: "vertical" }}
              onFocus={e => e.target.style.borderColor = "var(--accent)"}
              onBlur={e => e.target.style.borderColor = "var(--border)"}
            />
          </div>
          <button onClick={submit} style={{
            alignSelf: "flex-start",
            padding: "0.78rem 1.6rem",
            background: sent ? "var(--accent3)" : "var(--accent)",
            color: "var(--bg)", fontFamily: "var(--font-mono)",
            fontSize: "0.75rem", fontWeight: 700,
            border: "none", borderRadius: "3px",
            transition: "all 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,229,255,0.25)" }}
          onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none" }}
          >
            {sent ? "✓ Message envoyé !" : "Envoyer ↗"}
          </button>
        </div>
      </div>
    </section>
  )
}
