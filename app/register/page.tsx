"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { signUp } from "./actions";

const benefits = [
  "도시별 상세 리뷰 & 지도 열람",
  "카페 / 코워킹 스팟 지도",
  "밋업 & 워케이션 동행 매칭",
  "한달살기 캘린더 & 알림",
];

export default function RegisterPage() {
  const [agreed, setAgreed] = useState(false);
  const [state, formAction, isPending] = useActionState(signUp, null);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4 py-16 font-mono">
      <div className="w-full max-w-lg">

        {/* Logo */}
        <div className="text-center mb-8">
          <Link
            href="/"
            className="text-lg font-bold text-[#00ff41] hover:text-[#00cc33] transition-colors tracking-widest"
          >
            [ NOMAD.KR ]
          </Link>
          <p className="text-[10px] text-[#555555] mt-2 tracking-wider">
            // 대한민국 디지털 노마드 플랫폼
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-4 items-start">

          {/* Benefits sidebar */}
          <div className="md:col-span-2 bg-[#0f0f0f] border border-[#2a2a2a] p-5">
            <h2 className="text-xs font-bold text-[#00ff41] mb-4 tracking-wider">
              // 멤버 혜택
            </h2>
            <ul className="space-y-3 mb-6">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-xs">
                  <span className="text-[#00ff41] shrink-0 mt-0.5">(*)</span>
                  <span className="text-[#cccccc]">{b}</span>
                </li>
              ))}
            </ul>

            {/* Price */}
            <div className="bg-[#0a0a0a] border border-[#2a2a2a] p-4 text-center">
              <div className="text-[10px] text-[#555555] mb-1">평생 멤버십</div>
              <div className="text-2xl font-bold text-[#00ff41]">₩29,900</div>
              <div className="text-[10px] text-[#444444] mt-1">원타임 결제 · 영구 이용</div>
            </div>
          </div>

          {/* Form card */}
          <div className="md:col-span-3 bg-[#0f0f0f] border border-[#2a2a2a]">

            {/* Header */}
            <div className="px-6 py-4 border-b border-[#2a2a2a]">
              <h1 className="text-sm font-bold text-[#00ff41]">
                회원가입
              </h1>
              <p className="text-[10px] text-[#555555] mt-1">노마드 커뮤니티에 합류하세요</p>
            </div>

            {/* Form */}
            <form action={formAction} className="px-6 py-5 space-y-4">

              {/* Error message */}
              {state?.error && (
                <div className="border border-red-900 bg-red-950/30 px-4 py-3 text-xs text-red-400">
                  {state.error}
                </div>
              )}

              {/* Nickname */}
              <div className="space-y-1.5">
                <label className="text-[10px] text-[#555555] uppercase tracking-wider">
                  NICKNAME
                </label>
                <div className="flex items-center border border-[#2a2a2a] focus-within:border-[#00ff41] transition-colors">
                  <span className="text-[#333333] text-xs px-3 py-2.5 border-r border-[#2a2a2a] select-none">
                    &gt;
                  </span>
                  <input
                    type="text"
                    name="nickname"
                    placeholder="nomad_traveler"
                    className="flex-1 bg-transparent text-sm text-[#e5e5e5] placeholder:text-[#333333] outline-none px-3 py-2.5"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-[10px] text-[#555555] uppercase tracking-wider">
                  EMAIL
                </label>
                <div className="flex items-center border border-[#2a2a2a] focus-within:border-[#00ff41] transition-colors">
                  <span className="text-[#333333] text-xs px-3 py-2.5 border-r border-[#2a2a2a] select-none">
                    &gt;
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="nomad@example.com"
                    required
                    className="flex-1 bg-transparent text-sm text-[#e5e5e5] placeholder:text-[#333333] outline-none px-3 py-2.5"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label className="text-[10px] text-[#555555] uppercase tracking-wider">
                  PASSWORD
                </label>
                <div className="flex items-center border border-[#2a2a2a] focus-within:border-[#00ff41] transition-colors">
                  <span className="text-[#333333] text-xs px-3 py-2.5 border-r border-[#2a2a2a] select-none">
                    &gt;
                  </span>
                  <input
                    type="password"
                    name="password"
                    placeholder="8자 이상"
                    required
                    className="flex-1 bg-transparent text-sm text-[#e5e5e5] placeholder:text-[#333333] outline-none px-3 py-2.5"
                  />
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-1.5">
                <label className="text-[10px] text-[#555555] uppercase tracking-wider">
                  CONFIRM PASSWORD
                </label>
                <div className="flex items-center border border-[#2a2a2a] focus-within:border-[#00ff41] transition-colors">
                  <span className="text-[#333333] text-xs px-3 py-2.5 border-r border-[#2a2a2a] select-none">
                    &gt;
                  </span>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="••••••••"
                    required
                    className="flex-1 bg-transparent text-sm text-[#e5e5e5] placeholder:text-[#333333] outline-none px-3 py-2.5"
                  />
                </div>
              </div>

              {/* Terms */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <div
                  onClick={() => setAgreed(!agreed)}
                  className={`w-4 h-4 border flex items-center justify-center text-xs transition-colors shrink-0 mt-0.5 ${
                    agreed
                      ? "border-[#00ff41] text-[#00ff41]"
                      : "border-[#333333] text-transparent"
                  }`}
                >
                  ✓
                </div>
                <span className="text-[10px] text-[#555555] leading-relaxed group-hover:text-[#888888] transition-colors">
                  <a href="#" className="text-[#00ff41] hover:text-[#00cc33] transition-colors">이용약관</a> 및{" "}
                  <a href="#" className="text-[#00ff41] hover:text-[#00cc33] transition-colors">개인정보처리방침</a>에 동의합니다
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={!agreed || isPending}
                className={`w-full text-sm font-bold py-2.5 transition-colors ${
                  agreed && !isPending
                    ? "bg-[#00ff41] text-[#0a0a0a] hover:bg-[#00cc33]"
                    : "bg-[#1a1a1a] text-[#333333] cursor-not-allowed"
                }`}
              >
                {isPending ? "처리 중..." : "가입하기 →"}
              </button>
            </form>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-[#2a2a2a] text-center">
              <p className="text-[10px] text-[#555555]">
                이미 계정이 있으신가요?{" "}
                <Link href="/login" className="text-[#00ff41] hover:text-[#00cc33] transition-colors">
                  로그인
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="text-center mt-6">
          <Link href="/" className="text-[10px] text-[#333333] hover:text-[#555555] transition-colors">
            ← 홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}
