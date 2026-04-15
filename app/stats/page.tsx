import { cities, stats } from "@/lib/mock-data";
import CityRankingTable from "@/components/stats/CityRankingTable";
import MetricBarChart from "@/components/stats/MetricBarChart";
import CityCompare from "@/components/stats/CityCompare";

const METRIC_CHARTS: {
  metric: "net" | "cost" | "cafe" | "safe";
  label: string;
}[] = [
  { metric: "net", label: "인터넷 속도 랭킹" },
  { metric: "cost", label: "생활비 효율 랭킹" },
  { metric: "cafe", label: "카페 접근성 랭킹" },
  { metric: "safe", label: "안전도 랭킹" },
];

export default function StatsPage() {
  return (
    <div className="min-h-screen bg-[#faf6f1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Page Header */}
        <div className="mb-8">
          <p className="text-xs text-[#2d5a27] font-mono mb-2 tracking-wide">
            &gt; /stats
          </p>
          <h1
            className="text-2xl font-bold text-[#2c2416] mb-1"
            style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
          >
            통계 대시보드
          </h1>
          <p className="text-sm text-[#7a6a54]">
            도시별 지표를 한눈에 비교하세요
          </p>
        </div>

        {/* 전체 통계 요약 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border border-[#d6ccba] rounded-xl bg-[#f5f0e8] px-4 py-4 text-center"
            >
              <p
                className="text-2xl font-bold text-[#2d5a27]"
                style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
              >
                {stat.value}
                <span className="text-sm ml-0.5">{stat.unit}</span>
              </p>
              <p className="text-[10px] text-[#7a6a54] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* 도시 종합 순위 테이블 */}
        <section className="mb-10">
          <h2
            className="text-lg font-bold text-[#2c2416] mb-4"
            style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
          >
            도시 종합 순위
          </h2>
          <div className="border border-[#d6ccba] rounded-xl bg-[#f5f0e8] overflow-hidden">
            <CityRankingTable cities={cities} />
          </div>
        </section>

        {/* 지표별 바 차트 */}
        <section className="mb-10">
          <h2
            className="text-lg font-bold text-[#2c2416] mb-4"
            style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
          >
            지표별 랭킹
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {METRIC_CHARTS.map(({ metric, label }) => (
              <div
                key={metric}
                className="border border-[#d6ccba] rounded-xl bg-[#f5f0e8] p-5"
              >
                <MetricBarChart cities={cities} metric={metric} label={label} />
              </div>
            ))}
          </div>
        </section>

        {/* 도시 비교 */}
        <section>
          <h2
            className="text-lg font-bold text-[#2c2416] mb-4"
            style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
          >
            도시 비교
          </h2>
          <CityCompare cities={cities} />
        </section>
      </div>
    </div>
  );
}
