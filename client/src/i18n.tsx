import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

import viTrans from "./locales/vi/translation.json";
import enTrans from "./locales/en/translation.json";
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init(
    {
      debug: true,
      fallbackLng: "vi",
      saveMissing: true,
      resources: {
        vi: {
          translation: viTrans,
        },
        en: {
          translation: enTrans,
        },
      },
      interpolation: {
        escapeValue: false,
      },
    },
    (err, t) => {
      console.log("here");
      if (err) return console.log("something went wrong loading", err);
      t("key"); // -> same as i18next.t
    }
  );

export default i18n;
