import { ReactNode } from "react";
import { Metadata } from "next";
import { Languages, languages } from "@/i18n/settings";
import { metadataGenerators } from "@/lib/metadata";
import Providers from "@/components/providers/Providers";

interface LanguageLayoutProps {
  children: ReactNode;
  params: Promise<{ lang: Languages }>;
}

// 生成静态路由
export async function generateStaticParams() {
  return languages.map((lang) => ({
    lang: lang,
  }));
}

// 动态生成 metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Languages }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return metadataGenerators.home(lang);
}

export default async function LanguageLayout({
  children,
  params,
}: LanguageLayoutProps) {
  const { lang } = await params;

  return <Providers lang={lang}>{children}</Providers>;
}
