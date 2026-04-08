import { City } from "@/lib/mock-data";

function AsciiBar({ score }: { score: number }) {
  const filled = Math.round((score / 100) * 8);
  const empty = 8 - filled;
  return (
    <span className="text-[#00ff41]">
      [{"#".repeat(filled)}
      {"-".repeat(empty)}]
    </span>
  );
}

interface Props {
  city: City;
  onJoinClick?: () => void;
}

export default function CityCard({ city }: Props) {
  return (
    <div className="border border-[#2a2a2a] hover:border-[#00ff41]/50 transition-colors cursor-pointer group">
      {/* Card Header */}
      <div className="border-b border-[#2a2a2a] p-3 flex items-start justify-between gap-2">
        <div>
          <div className="text-[10px] text-[#00ff41] mb-0.5">
            #{city.rank} {city.badgeLabel}
          </div>
          <div className="text-sm font-bold text-[#e5e5e5] group-hover:text-[#00ff41] transition-colors">
            {city.nameKo}{" "}
            <span className="text-[#555555] font-normal">{city.nameEn}</span>
          </div>
          <div className="text-[10px] text-[#555555] mt-0.5">{city.region}</div>
        </div>
      </div>

      {/* Metrics */}
      <div className="p-3 space-y-2 border-b border-[#2a2a2a]">
        {[
          { label: "NET", value: city.net },
          { label: "COST", value: city.cost },
          { label: "CAFE", value: city.cafe },
          { label: "SAFE", value: city.safe },
        ].map(({ label, value }) => (
          <div key={label} className="flex items-center gap-2 text-xs">
            <span className="text-[#555555] w-10 shrink-0">{label}</span>
            <span className="font-mono text-xs shrink-0">
              <AsciiBar score={value} />
            </span>
            <span className="text-[#888888] ml-auto">{value}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-3 flex items-center justify-between">
        <div>
          <span className="text-[10px] text-[#555555]">SCORE </span>
          <span className="text-sm font-bold text-[#00ff41]">
            {city.score}
          </span>
          <span className="text-[10px] text-[#555555]">/100</span>
        </div>
        <div className="text-[10px] text-[#555555] text-right">
          {city.monthlyCostMin} ~ {city.monthlyCostMax}
          <br />/ mo
        </div>
      </div>
    </div>
  );
}
