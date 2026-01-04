import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// --- IMPORT FILE JSON YANG SUDAH DIPISAH ---
import translationID from './locales/id.json';
import translationEN from './locales/en.json';
import translationDE from './locales/de.json';

// --- KONFIGURASI SUMBER DAYA ---
const resources = {
  id: {
    translation: translationID
  },
  en: {
    translation: translationEN
  },
  de: {
    translation: translationDE
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Bahasa default saat pertama kali buka
    fallbackLng: "en", // Bahasa cadangan jika error
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;