"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const benefits = [
  "도시별 상세 리뷰 & 지도 열람",
  "카페 / 코워킹 스팟 지도",
  "밋업 & 워케이션 동행 매칭",
  "한달살기 캘린더 & 알림",
];

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function JoinModal({ open, onClose }: Props) {
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="bg-[#0f0f0f] border border-[#2a2a2a] text-[#e5e5e5] max-w-sm font-mono rounded-none p-0">
        {/* Header */}
        <DialogHeader className="border-b border-[#2a2a2a] px-6 py-4">
          <DialogTitle className="text-sm font-bold text-[#00ff41]">
            [ NOMAD.KR ] 멤버 가입
          </DialogTitle>
        </DialogHeader>

        {/* Body */}
        <div className="px-6 py-5 space-y-6">
          {/* Benefits */}
          <ul className="space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm">
                <span className="text-[#00ff41] shrink-0">(*)</span>
                <span className="text-[#cccccc]">{b}</span>
              </li>
            ))}
          </ul>

          {/* Price */}
          <div className="border border-[#2a2a2a] p-4 text-center">
            <div className="text-xs text-[#555555] mb-1">평생 멤버십</div>
            <div className="text-2xl font-bold text-[#00ff41]">₩29,900</div>
            <div className="text-[10px] text-[#444444] mt-1">
              원타임 결제 · 영구 이용
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button className="flex-1 bg-[#00ff41] text-[#0a0a0a] text-sm font-bold py-2.5 hover:bg-[#00cc33] transition-colors">
              가입하기 →
            </button>
            <button
              onClick={onClose}
              className="px-4 border border-[#2a2a2a] text-xs text-[#555555] hover:border-[#444444] hover:text-[#888888] transition-colors"
            >
              닫기
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
