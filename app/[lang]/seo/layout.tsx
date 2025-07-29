import { Languages } from "@/i18n/settings";
import { metadataGenerators } from "@/lib/metadata";

interface SeoLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: Languages }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Languages }>;
}) {
  const { lang } = await params;
  return metadataGenerators.seo(lang);
}

export async function generateStaticParams() {
  return [{ lang: "zh" as Languages }, { lang: "en" as Languages }];
}

export default async function SeoLayout({ children, params }: SeoLayoutProps) {
  await params;
  return <>{children}</>;
}
