import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { about as enAbout } from '@/i18n/locales/en/about'
import { areas as enAreas } from '@/i18n/locales/en/areas'
import { common as enCommon } from '@/i18n/locales/en/common'
import { home as enHome } from '@/i18n/locales/en/home'
import { about as ptAbout } from '@/i18n/locales/pt/about'
import { areas as ptAreas } from '@/i18n/locales/pt/areas'
import { common as ptCommon } from '@/i18n/locales/pt/common'
import { home as ptHome } from '@/i18n/locales/pt/home'

const resources = {
  en: { common: enCommon, home: enHome, about: enAbout, areas: enAreas },
  pt: { common: ptCommon, home: ptHome, about: ptAbout, areas: ptAreas },
} as const

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt',
    supportedLngs: ['en', 'pt'],
    defaultNS: 'common',
    ns: ['common', 'home', 'about', 'areas'],
    enableSelector: false,
    compatibilityJSON: 'v4',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  })

export default i18n
