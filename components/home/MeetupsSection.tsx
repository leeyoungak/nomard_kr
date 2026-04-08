import { meetups } from "@/lib/mock-data";

export default function MeetupsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-5">
        <p className="text-xs text-[#555555]">// UPCOMING MEETUPS</p>
        <a
          href="#"
          className="text-xs text-[#444444] hover:text-[#00ff41] transition-colors"
        >
          전체 보기 →
        </a>
      </div>

      {/* Meetup Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {meetups.map((meetup) => {
          const rsvpPct = (meetup.rsvpCurrent / meetup.rsvpMax) * 100;
          return (
            <div
              key={meetup.title}
              className="border border-[#2a2a2a] hover:border-[#00ff41]/50 transition-colors p-4"
            >
              {/* Header */}
              <div className="text-[10px] text-[#00ff41] mb-2 font-bold">
                [MEETUP] {meetup.cityKo}
              </div>

              {/* Details */}
              <div className="space-y-1.5 text-xs mb-4">
                <div className="flex gap-2">
                  <span className="text-[#555555] w-10 shrink-0">DATE</span>
                  <span className="text-[#e5e5e5]">{meetup.date}</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#555555] w-10 shrink-0">SPOT</span>
                  <span className="text-[#e5e5e5]">{meetup.spot}</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#555555] w-10 shrink-0">RSVP</span>
                  <span className="text-[#e5e5e5]">
                    {meetup.rsvpCurrent} / {meetup.rsvpMax}
                  </span>
                  <span
                    className={`text-[10px] ml-auto ${
                      rsvpPct >= 80 ? "text-[#ff6b6b]" : "text-[#00ff41]"
                    }`}
                  >
                    {rsvpPct >= 80 ? "마감 임박" : "참가 가능"}
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#555555] w-10 shrink-0">TAG</span>
                  <span className="text-[#888888]">
                    {meetup.tags.join(" / ")}
                  </span>
                </div>
              </div>

              {/* RSVP Progress */}
              <div className="mb-3">
                <div className="h-1 bg-[#1a1a1a] w-full">
                  <div
                    className="h-1 bg-[#00ff41] transition-all"
                    style={{ width: `${rsvpPct}%` }}
                  />
                </div>
              </div>

              {/* RSVP Button */}
              <button className="w-full border border-[#2a2a2a] text-xs text-[#555555] py-2 hover:border-[#00ff41] hover:text-[#00ff41] transition-colors">
                RSVP 신청 →
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
