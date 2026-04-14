"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { signIn } from "./actions";

export default function LoginPage() {
  const [rememberMe, setRememberMe] = useState(false);
  const [state, formAction, isPending] = useActionState(signIn, null);

  return (
    <div className="min-h-screen bg-[#faf6f1] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">

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

        {/* Card */}
        <div className="bg-[#f5f0e8] border border-[#d6ccba] rounded-2xl overflow-hidden shadow-sm">

          {/* Header */}
          <div className="px-8 py-5 border-b border-[#d6ccba]">
            <h1
              className="text-xl font-bold text-[#2c2416]"
              style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
            >
              로그인
            </h1>
            <p className="text-xs text-[#7a6a54] mt-1">계정에 로그인하여 노마드 생활을 시작하세요</p>
          </div>

          {/* Form */}
          <form action={formAction} className="px-8 py-6 space-y-5">

            {/* Error message */}
            {state?.error && (
              <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-600">
                {state.error}
              </div>
            )}

            {/* Social Login (disabled) */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                disabled
                className="flex items-center justify-center gap-2 border border-[#d6ccba] rounded-xl py-2.5 text-xs text-[#b8a896] bg-[#ede8de] cursor-not-allowed"
              >
                <span>🟡</span> 카카오
              </button>
              <button
                type="button"
                disabled
                className="flex items-center justify-center gap-2 border border-[#d6ccba] rounded-xl py-2.5 text-xs text-[#b8a896] bg-[#ede8de] cursor-not-allowed"
              >
                <span>🔵</span> 구글
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-[#d6ccba]" />
              <span className="text-xs text-[#b8a896]">또는 이메일로</span>
              <div className="flex-1 h-px bg-[#d6ccba]" />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#7a6a54] tracking-wide">
                이메일
              </label>
              <input
                type="email"
                name="email"
                placeholder="nomad@example.com"
                required
                className="w-full border border-[#d6ccba] rounded-xl px-4 py-3 text-sm text-[#2c2416] bg-[#faf6f1] placeholder:text-[#b8a896] outline-none focus:border-[#2d5a27] focus:ring-2 focus:ring-[#2d5a27]/10 transition-all"
              />
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-[#7a6a54] tracking-wide">
                  비밀번호
                </label>
                <a href="#" className="text-xs text-[#2d5a27] hover:underline">
                  비밀번호를 잊으셨나요?
                </a>
              </div>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                required
                className="w-full border border-[#d6ccba] rounded-xl px-4 py-3 text-sm text-[#2c2416] bg-[#faf6f1] placeholder:text-[#b8a896] outline-none focus:border-[#2d5a27] focus:ring-2 focus:ring-[#2d5a27]/10 transition-all"
              />
            </div>

            {/* Remember Me */}
            <label className="flex items-center gap-3 cursor-pointer group">
              <span
                onClick={() => setRememberMe(!rememberMe)}
                className={`w-5 h-5 rounded-md border-2 flex items-center justify-center text-xs transition-colors shrink-0 ${
                  rememberMe
                    ? "border-[#2d5a27] bg-[#2d5a27] text-white"
                    : "border-[#d6ccba] bg-[#faf6f1]"
                }`}
              >
                {rememberMe && "✓"}
              </span>
              <span className="text-sm text-[#7a6a54] group-hover:text-[#2c2416] transition-colors">
                자동 로그인 유지
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-[#2d5a27] text-[#faf6f1] font-bold text-sm py-3 rounded-full hover:bg-[#3a7030] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isPending ? "로그인 중..." : "로그인 →"}
            </button>
          </form>

          {/* Footer */}
          <div className="px-8 py-4 border-t border-[#d6ccba] text-center">
            <p className="text-xs text-[#7a6a54]">
              아직 계정이 없으신가요?{" "}
              <Link href="/register" className="text-[#2d5a27] font-bold hover:underline">
                회원가입
              </Link>
            </p>
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
