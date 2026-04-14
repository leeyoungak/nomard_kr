import { cities, stats, reviews, meetups } from "@/lib/mock-data";

const C = {
  bg: "#03050f",
  fg: "#e0f7fa",
  muted: "#7ecfdb",
  subtle: "#2a4a55",
  pink: "#ff0080",
  cyan: "#00f5ff",
  purple: "#bf00ff",
  border: "#0d1f2d",
  card: "#060d14",
  danger: "#ff4444",
};

function NeonBar({ score, color }: { score: number; color: string }) {
  return (
    <div style={{ flex: 1, height: 3, backgroundColor: "#0a1a24", position: "relative" }}>
      <div
        style={{
          width: `${score}%`,
          height: "100%",
          backgroundColor: color,
          boxShadow: `0 0 6px ${color}`,
        }}
      />
    </div>
  );
}

function Stars({ n }: { n: number }) {
  return (
    <span style={{ color: C.pink, fontSize: 11, textShadow: `0 0 6px ${C.pink}` }}>
      {"★".repeat(n)}{"☆".repeat(5 - n)}
    </span>
  );
}

export default function CyberPreview() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Rajdhani:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <style>{`
        @keyframes flicker { 0%,100%{opacity:1} 92%{opacity:.95} 94%{opacity:.6} 96%{opacity:1} }
        @keyframes scanline {
          0% { background-position: 0 0; }
          100% { background-position: 0 100%; }
        }
        .cyber-glow-pink { text-shadow: 0 0 8px #ff0080, 0 0 20px #ff008066; }
        .cyber-glow-cyan { text-shadow: 0 0 8px #00f5ff, 0 0 20px #00f5ff66; }
        .cyber-card:hover { border-color: #00f5ff !important; box-shadow: 0 0 20px #00f5ff22; }
        .cyber-btn:hover { background-color: #ff0080 !important; box-shadow: 0 0 16px #ff008066; }
      `}</style>

      <div
        style={{
          position: "fixed",
          inset: 0,
          overflowY: "auto",
          zIndex: 9999,
          backgroundColor: C.bg,
          color: C.fg,
          fontFamily: "'Rajdhani', 'Segoe UI', sans-serif",
          backgroundImage: `
            linear-gradient(rgba(0,245,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,245,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      >
        {/* Theme nav */}
        <div style={{ backgroundColor: "#080d14", padding: "6px 24px", fontSize: 11, color: C.muted, display: "flex", gap: 16, borderBottom: `1px solid ${C.border}` }}>
          <span style={{ fontWeight: 700, color: C.pink, fontFamily: "'Orbitron', sans-serif", fontSize: 10 }}>[ 네온 사이버 ]</span>
          <span>|</span>
          <a href="/preview/minimal" style={{ color: C.muted, textDecoration: "none" }}>미니멀</a>
          <a href="/preview/nature" style={{ color: C.muted, textDecoration: "none" }}>네이처</a>
          <a href="/preview/luxury" style={{ color: C.muted, textDecoration: "none" }}>럭셔리</a>
          <span style={{ marginLeft: "auto" }}><a href="/" style={{ color: C.subtle, textDecoration: "none" }}>← 메인</a></span>
        </div>

        {/* Navbar */}
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            backgroundColor: "rgba(3,5,15,0.92)",
            borderBottom: `1px solid ${C.pink}33`,
            backdropFilter: "blur(10px)",
          }}
        >
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56 }}>
            <a
              href="#"
              className="cyber-glow-pink"
              style={{
                textDecoration: "none",
                color: C.pink,
                fontWeight: 900,
                fontSize: 14,
                letterSpacing: "0.15em",
                fontFamily: "'Orbitron', sans-serif",
                animation: "flicker 4s infinite",
              }}
            >
              [ NOMAD.KR ]
            </a>
            <nav style={{ display: "flex", gap: 24, alignItems: "center" }}>
              {["도시", "지도", "커뮤니티", "밋업", "통계"].map((item) => (
                <a key={item} href="#" style={{ fontSize: 12, color: C.muted, textDecoration: "none", letterSpacing: "0.08em", fontFamily: "'Orbitron', sans-serif" }}>{item}</a>
              ))}
            </nav>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <button style={{ fontSize: 12, color: C.muted, background: "none", border: "none", cursor: "pointer", padding: "6px 12px", letterSpacing: "0.06em" }}>
                LOGIN
              </button>
              <button
                className="cyber-btn"
                style={{
                  fontSize: 12,
                  backgroundColor: "transparent",
                  color: C.pink,
                  border: `1px solid ${C.pink}`,
                  cursor: "pointer",
                  padding: "8px 18px",
                  letterSpacing: "0.1em",
                  fontFamily: "'Orbitron', sans-serif",
                  transition: "all 0.2s",
                }}
              >
                JOIN →
              </button>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px 64px", position: "relative" }}>
          <div style={{ fontSize: 11, color: C.cyan, letterSpacing: "0.2em", fontFamily: "'Orbitron', sans-serif", marginBottom: 20 }}>
            // SYSTEM INITIALIZED · NOMAD.KR v2.0
          </div>
          <h1
            className="cyber-glow-cyan"
            style={{
              fontSize: "clamp(36px, 5vw, 68px)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              fontFamily: "'Orbitron', sans-serif",
              marginBottom: 8,
              color: C.cyan,
            }}
          >
            EXPLORE
          </h1>
          <h1
            className="cyber-glow-pink"
            style={{
              fontSize: "clamp(36px, 5vw, 68px)",
              fontWeight: 900,
              lineHeight: 1.1,
              fontFamily: "'Orbitron', sans-serif",
              marginBottom: 24,
              color: C.pink,
              letterSpacing: "0.02em",
            }}
          >
            KOREA
          </h1>
          <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.7, marginBottom: 40, maxWidth: 480, letterSpacing: "0.04em" }}>
            대한민국 디지털 노마드를 위한 데이터 기반 도시 평가 &amp; 커뮤니티 플랫폼
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <button
              style={{
                fontSize: 13,
                backgroundColor: C.pink,
                color: "#fff",
                border: "none",
                cursor: "pointer",
                padding: "12px 28px",
                letterSpacing: "0.1em",
                fontFamily: "'Orbitron', sans-serif",
                boxShadow: `0 0 20px ${C.pink}66`,
              }}
            >
              ENTER SYSTEM →
            </button>
            <button
              style={{
                fontSize: 13,
                backgroundColor: "transparent",
                color: C.cyan,
                border: `1px solid ${C.cyan}`,
                cursor: "pointer",
                padding: "12px 28px",
                letterSpacing: "0.1em",
                fontFamily: "'Orbitron', sans-serif",
              }}
            >
              SCAN CITIES
            </button>
          </div>
        </section>

        {/* Search */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 40px" }}>
          <div
            style={{
              border: `1px solid ${C.cyan}`,
              boxShadow: `0 0 12px ${C.cyan}22`,
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "12px 18px",
              backgroundColor: C.card,
            }}
          >
            <span style={{ color: C.cyan, fontSize: 13, fontFamily: "'Orbitron', sans-serif", letterSpacing: "0.1em" }}>$ SCAN &gt;</span>
            <input
              type="text"
              placeholder="도시 이름, 지역, 태그 스캔..."
              style={{ flex: 1, border: "none", background: "transparent", fontSize: 14, color: C.fg, outline: "none", fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.04em" }}
            />
            <span style={{ fontSize: 10, color: C.subtle, border: `1px solid ${C.subtle}`, padding: "3px 8px", fontFamily: "'Orbitron', sans-serif" }}>ENTER</span>
          </div>
        </div>

        {/* Stats */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 48px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", border: `1px solid ${C.pink}44`, gap: 1, backgroundColor: `${C.pink}22` }}>
            {stats.map((stat, i) => (
              <div key={stat.label} style={{ padding: "20px 16px", textAlign: "center", backgroundColor: C.card }}>
                <div
                  className="cyber-glow-cyan"
                  style={{ fontSize: 26, fontWeight: 700, color: C.cyan, fontFamily: "'Orbitron', sans-serif", letterSpacing: "-0.02em" }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: 10, color: C.muted, marginTop: 4, letterSpacing: "0.1em", fontFamily: "'Orbitron', sans-serif" }}>{stat.label.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Cities */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 64px" }}>
          <p style={{ fontSize: 10, color: C.cyan, marginBottom: 20, letterSpacing: "0.15em", fontFamily: "'Orbitron', sans-serif" }}>
            // CITY DATABASE — RANKED BY NOMAD SCORE
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {cities.map((city, idx) => (
              <div
                key={city.nameKo}
                className="cyber-card"
                style={{
                  backgroundColor: C.card,
                  border: `1px solid ${idx % 3 === 0 ? C.pink + "66" : idx % 3 === 1 ? C.cyan + "44" : C.purple + "44"}`,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                <div style={{ padding: "14px 16px 12px", borderBottom: `1px solid #0d1a22` }}>
                  <div style={{ fontSize: 10, color: C.pink, marginBottom: 4, letterSpacing: "0.12em", fontFamily: "'Orbitron', sans-serif" }}>#{city.rank} {city.badgeLabel}</div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: C.fg, letterSpacing: "0.04em" }}>{city.nameKo} <span style={{ fontSize: 12, color: C.subtle }}>{city.nameEn}</span></div>
                  <div style={{ fontSize: 10, color: C.subtle, marginTop: 2, letterSpacing: "0.06em" }}>{city.region}</div>
                </div>
                <div style={{ padding: "12px 16px", borderBottom: `1px solid #0d1a22` }}>
                  {[
                    { label: "NET", value: city.net, color: C.cyan },
                    { label: "COST", value: city.cost, color: C.pink },
                    { label: "CAFE", value: city.cafe, color: C.purple },
                    { label: "SAFE", value: city.safe, color: C.cyan },
                  ].map(({ label, value, color }) => (
                    <div key={label} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <span style={{ fontSize: 10, color: C.subtle, width: 32, flexShrink: 0, letterSpacing: "0.1em", fontFamily: "'Orbitron', sans-serif" }}>{label}</span>
                      <NeonBar score={value} color={color} />
                      <span style={{ fontSize: 11, color, width: 24, textAlign: "right" }}>{value}</span>
                    </div>
                  ))}
                </div>
                <div style={{ padding: "10px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <span style={{ fontSize: 10, color: C.subtle, fontFamily: "'Orbitron', sans-serif" }}>SCORE </span>
                    <span
                      className="cyber-glow-pink"
                      style={{ fontSize: 18, fontWeight: 700, color: C.pink, fontFamily: "'Orbitron', sans-serif" }}
                    >
                      {city.score}
                    </span>
                    <span style={{ fontSize: 10, color: C.subtle }}>/100</span>
                  </div>
                  <div style={{ fontSize: 10, color: C.subtle, textAlign: "right" }}>{city.monthlyCostMin}~{city.monthlyCostMax}<br />/ mo</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 64px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <p style={{ fontSize: 10, color: C.cyan, letterSpacing: "0.15em", fontFamily: "'Orbitron', sans-serif" }}>// LATEST TRANSMISSIONS</p>
            <a href="#" style={{ fontSize: 10, color: C.pink, textDecoration: "none", fontFamily: "'Orbitron', sans-serif" }}>VIEW ALL →</a>
          </div>
          <div style={{ border: `1px solid ${C.pink}33` }}>
            {reviews.map((r, i) => (
              <div key={r.userId} style={{ padding: "16px 18px", borderBottom: i < reviews.length - 1 ? `1px solid #0d1a22` : "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span className="cyber-glow-cyan" style={{ fontSize: 12, color: C.cyan, fontFamily: "'Orbitron', sans-serif" }}>[{r.userId}]</span>
                  <span style={{ fontSize: 11, color: C.subtle }}>{r.cityKo} · {r.district}</span>
                  <Stars n={r.rating} />
                  <span style={{ fontSize: 10, color: C.subtle, marginLeft: "auto" }}>{r.date}</span>
                </div>
                <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.6, letterSpacing: "0.02em" }}>&ldquo;{r.body}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>

        {/* Meetups */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 64px" }}>
          <p style={{ fontSize: 10, color: C.cyan, marginBottom: 16, letterSpacing: "0.15em", fontFamily: "'Orbitron', sans-serif" }}>// SCHEDULED EVENTS</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
            {meetups.map((m) => {
              const pct = (m.rsvpCurrent / m.rsvpMax) * 100;
              return (
                <div key={m.title} style={{ border: `1px solid ${C.cyan}33`, padding: "18px", backgroundColor: C.card }}>
                  <div style={{ fontSize: 10, color: C.cyan, marginBottom: 10, letterSpacing: "0.12em", fontFamily: "'Orbitron', sans-serif" }}>[EVENT] {m.cityKo}</div>
                  <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 12, letterSpacing: "0.04em" }}>{m.title}</div>
                  <div style={{ fontSize: 12, color: C.muted, display: "flex", flexDirection: "column", gap: 5, marginBottom: 14, letterSpacing: "0.04em" }}>
                    <div><span style={{ color: C.subtle, marginRight: 8, fontFamily: "'Orbitron', sans-serif", fontSize: 9 }}>DATE</span>{m.date}</div>
                    <div><span style={{ color: C.subtle, marginRight: 8, fontFamily: "'Orbitron', sans-serif", fontSize: 9 }}>SPOT</span>{m.spot}</div>
                    <div><span style={{ color: C.subtle, marginRight: 8, fontFamily: "'Orbitron', sans-serif", fontSize: 9 }}>RSVP</span>{m.rsvpCurrent} / {m.rsvpMax} <span style={{ color: pct >= 80 ? C.danger : C.cyan, marginLeft: 8, fontSize: 10 }}>{pct >= 80 ? "마감 임박" : "참가 가능"}</span></div>
                  </div>
                  <div style={{ height: 2, backgroundColor: "#0a1a24", marginBottom: 14 }}>
                    <div style={{ width: `${pct}%`, height: "100%", backgroundColor: pct >= 80 ? C.danger : C.cyan, boxShadow: `0 0 6px ${pct >= 80 ? C.danger : C.cyan}` }} />
                  </div>
                  <button style={{ width: "100%", padding: "9px", border: `1px solid ${C.cyan}66`, fontSize: 11, color: C.cyan, backgroundColor: "transparent", cursor: "pointer", fontFamily: "'Orbitron', sans-serif", letterSpacing: "0.1em" }}>
                    RSVP →
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <footer style={{ borderTop: `1px solid ${C.pink}33`, padding: "32px 24px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <span className="cyber-glow-pink" style={{ fontWeight: 900, color: C.pink, fontSize: 13, fontFamily: "'Orbitron', sans-serif", letterSpacing: "0.12em" }}>[ NOMAD.KR ]</span>
              <a href="mailto:hi@nomad.kr" style={{ fontSize: 11, color: C.subtle, textDecoration: "none", fontFamily: "'Orbitron', sans-serif" }}>hi@nomad.kr</a>
            </div>
            <div style={{ display: "flex", gap: 20 }}>
              {["도시", "지도", "커뮤니티", "밋업", "통계", "FAQ", "TOS"].map((l) => (
                <a key={l} href="#" style={{ fontSize: 10, color: C.subtle, textDecoration: "none", fontFamily: "'Orbitron', sans-serif", letterSpacing: "0.08em" }}>[{l}]</a>
              ))}
            </div>
            <p style={{ fontSize: 10, color: "#0d2030", marginTop: 20, letterSpacing: "0.06em" }}>made with love by nomads, for nomads.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
