"use client";

import { useState } from "react";
import { type City } from "@/lib/mock-data";

interface Props {
  cities: City[];
}

const METRICS: { key: "score" | "net" | "cost" | "cafe" | "safe"; label: string }[] = [
  { key: "score", label: "종합" },
  { key: "net", label: "인터넷" },
  { key: "cost", label: "생활비" },
  { key: "cafe", label: "카페" },
  { key: "safe", label: "안전" },
];

function parseCost(s: string): number {
  return parseFloat(s.replace("M", ""));
}

function CostRangeBar({ city }: { city: City }) {
  const MAX_COST = 3.5; // 서울 max 기준
  const minPct = (parseCost(city.monthlyCostMin) / MAX_COST) * 100;
  const maxPct = (parseCost(city.monthlyCostMax) / MAX_COST) * 100;

  return (
    <div className="mt-1">
      <div className="relative h-3 bg-[#e5ddd0] rounded-full w-full">
        <div
          className="absolute h-3 rounded-full bg-[#c4a84f]/60"
          style={{ left: `${minPct}%`, width: `${maxPct - minPct}%` }}
        />
      </div>
      <div className="flex justify-between text-[10px] text-[#b8a896] mt-0.5">
        <span>₩{city.monthlyCostMin}</span>
        <span>₩{city.monthlyCostMax}</span>
      </div>
    </div>
  );
}

function CompareBar({ valueA, valueB }: { valueA: number; valueB: number }) {
  const winA = valueA >= valueB;
  const winB = valueB >= valueA;
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 flex justify-end">
        <div
          className={`h-3 rounded-full transition-all duration-700 ${
            winA ? "bg-[#2d5a27]" : "bg-[#d6ccba]"
          }`}
          style={{ width: `${valueA}%` }}
        />
      </div>
      <div className="flex-1">
        <div
          className={`h-3 rounded-full transition-all duration-700 ${
            winB ? "bg-[#2d5a27]" : "bg-[#d6ccba]"
          }`}
          style={{ width: `${valueB}%` }}
        />
      </div>
    </div>
  );
}

export default function CityCompare({ cities }: Props) {
  const [slugA, setSlugA] = useState(cities[0]?.slug ?? "");
  const [slugB, setSlugB] = useState(cities[1]?.slug ?? "");

  const cityA = cities.find((c) => c.slug === slugA);
  const cityB = cities.find((c) => c.slug === slugB);

  return (
    <div>
      {/* 도시 선택 */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {[
          { value: slugA, onChange: setSlugA, label: "도시 A" },
          { value: slugB, onChange: setSlugB, label: "도시 B" },
        ].map(({ value, onChange, label }) => (
          <div key={label}>
            <label className="block text-[10px] text-[#b8a896] font-medium mb-1.5">
              {label}
            </label>
            <select
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="w-full border border-[#d6ccba] rounded-lg px-3 py-2 text-xs text-[#2c2416] bg-[#f5f0e8] focus:outline-none focus:border-[#2d5a27]"
            >
              {cities.map((city) => (
                <option key={city.slug} value={city.slug}>
                  {city.nameKo}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {cityA && cityB && (
        <div className="border border-[#d6ccba] rounded-xl bg-[#f5f0e8] p-5">
          {/* 도시 헤더 */}
          <div className="grid grid-cols-[1fr_auto_1fr] gap-2 mb-5 text-center">
            <div>
              <p
                className="text-base font-bold text-[#2c2416]"
                style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
              >
                {cityA.nameKo}
              </p>
              <p className="text-[10px] text-[#b8a896]">{cityA.region}</p>
            </div>
            <div className="text-xs text-[#b8a896] self-center">vs</div>
            <div>
              <p
                className="text-base font-bold text-[#2c2416]"
                style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
              >
                {cityB.nameKo}
              </p>
              <p className="text-[10px] text-[#b8a896]">{cityB.region}</p>
            </div>
          </div>

          {/* 지표 비교 바 */}
          <div className="space-y-3 mb-5">
            {METRICS.map((m) => (
              <div key={m.key}>
                <div className="flex justify-between text-[10px] text-[#7a6a54] mb-1">
                  <span className="font-bold">{cityA[m.key]}</span>
                  <span className="text-[#b8a896]">{m.label}</span>
                  <span className="font-bold">{cityB[m.key]}</span>
                </div>
                <CompareBar
                  valueA={cityA[m.key] as number}
                  valueB={cityB[m.key] as number}
                />
              </div>
            ))}
          </div>

          {/* 월 생활비 범위 */}
          <div className="border-t border-[#d6ccba] pt-4">
            <p className="text-[10px] text-[#b8a896] font-medium mb-3 text-center">
              월 생활비 범위
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <CostRangeBar city={cityA} />
              </div>
              <div>
                <CostRangeBar city={cityB} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
