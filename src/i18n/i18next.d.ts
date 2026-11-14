import 'i18next'
import { about as enAbout } from '@/i18n/locales/en/about'
import { areas as enAreas } from '@/i18n/locales/en/areas'
import { common as enCommon } from '@/i18n/locales/en/common'
import { home as enHome } from '@/i18n/locales/en/home'

type AppResources = {
  common: typeof enCommon
  home: typeof enHome
  about: typeof enAbout
  areas: typeof enAreas
}

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common'
    enableSelector: false
    resources: AppResources
  }
}

export {}
