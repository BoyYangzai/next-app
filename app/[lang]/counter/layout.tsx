import { generateMetadata as generateMeta } from "@/lib/metadata";
import { Languages, languages } from "@/i18n/settings";

interface CounterLayoutProps {
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
  return generateMeta(lang, "counter");
}

export default async function CounterLayout({
  children,
  params,
}: CounterLayoutProps) {
  await params; // 确保 params 被正确处理
  return children;
}
