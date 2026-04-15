import { meetups } from "@/lib/mock-data";
import MeetupsFilterGrid from "@/components/meetups/MeetupsFilterGrid";

export default function MeetupsPage() {
  const activeCount = meetups.filter(
    (m) => m.status === "open" || m.status === "full"
  ).length;
  const totalRsvp = meetups.reduce((sum, m) => sum + m.rsvpCurrent, 0);

  return (
    <div className="min-h-screen bg-[#faf6f1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Page Header */}
        <div className="mb-8">
          <p className="text-xs text-[#2d5a27] font-mono mb-2 tracking-wide">
            &gt; /meetups
          </p>
          <h1
            className="text-2xl font-bold text-[#2c2416] mb-1"
            style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
          >
            예정 밋업
          </h1>
          <p className="text-sm text-[#7a6a54]">
            노마드 밋업에 참여하고 새로운 인연을 만나세요
          </p>
        </div>

        {/* 통계 바 */}
        <div className="flex gap-6 mb-8 border border-[#d6ccba] rounded-xl bg-[#f5f0e8] px-6 py-4">
          <div>
            <span className="text-xl font-bold text-[#2d5a27]"
              style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
            >
              {activeCount}
            </span>
            <span className="text-xs text-[#7a6a54] ml-1">개 이달 밋업</span>
          </div>
          <div className="w-px bg-[#d6ccba]" />
          <div>
            <span className="text-xl font-bold text-[#2d5a27]"
              style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
            >
              {totalRsvp}
            </span>
            <span className="text-xs text-[#7a6a54] ml-1">명 총 참가자</span>
          </div>
        </div>

        <MeetupsFilterGrid meetups={meetups} />
      </div>
    </div>
  );
}
