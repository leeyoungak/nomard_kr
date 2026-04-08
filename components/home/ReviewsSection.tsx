import { reviews } from "@/lib/mock-data";

function StarRating({ rating }: { rating: number }) {
  return (
    <span>
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
        <p className="text-xs text-[#555555]">// LATEST REVIEWS</p>
        <a
          href="#"
          className="text-xs text-[#444444] hover:text-[#00ff41] transition-colors"
        >
          전체 보기 →
        </a>
      </div>

      {/* Reviews */}
      <div className="space-y-0 border border-[#2a2a2a]">
        {reviews.map((review, i) => (
          <div
            key={review.userId}
            className={`p-4 ${i < reviews.length - 1 ? "border-b border-[#2a2a2a]" : ""}`}
          >
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2 text-xs">
              <span className="text-[#00ff41]">[{review.userId}]</span>
              <span className="text-[#555555]">
                {review.cityKo} · {review.district}
              </span>
              <span className="text-[#f0a500]">
                <StarRating rating={review.rating} />
              </span>
              <span className="text-[#333333] ml-auto">{review.date}</span>
            </div>
            {/* Body */}
            <p className="text-xs text-[#888888] leading-relaxed line-clamp-2">
              &ldquo;{review.body}&rdquo;
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
