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
      <p className="text-xs text-[#555555] mb-5">
        // CITIES -- ranked by nomad score
      </p>

      {/* Filter Chips */}
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="text-xs text-[#555555] self-center mr-1">FILTER:</span>
        {filterChips.map((chip) => (
          <button
            key={chip.value}
            onClick={() => setActiveFilter(chip.value)}
            className={`text-xs px-3 py-1 border transition-colors ${
              activeFilter === chip.value
                ? "border-[#00ff41] text-[#00ff41] bg-[#00ff41]/5"
                : "border-[#2a2a2a] text-[#555555] hover:border-[#444444] hover:text-[#888888]"
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
        <div className="border border-[#2a2a2a] p-10 text-center text-[#555555] text-sm">
          // 검색 결과 없음
        </div>
      )}
    </div>
  );
}
