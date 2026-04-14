import { stats } from "@/lib/mock-data";

export default function StatsBar() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 border border-[#d6ccba] rounded-xl overflow-hidden bg-[#f5f0e8]">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center justify-center py-5 px-4 text-center ${
              i < stats.length - 1 ? "border-b md:border-b-0 md:border-r border-[#d6ccba]" : ""
            } ${i === 2 ? "sm:col-span-1 col-span-2" : ""}`}
          >
            <span
              className="text-2xl font-bold text-[#2d5a27] tabular-nums"
              style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
            >
              {stat.value}
            </span>
            <span className="text-xs text-[#7a6a54] mt-1">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
