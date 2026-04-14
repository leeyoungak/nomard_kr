"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavbarClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Buttons */}
      <Link
        href="/login"
        className="hidden md:block text-sm text-[#7a6a54] hover:text-[#2c2416] transition-colors px-3 py-1.5"
      >
        로그인
      </Link>
      <Link
        href="/register"
        className="hidden md:block text-sm bg-[#2d5a27] text-[#faf6f1] font-bold px-4 py-1.5 rounded-full hover:bg-[#3a7030] transition-colors"
      >
        가입하기 →
      </Link>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-[#7a6a54] hover:text-[#2c2416] p-2"
        aria-label="메뉴"
      >
        <div className="space-y-1">
          <span className={`block w-5 h-0.5 bg-current transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block w-5 h-0.5 bg-current transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-current transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </div>
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-14 left-0 right-0 bg-[#faf6f1] border-b border-[#d6ccba] md:hidden">
          <div className="px-4 py-4 space-y-3">
            {["도시", "지도", "커뮤니티", "밋업", "통계"].map((item) => (
              <a
                key={item}
                href="#"
                className="block text-sm text-[#7a6a54] hover:text-[#2d5a27] py-1"
              >
                {item}
              </a>
            ))}
            <div className="pt-2 border-t border-[#d6ccba] flex gap-3">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-[#7a6a54] hover:text-[#2c2416]"
              >
                로그인
              </Link>
              <Link
                href="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm bg-[#2d5a27] text-[#faf6f1] font-bold px-3 py-1 rounded-full"
              >
                가입하기 →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
