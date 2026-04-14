import JoinModalTrigger from "@/components/modals/JoinModalTrigger";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 relative">
      {/* Decorative leaf */}
      <div className="absolute right-8 top-8 text-[120px] opacity-5 select-none pointer-events-none leading-none hidden md:block">
        🌿
      </div>

      {/* Badge */}
      <div className="inline-block text-xs font-bold text-[#2d5a27] bg-[#e8f0e7] px-4 py-1.5 rounded-full mb-7 tracking-wide">
        자연과 함께하는 노마드 라이프
      </div>

      {/* Heading */}
      <h1
        className="text-4xl md:text-6xl font-bold leading-tight mb-5 max-w-xl"
        style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
      >
        한국의 아름다운<br />
        <span className="text-[#2d5a27]">자연 속에서</span><br />
        일하세요
      </h1>

      {/* Subtitle */}
      <p className="text-[#7a6a54] text-base mb-2 leading-relaxed max-w-md">
        대한민국 디지털 노마드를 위한 도시 평가 &amp; 커뮤니티 플랫폼
      </p>
      <p className="text-[#b8a896] text-sm mb-10">
        since 2025 &nbsp;|&nbsp; nomads.com 대비 한국 심층 데이터 &nbsp;|&nbsp; 평생 멤버십 ₩29,900
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-3">
        <JoinModalTrigger>
          <button className="bg-[#2d5a27] text-[#faf6f1] font-bold text-sm px-7 py-3 rounded-full hover:bg-[#3a7030] transition-colors">
            무료로 시작하기 →
          </button>
        </JoinModalTrigger>
        <a href="#cities">
          <button className="border-2 border-[#d6ccba] text-[#7a6a54] text-sm px-7 py-3 rounded-full hover:border-[#2d5a27] hover:text-[#2d5a27] transition-colors font-bold">
            도시 탐색하기
          </button>
        </a>
        <button className="border-2 border-[#ede8de] text-[#b8a896] text-sm px-7 py-3 rounded-full hover:border-[#d6ccba] transition-colors">
          데모 보기
        </button>
      </div>
    </section>
  );
}
