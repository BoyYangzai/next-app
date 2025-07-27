import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

// 暂时禁用保护路由，允许直接访问主页
const protectedRoutes: string[] = []; // ["/", "/onboarding"];
const publicRoutes = ["/login", "/signup"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  // 3. Decrypt the session from the cookie - 使用 await 获取 cookies
  const cookieStore = await cookies();
  const cookie = cookieStore.get("session")?.value;
  // const session = await decrypt(cookie);

  // 5. Redirect to /login if the user is not authenticated
  // if (isProtectedRoute && !session?.userId) {
  if (isProtectedRoute && !cookie) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // 6. Redirect to /dashboard if the user is authenticated
  if (
    isPublicRoute &&
    // session?.userId &&
    !req.nextUrl.pathname.startsWith("/")
  ) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
