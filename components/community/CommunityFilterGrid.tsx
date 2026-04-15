"use client";

import { useState, useEffect } from "react";
import { type Review, type City } from "@/lib/mock-data";
import ReviewCard from "./ReviewCard";
import WriteReviewModal from "./WriteReviewModal";

interface Props {
  reviews: Review[];
  cities: City[];
}

export default function CommunityFilterGrid({ reviews, cities }: Props) {
  const [activeTab, setActiveTab] = useState<"all" | "review" | "tip">("all");
  const [cityFilter, setCityFilter] = useState("all");
  const [sortKey, setSortKey] = useState<"latest" | "likes" | "rating">("latest");
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set());
  const [showModal, setShowModal] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    if (!toastVisible) return;
    const timer = setTimeout(() => setToastVisible(false), 3000);
    return () => clearTimeout(timer);
  }, [toastVisible]);

  function toggleLike(id: string) {
    setLikedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function handleSubmit() {
    setShowModal(false);
    setToastVisible(true);
  }

  const filtered = reviews
    .filter((r) => activeTab === "all" || r.type === activeTab)
    .filter((r) => cityFilter === "all" || r.citySlug === cityFilter)
    .sort((a, b) => {
      if (sortKey === "likes") return (b.likes + (likedIds.has(b.id) ? 1 : 0)) - (a.likes + (likedIds.has(a.id) ? 1 : 0));
      if (sortKey === "rating") return b.rating - a.rating;
      // latest: 날짜 내림차순
      return b.date.localeCompare(a.date);
    });

  return (
    <div>
      {/* 탭 + 작성 버튼 */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-1">
          {(["all", "review", "tip"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xs px-4 py-1.5 rounded-full border shrink-0 transition-colors font-medium ${
                activeTab === tab
                  ? "border-[#2d5a27] text-[#2d5a27] bg-[#e8f0e7]"
                  : "border-[#d6ccba] text-[#7a6a54] hover:border-[#2d5a27] hover:text-[#2d5a27]"
              }`}
            >
              {tab === "all" ? "전체" : tab === "review" ? "📝 리뷰" : "💡 팁"}
            </button>
          ))}
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="text-xs bg-[#2d5a27] text-[#faf6f1] px-4 py-1.5 rounded-full hover:bg-[#3a7030] transition-colors font-medium shrink-0"
        >
          리뷰 작성 +
        </button>
      </div>

      {/* 필터 바 */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {/* 도시 필터 */}
        <select
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
          className="text-xs border border-[#d6ccba] rounded-full px-3 py-1.5 text-[#7a6a54] bg-[#f5f0e8] focus:outline-none focus:border-[#2d5a27]"
        >
          <option value="all">전체 도시</option>
          {cities.map((city) => (
            <option key={city.slug} value={city.slug}>
              {city.nameKo}
            </option>
          ))}
        </select>

        {/* 정렬 */}
        <select
          value={sortKey}
          onChange={(e) => setSortKey(e.target.value as typeof sortKey)}
          className="text-xs border border-[#d6ccba] rounded-full px-3 py-1.5 text-[#7a6a54] bg-[#f5f0e8] focus:outline-none focus:border-[#2d5a27]"
        >
          <option value="latest">최신순</option>
          <option value="likes">좋아요순</option>
          <option value="rating">평점순</option>
        </select>
      </div>

      {/* 카드 그리드 */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filtered.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
              liked={likedIds.has(review.id)}
              onLike={() => toggleLike(review.id)}
            />
          ))}
        </div>
      ) : (
        <div className="border border-[#d6ccba] rounded-xl p-10 text-center text-[#7a6a54] text-sm bg-[#f5f0e8]">
          해당 조건의 리뷰가 없습니다
        </div>
      )}

      {/* 모달 */}
      {showModal && (
        <WriteReviewModal
          cities={cities}
          onClose={() => setShowModal(false)}
          onSubmit={handleSubmit}
        />
      )}

      {/* 토스트 */}
      {toastVisible && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#2d5a27] text-[#faf6f1] text-sm px-6 py-3 rounded-full shadow-lg z-50 whitespace-nowrap">
          리뷰가 등록되었습니다.
        </div>
      )}
    </div>
  );
}
