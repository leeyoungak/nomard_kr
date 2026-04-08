"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function LoginModal({ open, onClose }: Props) {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="bg-[#0f0f0f] border border-[#2a2a2a] text-[#e5e5e5] max-w-sm font-mono rounded-none p-0">
        {/* Header */}
        <DialogHeader className="border-b border-[#2a2a2a] px-6 py-4">
          <DialogTitle className="text-sm font-bold text-[#00ff41]">
            [ NOMAD.KR ] 로그인
          </DialogTitle>
        </DialogHeader>

        {/* Body */}
        <div className="px-6 py-5 space-y-5">
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
                placeholder="nomad@example.com"
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
                placeholder="••••••••"
                className="flex-1 bg-transparent text-sm text-[#e5e5e5] placeholder:text-[#333333] outline-none px-3 py-2.5"
              />
            </div>
          </div>

          {/* Remember Me */}
          <label className="flex items-center gap-3 cursor-pointer group">
            <div
              onClick={() => setRememberMe(!rememberMe)}
              className={`w-4 h-4 border flex items-center justify-center text-xs transition-colors ${
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

          {/* Actions */}
          <div className="flex gap-3">
            <button className="flex-1 bg-[#00ff41] text-[#0a0a0a] text-sm font-bold py-2.5 hover:bg-[#00cc33] transition-colors">
              로그인 →
            </button>
            <button
              onClick={onClose}
              className="px-4 border border-[#2a2a2a] text-xs text-[#555555] hover:border-[#444444] hover:text-[#888888] transition-colors"
            >
              닫기
            </button>
          </div>

          {/* Divider */}
          <div className="border-t border-[#1a1a1a] pt-4">
            <p className="text-[10px] text-[#333333] text-center mb-3">
              // 소셜 로그인 (출시 예정)
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button
                disabled
                className="border border-[#1a1a1a] text-[10px] text-[#333333] py-2 cursor-not-allowed"
              >
                카카오 로그인
              </button>
              <button
                disabled
                className="border border-[#1a1a1a] text-[10px] text-[#333333] py-2 cursor-not-allowed"
              >
                구글 로그인
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
