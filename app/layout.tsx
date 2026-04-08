import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NOMAD.KR — 대한민국 디지털 노마드 플랫폼",
  description:
    "대한민국 주요 도시의 노마드 생활 조건을 데이터 기반으로 평가하고, 실사용자 리뷰와 커뮤니티 기능을 결합한 한국 특화 플랫폼.",
  keywords: [
    "디지털노마드",
    "한달살기",
    "워케이션",
    "제주",
    "부산",
    "서울",
    "nomad",
    "korea",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${jetbrainsMono.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#e5e5e5]">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
