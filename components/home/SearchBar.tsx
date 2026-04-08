"use client";

import { useState } from "react";

export default function SearchBar() {
  const [value, setValue] = useState("");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
      <div className="border border-[#2a2a2a] flex items-center gap-3 px-4 py-3 focus-within:border-[#00ff41] transition-colors">
        <span className="text-[#00ff41] text-sm shrink-0 select-none">
          $ search &gt;
        </span>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="도시 이름, 지역, 태그 검색..."
          className="flex-1 bg-transparent text-sm text-[#e5e5e5] placeholder:text-[#444444] outline-none"
        />
        <span className="text-xs text-[#444444] border border-[#2a2a2a] px-2 py-0.5 shrink-0">
          ENTER
        </span>
      </div>
    </div>
  );
}
