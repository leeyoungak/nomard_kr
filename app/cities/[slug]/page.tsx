import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, reviews } from "@/lib/mock-data";

export function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}

function ScoreBar({ score }: { score: number }) {
  return (
    <div className="flex-1 h-2 bg-[#e5ddd0] rounded-full">
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

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="text-[#c4522a]">
      {"★".repeat(rating)}{"☆".repeat(5 - rating)}
    </span>
  );
}

export default async function CityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) notFound();

  const cityReviews = reviews
    .filter((r) => r.cityKo === city.nameKo)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#faf6f1]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">

        {/* ① 상단 네비 바 */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/cities"
            className="text-xs text-[#7a6a54] hover:text-[#2d5a27] transition-colors"
          >
            ← 도시 목록으로
          </Link>
          <span className="text-[10px] text-[#2d5a27] font-bold tracking-wide bg-[#e8f0e7] px-3 py-1 rounded-full">
            #{city.rank} {city.badgeLabel}
          </span>
        </div>

        {/* ② 도시 헤더 */}
        <div className="mb-8">
          <h1
            className="text-3xl font-bold text-[#2c2416] mb-1"
            style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
          >
            {city.nameKo}{" "}
            <span className="text-[#b8a896] font-normal text-xl italic">{city.nameEn}</span>
          </h1>
          <p className="text-sm text-[#7a6a54] mb-3">{city.region}</p>
          <p className="text-sm text-[#7a6a54] leading-relaxed">{city.description}</p>
        </div>

        {/* ③ 스코어카드 */}
        <div className="border border-[#d6ccba] rounded-xl bg-[#f5f0e8] p-6 mb-6">
          <div className="flex items-center justify-between mb-5">
            <h2
              className="text-base font-bold text-[#2c2416]"
              style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
            >
              노마드 스코어
            </h2>
            <div>
              <span className="text-2xl font-bold text-[#2d5a27]"
                style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
              >
                {city.score}
              </span>
              <span className="text-xs text-[#b8a896]">/100</span>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { label: "인터넷 속도", value: city.net },
              { label: "생활비 효율", value: city.cost },
              { label: "카페 접근성", value: city.cafe },
              { label: "안전도", value: city.safe },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-center gap-3 text-sm">
                <span className="text-[#7a6a54] w-24 shrink-0">{label}</span>
                <ScoreBar score={value} />
                <span className="text-[#2d5a27] font-bold w-8 text-right">{value}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-[#d6ccba] flex items-center justify-between text-sm">
            <span className="text-[#7a6a54]">월 예상 생활비</span>
            <span className="font-bold text-[#2c2416]">
              {city.monthlyCostMin} ~ {city.monthlyCostMax}
              <span className="text-xs text-[#b8a896] font-normal ml-1">/ 월</span>
            </span>
          </div>
        </div>

        {/* ④ 추천 동네 */}
        <div className="mb-6">
          <h2
            className="text-base font-bold text-[#2c2416] mb-4"
            style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
          >
            추천 동네
          </h2>
          <div className="space-y-3">
            {city.neighborhoods.map((n) => (
              <div
                key={n.name}
                className="border border-[#d6ccba] rounded-xl bg-[#f5f0e8] p-4"
              >
                <p className="text-sm font-bold text-[#2d5a27] mb-1">{n.name}</p>
                <p className="text-xs text-[#7a6a54] leading-relaxed">{n.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ⑤ 코워킹 & 카페 스팟 */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {/* 코워킹 */}
          <div>
            <h2
              className="text-base font-bold text-[#2c2416] mb-4"
              style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
            >
              코워킹 스팟
            </h2>
            <div className="space-y-3">
              {city.coworkingSpots.map((spot) => (
                <div
                  key={spot.name}
                  className="border border-[#d6ccba] rounded-xl bg-[#f5f0e8] p-4"
                >
                  <p className="text-sm font-bold text-[#2c2416] mb-1">{spot.name}</p>
                  <p className="text-[10px] text-[#b8a896] mb-2">{spot.address}</p>
                  <div className="flex gap-3 text-[10px] text-[#7a6a54]">
                    <span>💰 {spot.pricePerDay}/일</span>
                    <span>📶 {spot.wifiSpeed}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 카페 */}
          <div>
            <h2
              className="text-base font-bold text-[#2c2416] mb-4"
              style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
            >
              추천 카페
            </h2>
            <div className="space-y-3">
              {city.cafes.map((cafe) => (
                <div
                  key={cafe.name}
                  className="border border-[#d6ccba] rounded-xl bg-[#f5f0e8] p-4"
                >
                  <p className="text-sm font-bold text-[#2c2416] mb-1">{cafe.name}</p>
                  <p className="text-[10px] text-[#b8a896] mb-2">{cafe.address}</p>
                  <p className="text-[10px] text-[#7a6a54]">{cafe.features}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ⑥ 장점 / 단점 */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="border border-[#d6ccba] rounded-xl bg-[#f5f0e8] p-5">
            <h3 className="text-sm font-bold text-[#2d5a27] mb-3">장점</h3>
            <ul className="space-y-2">
              {city.pros.map((pro) => (
                <li key={pro} className="flex items-start gap-2 text-xs text-[#7a6a54]">
                  <span className="text-[#2d5a27] shrink-0 mt-0.5">✓</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-[#d6ccba] rounded-xl bg-[#f5f0e8] p-5">
            <h3 className="text-sm font-bold text-[#c4522a] mb-3">단점</h3>
            <ul className="space-y-2">
              {city.cons.map((con) => (
                <li key={con} className="flex items-start gap-2 text-xs text-[#7a6a54]">
                  <span className="text-[#c4522a] shrink-0 mt-0.5">✗</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ⑦ 리뷰 */}
        <div className="mb-10">
          <h2
            className="text-base font-bold text-[#2c2416] mb-4"
            style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
          >
            실거주 리뷰
          </h2>
          {cityReviews.length > 0 ? (
            <div className="border border-[#d6ccba] rounded-xl overflow-hidden bg-[#f5f0e8]">
              {cityReviews.map((review, i) => (
                <div
                  key={review.userId}
                  className={`p-5 ${i < cityReviews.length - 1 ? "border-b border-[#d6ccba]" : ""}`}
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2 text-xs">
                    <span className="text-[#2d5a27] font-bold">{review.userId}</span>
                    <span className="text-[#7a6a54]">{review.cityKo} · {review.district}</span>
                    <StarRating rating={review.rating} />
                    <span className="text-[#b8a896] ml-auto">{review.date}</span>
                  </div>
                  <p className="text-sm text-[#7a6a54] leading-relaxed">
                    &ldquo;{review.body}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="border border-[#d6ccba] rounded-xl p-8 text-center text-sm text-[#b8a896] bg-[#f5f0e8]">
              아직 리뷰가 없습니다
            </div>
          )}
        </div>

        {/* ⑧ 하단 뒤로가기 */}
        <div className="border-t border-[#d6ccba] pt-6">
          <Link
            href="/cities"
            className="text-xs text-[#7a6a54] hover:text-[#2d5a27] transition-colors"
          >
            ← 도시 목록으로
          </Link>
        </div>
      </div>
    </div>
  );
}
