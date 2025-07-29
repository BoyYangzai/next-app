import { FC, ReactNode } from "react";
import { Languages } from "@/i18n/settings";
import { metadataGenerators } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Languages }>;
}) {
  const { lang } = await params;
  return metadataGenerators.errorBoundary(lang);
}

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return children;
};

export default Layout;
