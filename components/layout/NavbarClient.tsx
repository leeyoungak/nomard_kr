"use client";

import { useState } from "react";
import LoginModal from "@/components/modals/LoginModal";
import JoinModal from "@/components/modals/JoinModal";

export default function NavbarClient() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [joinOpen, setJoinOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Buttons */}
      <button
        onClick={() => setLoginOpen(true)}
        className="hidden md:block text-xs text-[#888888] hover:text-[#e5e5e5] transition-colors px-3 py-1.5"
      >
        로그인
      </button>
      <button
        onClick={() => setJoinOpen(true)}
        className="hidden md:block text-xs bg-[#00ff41] text-[#0a0a0a] font-bold px-4 py-1.5 hover:bg-[#00cc33] transition-colors"
      >
        가입하기 →
      </button>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-[#888888] hover:text-[#e5e5e5] p-2"
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
        <div className="absolute top-14 left-0 right-0 bg-[#0a0a0a] border-b border-[#2a2a2a] md:hidden">
          <div className="px-4 py-4 space-y-3">
            {["도시", "지도", "커뮤니티", "밋업", "통계"].map((item) => (
              <a
                key={item}
                href="#"
                className="block text-sm text-[#888888] hover:text-[#e5e5e5] py-1"
              >
                {item}
              </a>
            ))}
            <div className="pt-2 border-t border-[#2a2a2a] flex gap-3">
              <button
                onClick={() => { setLoginOpen(true); setMobileMenuOpen(false); }}
                className="text-sm text-[#888888] hover:text-[#e5e5e5]"
              >
                로그인
              </button>
              <button
                onClick={() => { setJoinOpen(true); setMobileMenuOpen(false); }}
                className="text-sm bg-[#00ff41] text-[#0a0a0a] font-bold px-3 py-1"
              >
                가입하기 →
              </button>
            </div>
          </div>
        </div>
      )}

      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
      <JoinModal open={joinOpen} onClose={() => setJoinOpen(false)} />
    </>
  );
}
