"use client";

import { useState } from "react";
import { type City } from "@/lib/mock-data";

interface Props {
  cities: City[];
  onClose: () => void;
  onSubmit: () => void;
}

export default function WriteReviewModal({ cities, onClose, onSubmit }: Props) {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-[#faf6f1] border border-[#d6ccba] rounded-2xl p-6 mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2
            className="text-base font-bold text-[#2c2416]"
            style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
          >
            리뷰 작성
          </h2>
          <button
            onClick={onClose}
            className="text-[#b8a896] hover:text-[#7a6a54] transition-colors text-lg leading-none"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* 도시 선택 */}
          <div>
            <label className="block text-xs font-medium text-[#7a6a54] mb-1.5">
              도시
            </label>
            <select
              required
              className="w-full border border-[#d6ccba] rounded-lg px-3 py-2 text-xs text-[#2c2416] bg-[#f5f0e8] focus:outline-none focus:border-[#2d5a27]"
            >
              <option value="">도시를 선택하세요</option>
              {cities.map((city) => (
                <option key={city.slug} value={city.slug}>
                  {city.nameKo}
                </option>
              ))}
            </select>
          </div>

          {/* 구/동 입력 */}
          <div>
            <label className="block text-xs font-medium text-[#7a6a54] mb-1.5">
              구/동
            </label>
            <input
              type="text"
              required
              placeholder="예: 홍대, 성수동, 전포"
              className="w-full border border-[#d6ccba] rounded-lg px-3 py-2 text-xs text-[#2c2416] bg-[#f5f0e8] placeholder:text-[#b8a896] focus:outline-none focus:border-[#2d5a27]"
            />
          </div>

          {/* 별점 */}
          <div>
            <label className="block text-xs font-medium text-[#7a6a54] mb-1.5">
              평점
            </label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHovered(star)}
                  onMouseLeave={() => setHovered(0)}
                  className={`text-xl transition-colors ${
                    star <= (hovered || rating) ? "text-[#c4a84f]" : "text-[#d6ccba]"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          {/* 본문 */}
          <div>
            <label className="block text-xs font-medium text-[#7a6a54] mb-1.5">
              내용
            </label>
            <textarea
              required
              rows={4}
              placeholder="노마드 생활 경험을 공유해주세요"
              className="w-full border border-[#d6ccba] rounded-lg px-3 py-2 text-xs text-[#2c2416] bg-[#f5f0e8] placeholder:text-[#b8a896] focus:outline-none focus:border-[#2d5a27] resize-none"
            />
          </div>

          {/* 버튼 */}
          <div className="flex gap-2 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-[#d6ccba] text-xs text-[#7a6a54] py-2.5 rounded-full hover:border-[#7a6a54] transition-colors"
            >
              취소
            </button>
            <button
              type="submit"
              className="flex-1 bg-[#2d5a27] text-[#faf6f1] text-xs font-bold py-2.5 rounded-full hover:bg-[#3a7030] transition-colors"
            >
              등록하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
