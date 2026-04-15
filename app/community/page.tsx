import { reviews, cities } from "@/lib/mock-data";
import CommunityFilterGrid from "@/components/community/CommunityFilterGrid";

export default function CommunityPage() {
  const reviewCount = reviews.filter((r) => r.type === "review").length;
  const tipCount = reviews.filter((r) => r.type === "tip").length;

  return (
    <div className="min-h-screen bg-[#faf6f1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Page Header */}
        <div className="mb-8">
          <p className="text-xs text-[#2d5a27] font-mono mb-2 tracking-wide">
            &gt; /community
          </p>
          <h1
            className="text-2xl font-bold text-[#2c2416] mb-1"
            style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
          >
            커뮤니티
          </h1>
          <p className="text-sm text-[#7a6a54]">
            노마드들의 솔직한 리뷰와 생생한 팁을 확인하세요
          </p>
        </div>

        {/* 통계 바 */}
        <div className="flex gap-6 mb-8 border border-[#d6ccba] rounded-xl bg-[#f5f0e8] px-6 py-4">
          <div>
            <span
              className="text-xl font-bold text-[#2d5a27]"
              style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
            >
              {reviewCount}
            </span>
            <span className="text-xs text-[#7a6a54] ml-1">개 리뷰</span>
          </div>
          <div className="w-px bg-[#d6ccba]" />
          <div>
            <span
              className="text-xl font-bold text-[#2d5a27]"
              style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
            >
              {tipCount}
            </span>
            <span className="text-xs text-[#7a6a54] ml-1">개 팁</span>
          </div>
          <div className="w-px bg-[#d6ccba]" />
          <div>
            <span
              className="text-xl font-bold text-[#2d5a27]"
              style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
            >
              {cities.length}
            </span>
            <span className="text-xs text-[#7a6a54] ml-1">개 도시</span>
          </div>
        </div>

        <CommunityFilterGrid reviews={reviews} cities={cities} />
      </div>
    </div>
  );
}
