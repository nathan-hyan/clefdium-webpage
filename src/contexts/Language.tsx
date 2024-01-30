import { createContext, useMemo, useState } from 'react';
import { Nullable } from 'vite-env';

import i18next from '~config/i18n';

type ContextProps = {
  language: string;
  setLanguage: (e: string) => void;
};

export const LangContext = createContext<Nullable<ContextProps>>(null);

export default function Language({ children }: { children: React.ReactNode }) {
  const [language, setLng] = useState<string>(
    localStorage.getItem('i18nextLng') as 'es' | 'en'
  );

  const setLanguage = (lang: string) => {
    i18next.changeLanguage(lang || 'es');
    setLng(lang);
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}
