"use client";

import { useState } from "react";
import { cities, filterChips } from "@/lib/mock-data";
import CityCard from "./CityCard";

export default function FilterAndCityGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? cities
      : cities.filter((c) => c.tags.includes(activeFilter));

  return (
    <div id="cities" className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2
            className="text-xl font-bold text-[#2c2416]"
            style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
          >
            도시 랭킹
          </h2>
          <p className="text-xs text-[#7a6a54] mt-1">노마드 스코어 기준 정렬</p>
        </div>
        <a href="#" className="text-xs text-[#2d5a27] hover:underline">전체 보기 →</a>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filterChips.map((chip) => (
          <button
            key={chip.value}
            onClick={() => setActiveFilter(chip.value)}
            className={`text-xs px-4 py-1.5 rounded-full border transition-colors font-medium ${
              activeFilter === chip.value
                ? "border-[#2d5a27] text-[#2d5a27] bg-[#e8f0e7]"
                : "border-[#d6ccba] text-[#7a6a54] hover:border-[#2d5a27] hover:text-[#2d5a27]"
            }`}
          >
            {chip.label}
          </button>
        ))}
      </div>

      {/* City Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((city) => (
            <CityCard key={city.nameKo} city={city} />
          ))}
        </div>
      ) : (
        <div className="border border-[#d6ccba] rounded-xl p-10 text-center text-[#7a6a54] text-sm bg-[#f5f0e8]">
          검색 결과가 없습니다
        </div>
      )}
    </div>
  );
}
