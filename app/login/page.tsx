"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { signIn } from "./actions";

export default function LoginPage() {
  const [rememberMe, setRememberMe] = useState(false);
  const [state, formAction, isPending] = useActionState(signIn, null);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4 py-16 font-mono">
      <div className="w-full max-w-sm">

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

        {/* Card */}
        <div className="bg-[#0f0f0f] border border-[#2a2a2a]">

          {/* Header */}
          <div className="px-6 py-4 border-b border-[#2a2a2a]">
            <h1 className="text-sm font-bold text-[#00ff41]">
              로그인
            </h1>
            <p className="text-[10px] text-[#555555] mt-1">
              계정에 로그인하여 노마드 생활을 시작하세요
            </p>
          </div>

          {/* Form */}
          <form action={formAction} className="px-6 py-5 space-y-5">

            {/* Error message */}
            {state?.error && (
              <div className="border border-red-900 bg-red-950/30 px-4 py-3 text-xs text-red-400">
                {state.error}
              </div>
            )}

            {/* Social Login (disabled) */}
            <div>
              <p className="text-[10px] text-[#333333] mb-3">
                // 소셜 로그인 (출시 예정)
              </p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  disabled
                  className="border border-[#1a1a1a] text-[10px] text-[#333333] py-2 cursor-not-allowed"
                >
                  카카오 로그인
                </button>
                <button
                  type="button"
                  disabled
                  className="border border-[#1a1a1a] text-[10px] text-[#333333] py-2 cursor-not-allowed"
                >
                  구글 로그인
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-[#1a1a1a]" />
              <span className="text-[10px] text-[#333333]">또는 이메일로</span>
              <div className="flex-1 h-px bg-[#1a1a1a]" />
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
              <div className="flex items-center justify-between">
                <label className="text-[10px] text-[#555555] uppercase tracking-wider">
                  PASSWORD
                </label>
                <a href="#" className="text-[10px] text-[#555555] hover:text-[#00ff41] transition-colors">
                  비밀번호를 잊으셨나요?
                </a>
              </div>
              <div className="flex items-center border border-[#2a2a2a] focus-within:border-[#00ff41] transition-colors">
                <span className="text-[#333333] text-xs px-3 py-2.5 border-r border-[#2a2a2a] select-none">
                  &gt;
                </span>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  className="flex-1 bg-transparent text-sm text-[#e5e5e5] placeholder:text-[#333333] outline-none px-3 py-2.5"
                />
              </div>
            </div>

            {/* Remember Me */}
            <label className="flex items-center gap-3 cursor-pointer group">
              <div
                onClick={() => setRememberMe(!rememberMe)}
                className={`w-4 h-4 border flex items-center justify-center text-xs transition-colors shrink-0 ${
                  rememberMe
                    ? "border-[#00ff41] text-[#00ff41]"
                    : "border-[#333333] text-transparent"
                }`}
              >
                ✓
              </div>
              <span className="text-xs text-[#555555] group-hover:text-[#888888] transition-colors">
                자동 로그인 유지
              </span>
            </label>

            {/* Submit */}
            <div className="flex gap-3">
              <button
                type="submit"
                disabled={isPending}
                className="flex-1 bg-[#00ff41] text-[#0a0a0a] text-sm font-bold py-2.5 hover:bg-[#00cc33] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPending ? "로그인 중..." : "로그인 →"}
              </button>
            </div>
          </form>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-[#2a2a2a] text-center">
            <p className="text-[10px] text-[#555555]">
              아직 계정이 없으신가요?{" "}
              <Link href="/register" className="text-[#00ff41] hover:text-[#00cc33] transition-colors">
                회원가입
              </Link>
            </p>
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
