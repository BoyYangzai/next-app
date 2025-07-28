import { generateMetadata as generateMeta } from "@/lib/metadata";
import { Languages, languages } from "@/i18n/settings";

interface ThemeLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    lang: Languages;
  }>;
}

// 生成静态路由
export async function generateStaticParams() {
  return languages.map((lang) => ({
    lang: lang,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Languages }>;
}) {
  const { lang } = await params;
  return generateMeta(lang, "theme");
}

export default async function ThemeLayout({
  children,
  params,
}: ThemeLayoutProps) {
  await params; // 确保 params 被正确处理
  return children;
}
