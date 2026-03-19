import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches
    if (isMobile) return

    let rx = 0, ry = 0, mx = 0, my = 0
    let raf

    const move = (e) => {
      mx = e.clientX
      my = e.clientY
      if (dot.current) {
        dot.current.style.left = mx + "px"
        dot.current.style.top  = my + "px"
      }
    }

    const lerp = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      if (ring.current) {
        ring.current.style.left = rx + "px"
        ring.current.style.top  = ry + "px"
      }
      raf = requestAnimationFrame(lerp)
    }

    const over = () => ring.current && ring.current.classList.add("hovered")
    const out  = () => ring.current && ring.current.classList.remove("hovered")

    document.addEventListener("mousemove", move)
    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", over)
      el.addEventListener("mouseleave", out)
    })
    raf = requestAnimationFrame(lerp)

    return () => {
      document.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <style>{`
        .cursor-dot {
          position: fixed; pointer-events: none; z-index: 9999;
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent);
          transform: translate(-50%, -50%);
          transition: transform 0.1s;
        }
        .cursor-ring {
          position: fixed; pointer-events: none; z-index: 9998;
          width: 32px; height: 32px; border-radius: 50%;
          border: 1px solid rgba(0,229,255,0.4);
          transform: translate(-50%, -50%);
          transition: width .2s, height .2s, border-color .2s;
        }
        .cursor-ring.hovered {
          width: 48px; height: 48px;
          border-color: rgba(0,229,255,0.8);
        }
        .cursor-glow {
          position: fixed; pointer-events: none; z-index: 0;
          width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 70%);
          transform: translate(-50%, -50%);
          transition: left 0.08s, top 0.08s;
        }
      `}</style>
      <div className="cursor-dot" ref={dot} />
      <div className="cursor-ring" ref={ring} />
    </>
  )
}
