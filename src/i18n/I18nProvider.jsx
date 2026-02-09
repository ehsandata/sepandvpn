import { createContext, useContext, useMemo, useState } from "react";
import translations from "./translations.js";

const I18nContext = createContext(null);

const defaultLang = () => {
  const stored = localStorage.getItem("novavpn_lang");
  return stored || "fa";
};

export function I18nProvider({ children }) {
  const [language, setLanguage] = useState(defaultLang);

  const value = useMemo(() => {
    const currentLang = language || "fa";
    const dictionary = translations[currentLang] || translations.en;

    return {
      language: currentLang,
      isLanguageChosen: true,
      setLanguage: (lang) => {
        localStorage.setItem("novavpn_lang", lang);
        setLanguage(lang);
      },
      t: dictionary,
      dir: currentLang === "fa" ? "rtl" : "ltr",
    };
  }, [language]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}
