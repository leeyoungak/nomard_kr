"use client";

import { useState, useEffect } from "react";
import { type Meetup, cities } from "@/lib/mock-data";
import MeetupCard from "./MeetupCard";

interface Props {
  meetups: Meetup[];
}

export default function MeetupsFilterGrid({ meetups }: Props) {
  const [activeCity, setActiveCity] = useState("all");
  const [activeTag, setActiveTag] = useState("all");
  const [toastVisible, setToastVisible] = useState(false);

  // 도시 탭: meetups 데이터에서 동적 추출
  const cityTabs = [
    { label: "전체", value: "all" },
    ...Array.from(new Set(meetups.map((m) => m.citySlug))).map((slug) => ({
      label: cities.find((c) => c.slug === slug)?.nameKo ?? slug,
      value: slug,
    })),
  ];

  // 태그 칩: 전체 밋업에서 동적 추출
  const allTags = Array.from(new Set(meetups.flatMap((m) => m.tags)));

  const filtered = meetups
    .filter((m) => activeCity === "all" || m.citySlug === activeCity)
    .filter((m) => activeTag === "all" || m.tags.includes(activeTag));

  function handleRsvp() {
    setToastVisible(true);
  }

  useEffect(() => {
    if (!toastVisible) return;
    const timer = setTimeout(() => setToastVisible(false), 3000);
    return () => clearTimeout(timer);
  }, [toastVisible]);

  return (
    <div>
      {/* 도시 탭 */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
        {cityTabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveCity(tab.value)}
            className={`text-xs px-4 py-1.5 rounded-full border shrink-0 transition-colors font-medium ${
              activeCity === tab.value
                ? "border-[#2d5a27] text-[#2d5a27] bg-[#e8f0e7]"
                : "border-[#d6ccba] text-[#7a6a54] hover:border-[#2d5a27] hover:text-[#2d5a27]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 태그 칩 */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setActiveTag("all")}
          className={`text-xs px-3 py-1 rounded-full border transition-colors ${
            activeTag === "all"
              ? "border-[#2d5a27] text-[#2d5a27] bg-[#e8f0e7]"
              : "border-[#d6ccba] text-[#7a6a54] hover:border-[#2d5a27] hover:text-[#2d5a27]"
          }`}
        >
          전체
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`text-xs px-3 py-1 rounded-full border transition-colors ${
              activeTag === tag
                ? "border-[#2d5a27] text-[#2d5a27] bg-[#e8f0e7]"
                : "border-[#d6ccba] text-[#7a6a54] hover:border-[#2d5a27] hover:text-[#2d5a27]"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* 밋업 그리드 */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filtered.map((meetup) => (
            <MeetupCard key={meetup.slug} meetup={meetup} onRsvp={handleRsvp} />
          ))}
        </div>
      ) : (
        <div className="border border-[#d6ccba] rounded-xl p-10 text-center text-[#7a6a54] text-sm bg-[#f5f0e8]">
          해당 조건의 밋업이 없습니다
        </div>
      )}

      {/* 토스트 */}
      {toastVisible && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#2d5a27] text-[#faf6f1] text-sm px-6 py-3 rounded-full shadow-lg z-50 whitespace-nowrap">
          신청이 완료되었습니다.
        </div>
      )}
    </div>
  );
}
