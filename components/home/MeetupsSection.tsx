import Link from "next/link";
import { meetups } from "@/lib/mock-data";

export default function MeetupsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-5">
        <h2
          className="text-xl font-bold text-[#2c2416]"
          style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
        >
          예정 밋업
        </h2>
        <Link href="/meetups" className="text-xs text-[#2d5a27] hover:underline">
          전체 보기 →
        </Link>
      </div>

      {/* Meetup Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {meetups.map((meetup) => {
          const rsvpPct = (meetup.rsvpCurrent / meetup.rsvpMax) * 100;
          return (
            <div
              key={meetup.title}
              className="border border-[#d6ccba] hover:border-[#2d5a27] hover:shadow-sm transition-all rounded-xl p-5 bg-[#f5f0e8]"
            >
              {/* Header */}
              <div className="text-[10px] text-[#2d5a27] font-bold mb-3 tracking-wide">
                🌿 {meetup.cityKo}
              </div>

              {/* Title */}
              <div
                className="text-base font-bold text-[#2c2416] mb-3"
                style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
              >
                {meetup.title}
              </div>

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
                <div className="flex gap-2">
                  <span className="text-[#b8a896] shrink-0">👥</span>
                  <span>{meetup.rsvpCurrent} / {meetup.rsvpMax}</span>
                  <span
                    className={`text-[10px] ml-auto font-bold ${
                      rsvpPct >= 80 ? "text-[#c4522a]" : "text-[#2d5a27]"
                    }`}
                  >
                    {rsvpPct >= 80 ? "마감 임박" : "참가 가능"}
                  </span>
                </div>
              </div>

              {/* RSVP Progress */}
              <div className="mb-4">
                <div className="h-1.5 bg-[#e5ddd0] rounded-full w-full">
                  <div
                    className="h-1.5 rounded-full transition-all"
                    style={{
                      width: `${rsvpPct}%`,
                      background: rsvpPct >= 80
                        ? "linear-gradient(90deg, #c4522a, #e06040)"
                        : "linear-gradient(90deg, #2d5a27, #4a8a42)",
                    }}
                  />
                </div>
              </div>

              {/* RSVP Button */}
              <button className="w-full border border-[#d6ccba] text-xs text-[#7a6a54] py-2.5 rounded-full hover:border-[#2d5a27] hover:text-[#2d5a27] transition-colors font-medium">
                RSVP 신청 →
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
