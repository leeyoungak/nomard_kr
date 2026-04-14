"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function signIn(
  _prevState: { error: string } | null | undefined,
  formData: FormData
): Promise<{ error: string } | null> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  let shouldRedirect = false;

  try {
    const supabase = await createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      console.error("[signIn] Supabase error:", error.message);
      return { error: "이메일 또는 비밀번호가 올바르지 않습니다." };
    }

    shouldRedirect = true;
  } catch (e) {
    console.error("[signIn] Unexpected error:", e);
    return { error: "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요." };
  }

  if (shouldRedirect) {
    redirect("/");
  }

  return null;
}
