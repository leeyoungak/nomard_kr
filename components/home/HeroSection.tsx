import JoinModalTrigger from "@/components/modals/JoinModalTrigger";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      {/* ASCII Logo */}
      <pre className="text-[#00ff41] text-xs sm:text-sm leading-tight mb-8 overflow-x-auto">
{`  _  _  ___  __  __    _    ___     _  ___
 | \\| |/ _ \\|  \\/  |  /_\\  |   \\   | |/ / |
 | .\` | (_) | |\\/| | / _ \\ | |) |  | ' <| |
 |_|\\_|\\___/|_|  |_|/_/ \\_\\|___/   |_|\\_\\_|`}
      </pre>

      {/* Subtitle */}
      <p className="text-[#888888] text-sm mb-2">
        대한민국 디지털 노마드를 위한 도시 평가 &amp; 커뮤니티 플랫폼
      </p>
      <p className="text-[#444444] text-xs mb-10">
        // since 2025 &nbsp;&nbsp;|&nbsp;&nbsp; nomads.com 대비 한국 심층 데이터
        &nbsp;&nbsp;|&nbsp;&nbsp; 평생 멤버십 ₩29,900
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-3">
        <JoinModalTrigger>
          <button className="bg-[#00ff41] text-[#0a0a0a] font-bold text-sm px-6 py-2.5 hover:bg-[#00cc33] transition-colors">
            무료로 시작하기 →
          </button>
        </JoinModalTrigger>
        <a href="#cities">
          <button className="border border-[#2a2a2a] text-[#e5e5e5] text-sm px-6 py-2.5 hover:border-[#00ff41] hover:text-[#00ff41] transition-colors">
            도시 탐색하기
          </button>
        </a>
        <button className="border border-[#2a2a2a] text-[#555555] text-sm px-6 py-2.5 hover:border-[#444444] hover:text-[#888888] transition-colors">
          데모 보기
        </button>
      </div>
    </section>
  );
}
