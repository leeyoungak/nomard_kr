import { stats } from "@/lib/mock-data";

export default function StatsBar() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 border border-[#2a2a2a]">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center justify-center py-5 px-4 text-center ${
              i < stats.length - 1 ? "border-b md:border-b-0 md:border-r border-[#2a2a2a]" : ""
            } ${i === 2 ? "sm:col-span-1 col-span-2" : ""}`}
          >
            <span className="text-2xl font-bold text-[#00ff41] tabular-nums">
              {stat.value}
            </span>
            <span className="text-xs text-[#555555] mt-1">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
