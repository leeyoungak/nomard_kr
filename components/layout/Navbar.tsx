import NavbarClient from "./NavbarClient";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d6ccba] bg-[#faf6f1]/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a
            href="/"
            className="text-[#2d5a27] font-bold text-base tracking-wide hover:opacity-80 transition-opacity"
            style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
          >
            Nomad.KR 🌿
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {["도시", "지도", "커뮤니티", "밋업", "통계"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-[#7a6a54] hover:text-[#2d5a27] transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <NavbarClient />
          </div>
        </div>
      </div>
    </header>
  );
}
