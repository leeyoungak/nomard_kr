import { type City } from "@/lib/mock-data";

interface Props {
  cities: City[];
  metric: "net" | "cost" | "cafe" | "safe";
  label: string;
}

const METRIC_COLOR: Record<Props["metric"], string> = {
  net: "linear-gradient(90deg, #2d5a27, #4a8a42)",
  cost: "linear-gradient(90deg, #c4a84f, #e0c060)",
  cafe: "linear-gradient(90deg, #5a7ac4, #7090e0)",
  safe: "linear-gradient(90deg, #7a5aa0, #9070c0)",
};

export default function MetricBarChart({ cities, metric, label }: Props) {
  const sorted = [...cities].sort((a, b) => b[metric] - a[metric]);

  return (
    <div>
      <h3
        className="text-sm font-bold text-[#2c2416] mb-3"
        style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
      >
        {label}
      </h3>
      <div className="space-y-2">
        {sorted.map((city) => (
          <div key={city.slug} className="flex items-center gap-3">
            <span className="text-xs text-[#7a6a54] w-10 shrink-0 text-right">
              {city.nameKo}
            </span>
            <div className="flex-1 h-5 bg-[#e5ddd0] rounded-full overflow-hidden">
              <div
                className="h-5 rounded-full transition-all duration-700"
                style={{
                  width: `${city[metric]}%`,
                  background: METRIC_COLOR[metric],
                }}
              />
            </div>
            <span className="text-xs font-bold text-[#2c2416] w-8 shrink-0">
              {city[metric]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
