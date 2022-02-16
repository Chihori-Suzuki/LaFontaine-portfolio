import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  resources: {
    en: {
      translation: require("../assets/locales/en/translation.json"),
    },
    jp: {
      translation: require("../assets/locales/jp/translation.json"),
    },
  },
  fallbackLng: "jp",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
