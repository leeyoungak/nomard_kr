import NavbarClient from "./NavbarClient";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#2a2a2a] bg-[#0a0a0a]/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a
            href="/"
            className="text-[#00ff41] font-bold text-sm tracking-wider hover:opacity-80 transition-opacity"
          >
            [ NOMAD.KR ]
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {["도시", "지도", "커뮤니티", "밋업", "통계"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-[#888888] hover:text-[#e5e5e5] transition-colors"
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
