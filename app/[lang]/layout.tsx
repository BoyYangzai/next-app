import { ReactNode } from "react";
import { Languages } from "@/i18n/settings";
import Providers from "@/components/Providers";

interface LanguageLayoutProps {
  children: ReactNode;
  params: Promise<{
    lang: Languages;
  }>;
}

export default async function LanguageLayout({
  children,
  params,
}: LanguageLayoutProps) {
  const { lang } = await params;

  return <Providers lang={lang}>{children}</Providers>;
}
