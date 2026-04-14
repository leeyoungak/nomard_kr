import Link from "next/link";
import NavbarClient from "./NavbarClient";
import { NAV_ITEMS } from "@/lib/nav-items";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d6ccba] bg-[#faf6f1]/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link
            href="/"
            className="text-[#2d5a27] font-bold text-base tracking-wide hover:opacity-80 transition-opacity"
            style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
          >
            Nomad.KR 🌿
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[#7a6a54] hover:text-[#2d5a27] transition-colors inline-flex items-center gap-1"
              >
                {item.label}
                {item.badge && (
                  <span className="text-[8px] bg-[#ede8de] text-[#b8a896] px-1 py-0.5">
                    {item.badge}
                  </span>
                )}
              </Link>
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
