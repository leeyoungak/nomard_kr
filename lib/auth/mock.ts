import type { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export const MOCK_SESSION_COOKIE = "mock_session";

export const TEST_ACCOUNT = {
  email: "test@nomad.kr",
  password: "password123",
} as const;

export function setMockSession(
  cookieStore: ReadonlyRequestCookies,
  email: string
): void {
  cookieStore.set(MOCK_SESSION_COOKIE, email, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7일
  });
}

export function clearMockSession(cookieStore: ReadonlyRequestCookies): void {
  cookieStore.delete(MOCK_SESSION_COOKIE);
}

export function getMockSession(
  cookieStore: ReadonlyRequestCookies
): string | null {
  return cookieStore.get(MOCK_SESSION_COOKIE)?.value ?? null;
}
