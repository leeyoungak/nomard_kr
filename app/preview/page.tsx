const themes = [
  {
    href: "/preview/minimal",
    name: "미니멀",
    desc: "흰 배경 · 인디고 포인트 · DM Sans",
    bg: "#ffffff",
    fg: "#3730a3",
    border: "#e5e7eb",
  },
  {
    href: "/preview/cyber",
    name: "네온 사이버",
    desc: "딥 네이비 · 핑크/시안 네온 · Orbitron",
    bg: "#03050f",
    fg: "#ff0080",
    border: "#ff008033",
  },
  {
    href: "/preview/nature",
    name: "네이처",
    desc: "크림 배경 · 숲 그린 · Playfair Display",
    bg: "#faf6f1",
    fg: "#2d5a27",
    border: "#d6ccba",
  },
  {
    href: "/preview/luxury",
    name: "럭셔리",
    desc: "딥 차콜 · 샴페인 골드 · Cormorant Garamond",
    bg: "#0d0d0d",
    fg: "#c9a96e",
    border: "#2a2418",
  },
];

export default function PreviewIndexPage() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        overflowY: "auto",
        zIndex: 9999,
        backgroundColor: "#0a0a0a",
        color: "#e5e5e5",
        fontFamily: "monospace",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "60px 24px" }}>
        <p style={{ color: "#555", fontSize: 12, marginBottom: 8 }}>
          // DESIGN PREVIEWS
        </p>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>
          UI 테마 시안
        </h1>
        <p style={{ color: "#888", fontSize: 14, marginBottom: 48 }}>
          4가지 테마 디자인을 확인하세요.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 16,
          }}
        >
          {themes.map((t) => (
            <a
              key={t.href}
              href={t.href}
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  backgroundColor: t.bg,
                  border: `1px solid ${t.border}`,
                  padding: "24px",
                  borderRadius: 4,
                  cursor: "pointer",
                  transition: "transform 0.15s",
                }}
              >
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: t.fg,
                    marginBottom: 6,
                    fontFamily: "monospace",
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: t.bg === "#0d0d0d" || t.bg === "#03050f" ? "#888" : "#666",
                    fontFamily: "sans-serif",
                  }}
                >
                  {t.desc}
                </div>
                <div
                  style={{
                    marginTop: 16,
                    fontSize: 11,
                    color: t.fg,
                    fontFamily: "monospace",
                  }}
                >
                  미리보기 →
                </div>
              </div>
            </a>
          ))}
        </div>

        <div style={{ marginTop: 48, borderTop: "1px solid #1a1a1a", paddingTop: 24 }}>
          <a href="/" style={{ color: "#555", fontSize: 12, textDecoration: "none" }}>
            ← 메인으로 돌아가기
          </a>
        </div>
      </div>
    </div>
  );
}
