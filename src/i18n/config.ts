import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

export const supportedLngs = {
  en: "EN",
  fr: "FR",
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    supportedLngs: Object.keys(supportedLngs),
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;