import { type Review } from "@/lib/mock-data";

interface Props {
  review: Review;
  liked: boolean;
  onLike: () => void;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="text-xs text-[#c4a84f]">
      {"★".repeat(rating)}
      {"☆".repeat(5 - rating)}
    </span>
  );
}

export default function ReviewCard({ review, liked, onLike }: Props) {
  return (
    <div className="border border-[#d6ccba] rounded-xl p-5 bg-[#f5f0e8] hover:border-[#2d5a27] hover:shadow-sm transition-all">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <span className="text-xs font-bold text-[#2c2416]">{review.userId}</span>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-[10px] text-[#2d5a27] font-bold">
              🌿 {review.cityKo}
            </span>
            <span className="text-[10px] text-[#b8a896]">·</span>
            <span className="text-[10px] text-[#7a6a54]">{review.district}</span>
          </div>
        </div>
        <div className="text-right shrink-0">
          {review.type === "review" && review.rating > 0 && (
            <StarRating rating={review.rating} />
          )}
          <p className="text-[10px] text-[#b8a896] mt-0.5">{review.date}</p>
        </div>
      </div>

      {/* Body */}
      <p className="text-xs text-[#7a6a54] leading-relaxed mb-4">{review.body}</p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <span
          className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${
            review.type === "tip"
              ? "border-[#c4a84f] text-[#c4a84f] bg-[#fdf8ee]"
              : "border-[#d6ccba] text-[#b8a896] bg-[#f5f0e8]"
          }`}
        >
          {review.type === "tip" ? "💡 팁" : "📝 리뷰"}
        </span>
        <button
          onClick={onLike}
          className={`flex items-center gap-1 text-xs transition-colors ${
            liked ? "text-[#c4522a]" : "text-[#b8a896] hover:text-[#c4522a]"
          }`}
        >
          <span>{liked ? "♥" : "♡"}</span>
          <span>{review.likes + (liked ? 1 : 0)}</span>
        </button>
      </div>
    </div>
  );
}
