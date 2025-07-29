import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { languages, fallbackLng } from "./i18n/settings";

export function middleware(request: NextRequest) {
  // 检查路径是否已经包含语言前缀
  const pathname = request.nextUrl.pathname;

  // 检查是否是根路径
  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${fallbackLng}`, request.url));
  }

  // 检查路径是否以支持的语言开头
  const pathnameIsMissingLocale = languages.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // 如果路径缺少语言前缀，重定向到默认语言
  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/${fallbackLng}${pathname}`, request.url),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // 排除静态文件、API 路由、sitemap.xml 和 robots.txt
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.gif$|.*\\.svg$).*)",
  ],
};
