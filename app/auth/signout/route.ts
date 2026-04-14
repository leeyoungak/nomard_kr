import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { clearMockSession } from "@/lib/auth/mock";

export async function POST() {
  const cookieStore = await cookies();
  clearMockSession(cookieStore);
  redirect("/login");
}
