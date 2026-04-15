"use client";

import { useState } from "react";
import { type City, filterChips } from "@/lib/mock-data";
import CityCard from "@/components/home/CityCard";

type SortKey = "score" | "cost" | "net";

interface Props {
  cities: City[];
}

export default function CitiesFilterGrid({ cities }: Props) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortKey, setSortKey] = useState<SortKey>("score");

  const filtered =
    activeFilter === "all"
      ? cities
      : cities.filter((c) => c.tags.includes(activeFilter));

  const sorted = [...filtered].sort((a, b) => b[sortKey] - a[sortKey]);

  return (
    <div>
      {/* Filter & Sort Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2">
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

        {/* Sort Dropdown */}
        <select
          value={sortKey}
          onChange={(e) => setSortKey(e.target.value as SortKey)}
          className="text-xs border border-[#d6ccba] rounded-full px-4 py-1.5 text-[#7a6a54] bg-[#faf6f1] outline-none focus:border-[#2d5a27] cursor-pointer"
        >
          <option value="score">종합점수 순</option>
          <option value="cost">생활비 효율 순</option>
          <option value="net">와이파이 속도 순</option>
        </select>
      </div>

      {/* City Grid */}
      {sorted.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sorted.map((city) => (
            <CityCard
              key={city.slug}
              city={city}
              href={`/cities/${city.slug}`}
            />
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
