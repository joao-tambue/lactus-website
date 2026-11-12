import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { about as enAbout } from '@/i18n/locales/en/about'
import { common as enCommon } from '@/i18n/locales/en/common'
import { home as enHome } from '@/i18n/locales/en/home'
import { about as ptAbout } from '@/i18n/locales/pt/about'
import { common as ptCommon } from '@/i18n/locales/pt/common'
import { home as ptHome } from '@/i18n/locales/pt/home'

const resources = {
  en: { common: enCommon, home: enHome, about: enAbout },
  pt: { common: ptCommon, home: ptHome, about: ptAbout },
} as const

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt',
    supportedLngs: ['en', 'pt'],
    defaultNS: 'common',
    ns: ['common', 'home', 'about'],
    enableSelector: false,
    compatibilityJSON: 'v4',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  })

export default i18n
