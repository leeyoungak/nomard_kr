import { cities, stats, reviews, meetups } from "@/lib/mock-data";

const C = {
  bg: "#ffffff",
  fg: "#0f0f0f",
  muted: "#6b7280",
  subtle: "#9ca3af",
  accent: "#3730a3",
  accentLight: "#eef2ff",
  border: "#e5e7eb",
  card: "#fafafa",
  danger: "#ef4444",
};

function ScoreBar({ score }: { score: number }) {
  return (
    <div style={{ flex: 1, height: 4, backgroundColor: "#e5e7eb", borderRadius: 2 }}>
      <div
        style={{
          width: `${score}%`,
          height: "100%",
          backgroundColor: C.accent,
          borderRadius: 2,
        }}
      />
    </div>
  );
}

function Stars({ n }: { n: number }) {
  return (
    <span style={{ color: "#f59e0b", fontSize: 12 }}>
      {"★".repeat(n)}{"☆".repeat(5 - n)}
    </span>
  );
}

export default function MinimalPreview() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap"
        rel="stylesheet"
      />

      <div
        style={{
          position: "fixed",
          inset: 0,
          overflowY: "auto",
          zIndex: 9999,
          backgroundColor: C.bg,
          color: C.fg,
          fontFamily: "'DM Sans', -apple-system, sans-serif",
        }}
      >
        {/* Theme nav */}
        <div style={{ backgroundColor: C.accentLight, padding: "6px 24px", fontSize: 11, color: C.accent, display: "flex", gap: 16 }}>
          <span style={{ fontWeight: 600 }}>미니멀 테마</span>
          <span>|</span>
          <a href="/preview/cyber" style={{ color: C.accent, textDecoration: "none" }}>네온 사이버</a>
          <a href="/preview/nature" style={{ color: C.accent, textDecoration: "none" }}>네이처</a>
          <a href="/preview/luxury" style={{ color: C.accent, textDecoration: "none" }}>럭셔리</a>
          <span style={{ marginLeft: "auto" }}><a href="/" style={{ color: C.muted, textDecoration: "none" }}>← 메인</a></span>
        </div>

        {/* Navbar */}
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            backgroundColor: "rgba(255,255,255,0.95)",
            borderBottom: `1px solid ${C.border}`,
            backdropFilter: "blur(8px)",
          }}
        >
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56 }}>
            <a href="#" style={{ textDecoration: "none", color: C.accent, fontWeight: 700, fontSize: 15, letterSpacing: "-0.02em" }}>
              NOMAD.KR
            </a>
            <nav style={{ display: "flex", gap: 28, alignItems: "center" }}>
              {["도시", "지도", "커뮤니티", "밋업", "통계"].map((item) => (
                <a key={item} href="#" style={{ fontSize: 13, color: C.muted, textDecoration: "none" }}>{item}</a>
              ))}
            </nav>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <button style={{ fontSize: 13, color: C.muted, background: "none", border: "none", cursor: "pointer", padding: "6px 12px" }}>
                로그인
              </button>
              <button style={{ fontSize: 13, backgroundColor: C.accent, color: "#fff", border: "none", cursor: "pointer", padding: "8px 18px", borderRadius: 6, fontWeight: 500 }}>
                가입하기
              </button>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px 64px" }}>
          <div style={{ display: "inline-block", fontSize: 11, fontWeight: 600, color: C.accent, backgroundColor: C.accentLight, padding: "4px 12px", borderRadius: 100, marginBottom: 24, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            NOMAD.KR · 2025
          </div>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.03em", color: C.fg, marginBottom: 20, maxWidth: 640 }}>
            한국의 모든 도시를<br />비교하세요
          </h1>
          <p style={{ fontSize: 17, color: C.muted, lineHeight: 1.7, marginBottom: 40, maxWidth: 480 }}>
            대한민국 디지털 노마드를 위한 데이터 기반 도시 평가 &amp; 커뮤니티 플랫폼
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button style={{ fontSize: 14, backgroundColor: C.accent, color: "#fff", border: "none", cursor: "pointer", padding: "12px 28px", borderRadius: 8, fontWeight: 600, fontFamily: "inherit" }}>
              무료로 시작하기 →
            </button>
            <button style={{ fontSize: 14, backgroundColor: "transparent", color: C.fg, border: `1.5px solid ${C.border}`, cursor: "pointer", padding: "12px 28px", borderRadius: 8, fontWeight: 500, fontFamily: "inherit" }}>
              도시 탐색하기
            </button>
          </div>
        </section>

        {/* Search */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 32px" }}>
          <div style={{ border: `1.5px solid ${C.border}`, borderRadius: 10, display: "flex", alignItems: "center", gap: 12, padding: "12px 18px", backgroundColor: C.card }}>
            <span style={{ color: C.subtle, fontSize: 16 }}>⌕</span>
            <input
              type="text"
              placeholder="도시 이름, 지역, 태그 검색..."
              style={{ flex: 1, border: "none", background: "transparent", fontSize: 14, color: C.fg, outline: "none", fontFamily: "inherit" }}
            />
            <span style={{ fontSize: 11, color: C.subtle, backgroundColor: C.border, padding: "3px 8px", borderRadius: 4 }}>Enter</span>
          </div>
        </div>

        {/* Stats */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 48px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", border: `1px solid ${C.border}`, borderRadius: 10, overflow: "hidden" }}>
            {stats.map((stat, i) => (
              <div key={stat.label} style={{ padding: "24px 16px", textAlign: "center", borderRight: i < stats.length - 1 ? `1px solid ${C.border}` : "none" }}>
                <div style={{ fontSize: 26, fontWeight: 700, color: C.accent, letterSpacing: "-0.02em" }}>{stat.value}</div>
                <div style={{ fontSize: 11, color: C.muted, marginTop: 4 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Cities */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 64px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
            <div>
              <h2 style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em" }}>도시 랭킹</h2>
              <p style={{ fontSize: 13, color: C.muted, marginTop: 4 }}>노마드 스코어 기준 정렬</p>
            </div>
            <a href="#" style={{ fontSize: 13, color: C.accent, textDecoration: "none" }}>전체 보기 →</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {cities.map((city) => (
              <div
                key={city.nameKo}
                style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 10, overflow: "hidden", cursor: "pointer" }}
              >
                <div style={{ padding: "18px 18px 14px", borderBottom: `1px solid ${C.border}` }}>
                  <div style={{ fontSize: 11, color: C.accent, fontWeight: 600, marginBottom: 4 }}>#{city.rank} {city.badgeLabel}</div>
                  <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.01em" }}>{city.nameKo} <span style={{ fontSize: 13, color: C.muted, fontWeight: 400 }}>{city.nameEn}</span></div>
                  <div style={{ fontSize: 11, color: C.subtle, marginTop: 2 }}>{city.region}</div>
                </div>
                <div style={{ padding: "14px 18px", borderBottom: `1px solid ${C.border}` }}>
                  {[
                    { label: "인터넷", value: city.net },
                    { label: "물가", value: city.cost },
                    { label: "카페", value: city.cafe },
                    { label: "안전", value: city.safe },
                  ].map(({ label, value }) => (
                    <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <span style={{ fontSize: 11, color: C.muted, width: 36, flexShrink: 0 }}>{label}</span>
                      <ScoreBar score={value} />
                      <span style={{ fontSize: 11, color: C.muted, width: 24, textAlign: "right" }}>{value}</span>
                    </div>
                  ))}
                </div>
                <div style={{ padding: "12px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <span style={{ fontSize: 11, color: C.muted }}>스코어 </span>
                    <span style={{ fontSize: 18, fontWeight: 700, color: C.accent }}>{city.score}</span>
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
            <h2 style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em" }}>최신 리뷰</h2>
            <a href="#" style={{ fontSize: 13, color: C.accent, textDecoration: "none" }}>전체 보기 →</a>
          </div>
          <div style={{ border: `1px solid ${C.border}`, borderRadius: 10, overflow: "hidden" }}>
            {reviews.map((r, i) => (
              <div key={r.userId} style={{ padding: "18px 20px", borderBottom: i < reviews.length - 1 ? `1px solid ${C.border}` : "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: C.accent }}>{r.userId}</span>
                  <span style={{ fontSize: 12, color: C.muted }}>{r.cityKo} · {r.district}</span>
                  <Stars n={r.rating} />
                  <span style={{ fontSize: 11, color: C.subtle, marginLeft: "auto" }}>{r.date}</span>
                </div>
                <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.65 }}>&ldquo;{r.body}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>

        {/* Meetups */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 64px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em" }}>예정 밋업</h2>
            <a href="#" style={{ fontSize: 13, color: C.accent, textDecoration: "none" }}>전체 보기 →</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {meetups.map((m) => {
              const pct = (m.rsvpCurrent / m.rsvpMax) * 100;
              return (
                <div key={m.title} style={{ border: `1px solid ${C.border}`, borderRadius: 10, padding: "20px", backgroundColor: C.card }}>
                  <div style={{ fontSize: 11, color: C.accent, fontWeight: 600, marginBottom: 10 }}>밋업 · {m.cityKo}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 14 }}>{m.title}</div>
                  <div style={{ fontSize: 12, color: C.muted, display: "flex", flexDirection: "column", gap: 6, marginBottom: 16 }}>
                    <div><span style={{ color: C.subtle, marginRight: 8 }}>일시</span>{m.date}</div>
                    <div><span style={{ color: C.subtle, marginRight: 8 }}>장소</span>{m.spot}</div>
                    <div><span style={{ color: C.subtle, marginRight: 8 }}>RSVP</span>{m.rsvpCurrent} / {m.rsvpMax}</div>
                  </div>
                  <div style={{ height: 4, backgroundColor: C.border, borderRadius: 2, marginBottom: 14 }}>
                    <div style={{ width: `${pct}%`, height: "100%", backgroundColor: pct >= 80 ? C.danger : C.accent, borderRadius: 2 }} />
                  </div>
                  <button style={{ width: "100%", padding: "10px", border: `1.5px solid ${C.border}`, borderRadius: 6, fontSize: 13, color: C.muted, backgroundColor: "transparent", cursor: "pointer", fontFamily: "inherit" }}>
                    RSVP 신청 →
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <footer style={{ borderTop: `1px solid ${C.border}`, padding: "40px 24px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <div>
                <span style={{ fontWeight: 700, color: C.accent, fontSize: 15 }}>NOMAD.KR</span>
                <span style={{ fontSize: 12, color: C.muted, marginLeft: 12 }}>대한민국 노마드 커뮤니티 · since 2025</span>
              </div>
              <a href="mailto:hi@nomad.kr" style={{ fontSize: 12, color: C.muted, textDecoration: "none" }}>hi@nomad.kr</a>
            </div>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              {["도시", "지도", "커뮤니티", "밋업", "통계", "FAQ", "TOS", "개인정보처리방침"].map((l) => (
                <a key={l} href="#" style={{ fontSize: 12, color: C.muted, textDecoration: "none" }}>{l}</a>
              ))}
            </div>
            <p style={{ fontSize: 11, color: C.subtle, marginTop: 20 }}>made with love by nomads, for nomads.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
