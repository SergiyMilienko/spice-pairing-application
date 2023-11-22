import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from '../locales/en.json';
import translationUk from '../locales/uk.json';

const resources = {
  en: { translation: translationEn },
  uk: { translation: translationUk },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;