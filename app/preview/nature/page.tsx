import { cities, stats, reviews, meetups } from "@/lib/mock-data";

const C = {
  bg: "#faf6f1",
  fg: "#2c2416",
  muted: "#7a6a54",
  subtle: "#b8a896",
  primary: "#2d5a27",
  primaryLight: "#e8f0e7",
  secondary: "#8b6346",
  terracotta: "#c4522a",
  border: "#d6ccba",
  card: "#f5f0e8",
  cardHover: "#ede8de",
};

function LeafBar({ score }: { score: number }) {
  return (
    <div style={{ flex: 1, height: 6, backgroundColor: "#e5ddd0", borderRadius: 3 }}>
      <div
        style={{
          width: `${score}%`,
          height: "100%",
          background: `linear-gradient(90deg, ${C.primary}, #4a8a42)`,
          borderRadius: 3,
        }}
      />
    </div>
  );
}

function Stars({ n }: { n: number }) {
  return (
    <span style={{ color: C.terracotta, fontSize: 12 }}>
      {"★".repeat(n)}{"☆".repeat(5 - n)}
    </span>
  );
}

export default function NaturePreview() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Lato:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
      <style>{`
        .nature-card:hover { background-color: ${C.cardHover} !important; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(45,90,39,0.1) !important; }
        .nature-link:hover { color: ${C.primary} !important; }
      `}</style>

      <div
        style={{
          position: "fixed",
          inset: 0,
          overflowY: "auto",
          zIndex: 9999,
          backgroundColor: C.bg,
          color: C.fg,
          fontFamily: "'Lato', Georgia, sans-serif",
        }}
      >
        {/* Theme nav */}
        <div style={{ backgroundColor: C.primaryLight, padding: "6px 24px", fontSize: 11, color: C.primary, display: "flex", gap: 16, borderBottom: `1px solid ${C.border}` }}>
          <span style={{ fontWeight: 700 }}>🌿 네이처 테마</span>
          <span>|</span>
          <a href="/preview/minimal" style={{ color: C.muted, textDecoration: "none" }}>미니멀</a>
          <a href="/preview/cyber" style={{ color: C.muted, textDecoration: "none" }}>네온 사이버</a>
          <a href="/preview/luxury" style={{ color: C.muted, textDecoration: "none" }}>럭셔리</a>
          <span style={{ marginLeft: "auto" }}><a href="/" style={{ color: C.subtle, textDecoration: "none" }}>← 메인</a></span>
        </div>

        {/* Navbar */}
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            backgroundColor: "rgba(250,246,241,0.95)",
            borderBottom: `1px solid ${C.border}`,
            backdropFilter: "blur(8px)",
          }}
        >
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 58 }}>
            <a href="#" style={{ textDecoration: "none", color: C.primary, fontWeight: 700, fontSize: 16, letterSpacing: "0.02em", fontFamily: "'Playfair Display', Georgia, serif" }}>
              Nomad.KR 🌿
            </a>
            <nav style={{ display: "flex", gap: 28, alignItems: "center" }}>
              {["도시", "지도", "커뮤니티", "밋업", "통계"].map((item) => (
                <a key={item} href="#" style={{ fontSize: 14, color: C.muted, textDecoration: "none" }}>{item}</a>
              ))}
            </nav>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <button style={{ fontSize: 13, color: C.muted, background: "none", border: "none", cursor: "pointer", padding: "6px 14px" }}>
                로그인
              </button>
              <button style={{ fontSize: 13, backgroundColor: C.primary, color: "#fff", border: "none", cursor: "pointer", padding: "9px 20px", borderRadius: 24, fontWeight: 700, fontFamily: "inherit" }}>
                가입하기 →
              </button>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "80px 24px 72px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: "5%",
              fontSize: 120,
              opacity: 0.07,
              lineHeight: 1,
              userSelect: "none",
              pointerEvents: "none",
            }}
          >
            🌿
          </div>
          <div style={{ display: "inline-block", fontSize: 12, fontWeight: 700, color: C.primary, backgroundColor: C.primaryLight, padding: "5px 16px", borderRadius: 100, marginBottom: 28, letterSpacing: "0.04em" }}>
            자연과 함께하는 노마드 라이프
          </div>
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 62px)",
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              color: C.fg,
              marginBottom: 22,
              maxWidth: 560,
              fontFamily: "'Playfair Display', Georgia, serif",
            }}
          >
            한국의 아름다운<br />
            <span style={{ color: C.primary }}>자연 속에서</span><br />
            일하세요
          </h1>
          <p style={{ fontSize: 16, color: C.muted, lineHeight: 1.8, marginBottom: 44, maxWidth: 460 }}>
            대한민국 디지털 노마드를 위한 데이터 기반 도시 평가 &amp; 커뮤니티 플랫폼
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button style={{ fontSize: 15, backgroundColor: C.primary, color: "#fff", border: "none", cursor: "pointer", padding: "13px 32px", borderRadius: 28, fontWeight: 700, fontFamily: "inherit" }}>
              무료로 시작하기 →
            </button>
            <button style={{ fontSize: 15, backgroundColor: "transparent", color: C.secondary, border: `2px solid ${C.border}`, cursor: "pointer", padding: "13px 28px", borderRadius: 28, fontWeight: 700, fontFamily: "inherit" }}>
              도시 탐색하기
            </button>
          </div>
        </section>

        {/* Search */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 40px" }}>
          <div style={{ border: `1.5px solid ${C.border}`, borderRadius: 28, display: "flex", alignItems: "center", gap: 12, padding: "13px 22px", backgroundColor: C.card, boxShadow: "0 2px 12px rgba(45,90,39,0.06)" }}>
            <span style={{ color: C.primary, fontSize: 16 }}>🔍</span>
            <input
              type="text"
              placeholder="도시 이름, 지역, 태그 검색..."
              style={{ flex: 1, border: "none", background: "transparent", fontSize: 14, color: C.fg, outline: "none", fontFamily: "inherit" }}
            />
            <span style={{ fontSize: 12, color: C.subtle, backgroundColor: C.border, padding: "4px 12px", borderRadius: 12 }}>Enter</span>
          </div>
        </div>

        {/* Stats */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 56px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12 }}>
            {stats.map((stat) => (
              <div key={stat.label} style={{ padding: "22px 16px", textAlign: "center", backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 16, boxShadow: "0 2px 8px rgba(45,90,39,0.05)" }}>
                <div style={{ fontSize: 26, fontWeight: 700, color: C.primary, letterSpacing: "-0.02em", fontFamily: "'Playfair Display', serif" }}>{stat.value}</div>
                <div style={{ fontSize: 11, color: C.muted, marginTop: 5 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Cities */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 64px" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 24 }}>
            <div>
              <h2 style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.01em", fontFamily: "'Playfair Display', serif" }}>도시 랭킹</h2>
              <p style={{ fontSize: 13, color: C.muted, marginTop: 4 }}>노마드 스코어 기준 정렬</p>
            </div>
            <a href="#" style={{ fontSize: 13, color: C.primary, textDecoration: "none" }}>전체 보기 →</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {cities.map((city) => (
              <div
                key={city.nameKo}
                className="nature-card"
                style={{
                  backgroundColor: C.card,
                  border: `1px solid ${C.border}`,
                  borderRadius: 16,
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.25s",
                  boxShadow: "0 2px 8px rgba(45,90,39,0.04)",
                }}
              >
                <div style={{ padding: "18px 18px 14px", borderBottom: `1px solid ${C.border}` }}>
                  <div style={{ fontSize: 11, color: C.primary, fontWeight: 700, marginBottom: 5 }}>#{city.rank} {city.badgeLabel}</div>
                  <div style={{ fontSize: 16, fontWeight: 700, fontFamily: "'Playfair Display', serif" }}>{city.nameKo} <span style={{ fontSize: 13, color: C.muted, fontWeight: 400, fontFamily: "inherit" }}>{city.nameEn}</span></div>
                  <div style={{ fontSize: 11, color: C.subtle, marginTop: 3 }}>{city.region}</div>
                </div>
                <div style={{ padding: "14px 18px", borderBottom: `1px solid ${C.border}` }}>
                  {[
                    { label: "인터넷", value: city.net },
                    { label: "물가", value: city.cost },
                    { label: "카페", value: city.cafe },
                    { label: "안전", value: city.safe },
                  ].map(({ label, value }) => (
                    <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 9 }}>
                      <span style={{ fontSize: 11, color: C.muted, width: 36, flexShrink: 0 }}>{label}</span>
                      <LeafBar score={value} />
                      <span style={{ fontSize: 11, color: C.muted, width: 24, textAlign: "right" }}>{value}</span>
                    </div>
                  ))}
                </div>
                <div style={{ padding: "12px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <span style={{ fontSize: 11, color: C.muted }}>스코어 </span>
                    <span style={{ fontSize: 20, fontWeight: 700, color: C.primary, fontFamily: "'Playfair Display', serif" }}>{city.score}</span>
                    <span style={{ fontSize: 11, color: C.subtle }}>/100</span>
                  </div>
                  <div style={{ fontSize: 11, color: C.muted, textAlign: "right" }}>
                    {city.monthlyCostMin}~{city.monthlyCostMax}<br />/ 월
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 64px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, fontFamily: "'Playfair Display', serif" }}>최신 리뷰</h2>
            <a href="#" style={{ fontSize: 13, color: C.primary, textDecoration: "none" }}>전체 보기 →</a>
          </div>
          <div style={{ border: `1px solid ${C.border}`, borderRadius: 16, overflow: "hidden", boxShadow: "0 2px 12px rgba(45,90,39,0.06)" }}>
            {reviews.map((r, i) => (
              <div key={r.userId} style={{ padding: "20px 22px", borderBottom: i < reviews.length - 1 ? `1px solid ${C.border}` : "none", backgroundColor: C.card }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: C.primary }}>{r.userId}</span>
                  <span style={{ fontSize: 12, color: C.muted }}>{r.cityKo} · {r.district}</span>
                  <Stars n={r.rating} />
                  <span style={{ fontSize: 11, color: C.subtle, marginLeft: "auto" }}>{r.date}</span>
                </div>
                <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.7 }}>&ldquo;{r.body}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>

        {/* Meetups */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 64px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, fontFamily: "'Playfair Display', serif" }}>예정 밋업</h2>
            <a href="#" style={{ fontSize: 13, color: C.primary, textDecoration: "none" }}>전체 보기 →</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {meetups.map((m) => {
              const pct = (m.rsvpCurrent / m.rsvpMax) * 100;
              return (
                <div key={m.title} style={{ border: `1px solid ${C.border}`, borderRadius: 16, padding: "20px", backgroundColor: C.card }}>
                  <div style={{ fontSize: 11, color: C.primary, fontWeight: 700, marginBottom: 10 }}>🌿 {m.cityKo}</div>
                  <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 14, fontFamily: "'Playfair Display', serif" }}>{m.title}</div>
                  <div style={{ fontSize: 13, color: C.muted, display: "flex", flexDirection: "column", gap: 6, marginBottom: 16 }}>
                    <div><span style={{ color: C.subtle, marginRight: 8 }}>📅</span>{m.date}</div>
                    <div><span style={{ color: C.subtle, marginRight: 8 }}>📍</span>{m.spot}</div>
                    <div><span style={{ color: C.subtle, marginRight: 8 }}>👥</span>{m.rsvpCurrent} / {m.rsvpMax} <span style={{ color: pct >= 80 ? C.terracotta : C.primary, marginLeft: 8, fontSize: 11, fontWeight: 700 }}>{pct >= 80 ? "마감 임박" : "참가 가능"}</span></div>
                  </div>
                  <div style={{ height: 6, backgroundColor: "#e5ddd0", borderRadius: 3, marginBottom: 16 }}>
                    <div style={{ width: `${pct}%`, height: "100%", background: `linear-gradient(90deg, ${C.primary}, #4a8a42)`, borderRadius: 3 }} />
                  </div>
                  <button style={{ width: "100%", padding: "11px", border: `1.5px solid ${C.border}`, borderRadius: 20, fontSize: 13, color: C.primary, backgroundColor: "transparent", cursor: "pointer", fontFamily: "inherit", fontWeight: 700 }}>
                    RSVP 신청 →
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <footer style={{ borderTop: `1px solid ${C.border}`, padding: "44px 24px", backgroundColor: C.card }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <div>
                <span style={{ fontWeight: 700, color: C.primary, fontSize: 16, fontFamily: "'Playfair Display', serif" }}>Nomad.KR 🌿</span>
                <span style={{ fontSize: 12, color: C.muted, marginLeft: 12 }}>대한민국 노마드 커뮤니티 · since 2025</span>
              </div>
              <a href="mailto:hi@nomad.kr" style={{ fontSize: 12, color: C.muted, textDecoration: "none" }}>hi@nomad.kr</a>
            </div>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              {["도시", "지도", "커뮤니티", "밋업", "통계", "FAQ", "TOS", "개인정보처리방침"].map((l) => (
                <a key={l} href="#" style={{ fontSize: 13, color: C.muted, textDecoration: "none" }}>{l}</a>
              ))}
            </div>
            <p style={{ fontSize: 12, color: C.subtle, marginTop: 24 }}>made with love by nomads, for nomads.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
