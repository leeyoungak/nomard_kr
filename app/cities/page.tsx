import { cities } from "@/lib/mock-data";
import CitiesFilterGrid from "@/components/cities/CitiesFilterGrid";

export default function CitiesPage() {
  return (
    <div className="min-h-screen bg-[#faf6f1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Page Header */}
        <div className="mb-8">
          <p className="text-xs text-[#2d5a27] font-mono mb-2 tracking-wide">
            &gt; /cities
          </p>
          <h1
            className="text-2xl font-bold text-[#2c2416] mb-1"
            style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
          >
            노마드 도시 탐색기
          </h1>
          <p className="text-sm text-[#7a6a54]">
            노마드 스코어 기준, 실거주 데이터 기반
          </p>
        </div>

        <CitiesFilterGrid cities={cities} />
      </div>
    </div>
  );
}
