import { type Meetup } from "@/lib/mock-data";

interface Props {
  meetup: Meetup;
  onRsvp: () => void;
}

export default function MeetupCard({ meetup, onRsvp }: Props) {
  const rsvpPct = (meetup.rsvpCurrent / meetup.rsvpMax) * 100;

  return (
    <div className="border border-[#d6ccba] hover:border-[#2d5a27] hover:shadow-sm transition-all rounded-xl p-5 bg-[#f5f0e8]">
      {/* City */}
      <div className="text-[10px] text-[#2d5a27] font-bold mb-3 tracking-wide">
        🌿 {meetup.cityKo}
      </div>

      {/* Title */}
      <div
        className="text-base font-bold text-[#2c2416] mb-1"
        style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
      >
        {meetup.title}
      </div>

      {/* Description */}
      <p className="text-xs text-[#7a6a54] mb-3 leading-relaxed line-clamp-2">
        {meetup.description}
      </p>

      {/* Details */}
      <div className="space-y-1.5 text-xs mb-4 text-[#7a6a54]">
        <div className="flex gap-2">
          <span className="text-[#b8a896] shrink-0">📅</span>
          <span>{meetup.date}</span>
        </div>
        <div className="flex gap-2">
          <span className="text-[#b8a896] shrink-0">📍</span>
          <span>{meetup.spot}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#b8a896] shrink-0">👥</span>
          <span>{meetup.rsvpCurrent} / {meetup.rsvpMax}</span>
          {/* Status badge */}
          {meetup.status === "open" && rsvpPct >= 80 && (
            <span className="ml-auto text-[10px] font-bold text-[#c4522a]">마감 임박</span>
          )}
          {meetup.status === "full" && (
            <span className="ml-auto text-[10px] font-bold bg-[#fef2f2] text-[#c4522a] border border-[#fca5a5] px-2 py-0.5 rounded-full">
              마감
            </span>
          )}
          {meetup.status === "ended" && (
            <span className="ml-auto text-[10px] font-bold bg-[#f5f0e8] text-[#b8a896] border border-[#d6ccba] px-2 py-0.5 rounded-full">
              종료
            </span>
          )}
        </div>
      </div>

      {/* RSVP Progress (ended 제외) */}
      {meetup.status !== "ended" && (
        <div className="mb-4">
          <div className="h-1.5 bg-[#e5ddd0] rounded-full w-full">
            <div
              className="h-1.5 rounded-full transition-all"
              style={{
                width: `${rsvpPct}%`,
                background:
                  rsvpPct >= 80
                    ? "linear-gradient(90deg, #c4522a, #e06040)"
                    : "linear-gradient(90deg, #2d5a27, #4a8a42)",
              }}
            />
          </div>
        </div>
      )}

      {/* Button */}
      {meetup.status === "open" && (
        <button
          onClick={onRsvp}
          className="w-full bg-[#2d5a27] text-[#faf6f1] text-xs font-bold py-2.5 rounded-full hover:bg-[#3a7030] transition-colors"
        >
          RSVP 신청 →
        </button>
      )}
      {meetup.status === "full" && (
        <button
          disabled
          className="w-full border border-[#d6ccba] text-xs text-[#b8a896] py-2.5 rounded-full cursor-not-allowed bg-[#ede8de]"
        >
          모집 마감
        </button>
      )}
      {meetup.status === "ended" && (
        <div className="w-full border border-[#d6ccba] text-xs text-[#b8a896] py-2.5 rounded-full text-center bg-[#f5f0e8]">
          종료된 밋업
        </div>
      )}
    </div>
  );
}
