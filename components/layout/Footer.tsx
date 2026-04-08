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
    <footer className="border-t border-[#2a2a2a] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Top bar */}
        <div className="border border-[#2a2a2a] p-4 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <span className="text-[#00ff41] font-bold text-sm">[ NOMAD.KR ]</span>
              <span className="text-[#555555] text-xs ml-3">
                // 대한민국 노마드 커뮤니티 // since 2025
              </span>
            </div>
            <a
              href="mailto:hi@nomad.kr"
              className="text-xs text-[#555555] hover:text-[#00ff41] transition-colors"
            >
              hi@nomad.kr
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
          {footerLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-xs text-[#555555] hover:text-[#e5e5e5] transition-colors"
            >
              [{link}]
            </a>
          ))}
        </div>

        {/* Slogan */}
        <p className="text-xs text-[#333333]">
          made with love by nomads, for nomads.
        </p>
      </div>
    </footer>
  );
}
