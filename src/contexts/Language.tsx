/* eslint-disable no-console */
import i18next from 'i18next';
import React, { createContext, useState } from 'react';

type ContextProps = {
  language: string;
  setLanguage: (e: string) => void;
};

export const LangContext = createContext<ContextProps>({
  language: localStorage.getItem('i18nextLng') as string,
  setLanguage: () => console.log('')
});

export default function Language({ children }: { children: React.ReactNode }) {
  const [language, setLng] = useState<string>(localStorage.getItem('i18nextLng') as 'es' | 'en');

  const setLanguage = (lang: string) => {
    i18next.changeLanguage(lang || 'es');
    setLng(lang);
  };

  return <LangContext.Provider value={{ language, setLanguage }}>{children}</LangContext.Provider>;
}
