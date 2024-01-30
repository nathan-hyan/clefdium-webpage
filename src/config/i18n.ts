import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const storedLanguage =
  localStorage.getItem('i18nextLng') === 'es' &&
  localStorage.getItem('i18nextLng') === 'en'
    ? localStorage.getItem('i18nextLng')
    : 'en';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: storedLanguage || 'en',
    detection: {
      order: ['localStorage'],
      caches: ['localStorage'],
    },
    interpolation: { escapeValue: false },
  });

export default i18next;
