"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function signUp(
  _prevState: { error: string; success?: boolean } | null | undefined,
  formData: FormData
): Promise<{ error: string } | null> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (password !== confirmPassword) {
    return { error: "비밀번호가 일치하지 않습니다." };
  }

  if (password.length < 8) {
    return { error: "비밀번호는 8자 이상이어야 합니다." };
  }

  let shouldRedirect = false;

  try {
    const supabase = await createClient();
    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      console.error("[signUp] Supabase error:", error.message);
      return { error: "회원가입에 실패했습니다. 다시 시도해주세요." };
    }

    shouldRedirect = true;
  } catch (e) {
    console.error("[signUp] Unexpected error:", e);
    return { error: "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요." };
  }

  if (shouldRedirect) {
    redirect("/login?message=이메일을 확인하여 가입을 완료해주세요.");
  }

  return null;
}
