"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  TEST_ACCOUNT,
  setMockSession,
} from "@/lib/auth/mock";

export async function signIn(
  _prevState: { error: string } | null | undefined,
  formData: FormData
): Promise<{ error: string } | null> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "이메일과 비밀번호를 입력해주세요." };
  }

  if (email !== TEST_ACCOUNT.email || password !== TEST_ACCOUNT.password) {
    return { error: "이메일 또는 비밀번호가 올바르지 않습니다." };
  }

  let shouldRedirect = false;

  try {
    const cookieStore = await cookies();
    setMockSession(cookieStore, email);
    shouldRedirect = true;
  } catch {
    return { error: "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요." };
  }

  if (shouldRedirect) {
    redirect("/");
  }

  return null;
}
