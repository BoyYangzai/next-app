export const fallbackLng = "zh";
export const languages = ["zh", "en"];
export const defaultNS = "common";
export const cookieName = "i18next";

export type Languages = "en" | "zh";

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
