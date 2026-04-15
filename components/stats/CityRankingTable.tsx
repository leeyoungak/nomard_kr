import { type City } from "@/lib/mock-data";

interface Props {
  cities: City[];
}

const METRICS: { key: keyof City; label: string }[] = [
  { key: "net", label: "인터넷" },
  { key: "cost", label: "생활비" },
  { key: "cafe", label: "카페" },
  { key: "safe", label: "안전" },
];

function ScoreCell({ value }: { value: number }) {
  const color =
    value >= 90 ? "text-[#2d5a27]" : value >= 75 ? "text-[#7a6a54]" : "text-[#b8a896]";
  return <span className={`font-bold ${color}`}>{value}</span>;
}

export default function CityRankingTable({ cities }: Props) {
  const sorted = [...cities].sort((a, b) => b.score - a.score);

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr className="border-b border-[#d6ccba]">
            <th className="text-left py-3 px-3 text-[#b8a896] font-medium w-10">#</th>
            <th className="text-left py-3 px-3 text-[#b8a896] font-medium">도시</th>
            <th className="text-center py-3 px-3 text-[#b8a896] font-medium">종합</th>
            {METRICS.map((m) => (
              <th key={m.key} className="text-center py-3 px-3 text-[#b8a896] font-medium">
                {m.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((city, idx) => (
            <tr
              key={city.slug}
              className="border-b border-[#e5ddd0] hover:bg-[#f0ebe1] transition-colors"
            >
              <td className="py-3 px-3 text-[#b8a896]">{idx + 1}</td>
              <td className="py-3 px-3">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#2c2416]">{city.nameKo}</span>
                  <span className="text-[10px] border border-[#d6ccba] text-[#7a6a54] px-1.5 py-0.5 rounded-full">
                    {city.badgeLabel}
                  </span>
                </div>
                <div className="text-[#b8a896] mt-0.5">{city.region}</div>
              </td>
              <td className="py-3 px-3 text-center">
                <ScoreCell value={city.score} />
              </td>
              {METRICS.map((m) => (
                <td key={m.key} className="py-3 px-3 text-center">
                  <ScoreCell value={city[m.key] as number} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
