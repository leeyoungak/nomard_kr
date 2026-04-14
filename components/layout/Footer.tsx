const footerLinks = [
  "도시",
  "지도",
  "커뮤니티",
  "밋업",
  "통계",
  "FAQ",
  "TOS",
  "개인정보처리방침",
];

export default function Footer() {
  return (
    <footer className="border-t border-[#d6ccba] mt-20 bg-[#f5f0e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Top bar */}
        <div className="border border-[#d6ccba] rounded-xl p-5 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <span
                className="text-[#2d5a27] font-bold text-base"
                style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
              >
                Nomad.KR 🌿
              </span>
              <span className="text-[#7a6a54] text-xs ml-3">
                대한민국 노마드 커뮤니티 · since 2025
              </span>
            </div>
            <a
              href="mailto:hi@nomad.kr"
              className="text-xs text-[#7a6a54] hover:text-[#2d5a27] transition-colors"
            >
              hi@nomad.kr
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-x-5 gap-y-2 mb-6">
          {footerLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-xs text-[#7a6a54] hover:text-[#2d5a27] transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Slogan */}
        <p className="text-xs text-[#b8a896]">
          made with love by nomads, for nomads.
        </p>
      </div>
    </footer>
  );
}
