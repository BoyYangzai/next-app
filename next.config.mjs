import path from "path";
import fs from "fs";

const getAllTranslations = () => {
  const localesDir = path.join(process.cwd(), "/i18n/locales");
  const translations = {};

  try {
    fs.readdirSync(localesDir).forEach((lang) => {
      translations[lang] = {};
      const langPath = path.join(localesDir, lang);
      fs.readdirSync(langPath).forEach((file) => {
        if (file.endsWith(".json")) {
          const namespace = path.basename(file, ".json");
          translations[lang][namespace] = JSON.parse(
            fs.readFileSync(path.join(langPath, file), "utf-8"),
          );
        }
      });
    });
  } catch (error) {
    console.error("Error loading translations:", error);
    return {};
  }
  return translations;
};

const translations = getAllTranslations();

const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/chat",
        destination: "/",
        permanent: true,
      },
    ];
  },
  env: {
    NEXT_PUBLIC_TRANSLATIONS: JSON.stringify(translations),
  },
};

export default nextConfig;
