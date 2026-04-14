"use server";

import { redirect } from "next/navigation";

export async function signUp(
  _prevState: { error: string; success?: boolean } | null | undefined,
  formData: FormData
): Promise<{ error: string } | null> {
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (password !== confirmPassword) {
    return { error: "비밀번호가 일치하지 않습니다." };
  }

  if (password.length < 8) {
    return { error: "비밀번호는 8자 이상이어야 합니다." };
  }

  redirect("/login");
}
