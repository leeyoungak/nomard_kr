"use client";

import { useState } from "react";
import Link from "next/link";

const benefits = [
  "도시별 상세 리뷰 & 지도 열람",
  "카페 / 코워킹 스팟 지도",
  "밋업 & 워케이션 동행 매칭",
  "한달살기 캘린더 & 알림",
];

export default function RegisterPage() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="min-h-screen bg-[#faf6f1] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg">

        {/* Logo */}
        <div className="text-center mb-10">
          <Link
            href="/"
            className="text-2xl font-bold text-[#2d5a27] hover:opacity-80 transition-opacity"
            style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
          >
            Nomad.KR 🌿
          </Link>
          <p className="text-sm text-[#7a6a54] mt-2">대한민국 디지털 노마드 플랫폼</p>
        </div>

        <div className="grid md:grid-cols-5 gap-4 items-start">

          {/* Benefits sidebar */}
          <div className="md:col-span-2 bg-[#e8f0e7] border border-[#d6ccba] rounded-2xl p-6">
            <h2
              className="text-base font-bold text-[#2d5a27] mb-4"
              style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
            >
              멤버 혜택
            </h2>
            <ul className="space-y-3 mb-6">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-[#2c2416]">
                  <span className="text-[#2d5a27] shrink-0 mt-0.5">🌿</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* Price */}
            <div className="bg-[#faf6f1] border border-[#d6ccba] rounded-xl p-4 text-center">
              <div className="text-xs text-[#7a6a54] mb-1">평생 멤버십</div>
              <div
                className="text-3xl font-bold text-[#2d5a27]"
                style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
              >
                ₩29,900
              </div>
              <div className="text-xs text-[#b8a896] mt-1">원타임 결제 · 영구 이용</div>
            </div>
          </div>

          {/* Form card */}
          <div className="md:col-span-3 bg-[#f5f0e8] border border-[#d6ccba] rounded-2xl overflow-hidden shadow-sm">

            {/* Header */}
            <div className="px-6 py-5 border-b border-[#d6ccba]">
              <h1
                className="text-xl font-bold text-[#2c2416]"
                style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
              >
                회원가입
              </h1>
              <p className="text-xs text-[#7a6a54] mt-1">노마드 커뮤니티에 합류하세요</p>
            </div>

            {/* Form */}
            <div className="px-6 py-5 space-y-4">

              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#7a6a54] tracking-wide">
                  닉네임
                </label>
                <input
                  type="text"
                  placeholder="nomad_traveler"
                  className="w-full border border-[#d6ccba] rounded-xl px-4 py-2.5 text-sm text-[#2c2416] bg-[#faf6f1] placeholder:text-[#b8a896] outline-none focus:border-[#2d5a27] focus:ring-2 focus:ring-[#2d5a27]/10 transition-all"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#7a6a54] tracking-wide">
                  이메일
                </label>
                <input
                  type="email"
                  placeholder="nomad@example.com"
                  className="w-full border border-[#d6ccba] rounded-xl px-4 py-2.5 text-sm text-[#2c2416] bg-[#faf6f1] placeholder:text-[#b8a896] outline-none focus:border-[#2d5a27] focus:ring-2 focus:ring-[#2d5a27]/10 transition-all"
                />
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#7a6a54] tracking-wide">
                  비밀번호
                </label>
                <input
                  type="password"
                  placeholder="8자 이상"
                  className="w-full border border-[#d6ccba] rounded-xl px-4 py-2.5 text-sm text-[#2c2416] bg-[#faf6f1] placeholder:text-[#b8a896] outline-none focus:border-[#2d5a27] focus:ring-2 focus:ring-[#2d5a27]/10 transition-all"
                />
              </div>

              {/* Confirm Password */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#7a6a54] tracking-wide">
                  비밀번호 확인
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full border border-[#d6ccba] rounded-xl px-4 py-2.5 text-sm text-[#2c2416] bg-[#faf6f1] placeholder:text-[#b8a896] outline-none focus:border-[#2d5a27] focus:ring-2 focus:ring-[#2d5a27]/10 transition-all"
                />
              </div>

              {/* Terms */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <div
                  onClick={() => setAgreed(!agreed)}
                  className={`w-5 h-5 rounded-md border-2 flex items-center justify-center text-xs transition-colors shrink-0 mt-0.5 ${
                    agreed
                      ? "border-[#2d5a27] bg-[#2d5a27] text-white"
                      : "border-[#d6ccba] bg-[#faf6f1]"
                  }`}
                >
                  {agreed && "✓"}
                </div>
                <span className="text-xs text-[#7a6a54] leading-relaxed group-hover:text-[#2c2416] transition-colors">
                  <a href="#" className="text-[#2d5a27] hover:underline">이용약관</a> 및{" "}
                  <a href="#" className="text-[#2d5a27] hover:underline">개인정보처리방침</a>에 동의합니다
                </span>
              </label>

              {/* Submit */}
              <button
                disabled={!agreed}
                className={`w-full font-bold text-sm py-3 rounded-full transition-colors ${
                  agreed
                    ? "bg-[#2d5a27] text-[#faf6f1] hover:bg-[#3a7030]"
                    : "bg-[#d6ccba] text-[#b8a896] cursor-not-allowed"
                }`}
              >
                가입하기 →
              </button>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-[#d6ccba] text-center">
              <p className="text-xs text-[#7a6a54]">
                이미 계정이 있으신가요?{" "}
                <Link href="/login" className="text-[#2d5a27] font-bold hover:underline">
                  로그인
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="text-center mt-6">
          <Link href="/" className="text-xs text-[#b8a896] hover:text-[#7a6a54] transition-colors">
            ← 홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}
