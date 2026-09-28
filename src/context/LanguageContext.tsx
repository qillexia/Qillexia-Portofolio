"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import type { Language, Dictionary } from "@/locales/types";
import { dictionaryID } from "@/locales/id";
import { dictionaryENG } from "@/locales/en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "portfolio_language_pref";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("ID");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (savedLang === "ID" || savedLang === "ENG") {
        setLangState(savedLang);
      }
    } catch {
      // Ignore localStorage errors in private mode
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "ENG" ? "en" : "id";
    }
  }, [lang]);

  const setLang = (nextLang: Language) => {
    setLangState(nextLang);
    try {
      localStorage.setItem(STORAGE_KEY, nextLang);
    } catch {
      // Ignore
    }
  };

  const toggleLang = () => {
    setLang(lang === "ID" ? "ENG" : "ID");
  };

  const t = lang === "ENG" ? dictionaryENG : dictionaryID;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
