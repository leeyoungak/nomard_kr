import Link from "next/link";
import { City } from "@/lib/mock-data";

function ScoreBar({ score }: { score: number }) {
  return (
    <div className="flex-1 h-1.5 bg-[#e5ddd0] rounded-full">
      <div
        className="h-full rounded-full"
        style={{
          width: `${score}%`,
          background: "linear-gradient(90deg, #2d5a27, #4a8a42)",
        }}
      />
    </div>
  );
}

interface Props {
  city: City;
  href?: string;
}

export default function CityCard({ city, href }: Props) {
  const card = (
    <div className="border border-[#d6ccba] hover:border-[#2d5a27] hover:-translate-y-0.5 hover:shadow-md transition-all cursor-pointer group rounded-xl bg-[#f5f0e8] overflow-hidden">
      {/* Card Header */}
      <div className="border-b border-[#d6ccba] p-4 flex items-start justify-between gap-2">
        <div>
          <div className="text-[10px] text-[#2d5a27] font-bold mb-1 tracking-wide">
            #{city.rank} {city.badgeLabel}
          </div>
          <div
            className="text-base font-bold text-[#2c2416] group-hover:text-[#2d5a27] transition-colors"
            style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
          >
            {city.nameKo}{" "}
            <span className="text-[#b8a896] font-normal text-sm italic">{city.nameEn}</span>
          </div>
          <div className="text-[10px] text-[#b8a896] mt-0.5">{city.region}</div>
        </div>
      </div>

      {/* Metrics */}
      <div className="p-4 space-y-2.5 border-b border-[#d6ccba]">
        {[
          { label: "인터넷", value: city.net },
          { label: "물가", value: city.cost },
          { label: "카페", value: city.cafe },
          { label: "안전", value: city.safe },
        ].map(({ label, value }) => (
          <div key={label} className="flex items-center gap-2 text-xs">
            <span className="text-[#7a6a54] w-10 shrink-0">{label}</span>
            <ScoreBar score={value} />
            <span className="text-[#7a6a54] ml-1">{value}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 flex items-center justify-between">
        <div>
          <span className="text-[10px] text-[#7a6a54]">스코어 </span>
          <span
            className="text-lg font-bold text-[#2d5a27]"
            style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
          >
            {city.score}
          </span>
          <span className="text-[10px] text-[#b8a896]">/100</span>
        </div>
        <div className="text-[10px] text-[#7a6a54] text-right">
          {city.monthlyCostMin} ~ {city.monthlyCostMax}
          <br />/ 월
        </div>
      </div>
    </div>
  );

  return href ? <Link href={href}>{card}</Link> : card;
}
