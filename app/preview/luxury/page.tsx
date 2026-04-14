import { cities, stats, reviews, meetups } from "@/lib/mock-data";

const C = {
  bg: "#0d0d0d",
  fg: "#f8f0e3",
  muted: "#a09070",
  subtle: "#3d3020",
  gold: "#c9a96e",
  goldLight: "#e8d5b0",
  goldDark: "#8a6d3b",
  border: "#2a2010",
  card: "#111008",
  danger: "#cc4444",
};

function GoldBar({ score }: { score: number }) {
  return (
    <div style={{ flex: 1, height: 2, backgroundColor: C.subtle }}>
      <div
        style={{
          width: `${score}%`,
          height: "100%",
          background: `linear-gradient(90deg, ${C.goldDark}, ${C.gold})`,
        }}
      />
    </div>
  );
}

function Stars({ n }: { n: number }) {
  return (
    <span style={{ color: C.gold, fontSize: 11, letterSpacing: "0.05em" }}>
      {"★".repeat(n)}{"☆".repeat(5 - n)}
    </span>
  );
}

export default function LuxuryPreview() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Montserrat:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .gold-text {
          background: linear-gradient(90deg, #8a6d3b, #c9a96e, #e8d5b0, #c9a96e, #8a6d3b);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .luxury-card:hover { border-color: ${C.gold} !important; }
        .luxury-btn:hover { background-color: ${C.gold} !important; color: #0d0d0d !important; }
      `}</style>

      <div
        style={{
          position: "fixed",
          inset: 0,
          overflowY: "auto",
          zIndex: 9999,
          backgroundColor: C.bg,
          color: C.fg,
          fontFamily: "'Montserrat', 'Helvetica Neue', sans-serif",
        }}
      >
        {/* Theme nav */}
        <div style={{ backgroundColor: "#090905", padding: "6px 24px", fontSize: 10, color: C.muted, display: "flex", gap: 16, borderBottom: `1px solid ${C.border}`, letterSpacing: "0.1em" }}>
          <span style={{ color: C.gold, fontWeight: 600 }}>LUXURY</span>
          <span>|</span>
          <a href="/preview/minimal" style={{ color: C.muted, textDecoration: "none" }}>미니멀</a>
          <a href="/preview/cyber" style={{ color: C.muted, textDecoration: "none" }}>네온 사이버</a>
          <a href="/preview/nature" style={{ color: C.muted, textDecoration: "none" }}>네이처</a>
          <span style={{ marginLeft: "auto" }}><a href="/" style={{ color: C.subtle, textDecoration: "none" }}>← 메인</a></span>
        </div>

        {/* Navbar */}
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            backgroundColor: "rgba(13,13,13,0.96)",
            borderBottom: `1px solid ${C.border}`,
            backdropFilter: "blur(12px)",
          }}
        >
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: C.gold,
                fontWeight: 700,
                fontSize: 16,
                letterSpacing: "0.25em",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                textTransform: "uppercase",
              }}
            >
              Nomad.KR
            </a>
            <nav style={{ display: "flex", gap: 32, alignItems: "center" }}>
              {["도시", "지도", "커뮤니티", "밋업", "통계"].map((item) => (
                <a key={item} href="#" style={{ fontSize: 11, color: C.muted, textDecoration: "none", letterSpacing: "0.12em", textTransform: "uppercase" }}>{item}</a>
              ))}
            </nav>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <button style={{ fontSize: 11, color: C.muted, background: "none", border: "none", cursor: "pointer", padding: "6px 14px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                로그인
              </button>
              <button
                className="luxury-btn"
                style={{
                  fontSize: 11,
                  backgroundColor: "transparent",
                  color: C.gold,
                  border: `1px solid ${C.gold}`,
                  cursor: "pointer",
                  padding: "9px 22px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  transition: "all 0.25s",
                  fontFamily: "inherit",
                }}
              >
                가입하기
              </button>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section style={{ maxWidth: 1280, margin: "0 auto", padding: "100px 32px 80px", position: "relative" }}>
          {/* Decorative lines */}
          <div style={{ position: "absolute", left: 32, top: 80, width: 1, height: 120, background: `linear-gradient(to bottom, transparent, ${C.gold}, transparent)` }} />

          <div style={{ fontSize: 10, color: C.gold, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 32, opacity: 0.8 }}>
            — Premium Nomad Platform —
          </div>
          <h1
            style={{
              fontSize: "clamp(44px, 6vw, 80px)",
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              marginBottom: 12,
              maxWidth: 640,
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontStyle: "italic",
            }}
          >
            <span className="gold-text">한국의 모든 도시를</span>
          </h1>
          <h1
            style={{
              fontSize: "clamp(44px, 6vw, 80px)",
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
              color: C.fg,
              marginBottom: 32,
              maxWidth: 640,
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            품격 있게 비교하세요
          </h1>

          {/* Gold divider */}
          <div style={{ width: 80, height: 1, background: `linear-gradient(90deg, ${C.gold}, transparent)`, marginBottom: 32 }} />

          <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.9, marginBottom: 48, maxWidth: 440, letterSpacing: "0.04em", fontWeight: 300 }}>
            대한민국 디지털 노마드를 위한 프리미엄 데이터 기반 도시 평가 &amp; 커뮤니티 플랫폼
          </p>
          <div style={{ display: "flex", gap: 14 }}>
            <button
              style={{
                fontSize: 11,
                background: `linear-gradient(135deg, ${C.goldDark}, ${C.gold})`,
                color: "#0d0d0d",
                border: "none",
                cursor: "pointer",
                padding: "14px 36px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontFamily: "inherit",
                fontWeight: 600,
              }}
            >
              시작하기
            </button>
            <button
              style={{
                fontSize: 11,
                backgroundColor: "transparent",
                color: C.gold,
                border: `1px solid ${C.gold}44`,
                cursor: "pointer",
                padding: "14px 32px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontFamily: "inherit",
              }}
            >
              도시 탐색
            </button>
          </div>
        </section>

        {/* Search */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px 48px" }}>
          <div
            style={{
              border: `1px solid ${C.gold}44`,
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "14px 22px",
              backgroundColor: C.card,
            }}
          >
            <span style={{ color: C.gold, fontSize: 13, letterSpacing: "0.08em", fontFamily: "inherit", fontWeight: 500 }}>Search</span>
            <div style={{ width: 1, height: 16, backgroundColor: C.border }} />
            <input
              type="text"
              placeholder="도시 이름, 지역, 태그 검색..."
              style={{ flex: 1, border: "none", background: "transparent", fontSize: 13, color: C.fg, outline: "none", fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.04em", fontWeight: 300 }}
            />
            <span style={{ fontSize: 10, color: C.subtle, border: `1px solid ${C.border}`, padding: "4px 10px", letterSpacing: "0.1em" }}>ENTER</span>
          </div>
        </div>

        {/* Stats */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px 56px" }}>
          {/* Gold top line */}
          <div style={{ height: 1, background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`, marginBottom: 1 }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", border: `1px solid ${C.border}`, borderTop: "none" }}>
            {stats.map((stat, i) => (
              <div key={stat.label} style={{ padding: "24px 16px", textAlign: "center", borderRight: i < stats.length - 1 ? `1px solid ${C.border}` : "none" }}>
                <div
                  className="gold-text"
                  style={{ fontSize: 28, fontWeight: 600, fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.02em" }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: 9, color: C.muted, marginTop: 6, letterSpacing: "0.18em", textTransform: "uppercase" }}>{stat.label}</div>
              </div>
            ))}
          </div>
          <div style={{ height: 1, background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)` }} />
        </div>

        {/* Cities */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px 72px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
            <div>
              <h2 style={{ fontSize: 28, fontWeight: 600, fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.02em", fontStyle: "italic" }}>도시 랭킹</h2>
              <div style={{ width: 40, height: 1, backgroundColor: C.gold, marginTop: 8 }} />
            </div>
            <a href="#" style={{ fontSize: 11, color: C.gold, textDecoration: "none", letterSpacing: "0.12em", textTransform: "uppercase" }}>전체 보기 →</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, backgroundColor: C.border }}>
            {cities.map((city) => (
              <div
                key={city.nameKo}
                className="luxury-card"
                style={{
                  backgroundColor: C.card,
                  border: `1px solid transparent`,
                  cursor: "pointer",
                  transition: "border-color 0.2s",
                }}
              >
                <div style={{ padding: "20px 20px 16px", borderBottom: `1px solid ${C.border}` }}>
                  <div style={{ fontSize: 9, color: C.gold, fontWeight: 600, marginBottom: 6, letterSpacing: "0.2em", textTransform: "uppercase" }}>#{city.rank} {city.badgeLabel}</div>
                  <div style={{ fontSize: 18, fontWeight: 600, fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.01em" }}>{city.nameKo} <span style={{ fontSize: 13, color: C.muted, fontWeight: 400, fontStyle: "italic" }}>{city.nameEn}</span></div>
                  <div style={{ fontSize: 10, color: C.subtle, marginTop: 4, letterSpacing: "0.08em" }}>{city.region}</div>
                </div>
                <div style={{ padding: "16px 20px", borderBottom: `1px solid ${C.border}` }}>
                  {[
                    { label: "인터넷", value: city.net },
                    { label: "물가", value: city.cost },
                    { label: "카페", value: city.cafe },
                    { label: "안전", value: city.safe },
                  ].map(({ label, value }) => (
                    <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                      <span style={{ fontSize: 10, color: C.muted, width: 36, flexShrink: 0, letterSpacing: "0.08em" }}>{label}</span>
                      <GoldBar score={value} />
                      <span style={{ fontSize: 10, color: C.muted, width: 24, textAlign: "right" }}>{value}</span>
                    </div>
                  ))}
                </div>
                <div style={{ padding: "14px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <span style={{ fontSize: 10, color: C.muted, letterSpacing: "0.08em" }}>Score </span>
                    <span className="gold-text" style={{ fontSize: 22, fontWeight: 600, fontFamily: "'Cormorant Garamond', serif" }}>{city.score}</span>
                    <span style={{ fontSize: 10, color: C.subtle }}>/100</span>
                  </div>
                  <div style={{ fontSize: 10, color: C.muted, textAlign: "right", letterSpacing: "0.04em" }}>
                    {city.monthlyCostMin}~{city.monthlyCostMax}<br />/ mo
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px 72px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 24 }}>
            <div>
              <h2 style={{ fontSize: 28, fontWeight: 600, fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>최신 리뷰</h2>
              <div style={{ width: 40, height: 1, backgroundColor: C.gold, marginTop: 8 }} />
            </div>
            <a href="#" style={{ fontSize: 11, color: C.gold, textDecoration: "none", letterSpacing: "0.12em" }}>전체 보기 →</a>
          </div>
          <div style={{ border: `1px solid ${C.border}` }}>
            {reviews.map((r, i) => (
              <div key={r.userId} style={{ padding: "20px 22px", borderBottom: i < reviews.length - 1 ? `1px solid ${C.border}` : "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10 }}>
                  <span style={{ fontSize: 12, color: C.gold, letterSpacing: "0.06em" }}>{r.userId}</span>
                  <span style={{ fontSize: 11, color: C.muted, letterSpacing: "0.04em" }}>{r.cityKo} · {r.district}</span>
                  <Stars n={r.rating} />
                  <span style={{ fontSize: 10, color: C.subtle, marginLeft: "auto", letterSpacing: "0.08em" }}>{r.date}</span>
                </div>
                <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.75, letterSpacing: "0.03em", fontWeight: 300 }}>&ldquo;{r.body}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>

        {/* Meetups */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px 72px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 24 }}>
            <div>
              <h2 style={{ fontSize: 28, fontWeight: 600, fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>예정 밋업</h2>
              <div style={{ width: 40, height: 1, backgroundColor: C.gold, marginTop: 8 }} />
            </div>
            <a href="#" style={{ fontSize: 11, color: C.gold, textDecoration: "none", letterSpacing: "0.12em" }}>전체 보기 →</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1, backgroundColor: C.border }}>
            {meetups.map((m) => {
              const pct = (m.rsvpCurrent / m.rsvpMax) * 100;
              return (
                <div key={m.title} style={{ padding: "22px", backgroundColor: C.card }}>
                  <div style={{ fontSize: 9, color: C.gold, fontWeight: 600, marginBottom: 12, letterSpacing: "0.2em", textTransform: "uppercase" }}>— {m.cityKo}</div>
                  <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 16, fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.01em" }}>{m.title}</div>
                  <div style={{ fontSize: 12, color: C.muted, display: "flex", flexDirection: "column", gap: 6, marginBottom: 18, letterSpacing: "0.04em", fontWeight: 300 }}>
                    <div><span style={{ color: C.subtle, marginRight: 10, letterSpacing: "0.1em", fontSize: 9 }}>DATE</span>{m.date}</div>
                    <div><span style={{ color: C.subtle, marginRight: 10, letterSpacing: "0.1em", fontSize: 9 }}>VENUE</span>{m.spot}</div>
                    <div><span style={{ color: C.subtle, marginRight: 10, letterSpacing: "0.1em", fontSize: 9 }}>RSVP</span>{m.rsvpCurrent} / {m.rsvpMax} <span style={{ color: pct >= 80 ? C.danger : C.gold, marginLeft: 8, fontSize: 10 }}>{pct >= 80 ? "마감 임박" : "참가 가능"}</span></div>
                  </div>
                  <div style={{ height: 1, background: `linear-gradient(90deg, ${C.gold}, transparent)`, opacity: pct / 100, marginBottom: 18 }} />
                  <button
                    className="luxury-btn"
                    style={{
                      width: "100%",
                      padding: "11px",
                      border: `1px solid ${C.gold}66`,
                      fontSize: 11,
                      color: C.gold,
                      backgroundColor: "transparent",
                      cursor: "pointer",
                      fontFamily: "inherit",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      transition: "all 0.2s",
                    }}
                  >
                    RSVP 신청
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <footer style={{ borderTop: `1px solid ${C.border}`, padding: "48px 32px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            {/* Gold top accent */}
            <div style={{ height: 1, background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`, marginBottom: 32 }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
              <div>
                <span style={{ fontWeight: 700, color: C.gold, fontSize: 16, fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.2em", textTransform: "uppercase" }}>Nomad.KR</span>
                <span style={{ fontSize: 11, color: C.muted, marginLeft: 16, letterSpacing: "0.08em" }}>대한민국 노마드 커뮤니티 · since 2025</span>
              </div>
              <a href="mailto:hi@nomad.kr" style={{ fontSize: 11, color: C.muted, textDecoration: "none", letterSpacing: "0.08em" }}>hi@nomad.kr</a>
            </div>
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
              {["도시", "지도", "커뮤니티", "밋업", "통계", "FAQ", "TOS", "개인정보처리방침"].map((l) => (
                <a key={l} href="#" style={{ fontSize: 11, color: C.muted, textDecoration: "none", letterSpacing: "0.08em" }}>{l}</a>
              ))}
            </div>
            <p style={{ fontSize: 10, color: C.subtle, marginTop: 24, letterSpacing: "0.12em" }}>made with love by nomads, for nomads.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
