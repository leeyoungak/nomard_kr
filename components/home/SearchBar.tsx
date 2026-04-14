"use client";

import { useState } from "react";

export default function SearchBar() {
  const [value, setValue] = useState("");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
      <div className="border border-[#d6ccba] rounded-full flex items-center gap-3 px-5 py-3 bg-[#f5f0e8] focus-within:border-[#2d5a27] focus-within:shadow-sm transition-all">
        <span className="text-[#2d5a27] text-base shrink-0 select-none">🔍</span>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="도시 이름, 지역, 태그 검색..."
          className="flex-1 bg-transparent text-sm text-[#2c2416] placeholder:text-[#b8a896] outline-none"
        />
        <span className="text-xs text-[#b8a896] bg-[#d6ccba] px-2.5 py-1 rounded-full shrink-0">
          Enter
        </span>
      </div>
    </div>
  );
}
