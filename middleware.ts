import { NextResponse, type NextRequest } from "next/server";

export function middleware(_request: NextRequest) {
  // Phase 1: pass-through
  // TODO: 실제 인증 필요 시 여기에 session 검증 추가
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * 다음 경로를 제외한 모든 요청에 미들웨어 적용:
     * - _next/static (정적 파일)
     * - _next/image (이미지 최적화)
     * - favicon.ico, sitemap.xml, robots.txt
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
