import { reviews } from "@/lib/mock-data";

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="text-[#c4522a]">
      {"★".repeat(rating)}
      {"☆".repeat(5 - rating)}
    </span>
  );
}

export default function ReviewsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-5">
        <h2
          className="text-xl font-bold text-[#2c2416]"
          style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
        >
          최신 리뷰
        </h2>
        <a href="#" className="text-xs text-[#2d5a27] hover:underline">
          전체 보기 →
        </a>
      </div>

      {/* Reviews */}
      <div className="border border-[#d6ccba] rounded-xl overflow-hidden bg-[#f5f0e8]">
        {reviews.map((review, i) => (
          <div
            key={review.userId}
            className={`p-5 ${i < reviews.length - 1 ? "border-b border-[#d6ccba]" : ""}`}
          >
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2 text-xs">
              <span className="text-[#2d5a27] font-bold">{review.userId}</span>
              <span className="text-[#7a6a54]">
                {review.cityKo} · {review.district}
              </span>
              <StarRating rating={review.rating} />
              <span className="text-[#b8a896] ml-auto">{review.date}</span>
            </div>
            {/* Body */}
            <p className="text-sm text-[#7a6a54] leading-relaxed line-clamp-2">
              &ldquo;{review.body}&rdquo;
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
